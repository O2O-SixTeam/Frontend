<template>
	<div class="intro_wrapper">
		<div class="bg-dim"></div>
		<div class="container">
			<img src="../assets/images/kardoc.png" alt="로고">
			<h1>언제 어디서든 믿고 수리하세요!</h1>
			<router-link tag="button" to="/SignIn">SIGN IN</router-link>
			<router-link tag="button" to="/SignUp">SIGN UP</router-link>
		</div>
	</div>
</template>

<script>

export default {
  name: 'intro_wrapper',
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
html {
	font-size: 10px;
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
/* 본문 스타일 */
.intro_wrapper {
	background-image: url(../assets/images/car-repairing.jpg);
  background-size: cover;
  background-position: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
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
.container {
	text-align: center;
	z-index: 3;
	margin-bottom: 50px;
}
.container h1 {
	font-size: 2rem;
	margin: 20px 0 10px 0;
	color: #ECF0f1;
}
.container img {
	width: 8rem;
	background-color: #fff;
	padding: .8rem;
	border-radius: 5px;
}
.container button {
	background: none;
	margin: 15px 5px;
	border: 3px solid #ECF0f1;
	display: inline-block;
	width: 130px;
	height: 50px;
	line-height: 0.7;
	border-radius: 10px;
	color: #ECF0f1;
	font-size: 1.5rem;
	font-weight: 700;
	cursor: pointer;
	transition: 0.5s all;
}
.container button:hover {
	background-color: #ECF0f1;
	color: #2c3e50;
}
</style>
