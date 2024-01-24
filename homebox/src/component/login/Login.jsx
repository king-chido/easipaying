import "./login.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context";

const schema = yup.object().shape({
  email: yup.string().required("please fill up the email field"),

  password: yup
    .string()
    .required("please fill up the  password field")
    .min(8)
    .max(32),
});

const Login = () => {
  const navigate = useNavigate();
  const { setUserToken, setUserData, setBalance } = useContext(AppContext);
  const {
    register,
    //reset,
    handleSubmit,
    formState: { errors },
    //setValue,
    // watch
  } = useForm({
    resolver: yupResolver(schema),
  });

  const overSubmit = async (data) => {
    const url = "https://bankapp-v1.onrender.com/api/v1/user/login";

    console.log(data);
    console.log("hi");

    const mainData = {
      email: data.email,
      password: data.password,
    };
    console.log(mainData);
    try {
      const response = await axios.post(url, mainData);
      console.log(response.data);
      setUserToken(response.data.token);
      setUserData(response.data.data);
      navigate("/pay");
      console.log(response.data.token);
      console.log(response.data.data);
      setBalance(response.data.data.balance);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="loginMainCOntainer">
      <form className="LoginForm" onSubmit={handleSubmit(overSubmit)}>
        <div className="loginInput1">
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="loginInput1">
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div className="loginInput1">
          <button>Login</button>
          <p>
            Dont have an account? <span>Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
