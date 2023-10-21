import React, { Component } from "react";
import Header from "./Header";
import Benner from "./Benner";
import Item from "./Item";
import Footer from "./Footer";

export default class Bt30 extends Component {
  render() {
    return (
      <div>
        <Header />
        <Benner />
        <Item />
        <Footer/>
      </div>
    );
  }
}
