import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const GetProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  console.log(deleteData, "deleteData");
  console.log(data, "8");
  useEffect(() => {
    axios
      .get("http://localhost:3001/get-products")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  const handleOnclick = () => {
    const data = deleteData;
    axios
      .post("http://localhost:3001/delete-products", data)
      .then((res) => {
        if (res.data.code === 200) {
          setRefresh(!refresh);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAddToCart = (productId) => {
    const _productId = productId;
    const userId = localStorage.getItem("userId");
    console.log({ userId, productId: _productId });
    const data = { userId, productId: _productId };
    axios
      .post("http://localhost:3001/add-to-cart", data)
      .then((res) => {
        if (res.data.code === 200) {
          setRefresh(!refresh);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    
  };
  return (
    <div>
      {deleteData.length > 0 && (
        <button onClick={handleOnclick}> DELETE BUTTON </button>
      )}
      <Home />
      Products:
      <div
        style={{
          display: "grid",
          gridTemplateColumns: " 1fr 1fr 1fr",
          gap: "35px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  margin: "10px",
                  background: "gray",
                  width: "100%",
                }}
              >
                <p>{item.name}</p>
                <p> {item.category}</p>
                <p> {item.price}</p>

                <img
                  style={{
                    display: "flex",
                    margin: "10px",
                    height: "100px",
                    weight: "100%",
                  }}
                  src={item.url}
                  alt="image"
                />
                <div style={{ display: "flex" }}>
                  <button
                    onClick={() => {
                      console.log(item._id, "id...");
                      navigate(`/get/product/${item._id}`);
                    }}
                  >
                    Edit
                  </button>
                  <input
                    onChange={(e) => {
                      console.log(e.target.checked);
                      if (e.target.checked === true) {
                        setDeleteData([...deleteData, item._id]);
                      } else {
                        setDeleteData(deleteData.filter((s) => s !== item._id));
                      }
                    }}
                    type="checkbox"
                  />
                  <div>
                    <button
                      onClick={() => {
                        handleAddToCart(item._id);
                      }}
                    >
                      AddToCart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GetProducts;
