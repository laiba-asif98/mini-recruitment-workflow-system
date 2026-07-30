import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();

    const [showPassword,setShowPassword] = useState(false);

    const {

        register,
        handleSubmit,
        formState:{errors}

    } = useForm();

    const onSubmit = (data)=>{

        console.log(data);

        /*
        Backend aane ke baad:

        axios.post("/login")

        JWT Save

        */

        navigate("/dashboard");

    }

    return(

        <div className="login-card">

            <h2>Welcome  👋</h2>

            <p>

                Please sign in to continue

            </p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">

                    <label>Email</label>

                    <input

                    type="email"

                    placeholder="admin@digitalsofts.com"

                    {...register("email",{

                        required:"Email is required"

                    })}

                    />

                    <span className="error-message">

                        {errors.email?.message}

                    </span>

                </div>

                <div className="form-group">

                    <label>Password</label>

                    <div className="password-box">

                        <input

                        type={showPassword ? "text":"password"}

                        placeholder="Enter Password"

                        {...register("password",{

                            required:"Password is required"

                        })}

                        />

                        <span

                        className="eye"

                        onClick={()=>setShowPassword(!showPassword)}

                        >

                        {

                            showPassword ?

                            <FaEyeSlash/>

                            :

                            <FaEye/>

                        }

                        </span>

                    </div>

                    <span className="error-message">

                        {errors.password?.message}

                    </span>

                </div>

                <div className="remember-row">

                    <label>

                        <input type="checkbox"/>

                        Remember Me

                    </label>

                    <span className="forgot-password">

                        Forgot Password?

                    </span>

                </div>

                <button

                className="login-btn"

                type="submit"

                >

                    Login

                </button>

                <div className="demo">

                    <p>

                        Demo Credentials

                    </p>

                    <small>

                        admin@digitalsofts.com

                    </small>

                    <br/>

                    <small>

                        Password:123456

                    </small>

                </div>

            </form>

        </div>

    );

}

export default LoginForm;