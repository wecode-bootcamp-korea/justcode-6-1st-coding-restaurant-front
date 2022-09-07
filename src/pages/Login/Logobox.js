import css from './Login.module.scss';

function LogoBox() {
  // console.log(props);
  return (
    <>
      <div className={css['social-account-facebook']}>
        <img alt="facebook" src="./image/signUpLogin/facebook.png" />
        <span>페이스북 계정으로 로그인하기</span>
      </div>
      <div className={css['social-account-naver']}>
        <img alt="naver" src="./image/signUpLogin/naver.png" />
        <span>네이버 계정으로 로그인하기</span>
      </div>
      <div className={css['social-account-kakao']}>
        <img alt="kakao" src="./image/signUpLogin/kakao.png" />
        <span>카카오 계정으로 로그인하기</span>
      </div>
      <div className={css['social-account-apple']}>
        <img alt="apple" src="./image/signUpLogin/apple.png" />
        <span>Apple로 로그인</span>
      </div>
    </>
  );
}
export default LogoBox;
