import Pay from "./Pay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Signup from "./component/signin/Signin";
import Userprivacy from "./Userprivacy";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signup />} />
        <Route element={<Userprivacy />}>
          <Route path="/pay" element={<Pay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
