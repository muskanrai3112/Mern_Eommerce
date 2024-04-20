import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const handleSignUp = () => {
    console.log(userName, password);
    const data = { name: userName, password: password, type: userType };
    axios
      .post("http://localhost:3001/signUp", data)
      .then((res) => {
        console.log(res.data.token);
        if (res.data.code == 200) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>SignUp Page</h1>
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
        Password:{" "}
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        User Type:
        <input
          type="text"
          value={userType}
          onChange={(e) => {
            setUserType(e.target.value);
          }}
        />
      </div>{" "}
      <br /> <br />
      <div>
        <button onClick={handleSignUp}>SUBMIT</button>
      </div>
    </div>
  );
};

export default SignUp;
