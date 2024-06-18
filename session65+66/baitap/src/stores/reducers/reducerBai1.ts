const initialState:any = {
  id: 1,
  userName: 'Nguyễn Văn Nam',
  gender: 'Nam',
  dateBirth: '20/03/2023',
  address: 'Thanh Xuân, Hà Nội',
};

const userReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case "RENDER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
