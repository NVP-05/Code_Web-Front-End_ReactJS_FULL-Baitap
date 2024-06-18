import React, { useState } from 'react'

export default function Bai1() {
    const [name, setName] = useState<string>("Nguyễn Văn Phúc")
  return (
    <div>
        <b>Họ và tên : {name}</b>
    </div>
  )
}
