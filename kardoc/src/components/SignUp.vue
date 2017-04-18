<template>
  <div class="SignUp_wrapper">  
    <div class="dim"></div>
    <div class="signup_page_wrapper">
      <div class="signup_container">
        <p>페이스북 계정을 가지고 있나요?</p>
        <button class="signup_btn_fb" type="button">페이스북으로 회원가입</button>
        <hr>
        <h1 class="logo">
        <a href="#">
          <img src="../assets/images/kardoc.png" alt="로고">
        </a>
      </h1>
        <form class="signup_form" action="">
          <label for="mem_name"></label>
            <input id="mem_name" type="text" placeholder="이름" value="" maxlength="10" v-model="signName">
          <label for="mem_email"></label>
            <input id="mem_email" type="email" placeholder="이메일" value="" maxlength="20" v-model="signEmail">
          <label for="mem_pwd"></label>
            <input id="mem_pwd" type="password" placeholder="비밀번호(6~15자)" value="" minlength="6" maxlength="15" v-model="signPwd">
          <label for="mem_birth"></label>
            <input id="mem_birth" type="text" placeholder="생년월일 EX) YYYY-MM-DD" value="" maxlength="10" v-model="signBirth">
          <label for="mem_tel"></label>
            <input id="mem_tel" type="text" placeholder="전화번호  '-'를 제외하고 작성" value="" v-model="signNumber">
          <fieldset>
            <legend>성별</legend>
            <span>성별:</span>
            <label for="male">남</label>
              <input id="male" type="radio" name="sex" value="male">
            <label for="female">여</label>
              <input id="female" type="radio" name="sex" value="female">
          </fieldset>
          <p>
            <span class="separate_line">개인정보 이용동의</span>
            <label for="agreement"></label>
            <input id="agreement" type="checkbox" name="약관동의" value="agree" checked="">
          </p>
          <button class="signup_btn" type="submit">작성 완료</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'SignUp_wrapper',
  data() {
    return {
      signName: '',
      signEmail: '',
      signPwd: '',
      signBirth: '',
      signNumber: ''
    }
  },
  methods: {
    signUp(e) {
      if(!this.signEmail || !this.signName || !this.signPwd || !this.signBirth || !this.signNumber) {
        console.error('양식을 모두 채워주세요');
      }
      if(e) {e.preventDefault();
      }
      axios.post('http://api.kardoc.kr/user/', {
        email: this.signEmail,
        name: this.signName,
        password: this.signPwd,
        birth: this.signBirth,
        phone: this.signNumber
      })
      .then(response => {
        console.log(response);
        if(response.status === 201 && response.statusText === 'Created') {
          console.log('then 실행');
          this.signEmail = '';
          this.signPwd = '';
          this.signName = '';
          this.signNumber = '';
          this.signBirth = '';
          window.alert(response.data.name + '님, 환영합니다!');
        }
      })
      .catch(error => {
        this.signEmail = '';
        this.signPwd = '';
        this.signName = '';
        this.signNumber = '';
        this.signBirth = '';
        window.alert('회원 가입에 실패했습니다.');
      });
    }
  }
}
</script>

<style>
html {
	font-size: 16px;
}
html,body,div,header,nav,section,aside,article,footer,figure,figcaption,
ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,p,fieldset {
	margin:0;
	padding:0;
}
input, button, select, textarea {
  font-family: inherit; 
}
ul {
  list-style-type: none; 
}
a:link, a:visited {
  text-decoration: none; 
}
a:hover, a:focus {
  color: #f00;
}
* {
  box-sizing: border-box;
}
/*바디*/
body {
  font-size: 16px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  background-image: url(../assets/images/car-repairing.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
/*기본값 초기화*/
h1,p,fieldset{
  margin: 0;
  padding: 0;
}
.bg-dim {
	position: absolute;
	top: 0;
	left: 0;
	background-color: #000;
	opacity: 0.5;
	width: 100%;
	height: 100%;
	z-index:2;
}
/*가상요소*/
.separate_line::before {
  content:"";
  display: block;
  width: 100%;
  height: 1px;
  margin: 1rem auto 1rem;
  background: #b4b4b4;
}
/*회원가입 페이지 래퍼*/
.signup_page_wrapper {
  max-width: 960px;
  min-width: 480px;
  margin: 0 auto;
}
/*회원가입 페이지 헤더*/
.signup_page_header {
  background: rgba(44, 62, 80, 0.90);
  padding: .5rem 0;
}

/* 로고 */
.logo {
	background: #fff;
	margin: 1rem auto 2rem;
	display: block;
  width: 7rem;
  padding: .8rem;
  border-radius: 5px;
  color: #ECF0F1;
  text-align: center;
  font-size: 1rem;
}
.logo img {
	width: 100%;
  padding: 0 .8rem;
}

/*회원가입 전체 컨테이너 */
.signup_container {
  background-color: rgba(236, 240, 241, 0.90);
  width: 70%;
  margin: 1.5rem auto;
  padding: 2rem 0;
  box-shadow: 2px 2px 4px #2a2a2a, 4px 4px 8px #2a2a2a;
}
.signup_container p {
  text-align: center;
  font-size: .9rem;
  color: #5c5c5c;
}
.signup_container > p {
  margin-bottom: 10px;
}
.signup_container h1 {
  padding: 1rem 0;
  font-size: 2rem;
  text-align: center;
  color: #2C3E50;
}

/*회원가입 작성 폼 */
.signup_form {
  margin-top: -2rem;
}
.signup_form > input {
  margin: .5rem auto;
  display: block;
  width: 50%;
  min-width: 18rem;
  padding: .8rem 0 .8rem 1rem;
  font-size: .8rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid #aaa;
  outline: none;
  transition: all .5s ease-in-out;
}
.signup_form input:focus {
  border-bottom: 2px solid #34a77b;
}
.signup_form fieldset {
  text-align: center;
  border: none;
  font-size: .9rem;
}
.signup_form legend {
  display: none;
}
#male, #female {
  display: inline-block;
  width: 1rem;
  margin-top: 1rem;
}
#agreement {
  margin-top: -1rem;
 }
/*버튼 */
.signup_btn, .signup_btn_fb {
  width: 15rem;
  margin: 0 auto;
  padding: 1rem 0;
  display: block;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/*회원가입 버튼*/
.signup_btn {
  margin-top: 1rem;
  background: #2c3e50;
  color: #ECF0F1;
}

/*페이스북 가입 버튼*/
.signup_btn_fb {
  margin-bottom: 1rem;
  background: #203571;
  color: #ECF0F1;
}
</style>