<template>
	<div class="wrap">
		<div class="dim"></div>
		<div class="wrapper">
			<h1 class="logo">
				<a href="">
					<img src="../../assets/images/kardoc.png" alt="로고">
				</a>
			</h1>
			<input class="area" type="text" readonly placeholder="지역선택" @click="showModalArea">
			<modal-area v-if="is_show_modal_area" @close="hideModalArea"></modal-area>
			<input class="parts" type="text" readonly placeholder="수리유형" @click="showModalParts">
			<modal-parts v-if="is_show_modal_parts" @close="hideModalParts"></modal-parts>
			<form>
				<fieldset>
					<legend>차량 정보</legend>
					<select name="brand" required>
						<option v-for="option in options" :value="option.value">
							{{option.value}}
					</option>
					</select>
					<label for="car-name"></label>
					<input type="text" id="car-name" placeholder="차량 명" required>
					<label for="car-number"></label>
					<input type="text" id="car-number" placeholder="차량 번호" required>
				</fieldset>
			</form>
			<div class="photo_zone">
    		<input type="file" @change="onFileChange">
    		<input type="file" @change="onFileChange">
    		<input type="file" @change="onFileChange">
			</div>
			<form>
				<fieldset> 
					<legend>상세 설명</legend>
					<label for="detail-desc"></label>
					<textarea id="detail-desc" placeholder="상세 내용을 입력해 주세요." aria-setsize="50"></textarea>
				</fieldset>
			</form>
			<form class="checkbox">
				<fieldset>
					<legend>추가 선택사항</legend>
					<label for="insurance">보험수리</label>
					<input type="checkbox" id="insurance">
					<label for="rent">렌트카</label>
					<input type="checkbox" id="rent">
					<label for="pickup">픽업 서비스</label>
					<input type="checkbox" id="pickup">
					<label for="id-number">차대번호</label>
					<input type="checkbox" id="id-number">
				</fieldset>
			</form>
			<form>
				<fieldset>
					<legend>휴대전화 번호</legend>
					<label for="phone-number"></label>
					<input type="text" placeholder="휴대전화 번호를 입력해 주세요. (-제외)" id="phone-number">
				</fieldset>
			</form>
			<button type="submit" class="submit-btn">수리 견적 요청</button>
		</div>
	</div>
</template>

<script>
import modalArea from '../mainpage/modalArea.vue'
import modalParts from './modalParts.vue'
	export default {
		components: {
    	modalArea,
			modalParts
  	},
		data() {
			return {
				is_show_modal_area: false,
				is_show_modal_parts: false,
				options: [
					{value: 'BRAND'},
					{value: 'BMW'},
					{value: '폭스바겐'},
					{value: '벤츠'},
					{value: '아우디'},
					{value: '현대'},
					{value: '기아'},
					{value: '쉐보레'},
					{value: '르노삼성'},
					{value: '제네시스'},
					{value: '렉서스'},
					{value: '인피니티'},
					{value: '미니'},
					{value: '토요타'},
					{value: '닛산'},
					{value: '혼다'},
					{value: '쌍용'},
					{value: '한국지엠'},
					{value: '포드'},
					{value: '크라이슬러'},
					{value: '랜드로버'},
					{value: '푸조'},
					{value: '링컨'},
					{value: '미쓰비시'},
					{value: '볼보'},
					{value: '스바루'},
					{value: '재규어'},
					{value: '지프'},
					{value: '캐딜락'},
					{value: '포르쉐'},
					{value: '사브'},
					{value: '스마트'},
					{value: '페라리'},
					{value: '피아트'},
					{value: '시트로엥'},
					{value: '닷지'},
					{value: '람보르기니'},
					{value: '로터스'},
					{value: '롤스로이스'},
					{value: '마세라티'},
					{value: '마이바흐'},
					{value: '마쯔다'},
					{value: '벤틀리'},
					{value: '부가티'},
					{value: '뷰익'},
					{value: '사이언'},
					{value: '새턴'},
					{value: '스즈키'},
					{value: '아큐라'},
					{value: '알파로메오'},
					{value: '어울림모터스'},
					{value: '애스톤마틴'},
					{value: '이스즈'},
					{value: '폰티악'},
					{value: '허머'},
					{value: '기타제조사'}
				]
			}
		},
		methods: {
			showModalArea() {
      	this.is_show_modal_area = true;
    	},
			hideModalArea() {
      	this.is_show_modal_area = false;
    	},
			showModalParts() {
				this.is_show_modal_parts = true;
			},
			hideModalParts() {
				this.is_show_modal_parts = false;
			}
		}
	}
</script>

<style scoped>
	legend {
	background-color: lightpink;
	position: absolute;
	left: -999em;
}
	body {
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
h1,p{
  margin: 0;
  padding: 0;
}
.wrap {
  max-width: 960px;
  min-width: 480px;
  margin: 0 auto;
}
.dim {
  position: absolute;
	top: 0;
	left: 0;
	background-color: #000;
	opacity: 0.5;
	width: 100%;
	height: 100%;
	z-index: -1;
}
/*헤더*/
.header {
  background: rgba(44, 62, 80, 0.90);
  padding: 1.5rem 0;
}
/* 로고 */
.logo {
	background: #fff;
	margin: 0 auto 2rem;
	display: block;
  width: 8rem;
  padding: .8rem;
  border-radius: 5px;
  color: #ECF0F1;
  text-align: center;
  font-size: 1rem;
}
.logo img {
	width: 100%;
}
.wrapper {
  background-color: rgba(236, 240, 241, 0.8);
  width: 70%;
  min-width: 24rem;
  margin: 5rem auto;
  padding: 2rem 0;
  box-shadow: 2px 2px 4px #2a2a2a, 4px 4px 8px #2a2a2a;
	text-align: center;
}
.area {
	width: 31.5%;
	text-align: center;
	cursor: pointer;
}
.parts {
	width: 31.5%;
	text-align: center;
	cursor: pointer;
}
.photo_zone {
	margin: 1rem auto 0;
	background: #fff;
	width: 425px;
}
.photo_zone input {
	width: 130px;
	margin: .2rem 0;
}
/* 폼 */
.wrapper form {
	margin-top: 1rem;
}
.wrapper fieldset {
	display: inline-block;
	border: none;
}
.wrapper input {
	padding: .5rem 0 .5rem 0;
	border: none;
	text-align: center;
}
.wrapper select {
	border: none;
	padding: .45rem;
}
#detail-desc {
	width: 425px;
	height: 100px;
	border: none;
	padding: 0.8rem;
}
.checkbox {
	border: none;
	display: inline-block;
}
#phone-number {
	width: 425px;
	padding: .3rem;
}
.submit-btn {
	margin-top: 20px;
	width: 30%;
 border-radius: 3px;
 background-color: #34a77b;
 border: none;
 color: #fff;
 height: 30px;
}
</style>