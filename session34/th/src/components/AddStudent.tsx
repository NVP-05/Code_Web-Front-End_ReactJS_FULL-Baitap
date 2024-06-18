import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
interface Student{
    id: string,
    name: string,
    birth: string,
    email: string,
    status: boolean,
    studentCode: string,

}

export default function AddStudent() {
    const [student,setStudent] = useState<Student>({
        id:uuidv4(),
        name:"",
        birth:"",
        email:"",
        status:true,
        studentCode:""
    })
    const [studentLocal,setStudentLocal] = useState<Student[]>(() => {     
        const listStudentLocal = localStorage.getItem("students")   
        // Kiểm tra xem trên local có dữ liệu ko, nếu có sẽ ép kiểu JSON thành JS, nếu ko có sẽ là []
        const listJob = listStudentLocal ? JSON.parse(listStudentLocal) : []
        return listJob
    })
    const [active, setActive] = useState<boolean>(false)
    const handleClick = () => {
      setActive(true)
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        setStudent({
           ...student,[name]:value
        })
        
    }



    const confirmClick = (e:any) => {
        const newStudent: Student = {
            ...student,
            id: uuidv4(),
            status: true
        };
        studentLocal.push(newStudent)
        localStorage.setItem("students", JSON.stringify(studentLocal));
        setStudent({
            id:"",
            name:"",
            birth:"",
            email:"",
            status:true,
            studentCode:""
        })
    }
    
    const handleClose = () => {
        setActive(false);
    };
  return (
    <div > 
        <div className='add'>
                        <button onClick={handleClick} className='button-add'>
                        Thêm mới sinh viên
                        </button>
                </div>
       {
           active?                
        <div className='add-student'>
        <form className='form' action="">
            <div style={{display:"flex",justifyContent:"space-between",width:"100%",padding:"0px 30px"}}>
                <h3>Thêm mới sinh viên</h3>
                <span onClick={handleClose} style={{display:'flex',alignItems:'center',cursor:"pointer"}} className="material-symbols-outlined">
                close
                </span>
            </div>
            <div className='input'>
                <label htmlFor="">Mã sinh viên</label><br />
                <input name="studentCode" onChange={handleChange} type="text" />
                <br />
                <label htmlFor="">Tên sinh viên</label><br />
                <input name="name" onChange={handleChange} type="text" />
                <br />
                <label htmlFor="">Ngày sinh</label><br />
                <input name="birth" onChange={handleChange} type="date" />
                <br />
                <label htmlFor="">Email</label><br />
                <input name="email" onChange={handleChange} type="text" /><br />
                <div>
                    <button onClick={handleClose}>Hủy</button>
                    <button onClick={confirmClick}>Thêm mới</button>
                </div>
            </div>
        </form>
       </div>
        :
        ""
       }
      <div className='sts-fix'>
     
      </div>
    </div>
  )
}
