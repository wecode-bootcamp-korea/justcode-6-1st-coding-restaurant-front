import css from './Search.module.scss';

function Search() {
  return (
    <div className={css.search}>
      <img src="/image/header/search.png" alt="search" />
      <input placeholder="상품명 검색" />
    </div>
  );
}

export default Search;
