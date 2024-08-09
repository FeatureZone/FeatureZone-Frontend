import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiLogin } from "../services/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: "onBlur",
    mode: "all",
  });

  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("userName", user.username);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiLogin({
        username: data.email, // Changed from username to email
        password: data.password
      });
      addToLocalStorage(res.data.accessToken, res.data.user);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An Error Occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-[60%] justify-center items-center">
        <form
          method="post"
          className="border rounded-lg shadow-lg py-[2.5rem] px-[2rem] flex flex-col gap-[1.5rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <p className="font-bold text-center text-[15pt]">Hello!</p>
            <p className="text-center text-[10pt]">Sign in to your account</p>
          </div>
          <div className="flex flex-col gap-3">
            <fieldset>
              <legend className="text-[9pt] text-blue-500">Email:</legend>
              <input
                type="email"
                name="email"
                id="e-mail"
                className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                {...register("email", { required: "Email is Required" })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </fieldset>

            <fieldset>
              <legend className="text-[9pt] text-blue-500">Password:</legend>
              <input
                type="password"
                name="password"
                id="pwd"
                className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                {...register("password", {
                  required: "Password is Required",
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <p className="flex gap-2 mt-[0.15rem] mb-1 text-[10pt]">
                <label htmlFor="check-box" className="flex gap-[0.15rem]">
                  <input type="checkbox" name="remember" id="check-box" />
                  Remember me
                </label>
                <a href="#" className="text-blue-500">Forgot password?</a>
              </p>
            </fieldset>

            <button
              type="submit"
              className="border border-blue-500 rounded py-2 font-semibold bg-blue-500 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "SIGN IN"}
            </button>
          </div>

          <p className="text-center text-[10pt]">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 font-semibold">
              Register
            </Link>
          </p>
        </form>
      </div>

      <div className="flex flex-[40%] justify-center items-center bg-blue-500">
        <div className="w-[70%]">
          <p className="text-center text-[20pt] text-white font-semibold mb-6">
            Welcome Back!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            similique voluptatem accusamus quaerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
