import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiSignup } from "../services/auth";
import { toast } from "react-toastify";

const Register = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        let payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
            termsAndConditions: data.termsAndConditions || false,
        };

        try {
            const res = await apiSignup(payload);
            console.log(res.data);
            toast.success(res.data);
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error("An Error Occurred!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex h-screen">
            <div className="flex flex-[40%] justify-center items-center bg-blue-500">
                <div className="w-[70%] ">
                    <p className="text-center text-[20pt] text-white font-semibold mb-6">GLAD YOU ARE HERE!</p>
                    <p className="text-wrap">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime similique voluptatem accusamus quaerat.
                    </p>
                </div>
            </div>

            <div className="flex flex-[60%] justify-center items-center">
                <form
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                    className="border rounded-lg shadow-lg py-[2.5rem] px-[2rem] flex flex-col gap-[1.5rem]">

                    <div className="">
                        <p className="font-bold text-center text-[15pt]">Hello, friend!</p>
                        <p className="text-center text-[10pt]">Create a quick account</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* First and Last Name */}
                        <div className="flex gap-4">
                            <fieldset className="w-1/2">
                                <legend className="text-[9pt] text-blue-500">First Name:</legend>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                                    {...register("firstName", { required: "First name is required" })}
                                />
                                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                            </fieldset>
                            <fieldset className="w-1/2">
                                <legend className="text-[9pt] text-blue-500">Last Name:</legend>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                                    {...register("lastName", { required: "Last name is required" })}
                                />
                                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                            </fieldset>
                        </div>

                        {/* Username and Email */}
                        <div className="flex gap-4">
                            <fieldset className="w-1/2">
                                <legend className="text-[9pt] text-blue-500">Username:</legend>
                                <input
                                    type="text"
                                    name="username"
                                    className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                                    {...register("username", { required: "Username is required" })}
                                />
                                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                            </fieldset>
                            <fieldset className="w-1/2">
                                <legend className="text-[9pt] text-blue-500">E-mail:</legend>
                                <input
                                    type="email"
                                    name="email"
                                    className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </fieldset>
                        </div>

                        {/* Password and Confirm Password */}
                        <div className="flex gap-4">
                            <fieldset className="w-1/2">
                                <legend className="text-[9pt] text-blue-500">Password:</legend>
                                <input
                                    type="password"
                                    name="password"
                                    className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                                    {...register("password", { required: "Password is required" })}
                                />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </fieldset>
                            <fieldset className="w-1/2">
                                <legend className="text-[9pt] text-blue-500">Confirm Password:</legend>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                                    {...register("confirmPassword", {
                                        required: "Confirm password is required",
                                        validate: value =>
                                            value === watch('password') || "Passwords do not match"
                                    })}
                                />
                                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                            </fieldset>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex justify-center">
                            <input
                                type="checkbox"
                                name="termsAndConditions"
                                id="termsAndConditions"
                                {...register("termsAndConditions", { required: "You must agree to the terms and conditions" })}
                            />
                            <label htmlFor="termsAndConditions" className="text-[10pt] flex gap-[0.2rem] ml-2">
                                I agree to the <a href="#" className="text-blue-500">Terms and Conditions</a>
                            </label>
                            {errors.termsAndConditions && <p className="text-red-500 ml-2">{errors.termsAndConditions.message}</p>}
                        </div>

                        {/* Register Button */}
                        <div className="flex justify-center">
                            <button type="submit" className="border border-blue-500 rounded py-2 font-semibold bg-blue-500 text-white w-full">
                                <span>{isSubmitting ? "Loading..." : "REGISTER"}</span>
                            </button>
                        </div>
                    </div>

                    {/* Already Have an Account */}
                    <p className="text-center text-[10pt] mt-4">
                        Already have an account? <Link to={'/login'} className="text-blue-500 font-semibold">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
