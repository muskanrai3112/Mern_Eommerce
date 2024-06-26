import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log(userName, password);
    const data = { name: userName, password: password };
    axios
      .post("http://localhost:3001/login", data)
      .then((res) => {
        console.log(res.data.token);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.userId);
          navigate("/get/products");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        UserName:{" "}
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>{" "}
      <br />
      <div>
        {" "}
        Password:{" "}
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>{" "}
      <br />
      <div>
        <button onClick={handleLogin}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Login;
