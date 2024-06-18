import React from 'react'
import Form from './components/Form'
import StudentList from './components/StudentList'
import AddStudent from './components/AddStudent'

export default function App() {
  return (
    <div>
      {/* 2 kĩ thuật chính 
            1. controlled
            2. uncontrolled
            3. dùng thư viện formirk
            
            Trong form
            1. ô input
            2. text area
            3. select option
            */}
            {/* <Form></Form> */}
            
            <StudentList  ></StudentList>
    </div>
  )
}
