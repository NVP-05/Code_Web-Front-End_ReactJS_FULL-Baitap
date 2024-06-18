const initialCount: any = [];

const reducerBai5 = (state = initialCount, action: any) => {
    switch (action.type) {
        case "ADD":
            return [...state,action.payload]
        default:
            return state
    }
}
export default reducerBai5;