<template>
	<div class="register_page_wrapper">
		<div class="dim"></div>
    <div class="register_container">
      <p>환영합니다 사장님!</p>
      <hr>
			<h1 class="logo">
				<a href="">
					<img src="../../assets/images/kardoc.png" alt="로고">
				</a>
			</h1>
      <form class="register_form" action="">
        <label for="register_number"></label>
        <input id="register_number" type="text" name="사업자 번호" placeholder="사업자 번호를 기입해주세요" value="" maxlength="">
        <label for="register_companyName"></label>
        <input id="register_companyName" type="text" name="업체명" placeholder="업체명을 기입해주세요" value="" maxlength="">
        <div class="find_region">
          <a class="modal_btn" href="#">지역을 선택해주세요<img class="arrow_down_img" src="../../assets/images/img_arrow_down.png" alt="지역선택"></a>
        </div>
        <label for="company_address"></label>
        <input id="company_address" type="text" name="address" placeholder="업체 상세주소" value maxlength="">
        <button class="register_btn" type="submit">등록하기</button>
      </form>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	* {
  box-sizing: border-box;
}
/*바디*/
body {
  font-family: 'Noto Sans KR', 'Roboto', 'Sans-serif';
  font-size: 16px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  background-image: url(../../assets/images/car-repairing.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
/*기본값 초기화*/

h1,p,ul,li{
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

/*애니메이션*/
@keyframes arrowMove {
  0% { top: 23%;}
  25%{ top: 31%;}
  50% { top: 40%;}
  75% { top: 31%;}
  100% { top: 23%;}
}

/*업체등록 페이지 래퍼*/
.register_page_wrapper {
  max-width: 960px;
  min-width: 460px;
  margin: 0 auto;
}

/*업체등록 페이지 헤더*/

/* 로고 */
.logo {
	background: #fff;
	margin: 1rem auto 1rem;
	display: block;
  width: 7rem;
  border-radius: 5px;
  color: #ECF0F1;
  text-align: center;
  font-size: 1rem;
}
.logo img {
	width: 100%;
	padding: 0 .5rem;
}

/*업체등록 전체 컨테이너 */
.register_container {
  background-color: rgba(236, 240, 241, 0.90);
  width: 70%;
  margin:3rem auto;
  padding: 2rem 0;
  box-shadow: 2px 2px 4px #2a2a2a, 4px 4px 8px #2a2a2a;
}

.register_container h1 {
  padding: 1rem 0;
  font-size: 2rem;
  text-align: center;
  color: #2C3E50;
}

.register_container p {
  text-align: center;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 400;
}


/*업체등록 폼*/
.register_form input {
  display: block;
  width: 60%;
  margin: 1rem auto;
  min-width: 16rem;
  padding: 1rem 0 1rem 1rem;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #bbb;
  font-size: .8rem;
  outline: none;
  transition: all .5s ease-in-out;
}

.register_form input:focus {
  border-bottom: 1px solid #34a77b;
}

.find_region {
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0 0;
}

.find_region a {
  position: relative;
  display: block;
  width: 16rem;
  margin: 0 auto;
  padding: .6rem 0;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #2C3E50;
  color: #ccc;
  transition: all .3s ease-in-out;
}

.find_region a:hover {
  background: #E74C3C;
  color: #ECF0F1;
  border-radius: 25px;
}

/*화살표 이미지*/
.arrow_down_img {
  position: absolute;
  right: 20px;
  top:.5rem;
  width: 1.5rem;
  animation: arrowMove .7s infinite;
}

.find_region a:hover .arrow_down_img {
  display: none;
}

/*업체 등록버튼*/
.register_btn {
  background: #34a77b;
  color: #ECF0F1;
  width: 15rem;
  margin: 3rem auto 0;
  padding: .8rem 0;
  display: block;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>