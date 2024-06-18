import React, { Component } from 'react'
interface Class{
    id:number;
    name:string;
    birth:string;
    address:string
}

export default class Bai2 extends Component<any,Class> {
    constructor(props:Class) {
        super(props);
        this.state = { 
            id:1,
            name:"Nguyễn Văn Phúc",
            birth:"20-01-2005",
            address:"Thanh Hóa",
         }
    }

  render() {
    return (
      <div>
        <p>id : {this.state.id}</p>
        <p>Họ và tên : {this.state.name}</p>
        <p>Ngày sinh : {this.state.birth}</p>
        <p>Địa chỉ : {this.state.address}</p>
      </div>
    )
  }
}
