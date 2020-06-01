import React from "react";
import "./Item.css";

class Item extends React.Component {
  render() {
    const { product, RemoveItem } = this.props;
    //console.log(product);
    return (
      <div key={product.id}>
        <div>
          <img src={product.img_url} width="250" height="250" />
        </div>
        <div className="brandType">Brand: {product.brand}</div>
        <div className="price">Price: Rs.{product.price} </div>
        <button className="remove_btn" onClick={() => RemoveItem(product.id)}>
          Remove
        </button>
      </div>
    );
  }
}

export default Item;
