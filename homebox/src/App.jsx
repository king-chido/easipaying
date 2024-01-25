import Pay from "./Pay";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Signup from "./component/signin/Signin";
import Userprivacy from "./Userprivacy";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signup />} />
        <Route element={<Userprivacy />}>
          <Route path="/pay" element={<Pay />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
