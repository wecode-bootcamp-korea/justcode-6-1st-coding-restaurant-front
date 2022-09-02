import profileCss from './Profile.module.scss';
import css from '../../pages/Mypage/Mypage.module.scss';

function Profile() {
  return (
    <div>
      <div className={css.sectionTitle}>
        <span>내 정보</span>
      </div>
      <form></form>
      <div className={css.sectionTitle}>
        <span>SNS 계정 연동</span>
      </div>
    </div>
  );
}

export default Profile;
