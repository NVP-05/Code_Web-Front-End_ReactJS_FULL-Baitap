const initialState:any = [
    {
        id: 1,
        userName: 'Nguyễn Văn Nam',
        gender: 'Nam',
        dateBirth: '20/03/2023',
        address: 'Thanh Xuân, Hà Nội',
    },
    {
        id: 2,
        userName: 'Nguyễn Văn Minh',
        gender: 'Nam',
        dateBirth: '20/02/2022',
        address: 'Hoằng Hóa, Thanh Hóa',
    },
]
  
  const userReducer2 = (state = initialState, action:any) => {
    switch (action.type) {
      case "RENDER":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer2;
  