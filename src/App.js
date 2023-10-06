import Headers from "./Layout/Header";
import Registration from "./Layout/Registration";
import SignIn from "./Layout/SignIn";
import SignOut from "./Layout/SignOut";

import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Headers/>} />
          <Route path="/logup"  element={<Registration/>} />
          <Route path="/login" element={<SignIn/> } />
          <Route path="/logout" element={<SignOut/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
