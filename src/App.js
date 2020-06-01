import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import categories from "./assets/categories.png";
import topbrands from "./assets/topbrands.png";
import AllProducts from "./components/AllProducts/AllProducts";

import { girlsData } from "./data";
import BagItems from "./components/CartItems/BagItems";
import WishListItems from "./components/CartItems/WishListItems";
import { connect } from "react-redux";
import { getallboysdata } from "./actions/getboysproducts";
import {
  addbagitems,
  removebagitems,
  addwishlistitems,
  removewishlistitems,
} from "./actions/updatebagitems";

const LandingPage = () => (
  <React.Fragment>
    <div className="category_img_container">
      <img src={categories} />
    </div>
    <div className="topbrands_img_container">
      <img src={topbrands} />
    </div>
  </React.Fragment>
);

class App extends React.Component {
  state = {
    cartItems: [],
    wishlistItems: [],
    copyofwishlistitems: [],
    copyofcartitems: [],
  };

  componentDidMount() {
    const { fetchboysData } = this.props;
    fetchboysData();
  }

  handleAddProductToBag = (product) => {
    const { additemtocart } = this.props;
    additemtocart(product);

    const { cartItems, cart } = this.state;
    const copyofcartitems = [...cartItems];
    copyofcartitems.push(product);
    console.log(copyofcartitems);
    this.setState({
      cart: cart + 1,
      cartItems: copyofcartitems,
    });
  };

  handleAddProductToWishlist = (product) => {
    const { additemtowishlist } = this.props;
    additemtowishlist(product);

    const { wishlist, wishlistItems } = this.state;
    const copyofwishlistitems = [...wishlistItems];
    copyofwishlistitems.push(product);
    console.log(copyofwishlistitems);
    this.setState({
      wishlist: wishlist + 1,
      wishlistItems: copyofwishlistitems,
    });
  };

  handleremovefrombag = (productid) => {
    const { removeitemincart } = this.props;
    removeitemincart(productid);

    //const { cartItems } = this.state;
    //const indextoRemove = cartItems.findIndex((item) => item.id === productid);
    //const copyofcartitems = [...cartItems];
    //copyofcartitems.splice(indextoRemove, 1);
    //this.setState({
    //cartItems: copyofcartitems,
    //});
  };

  handleremovefromwishlist = (productid) => {
    const { removeiteminwishlist } = this.props;
    removeiteminwishlist(productid);

    //const { wishlistItems } = this.state;
    //const indextoRemove = wishlistItems.findIndex(
    //(item) => item.id === productid
    //);
    //const copyofwishlistitems = [...wishlistItems];
    //copyofwishlistitems.splice(indextoRemove, 1);
    //this.setState({
    //wishlistItems: copyofwishlistitems,
    //});
  };

  render() {
    const { cartItems, wishlistItems } = this.state;
    const { boysproducts, allCartItems, allwishlistItems } = this.props;
    return (
      <div className="App">
        <Header
          cartCount={allCartItems.length}
          wishlistCount={allwishlistItems.length}
        />
        <main>
          <Router>
            <Switch>
              <Route
                exact
                path="/boys"
                component={() => (
                  <AllProducts
                    allProducts={boysproducts}
                    addProductToBag={this.handleAddProductToBag}
                    addProductToWishlist={this.handleAddProductToWishlist}
                  />
                )}
              />
              {/* TODO - Add Girls Data */}
              <Route
                exact
                path="/girls"
                component={() => (
                  <AllProducts
                    allProducts={girlsData}
                    addProductToBag={this.handleAddProductToBag}
                    addProductToWishlist={this.handleAddProductToWishlist}
                  />
                )}
              />
              <Route
                exact
                path="/bag"
                component={() => (
                  <BagItems
                    allCartItems={allCartItems}
                    RemoveItem={this.handleremovefrombag}
                    count={allCartItems.length}
                  />
                )}
              />
              <Route
                exact
                path="/wishlist"
                component={() => (
                  <WishListItems
                    allwishlistItems={allwishlistItems}
                    RemoveItem={this.handleremovefromwishlist}
                    count={allwishlistItems.length}
                  />
                )}
              />
              <Route path="/" component={LandingPage} />
            </Switch>
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  boysproducts: store.boysdata.boysallproducts,
  boyproductscount: store.boysdata.count,
  allCartItems: store.bagitems.bagproducts,
  allwishlistItems: store.bagitems.wishlistproducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchboysData: () => dispatch(getallboysdata()),
  additemtocart: (product) => dispatch(addbagitems(product)),
  removeitemincart: (productid) => dispatch(removebagitems(productid)),
  additemtowishlist: (product) => dispatch(addwishlistitems(product)),
  removeiteminwishlist: (productid) => dispatch(removewishlistitems(productid)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(App);
