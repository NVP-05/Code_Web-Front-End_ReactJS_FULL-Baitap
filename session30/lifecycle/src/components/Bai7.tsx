import React, { Component } from 'react'

export default class Bai7 extends Component {
    componentDidMount() {
        document.title = "Bài 7";
      }
  render() {
    return (
      <div>
         {document.title}
      </div>
    )
  }
}
