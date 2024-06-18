import React,{useState} from 'react';
import B4_parents from './Bai4_parents';

export default function Bai4_child() {
  const [userName, setName] = useState<string>("Nguyễn Văn Phúc");
    
  return (
    <div>
      <B4_parents></B4_parents>
      <p>Tên con : {userName}</p>
    </div>
  );
}