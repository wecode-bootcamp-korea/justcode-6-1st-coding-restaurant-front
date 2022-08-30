import css from './MenuSub.module.scss';

function MenuSub() {
  return (
    <div className={css['menu-box-sub']}>
      <span>미식 상점</span>
      <span>미식 철학</span>
    </div>
  );
}

export default MenuSub;
