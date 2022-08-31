import { useNavigate } from 'react-router-dom';
import css from './MenuSub.module.scss';

function MenuSub() {
  const navigate = useNavigate();
  return (
    <div className={css['menu-box-sub']}>
      <span onClick={() => navigate('/shops')}>미식 상점</span>
      <span onClick={() => navigate('/aboutUs')}>미식 철학</span>
    </div>
  );
}

export default MenuSub;
