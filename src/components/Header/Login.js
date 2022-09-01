import css from './Login.module.scss';

function Login() {
  return (
    <div className={css['login-box']}>
      <span>고객센터</span>
      <span>로그인</span>
      <span>회원가입</span>
    </div>
  );
}
export default Login;
