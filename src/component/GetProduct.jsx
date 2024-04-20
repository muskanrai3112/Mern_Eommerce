import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Home from "./Home";

const GetProduct = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [seller, setSeller] = useState("");
  const [price, setPrice] = useState("");

  const handleOnsubmit = (event) => {
    event.preventDefault();

    console.log(
      {
        id: params.id,
        url: image,
        name: name,
        category: category,
        seller: seller,
        price: price,
      },
      "heelo data"
    );
    const data = {
      id: params.id,
      url: image,
      name: name,
      category: category,
      seller: seller,
      price: price,
    };
    axios
      .post("http://localhost:3001/edit-products", data)
      .then((res) => {
        console.log(res.data, "ressss");
        if (res.data.code == 200) {
          navigate("/get/products");
        }
      })
      .catch((error) => console.log(error, "errorrr"));
  };

  const params = useParams();
  console.log(params, "hhhh");
  useEffect(() => {
    const id = params.id;
    axios
      .get(`http://localhost:3001/getProductById/${id}`)
      .then((res) => {
        console.log(res.data.data, "12");
        setImage(res.data.data.url);
        setName(res.data.data.name);
        setCategory(res.data.data.category);
        setSeller(res.data.data.seller);
        setPrice(res.data.data.price);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div>
        <Home />
      </div>
      <form onSubmit={handleOnsubmit}>
        Image:{" "}
        <input
          className="inputs"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <br />
        Name:
        <input
          className="inputs"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        category:{" "}
        <input
          className="inputs"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <br />
        seller:
        <input
          className="inputs"
          type="text"
          value={seller}
          onChange={(e) => setSeller(e.target.value)}
        />
        <br />
        <br />
        price:{" "}
        <input
          className="inputs"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetProduct;
