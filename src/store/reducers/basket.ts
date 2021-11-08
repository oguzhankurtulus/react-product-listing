const initialState = {
  basket: [],
  total: 0
};

export default function basket(state: any = initialState, action) {
  switch (action.type) {
    case `NEW_ITEM_ADD`:
      return {
        ...state,
        basket: [...state.basket, action.payload],
        total: state.total + action.payload.price
      };
    case `AMOUNT_UPDATE`:
      if (action.payload.quantity < 1) {
        state.basket.splice(action?.payload?.index, 1);
      }

      return {
        ...state,
        total: action.payload.type === 'minus' ? state.total - action.payload.price : state.total + action.payload.price
      };
    default:
      return state;
  }
}
