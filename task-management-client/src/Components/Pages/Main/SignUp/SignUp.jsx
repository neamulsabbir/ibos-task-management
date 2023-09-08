import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import UserImage from "./UserImage";

const shadow = {
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
};

const SignUp = () => {
  const [passwordErr, setPasswordErr] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const joiningDate = new Date().toLocaleDateString();

    setPasswordErr("");

    if (password !== confirmPassword) {
      setPasswordErr("Passwrod not matched");
    }
    if(!imageFile){
      toast.error("Please chosse image")
    }

    const formData = new FormData();
    console.log(formData);

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("date", joiningDate);
    formData.append("img", imageFile);

    fetch("http://localhost:3005/api/createUser", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.error) {
          toast.error(data?.error);
        }
        if (data?.success) {
          toast.success(data?.success);
          form.reset();
          navigate("/sign-in");
        }
      });
  };

  return (
    <div className="my-10 flex flex-col justify-center items-center w-11/12 mx-auto ">
      <div style={shadow} className="bg-white p-7 rounded-md md:w-96">
        <form onSubmit={handleSignUp}>
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-xl font-bold mb-1">Sign Up Now</h1>
              <p className="mb-5">Please fill the details and create account</p>
            </div>
          </div>
          <UserImage
            setPreviewImage={setPreviewImage}
            setImageFile={setImageFile}
            previewImage={previewImage}
          />
          <div className="mb-3">
            <h1 className="font-medium mb-1">Name</h1>
            <input
              className="w-full py-1 px-2 rounded-md border-2 border-gray-300"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <h1 className="font-medium mb-1">Email</h1>
            <input
              className="w-full py-1 px-2 rounded-md border-2 border-gray-300"
              type="text"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <h1 className="font-medium mb-1">Password</h1>
            <input
              className="w-full py-1 px-2 rounded-md border-2 border-gray-300"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <h1 className="font-medium mb-1">Confirm Password</h1>
            <input
              className="w-full py-1 px-2 rounded-md border-2 border-gray-300"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />
            <div>
              {passwordErr && (
                <p className="text-xs text-red-500 mb-2">{passwordErr}</p>
              )}
            </div>
          </div>
          <input
            className="cursor-pointer text-center bg-black py-2 w-full text-white font-bold mb-3 rounded-md"
            type="submit"
            value="Sign Up"
          />
          <h1 className="text-center text-sm">
            Already have an account?
            <span>
              <Link className="underline" to="/sign-in">
                Sign In
              </Link>
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
