import React, { Component } from 'react'
interface Ex6{
    message: string;
}
interface St{

}


export  class B6 extends Component<Ex6> {
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        return false
    }
  render() {
    const { message } = this.props;
    return (
      <div>
        <p>{message}</p>
      </div>
    )
  }
}



export default class App extends Component<St,Ex6> {
    constructor(props:Ex6){
        super(props);
        this.state = { 
            message:"Interface Rending"
        }
    }
  render() {
    return (
      <div>
        <B6 message={this.state.message}/>
        <button>Change</button>
      </div>
    )
  }
}
