import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Category() {
  const params = useParams();
  const [id, setId] = useState(params.id);
  console.log(id);
  return (
    <div>
      <span>카테고리 컴포넌트 / params로 가져와서 사용 </span>
      <span>{id}</span>
    </div>
  );
}
export default Category;
