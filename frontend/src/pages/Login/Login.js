import { FaUserTie, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

function Login() {

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        navigate("/dashboard");

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

                    <h2>Welcome  👋</h2>

                    <p>
                        Sign in to continue
                    </p>

                    <div className="input-box">

                        <FaEnvelope />

                        <input
                            type="email"
                            placeholder="Email"
                            required
                        />

                    </div>

                    <div className="input-box">

                        <FaLock />

                        <input
                            type="password"
                            placeholder="Password"
                            required
                        />

                    </div>

                    <button type="submit">

                        Sign In →

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;