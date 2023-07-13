import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/action/actionCreator";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { errConverter } from "../helpers/convertErrMsg";

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerInput, setRegisterInput] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newRegister = { ...registerInput };
    newRegister[name] = value;
    setRegisterInput(newRegister);
    console.log(registerInput);
  };

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    try {
      await dispatch(registerUser(registerInput));
      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errConverter(err)
      })
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="w-50 border border-2 rounded p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
          <h1 className="text-center">Register Form</h1>
          <form onSubmit={handleSubmitRegister}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                name="username"
                onChange={handleChange}
                value={registerInput.username}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
                value={registerInput.email}
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
                onChange={handleChange}
                value={registerInput.password}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                onChange={handleChange}
                value={registerInput.phoneNumber}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                onChange={handleChange}
                value={registerInput.address}
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

export default RegisterForm;
