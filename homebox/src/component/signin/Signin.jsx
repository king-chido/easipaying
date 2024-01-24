import "./signin.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useRef, useState } from "react";

const schema = yup.object().shape({
  email: yup.string().required("please fill up the email field"),
  firstName: yup.string().required("please fill up the first name field"),
  lastName: yup.string().required("please fill up the last name field"),
  password: yup
    .string()
    .required("please fill up the  password field")
    .min(8)
    .max(32),
  confirmPassword: yup
    .string()
    .required("please fill up the confirm password field")
    .min(8)
    .max(32),
  phoneNumber: yup.string().required().min(11).max(11),
  pin: yup.string().required().min(4).max(4),
  sex: yup.string().required("please fill up the sex field"),
  //profilePicture: yup.mixed().required(),
  // .test(
  //   "fileSize",
  //   "The file size is too large",
  //   (value) => value && value[0].size <= 2000000
  // )
  // .test(
  //   "fileType",
  //   "The file type is not supported",
  //   (value) =>
  //     value &&
  //     (value[0].type === "image/png" ||
  //       value[0].type === "image/jpeg" ||
  //       value[0].type === "image/jpg")
  // ),
});

const Signup = () => {
  // const imageRef = useRef();
  // const [upLoad, setUpLoad] = useState();

  const navigate = useNavigate();

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

  // const handleChange = () => {
  //   const file = URL.createObjectURL(imageRef.current.files[0]);
  //   // const file = imageRef.current.files[0];
  //   console.log(file);
  //   setUpLoad(file);
  // };

  const overSubmit = async (data) => {
    const url = "https://bankapp-v1.onrender.com/api/v1/user/sign-up";

    console.log(data);
    console.log("hi");

    const mainData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      confirmPassword: data.confirmPassword,
      pin: data.pin,
      sex: data.sex,
    };
    console.log(mainData);
    try {
      const response = await axios.post(url, mainData);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
    // const body = {
  };

  // const handleNavigate = () => {
  //   navigate("/login");
  // };
  return (
    <div className="SignupMainContainer">
      <form className="SignUpForm" onSubmit={handleSubmit(overSubmit)}>
        <h2>User Signup</h2>
        <div className="signupInput1">
          <input
            type="text"
            placeholder="Enter First Name"
            {...register("firstName")}
          />
          <p>{errors.firstName?.message}</p>
        </div>
        <div className="signupInput1">
          <input
            type="text"
            placeholder="Enter Last Name"
            {...register("lastName")}
          />
          <p>{errors.lastName?.message}</p>
        </div>
        <div className="signupInput1">
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="signupInput1">
          <input
            type="number"
            placeholder="Enter Phone"
            {...register("phoneNumber")}
          />
          <p>{errors.phoneNumber?.message}</p>
        </div>
        <div className="signupInput1">
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div className="signupInput1">
          <input
            type="password"
            placeholder="Confirm Password "
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <div className="signupInput1">
          <input type="password" placeholder="pin " {...register("pin")} />
          <p>{errors.pin?.message}</p>
        </div>
        <div className="signupInput1">
          <input type="text" placeholder="sex" {...register("sex")} />
          <p>{errors.sex?.message}</p>
        </div>

        <div className="signupInput1">
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>Login</span>
          </p>
        </div>
      </form>
      {/* <img src={upLoad} alt="logo" /> */}
    </div>
  );
};

export default Signup;

//  {
//    <div className="signupInput1">
//      <input
//        type="file"
//        onChange={handleChange}
//        ref={imageRef}
//        // name="profilePicture"
//        // {...register("profilePicture")}
//      />
//      {/* <p>{errors.profilePicture?.message}</p> */}
//    </div>;
//  }

//  {
//           headers: { "Content-Type": "multipart/form-data" },
//           body: body,
//         },

//  <div className="signupInput2">
//    {/* <input type="date" /> */}
//    <select {...register("sex")}>
//      <option value="Sex">Sex</option>
//      <option value="Male">Male</option>
//      <option value="Female">Female</option>
//      {/* <option value="Others">Others</option> */}
//    </select>
//    <p>{errors.sex?.message}</p>
//  </div>;
