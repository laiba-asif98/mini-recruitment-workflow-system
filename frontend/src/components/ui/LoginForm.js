import { useForm } from "react-hook-form";

function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-card">

      <h2>Welcome Back 👋</h2>

      <p>Please sign in to your account</p>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">

          <label>Email</label>

          <input
            type="email"
            placeholder="admin@digitalsofts.com"
            {...register("email", {
              required: "Email is required",
            })}
          />

          <span className="error-message">
            {errors.email?.message}
          </span>

        </div>

        <div className="form-group">

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
            })}
          />

          <span className="error-message">
            {errors.password?.message}
          </span>

        </div>

        <div className="remember-row">

          <label>

            <input type="checkbox" />

            Remember Me

          </label>

          <span className="forgot-password">
            Forgot Password?
          </span>

        </div>

        <button
          type="submit"
          className="login-btn"
        >
          Login
        </button>

        <p className="demo-text">
          Demo:
          admin@digitalsofts.com /
          123456
        </p>

      </form>

    </div>
  );
}

export default LoginForm;