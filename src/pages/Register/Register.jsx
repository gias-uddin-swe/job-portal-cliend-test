/* eslint-disable no-unused-vars */
import SocialLoginBtn from "./../SocialLoginBtn/SocialLoginBtn";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("password not valid need 8 char ");
      return;
    }
    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <p className="text-danger">{error}</p>
              <form action="">
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="email p-3 m-2"
                  type="text"
                  placeholder="enter your Name"
                  required
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 m-2"
                  type="email"
                  placeholder="enter your email"
                />
                <div className="pass-container">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="password p-3 m-2"
                    type="text"
                    placeholder="type your password"
                  />
                  {/* <input
                    className="password p-3 m-2"
                    type="password"
                    placeholder="enter your password"
                  /> */}
                  {/* <button>toggle</button> */}
                </div>
                <button
                  onClick={handleRegistration}
                  className="btn btn-info w-75 p-2 mt-3"
                >
                  Register
                </button>
                <p className="p-2">
                  <small className="text-info">
                    already have account? login here..
                  </small>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png"
              alt=""
            />
          </div>
        </div>
        <SocialLoginBtn></SocialLoginBtn>
      </div>
    </div>
  );
};

export default Register;
