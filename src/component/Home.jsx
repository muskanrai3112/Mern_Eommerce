import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  console.log(data, "data");
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      Home
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/login");
          console.log("hjdhjfhdkj");
        }}
      >
        LogOut{" "}
      </button>
      <h1>PRODUCT LIST</h1>
    </div>
  );
};

export default Home;
