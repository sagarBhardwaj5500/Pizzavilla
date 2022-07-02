import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import { GlobalStyle } from "./globalStyle";
import { productData, productDataTwo } from "./Components/Products/data";
import { Toaster } from "react-hot-toast";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Login from "./admin/Login";
import Admin from "./admin/Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <GlobalStyle />
          <Hero />
          <Products heading="Choose your favorite" data={productData} />
          <Feature />
          <Products heading="Choose your Sweet" data={productDataTwo} />
          <Footer />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/login" exact>
          {localStorage.getItem("userState") === "LOGGED_IN" ? (
            <Admin />
          ) : (
            <Login />
          )}
        </Route>
        <Route path="/admin" exact>
          {localStorage.getItem("userState") === "LOGGED_IN" ? (
            <Admin />
          ) : (
            <Login />
          )}
        </Route>
        <Route path="*">
          <GlobalStyle />
          <Hero />
          <Products heading="Choose your favorite" data={productData} />
          <Feature />
          <Products heading="Choose your Sweet" data={productDataTwo} />
          <Footer />
        </Route>
      </Switch>
      <Toaster />
    </Router>
  );
}

export default App;
