import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiSignup } from "../services/auth";
import { toast } from "react-toastify";



const Register = () => {


    const [isSubmitting, setIsSubmitting] = useState(false)


    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ reValidateMode: "onBlur", mode: "all" });



    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true)
        let payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            password: data.password,
            confirmPassword: data.confirmPassword,
        }


        try {
            const res = await apiSignup(payload);
            console.log(res.data);
            toast.success(res.data)

            navigate("/login")


        } catch (error) {
            console.log
            toast.error("An Error Ocurred!")
        } finally {
            setIsSubmitting(false)
        }
    }




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

                    <div className="flex flex-col gap-3">
                        <fieldset>
                            <legend className="text-[9pt] text-blue-500">Name:</legend>
                            <input type="text"
                                name="fullname"
                                className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                                {...register("fullname", { required: "Fullname is required" })}
                            />
                            {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
                        </fieldset>

                        <fieldset>
                            <legend className="text-[9pt] text-blue-500">E-mail:</legend>
                            <input
                                type="email"
                                name="email"
                                className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                                {...register("email", { required: "Email is Required", })}
                            />
                            {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
                        </fieldset>

                        <fieldset>
                            <legend className="text-[9pt] text-blue-500">Password:</legend>

                            <input
                                type="password"
                                name="password"
                                className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                                {...register("password", {
                                    required: "Password is Required",
                                })}
                            />
                            {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}

                            <p className="flex gap-1 justify-center mt-1 mb-1">

                                <input type="checkbox" name="conditions" id="conditions" />

                                <label htmlFor="conditions" className="text-[10pt] flex gap-[0.2rem] ">I agree to the <a href="#" className="text-blue-500">Terms and Conditions</a> </label>

                            </p>
                        </fieldset>

                        <button type="submit" className="border border-blue-500 rounded py-2 font-semibold bg-blue-500 text-white">
                            <span>{isSubmitting ? "Loading..." : "REGISTER"}</span>
                        </button>
                    </div>

                    <p className="text-center text-[10pt]">Already have an account? <Link to={'/login'} className="text-blue-500 font-semibold">Login</Link> </p>

                </form>

            </div>

        </div>
    );


}



export default Register;