import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const shadow = {
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
};

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = {
      email,
      password,
    };

    fetch("http://localhost:3005/api/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.error){
          toast.error(data?.error);
        }
        if (data?.success) {
          console.log(data);
          localStorage.setItem("userData", JSON.stringify(data?.userData));
    
          toast.success(data?.success);
          navigate("/");
          const userDataUpdatedEvent = new Event("userDataUpdated");
          window.dispatchEvent(userDataUpdatedEvent);
        }
        // console.log(data);
      });
  };
  return (
    <div className="h-[calc(100vh-65px)] flex flex-col justify-center items-center ">
      <div style={shadow} className="bg-white p-7 rounded-md md:w-96">
        <form onSubmit={handleSignIn}>
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-xl font-bold">Sign Up Now</h1>
              <p className="mb-5">Please fill the details and create account</p>
            </div>
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
          <input
            className="cursor-pointer text-center bg-black py-2 w-full text-white font-bold mb-3 rounded-md"
            type="submit"
            value="Sign In"
          />
          <h1 className="text-center text-sm">
            Do you want create account?
            <span>
              <Link className="underline" to="/sign-up">
                Sign Up
              </Link>
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
