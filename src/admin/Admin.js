import React, { useEffect, useState } from "react";

const Card = ({ actualPrice, image, name, orderOn, desc }) => {
  return (
    <section className="orderSection">
      <div>
        <img width="100px" height="100px" src={image} alt="" />
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <h3>{name}</h3>
        <h5> price ₹{actualPrice}</h5>
        <h5> {desc}</h5>
        <h5> Order On : {orderOn} </h5>
      </div>
    </section>
  );
};

const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:4000/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
            setData(data);
          });
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <>
      <div className="mainWrapper">
        <h1 style={{ textAlign: "center" }}>Total Orders</h1>
        <div className="wrapper">
          {
            <div className="orders" style={{ width: "80%" }}>
              {data.map((order, idx) => (
                <Card
                  key={idx}
                  actualPrice={order[0].actualPrice}
                  image={order[0].img}
                  name={order[0].name}
                  orderDate={order[0].orderDate}
                  orderOn={order.orderTime}
                />
              ))}
            </div>
          }
        </div>
        <div className="payment">
          <button
            className="btn"
            onClick={() => {
              localStorage.setItem("userState", "");
              window.location.reload(false);
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
