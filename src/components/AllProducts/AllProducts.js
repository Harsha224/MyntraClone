import React from "react";
import "./allProducts.css";

import Product from "../Product/Product";

class AllProducts extends React.Component {
  render() {
    const { allProducts, addProductToBag, addProductToWishlist } = this.props;
    return (
      <div className="products_Container">
        {!!allProducts && (
          <h4>Total Products available: {allProducts.length}</h4>
        )}
        <div className="allProductsList_Container">
          {!!allProducts &&
            allProducts.length > 0 &&
            allProducts.map((productItem) => (
              <Product
                product={productItem}
                addProductToBag={addProductToBag}
                addProductToWishlist={addProductToWishlist}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default AllProducts;
