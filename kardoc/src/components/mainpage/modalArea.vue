<template>
  <div class="modal_dim">
    <div class="modal_window">
      <p>지역선택
        <button class="modal_close_btn" type="button" @click="$emit('close')">X</button>
      </p>
      <ul class="region_list">
				<li class="region"><button type="button" @click="showGu">서울특별시</button></li>
        <li class="region"><button type="button">경기도</button></li>
        <li class="region"><button type="button">인천광역시</button></li>
        <li class="region"><button type="button">부산광역시</button></li>
				<district v-if="!is_show_gu"></district>
        <li class="region"><button type="button">대전광역시</button></li>
        <li class="region"><button type="button">대구광역시</button></li>
        <li class="region"><button type="button">광주광역시</button></li>
        <li class="region"><button type="button">울산광역시</button></li>
        <li class="region"><button type="button">경상북도</button></li>
        <li class="region"><button type="button">경상남도</button></li>
        <li class="region"><button type="button">충청북도</button></li>
        <li class="region"><button type="button">충청남도</button></li>
        <li class="region"><button type="button">강원도</button></li>
        <li class="region"><button type="button">전라북도</button></li>
        <li class="region"><button type="button">제주</button></li>
        <li class="region"><button type="button">전라남도</button></li>
        <li class="region"><button type="button">세종시</button></li>
      </ul>
			<button type="button" class="ok_btn" @selectOk="transText">{{button_text}}</button>
    </div>
  </div>
</template>

<script>
import district from './district.vue'

export default {
  name: 'modal_dim',
	components: {
		district
	},
  data() {
    return {
			is_show_gu: true,
      button_text: "지역을 선택해주세요"
    }
  },
	methods: {
		showGu() {
			this.is_show_gu = !this.is_show_gu;
		},
    transText() {
      this.button_text = "선택완료"
    }
	}
}
</script>

<style scoped>

/*모달 윈도우 딤처리*/
.modal_dim {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(32, 32, 32, 0.9);
}
/* 모달창 */
.modal_window {
  width: 30rem;
  padding: .5rem 2rem 2rem 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(44, 62, 80, 0.90);
}
/*모달창 닫기 버튼*/
.modal_close_btn {
  position: absolute;
  right: -2.6rem;
  top: -1.6rem;
  display: inline-block;
  padding: .4rem .6rem;
  border: 1px solid #E74C3C;
  border-radius: 50%;
  background: #E74C3C;
  color: #fff;
  outline: none;
  cursor: pointer;
}
.modal_close_btn:hover {
  background: #e66456;
  border: 1px solid #e66456;
}
/*모달창 내부(지역분류 카테고리)*/
.modal_window p {
  position: relative;
  color: #fff;
  padding: .4rem 0 1rem 0;
}
.modal_window span {
  font-size: .8rem;
  padding-left: .5rem;
  color: #d6d6d6;
}
.region_list {
  width: 100%;
  height: 26rem;
  overflow: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #ECF0F1;
}
.region {
  border-bottom: 1px solid #ECF0F1;
  border-right: 1px solid #ECF0F1;
  width: 25%;
  text-align: center;
}
.region button {
  width: 100%;
  height: auto;
  padding: 2rem 0;
  text-decoration: none;
  color: #ECF0F1;
  background: rgba(44, 62, 80, 0.1);
  display: block;
  transition: all .5s ease-in-out;
  outline: none;
	border: none;
  cursor: pointer;
}
.region button:focus  {
  background: #34a77b;
  border-radius: 50%;
}
.ok_btn {
	width: 10rem;
	margin-top: 1.5rem;
	padding: .5rem;
	border: none;
	background-color: #ECF0F1;
	cursor: pointer;
	color: #2c3e50;
	font-weight: 700;
}
</style>
