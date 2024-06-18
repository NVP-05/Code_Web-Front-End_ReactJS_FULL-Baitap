import React, { Component } from 'react'

interface Ex01{
    name : string;
}
interface St1{

}
export default class Bai1 extends Component<St1,Ex01> {
    constructor(props:Ex01) {
        super(props);
        this.state = { 
            name:"Nguyễn Văn Phúc."
         }
    }
  render() {
    return (
      <div>
        <b>Họ và tên: {this.state.name}</b>
      </div>
    )
  }
}
