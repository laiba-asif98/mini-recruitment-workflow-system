import { useState } from "react";
import { FaUserTie, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleLogin = (e) => {

    //     e.preventDefault();

    //     if (
    //         email === "admin@demo.com" &&
    //         password === "admin123"
    //     ) {

    //         navigate("/dashboard");

    //     } else {

    //         alert("Invalid Email or Password");

    //     }

    // };

    const handleLogin = (e) => {

    e.preventDefault();

    if (
        email.trim() === "admin@demo.com" &&
        password.trim() === "admin123"
    ) {
        alert("Correct Login");
        navigate("/dashboard");
    } else {
        alert("Wrong Login");
    }

};

    return (

        <div className="login-page">

            {/* Left Side */}

            <div className="login-left">

                <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="blob blob3"></div>

                <div className="brand">

                    <FaUserTie className="brand-icon" />

                    <h1>Recruitment Workflow</h1>

                    <p>
                        Hire smarter. Manage faster.
                    </p>

                </div>

                <div className="features">

                    <p>✓ Track Candidates</p>
                    <p>✓ Schedule Interviews</p>
                    <p>✓ Faster Hiring Process</p>

                </div>

            </div>

            {/* Right Side */}

            <div className="login-right">

                <form
                    className="login-card"
                    onSubmit={handleLogin}
                >

                    <h2>Welcome 👋</h2>

                    <p>
                        Sign in to continue
                    </p>

                    <div className="input-box">

                        <FaEnvelope />

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />

                    </div>

                    <div className="input-box">

                        <FaLock />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />

                    </div>

                    <button type="submit">

                        Sign In →

                    </button>

                    <div className="demo-credentials">

                        <h4>Demo Credentials</h4>

                        <p>
                            <strong>Email:</strong> admin@demo.com
                        </p>

                        <p>
                            <strong>Password:</strong> admin123
                        </p>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default Login;