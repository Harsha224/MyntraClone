function additemtobag(item) {
  return {
    type: "ADD_ITEM_TO_BAG",
    item,
  };
}

function additemtowishlist(item) {
  return {
    type: "ADD_ITEM_TO_WISHLIST",
    item,
  };
}

function removeiteminbag(itemid) {
  return {
    type: "REMOVE_ITEM_IN_BAG",
    itemid,
  };
}

function removeiteminwishlist(itemid) {
  return {
    type: "REMOVE_ITEM_IN_WISHLIST",
    itemid,
  };
}

export const addbagitems = (product) => {
  return (dispatch) => {
    dispatch(additemtobag(product));
  };
};

export const removebagitems = (productid) => {
  return (dispatch) => {
    dispatch(removeiteminbag(productid));
  };
};

export const addwishlistitems = (product) => {
  return (dispatch) => {
    dispatch(additemtowishlist(product));
  };
};

export const removewishlistitems = (productid) => {
  return (dispatch) => {
    dispatch(removeiteminwishlist(productid));
  };
};
