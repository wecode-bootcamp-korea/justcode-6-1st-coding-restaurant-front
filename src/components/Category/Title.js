import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Title() {
  const [title, setTitle] = useState([]);
  const location = useLocation();
  const [description, setDescription] = useState();
  const url = new URLSearchParams(location.search).get('category');
  useEffect(() => {
    if (url === 'mealKit') {
      setTitle('간편 요리');
      setDescription('전국 맛집 메뉴를 간단히 요리해보세요');
    } else if (url === 'dessert') {
      setTitle('디저트');
    } else if (url === 'liquor') {
      setTitle('전통주');
      setDescription('우리나라 최고의 전통주들을 만나보세요');
    } else if (url === 'meat') {
      setTitle('육류');
      setDescription('행복한 BBQ타임을 위한 좋은 고기');
    } else if (url === 'bakery') {
      setTitle('베이커리 / 유제품');
      setDescription('전국 유명 베이커리가 한 곳에');
    } else if (url === 'beverage') {
      setTitle('커피 / 음료');
      setDescription('한국 최고의 커피와 음료수들');
    }
  });
  return (
    <>
      <h1>{title}</h1>
      <span>{description}</span>
    </>
  );
}
export default Title;
