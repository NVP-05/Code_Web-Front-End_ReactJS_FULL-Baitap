import React, { useState } from 'react'
import AddStudent from './AddStudent'
import { v4 as uuidv4 } from 'uuid';

interface Student{
  id: string,
  name: string,
  birth: string,
  email: string,
  status: boolean,
  studentCode: string,

}


export default function TableStudent() {
  const [studentLocal,setStudentLocal] = useState<Student[]>(() => {     
    const listStudentLocal = localStorage.getItem("students")   
    // Kiểm tra xem trên local có dữ liệu ko, nếu có sẽ ép kiểu JSON thành JS, nếu ko có sẽ là []
    const listJob = listStudentLocal ? JSON.parse(listStudentLocal) : []
    return listJob
})
const [student,setStudent] = useState<Student>({
  id:uuidv4(),
  name:"",
  birth:"",
  email:"",
  status:true,
  studentCode:""
})
  const del = (id:string) =>{
    const findStudent =  studentLocal.findIndex((student:Student)=> student.id ==id)    
    studentLocal.splice(findStudent,1)
    localStorage.setItem("students", JSON.stringify(studentLocal));
    location.reload()
  }
  const [active,setActive] = useState<boolean>(false)
  const [stateFake,setStateFake] = useState<number>(0)
  const edit = (id:string) =>{
    var findStudent =  studentLocal.findIndex((student:Student)=> student.id == id)    
    console.log(findStudent);
    setActive(true)
    setStateFake(findStudent)
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name
    let value = e.target.value
    setStudent({
       ...student,[name]:value
    })
    
}


const confirmClick = (id:string,e: React.MouseEvent<HTMLButtonElement>) => {
  // e.preventDefault()
    const newStudent: Student = {
      ...student,
    };
    console.log(stateFake);
    studentLocal[stateFake] = newStudent
    localStorage.setItem("students", JSON.stringify(studentLocal));
    
}

const handleClose = () => {
    setActive(false);
  
};
let a:any
  return (
    <div>
       {
           active?                
        <div className='add-student1'>
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
                    <button onClick={(e)=> {confirmClick(student.id,e)}} >Sửa</button>
                </div>
            </div>
        </form>
       </div>
        :
        ""
       }
        <table className="table">
  <thead>
    <tr>
      <th scope="col">STT</th>
      <th scope="col">Mã sinh viên</th>
      <th scope="col">Tên sinh viên</th>
      <th scope="col">Ngày sinh</th>
      <th scope="col">Email</th>
      <th scope="col">Trạng thái</th>
      <th scope="col">Chức năng</th>
    </tr>
  </thead>
  <tbody>

      {
        
          studentLocal.map((student:Student,index) =>(     
            <tr key={student.id}>
                <th scope='row'>{index}</th>
                <td>{student.studentCode}</td>
                <td>{student.name}</td>
                <td>{student.birth}</td>
                <td>{student.email}</td>
                {
                  student.status? <td>Đang hoạt động</td> : <td>Ngừng hoạt động</td>
                }
                <td className='edit-status'>
                  <button className='block'>Chặn</button>
                  <button onClick={()=> {edit(student.id)}}  className='edit'>Sửa</button>
                  <button onClick={()=> {del(student.id)}}  className='del'>Xóa</button>
                </td>
          </tr>
                  
          ))
      }

  </tbody>
</table>
    </div>
  )
}
