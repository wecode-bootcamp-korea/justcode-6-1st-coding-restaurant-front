import css from './SubSlide.module.scss';
import { Link } from 'react-router-dom';
function SubTitle() {
  return (
    <div className={css.title}>
      <div>
        <h2>새로 나온 메뉴</h2>
        <span>전국 맛집 메뉴를 간단히 요리해보세요</span>
      </div>
      <div className={css.more}>
        <Link to="#">더보기</Link>
        <span>&gt;</span>
      </div>
    </div>
  );
}
export default SubTitle;
