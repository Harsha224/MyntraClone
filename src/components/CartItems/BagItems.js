import React from "react";
import "./BagItems.css";
import Item from "../Itemsselected/Item";

class BagItems extends React.Component {
  render() {
    const { allCartItems, count, RemoveItem } = this.props;
    return (
      <div className="Items_Container">
        {!!allCartItems && count && <h4>Total Products available: {count}</h4>}
        <div className="allCartItemsList_Container">
          {!!allCartItems &&
            allCartItems.length > 0 &&
            allCartItems.map((ItemData) => (
              <Item product={ItemData} RemoveItem={RemoveItem} />
            ))}
        </div>
      </div>
    );
  }
}

export default BagItems;
