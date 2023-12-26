import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createuser" element={<Signup/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
