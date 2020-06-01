const initialstate = {
  bagproducts: [],
  wishlistproducts: [],
};

function addcartitem(state, action) {
  const { item } = action;
  return {
    ...state,
    bagproducts: [...state.bagproducts, item],
  };
}

function addwishlistitem(state, action) {
  const { item } = action;
  return {
    ...state,
    wishlistproducts: [...state.wishlistproducts, item],
  };
}

function removecartitem(state, action) {
  const { itemid } = action;
  const copybagproducts = [...state.bagproducts];
  const index = copybagproducts.findIndex((product) => product.id === itemid);
  copybagproducts.splice(index, 1);
  return {
    ...state,
    bagproducts: copybagproducts,
  };
}

function removewishlistitem(state, action) {
  const { itemid } = action;
  const copywishlistproducts = [...state.wishlistproducts];
  const index = copywishlistproducts.findIndex(
    (product) => product.id === itemid
  );
  copywishlistproducts.splice(index, 1);
  return {
    ...state,
    wishlistproducts: copywishlistproducts,
  };
}

export function bagproducts(state = initialstate, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_BAG":
      return addcartitem(state, action);
    case "ADD_ITEM_TO_WISHLIST":
      return addwishlistitem(state, action);
    case "REMOVE_ITEM_IN_BAG":
      return removecartitem(state, action);
    case "REMOVE_ITEM_IN_WISHLIST":
      return removewishlistitem(state, action);
    default:
      return state;
  }
}
