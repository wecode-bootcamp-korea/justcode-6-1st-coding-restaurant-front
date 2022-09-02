import profileCss from './Profile.module.scss';
import css from '../../pages/Mypage/Mypage.module.scss';

function Profile() {
  return (
    <div>
      <div className={profileCss.myProfile}>
        <span>내 정보</span>
      </div>
      <div className={profileCss.formBox}>
        <form>
          <div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>아이디(이메일)</label>
              <input className={profileCss.formInput}></input>
            </div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>비밀번호</label>
              <button className={`${profileCss.formBtn} ${profileCss.pwBtn}`}>
                비밀번호 변경
              </button>
            </div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>이름</label>
              <input className={profileCss.formInput}></input>
            </div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>휴대폰 번호</label>
              <input className={profileCss.formInput}></input>
            </div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>기본 배송지</label>
              <div className={profileCss.inputBox}>
                <div>
                  <input
                    className={`${profileCss.formInput} ${profileCss.addrNum}`}
                    placeholder="우편번호"
                  ></input>
                  <span>
                    <button className={profileCss.formBtn}>
                      우편번호 검색
                    </button>
                  </span>
                </div>
                <input
                  className={profileCss.formInput}
                  placeholder="기본 주소"
                ></input>
                <input
                  className={profileCss.formInput}
                  placeholder="상세 주소"
                ></input>
              </div>
            </div>
          </div>
          <div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>성별</label>
              <div className={profileCss.genderBox}>
                <input type="radio" name="gender"></input>
                <span className={profileCss.gender}>여성</span>
                <input type="radio" name="gender"></input>
                <span className={profileCss.gender}>남성</span>
              </div>
            </div>

            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>생년월일</label>

              <input className={profileCss.birthInput}></input>
              <span className={profileCss.spanBorder}>년</span>

              <input className={profileCss.birthInput}></input>
              <span className={profileCss.spanBorder}>월</span>

              <input className={profileCss.birthInput}></input>
              <span className={profileCss.spanBorder}>일</span>
            </div>

            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>정보수신동의</label>
              <input className={profileCss.consent} type="checkbox"></input>
              <span>미래식당의 이벤트, 프로모션 수신 동의(선택)</span>
            </div>
          </div>
        </form>
        <div>
          <button className={profileCss.saveBtn}>변경사항 저장</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
