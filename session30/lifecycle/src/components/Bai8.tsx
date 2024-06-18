import React, { Component } from 'react'
interface Ex08{
    title:string
}
interface St{

}

export default class Bai8 extends Component<St,Ex08> {
    constructor(props:Ex08){
        super(props);
        this.state = {
            title:""
         }
    }
    handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title:e.target.value
        })
    }
    componentDidUpdate(): void {
        document.title = this.state.title
    }
  render() {
    return (
      <div>
        <label htmlFor="">Nhập tiêu đề</label>
        <input onChange={this.handleTitle} type="text" />
      </div>
    )
  }
}
