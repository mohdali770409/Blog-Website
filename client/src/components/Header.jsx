import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  let path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Navbar>
      <Link
        to={"/"}
        className="text-sm sm:text-xl font-semibold whitespace-nowrap self-center dark:text-white"
      >
        <span className="px-2 py-1 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-white ">
          Nexus
        </span>
        Blogs
      </Link>
      <form>
        <TextInput
          placeholder="Search..."
          type="text"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        ></TextInput>
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2 ">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to={"/sign-in"}>
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle></Navbar.Toggle>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/home"} as={"div"}>
          <Link to={"/home"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"}>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={"div"}>
          <Link to={"/projects"}>Projects </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
