import profileCss from './Profile.module.scss';
import css from '../../pages/Mypage/Mypage.module.scss';
import { useState, useEffect } from 'react';
import { check } from 'prettier';

function Profile() {
  const [myProfile, setMyProfile] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    postalCode: '',
    address: '',
    address1: '',
    gender: '',
    birth: '',
    isConsent: 0,
  });

  // const [maleInValid, setMaleInValid] = useState('true')

  // const femaleInValid = () => {
  //   if (myProfile.gender == 'female') {
  //     return "true";
  //   } else {
  //     return "false";
  //   }
  // };
  // console.log('마이프로필', myProfile);
  // const maleInValid = () => {
  //   if (myProfile.gender == 'male') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  useEffect(() => {
    // fetch('/data/myPage/myPage.json', {
    fetch('http://localhost:8000/my', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => res.json())
      .then(data =>
        setMyProfile({
          ...myProfile,
          email: data.data.email,
          name: data.data.name,
          phoneNumber: data.data.phoneNumber,
          birth: data.data.birth.toString(),
          gender: data.data.gender,
          isConsent: data.data.isConsent,
          postalCode: data.data.address[0].postalCode,
          address: data.data.address[0].address,
          address1: data.data.address[0].address1,
        })
      );
  }, []);

  return (
    <div>
      <div className={`${css.sectionTitle} ${profileCss.myProfile}`}>
        <span>내 정보</span>
      </div>
      <div className={profileCss.formBox}>
        <form>
          <div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>아이디(이메일)</label>
              <input
                className={profileCss.formInput}
                defaultValue={myProfile.email}
                disabled
              ></input>
            </div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>비밀번호</label>
              <button className={`${profileCss.formBtn} ${profileCss.pwBtn}`}>
                비밀번호 변경
              </button>
            </div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>이름</label>
              <input
                className={profileCss.formInput}
                defaultValue={myProfile.name}
              ></input>
            </div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>휴대폰 번호</label>
              <input
                className={profileCss.formInput}
                defaultValue={myProfile.phoneNumber}
              ></input>
            </div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>기본 배송지</label>
              <div className={profileCss.inputBox}>
                <div>
                  <input
                    className={profileCss.addrNum}
                    placeholder="우편번호"
                    defaultValue={myProfile.postalCode}
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
                  defaultValue={myProfile.address}
                ></input>
                <input
                  className={profileCss.formInput}
                  placeholder="상세 주소"
                  defaultValue={myProfile.address1}
                ></input>
              </div>
            </div>
          </div>
          <div>
            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>성별</label>
              <div className={profileCss.genderBox}>
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  checked={myProfile.gender == 'female' ? true : false}
                  // onChange={e => {
                  //   changeHandler(e.currentTarget.checked, 'female');
                  // }}
                ></input>
                <span className={profileCss.gender}>여성</span>
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  checked={myProfile.gender == 'male' ? true : false}
                  // onChange={e => {
                  //   changeHandler(e.currentTarget.checked, 'male');
                  // }}
                ></input>
                <span className={profileCss.gender}>남성</span>
              </div>
            </div>

            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>생년월일</label>

              <input
                className={profileCss.birthInput}
                defaultValue={myProfile.birth.substring(0, 4)}
              ></input>
              <span className={profileCss.spanBorder}>년</span>

              <input
                className={profileCss.birthInput}
                defaultValue={myProfile.birth.substring(4, 6)}
              ></input>
              <span className={profileCss.spanBorder}>월</span>

              <input
                className={profileCss.birthInput}
                defaultValue={myProfile.birth.substring(6, 8)}
              ></input>
              <span className={profileCss.spanBorder}>일</span>
            </div>

            <div className={profileCss.formContent}>
              <label className={profileCss.formLabel}>정보수신동의</label>
              <input
                className={profileCss.consent}
                type="checkbox"
                checked={myProfile.isConsent ? true : false}
              ></input>
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
