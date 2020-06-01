import React from "react";
import "./BagItems.css";
import Item from "../Itemsselected/Item";

class WishListItems extends React.Component {
  render() {
    const { allwishlistItems, count, RemoveItem } = this.props;
    return (
      <div className="Items_Container">
        {!!allwishlistItems && count && (
          <h4>Total Products available: {count}</h4>
        )}
        <div className="allCartItemsList_Container">
          {!!allwishlistItems &&
            allwishlistItems.length > 0 &&
            allwishlistItems.map((ItemData) => (
              <Item product={ItemData} RemoveItem={RemoveItem} />
            ))}
        </div>
      </div>
    );
  }
}

export default WishListItems;
