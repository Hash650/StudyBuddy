import { BrowserRouter, Route, Router, Routes } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
