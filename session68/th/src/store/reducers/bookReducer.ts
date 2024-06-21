// Khởi tạo giá trị state 
import { Action } from "../../interface";

// Giá trị khởi tạo ban đầu
// const initialBook:Book[] = JSON.parse(localStorage.getItem("books")||"[]");
let initialBook=[
    {
        id:1, 
        status:"true",
        name:"Nhà giả kim"
    },
    {
        id:2, 
        status:"false",
        name:"Đắc nhân tâm"
    },
    {
        id:3, 
        status:"true",
        name:"Những người khốn khổ"
    },
    {
        id:4, 
        status:"false",
        name:"Cha giàu, cha nghèo"
    },
    {
        id:5, 
        status:"true",
        name:"Thao túng tâm lí"
    }
]

// Tạo hàm bookreducer
const bookreducer=(state=initialBook, action:Action)=>{
    switch (action.type) {
        case "ADD":
            
            return state
        case "FILTER":
            let resultFilter = initialBook.filter((item)=>{
                return item.status === action.payload
            })
            return resultFilter
        default:
            return state
    }
}

export default bookreducer;