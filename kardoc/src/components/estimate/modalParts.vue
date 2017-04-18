<template>
	<div class="modal_dim">
    <div class="modal_window">
      <p>수리유형
        <button class="modal_close_btn" type="button" @click="$emit('close')">X</button>
      </p>
      <div class="parts_list">
        <button v-for="part in parts" class="parts" type="button" @click="selectPart">{{part.value}}</button>
      </div>
			<button type="button" class="ok_btn">{{text}}</button>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				parts: [
					{value: '범퍼'},
					{value: '프론트판넬'},
					{value: '앞펜더'},
					{value: '앞휄하우스'},
					{value: '에이필러'},
					{value: '앞문'},
					{value: '비필러'},
					{value: '뒷문'},
					{value: '뒤펜더'},
					{value: '뒤휠하우스'},
					{value: '루프판넬'},
					{value: '트렁크'},
					{value: '리어판넬'},
					{value: '본네트'},
					{value: '유리'}
				],
				text: "부품을 선택해주세요"
			}
		},
		methods: {
			selectPart() {
				text = "선택완료"
			}
		}
	}
</script>

<style scoped>
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
.parts_list {
  width: 100%;
  height: 26rem;
  overflow: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #ECF0F1;
}
.parts_list button {
  border-bottom: 1px solid #ECF0F1;
  border-right: 1px solid #ECF0F1;
  width: 25%;
  text-align: center;
}
.parts {
  width: 100%;
  height: auto;
  text-decoration: none;
  color: #ECF0F1;
  background: rgba(44, 62, 80, 0.1);
  display: block;
  transition: all .5s ease-in-out;
	border: none;
  cursor: pointer;
}
.parts:focus  {
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