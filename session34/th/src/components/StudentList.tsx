import React from 'react'
import AddStudent from './AddStudent'
import SortStudent from './SortStudent'
import Search from './Search'
import TableStudent from './TableStudent'
import StudentDivider from './StudentDivider'

export default function StudentList() {
  return (
    <div >
        <div className="front-line">
            <p style={{fontWeight:"bold",fontSize:"24px"}}>Quản lí sinh viên
            </p>
        </div>
        <AddStudent></AddStudent>
        <br />
        <div className='mid-front-line'>
            <SortStudent></SortStudent>
            <Search></Search>
        </div>
        <br />
        <div>
            <TableStudent></TableStudent>
        </div>
        <br />
        <div>
            <StudentDivider></StudentDivider>
        </div>
    </div>
  )
}
