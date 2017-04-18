<template>
	<ul class="gu_wrapper">
		<li>
			<button v-for="gu in seoul" @click.prevent="$emit('selectOk')">{{gu.value}}</button>
		</li>
	</ul>
</template>

<script>

export default {
  name: 'gu_wrapper',
  data() {
    return {
			seoul: [
				{value: '강남구'},
				{value: '강동구'},
				{value: '강북구'},
				{value: '강서구'},
				{value: '관악구'},
				{value: '광진구'},
				{value: '구로구'},
				{value: '금천구'},
				{value: '노원구'},
				{value: '노봉구'},
				{value: '동대문구'},
				{value: '동작구'},
				{value: '마포구'},
				{value: '서대문구'},
				{value: '서초구'},
				{value: '성동구'},
				{value: '성북구'},
				{value: '송파구'},
				{value: '양천구'},
				{value: '영등포구'},
				{value: '용산구'},
				{value: '은평구'},
				{value: '종로구'},
				{value: '중구'},
				{value: '중랑구'}
			]
    }
  }
}
</script>

<style scoped>
	.gu_wrapper {
		margin: 0;
		padding: 0;
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		background: #fff;
		border: 1px solid #ecf0f1;
	}
	button {
		width: 25%;
		height: auto;
		border: 1px solid #ecf0f1;
		margin: 0;
		padding: .5rem;
		background: #fff;
		cursor: pointer;
		outline: none;
	}
	button:focus {
		background-color: #2c3e50;
		color: #ecf0f1;
	}
</style>
