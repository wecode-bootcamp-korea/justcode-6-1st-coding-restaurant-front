import css from './Login.module.scss';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className={css['login-box']}>
      <span>고객센터</span>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </div>
  );
}
export default Login;
