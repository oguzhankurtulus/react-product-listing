const initialState = {
  basket: []
};

export default function basket(state: any = initialState, action) {
  switch (action.type) {
    case `NEW_ITEM_ADD`:
      return {
        ...state,
        basket: [...state.basket, action.payload]
      };
    case `AMOUNT_UPDATE`:
      return {
        ...state,
        basket: action.payload
      };
    default:
      return state;
  }
}
