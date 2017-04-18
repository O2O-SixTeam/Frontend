<template>
	<footer class="footer">
    <ul class="footer_link">
      <li><a href="">information</a></li>
      <li><a href="">help</a></li>
      <li><a href="">blog</a></li>
      <li><a href="">copyright</a></li>
      <li><a href="">contact</a></li>
    </ul>
    <p class="footer_copyright">ⓒ 2017 KarDoc. All rights reserved.</p>
    <ul class="footer_sns_list">
      <li><a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
      <li><a href=""><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
      <li><a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
      <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
    </ul>
  </footer>
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
	.footer {
  background: rgba(0, 0, 0, 0.9);
  position: relative;
  padding: 2rem 0;
}
.footer_link {
  width: 60%;
  margin: 0 auto;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer_link li {
  width: 20%;
  text-align: center;
}
.footer_link li a {
  display: block;
  color: #fff;
  text-transform: uppercase;
  font-size: .9rem;
}
.footer_copyright {
  text-align: center;
  font-size: .9rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  letter-spacing: 1.2px;
  color: #34a77b;
}
.footer_sns_list {
  width: 20%;
  margin: 0 auto;
  display: flex;
  padding-top: 1.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer_sns_list li {
  width: 20%;
}
.footer_sns_list li a {
  display: block;
  width: 100%;
  color: #ECF0F1;
  text-align: center;
}
.footer_sns_list li a:hover {
  color: #34a77b;
}
.footer_sns_list .fa-facebook-official,
.footer_sns_list .fa-google-plus-square,
.footer_sns_list .fa-twitter-square,
.footer_sns_list .fa-instagram {
  font-size: 2rem;
}

@media screen and (max-width: 640px) {
  .footer_link {
    width: 70%;
  }
  .footer_link li {
    width: 20%;
    text-align: center;
    margin: 0;
}
  .footer_link li a {
    font-size: .7rem;
  }
  .footer_sns_list {
    width: 25%;
  }
}
</style>