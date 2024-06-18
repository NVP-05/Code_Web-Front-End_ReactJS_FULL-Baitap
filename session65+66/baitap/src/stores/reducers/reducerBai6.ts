const initialCount: any = "Rikkei Academy";

const reducerBai6 = (state = initialCount, action: any) => {
    switch (action.type) {
        case "true":
            return state = "RikkeiSoft"
        case "false":
            return state = "Rikkei Academy"
        default:
            return state
    }
}
export default reducerBai6;