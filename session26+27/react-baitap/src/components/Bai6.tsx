import React from 'react'

export default function formartname() {
    
    type Obj = {
        firstName:string,
        lastName:string,
    }
    let user:Obj = {
        firstName: "Nguyễn Văn",
        lastName:"Phúc",
    }

    return (
    <div>
      <b>Họ và tên: {user.firstName} {user.lastName}</b>
    </div>
  )
}
