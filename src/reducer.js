export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket)=>
basket?.reduce((amount,item)=>item.price+ amount,0)

const reducer = (state, action) =>{
  // console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state, //it meangs current state 
        user:action.user
      }
    case "ADD_TO_BASKET":
      //logic for adding item to the basket
      // return {state}
      // break;
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for removing item from the basket;

      //here we clone the basket
      let newBasket = [...state.basket];
      //we check if product exists,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket , remove it...
        newBasket.splice(index, 1);
        //   newBasket
      } else {
        console.warn('Can"t remove product (id:${action.id}) as its no');
      }
      return { ...state, basket: newBasket };

    // break;
    default:
      return state;
  }
}
export default reducer;
