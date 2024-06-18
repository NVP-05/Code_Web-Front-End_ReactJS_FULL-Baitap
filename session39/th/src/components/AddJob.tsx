import React, { useState } from "react";

interface Job {
    id:number,
    name:string,
    status:boolean,
}
let inputValue:string = "";
export default function AddJob() {
    const [nameJob, setNameJob] = useState<string>("");
    const [active, setActive] = useState<boolean>(false);
    const [local, setLocal] = useState<Job[]>(()=>{
        const listLocal = localStorage.getItem("jobs");
        const listJob = listLocal ? JSON.parse(listLocal) : [];
        return listJob
    })


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNameJob(e.target.value);
        inputValue = e.target.value;
    }
    
    const handleClick = (event:any) => {
        event.preventDefault()
        inputValue = "";
        setActive(!active);
        if(nameJob){
            
        }
    }

  return (
    <div>
      <form className="d-flex justify-content-center align-items-center mb-4">
        <div className="form-outline flex-fill">
          <input 
          onChange={handleChange}
          value={inputValue}
          type="text" id="form2" className="form-control" />
          <label className="form-label" htmlFor="form2">
            Nhập tên công việc  
          </label>
        </div>
        <button onClick={handleClick} type="submit" className="btn btn-info ms-2">Thêm</button>
      </form>
    </div>
  );
}
