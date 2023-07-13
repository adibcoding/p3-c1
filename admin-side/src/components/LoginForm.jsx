import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/action/actionCreator";
import Swal from "sweetalert2";
import { errConverter } from "../helpers/convertErrMsg";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newLoginForm = { ...loginForm };
    newLoginForm[name] = value;
    setLoginForm(newLoginForm);
  };

  const handlePostLogin = async () => {
    try {
      const { email, password } = loginForm;
      await dispatch(loginUser(loginForm));
      // const response = await fetch(`${BASE_URL}/users?email=${email}&password=${password}`);
      // const result = await response.json();
      // console.log(result[0]);
      // localStorage.setItem('access_token', result[0])
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errConverter(error),
      });
      console.log(error);
    }
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    handlePostLogin();
  };

  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="w-50 border border-2 rounded p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
          <h1 className="text-center">Login Form</h1>
          <form onSubmit={handleSubmitLogin}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                name="email"
                value={loginForm.email}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={loginForm.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <div className="mt-3"></div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
