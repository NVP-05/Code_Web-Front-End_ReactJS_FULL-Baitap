import React, { useState } from 'react';

export default function Bai4_parents() {
  const [userName, setName] = useState<string>("Nguyễn Văn Phúc");

  return (
    <div>
      <p>Tên cha: {userName}</p>
    </div>
  );
}