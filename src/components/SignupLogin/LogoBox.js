import css from './LogoBox.module.scss';

function LogoBox(props) {
  return (
    <div className={css['social-account']}>
      <div className={css['social-account-facebook']}>
        <img alt="facebook" src="./image/signUpLogin/facebook.png" />
        <span>{`페이스북 계정으로 ${props.children}`}</span>
      </div>
      <div className={css['social-account-naver']}>
        <img alt="naver" src="./image/signUpLogin/naver.png" />
        <span>{`네이버 계정으로 ${props.children}`}</span>
      </div>

      <div className={css['social-account-kakao']}>
        <img alt="kakao" src="./image/signUpLogin/kakao.png" />
        <span>{`카카오 계정으로 ${props.children}`}</span>
      </div>
      <div className={css['social-account-apple']}>
        <img alt="apple" src="./image/signUpLogin/apple.png" />
        <span>{`Apple로 ${props.children}`}</span>
      </div>
    </div>
  );
}
export default LogoBox;
