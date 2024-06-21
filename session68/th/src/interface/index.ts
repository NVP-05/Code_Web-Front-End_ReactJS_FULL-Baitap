// tạo tất cả interface or type
// xuất ra (export) các file khác cần dùng type, interface thì import vào

export interface Book{
    id: number,
    status: string,
    name: string,

}

export interface Action{
    type: string,
    payload: any,
}