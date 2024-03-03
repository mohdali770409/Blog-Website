import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import CreatePost from "./pages/CreatePost";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
