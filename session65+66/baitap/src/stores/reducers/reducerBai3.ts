const initialState:any = [
    {
        id: 1,
        productName: 'Chuối hột',
        price: "20.000 đ",
        quantity: 10,
    },
    {
        id: 2,
        productName: 'Chuối tiêu',
        price: "15.000 đ",
        quantity: 10,
    },
    
]
  
  const userReducer3 = (state = initialState, action:any) => {
    switch (action.type) {
      case "RENDER":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer3;
  