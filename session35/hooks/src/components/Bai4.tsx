import React, { useState } from 'react'

export default function Bai4() {
    const[active,setActive] = useState<boolean>(false)
    const changeStatus = () => {
        setActive(!active)
    }
  return (
    <div>
        {
            active ?
            <div>
                <button onClick={changeStatus}>Hiện</button>
            </div>

            :
           <div>
             <button onClick={changeStatus}>
                Ẩn <br />
            </button>
            <p>Tiêu đề văn bản</p>
           </div>
            }
       
    </div>
  )
}
