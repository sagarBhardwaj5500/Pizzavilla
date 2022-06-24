import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data }) => {
  const [orders, setOrders] = useState([]);
  const addItemToCartHandler = (event) => {
    // console.log(JSON.parse(event.target.value));
    setOrders([...orders, JSON.parse(event.target.value)]);

    toast.success("Item Added To Cart");
  };
  console.log(orders);
  localStorage.setItem('orders', JSON.stringify(orders))

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index} className="appearAnimation">
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton
                  onClick={addItemToCartHandler}
                  value={JSON.stringify(product)}
                >
                  {product.button}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
