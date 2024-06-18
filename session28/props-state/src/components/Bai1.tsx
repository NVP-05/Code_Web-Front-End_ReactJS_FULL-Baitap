import React, { Component } from 'react'
interface Class{
    name:string;
}

export default class Bai1 extends Component<any,Class> {
    constructor(props:Class) {
        super(props);
        this.state = { 
            name:"Nguyễn Văn Phúc"
         }
    }

  render() {
    return (
      <div>
        <b>Họ và tên : {this.state.name}</b>
      </div>
    )
  }
}
