import axios from "axios";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { useState } from "react";


const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        username: "",
        password: "",
      },
    });
  
    const onSubmit = async (data) => {
        const user = {
            username: data.username,
            password: data.password,
        };

        try {
            const { data } = await axios.post(
                "http://localhost:8000/token/",
                user,
                { headers: { "Content-Type": "application/json" } },
                { withCredentials: true }
            );

            localStorage.clear();
            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh_token", data.refresh);
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${data["access"]}`;
            window.location.href = "/home";
        } catch (error) {
            console.error(error);
            setErrorMessage("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className="Auth-form-layout">
            <form className="Auth-form-container" onSubmit={handleSubmit(onSubmit)}>
                <h3>Sign In</h3>
                <div>
                    <InputField
                    label="Username"
                    name="username"
                    register={register}
                    required
                    errors={errors}
                    />
                    <InputField
                    label="Password"
                    name="password"
                    register={register}
                    required
                    errors={errors}
                    />
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    {errorMessage && <p>{errorMessage}</p>}
                </div>
            </form>
        </div>
    );
};

export default Login;