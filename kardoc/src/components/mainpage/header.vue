<template>
  <header class="main_header">
    <nav class="nav_top clearfix">
      <h1 class="logo">
        <a href="#">
          <img src="../../assets/images/kardoc.png" alt="로고">
        </a>
      </h1>
      <a class="my_page_btn" href="#" role="button">마이페이지</a>
      <router-link class="register_company_btn" tag="a" to="/RegisterCompany">입점신청</router-link>
      <!-- max-width:640px -->
      <a class="burger_bar" onclick="$('.mb_main_menu').stop().toggle(300)">
        <i class="fa fa-align-justify" aria-hidden="true"></i>
      </a>
      <ul class="mb_main_menu">
        <li><a href="">마이페이지</a></li>
        <li><a href="">입점신청</a></li>
        <li><a href="">HOME</a></li>
        <li><a href="">추천업체</a></li>
        <li><a href="">우수사례</a></li>
        <li><a href="">차량관리 팁</a></li>
        <li><a href="">CONTACT US</a></li>
      </ul>
    </nav>
    <form class="search_region_form">
      <p>언제 어디서든 믿고 수리하세요!</p>
      <label for="search_bar"></label>
      <input class="modal_btn" id="search_bar" type="text" name="검색바" placeholder="지역을 선택해주세요." readonly @click="showModal"><button class="search_btn" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
      <modal-area v-if="is_show_modal" @close="hideModal"></modal-area>
    </form>
    <nav class="gnb">
      <ul class="main_menu">
        <li><a href="#">HOME</a></li>
        <li><a href="#">추천 업체</a></li>
        <li><a href="#">우수 사례</a></li>
        <li><a href="#">차량관리 팁</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import modalArea from './modalArea.vue'

export default {
  name: 'main_header',
  components: {
    modalArea
  },
  data() {
    return {
      is_show_modal: false,
      show_menu: !true
    }
  },
  methods: {
    showModal() {
      this.is_show_modal = true;
    },
    hideModal() {
      this.is_show_modal = false;
    }
  },
  mounted() {
    $('.main_menu li:eq(0)').click(function(evt){
      console.log("go search");
      evt.preventDefault();
      $('html,body').animate({scrollTop:0},500,'easeInCubic');
  });
  $('.main_menu li:eq(1)').click(function(evt){
      console.log("go featured shop");
      evt.preventDefault();
      var $target = $('.section:eq(0)');
      $('html,body').animate({scrollTop: $target.offset().top},800,'easeInCubic');
  });
  $('.main_menu li:eq(2)').click(function(evt){
      console.log("go after repaired");
      evt.preventDefault();
      var $target = $('.section:eq(1)');
      $('html,body').animate({scrollTop: $target.offset().top},800,'easeInCubic');
  });
  $('.main_menu li:eq(3)').click(function(evt){
      console.log("go management tips");
      evt.preventDefault();
      var $target = $('.section:eq(2)')
      $('html,body').animate({scrollTop: $target.offset().top},800,'easeInCubic');
  });
  $('.main_menu li:eq(4)').click(function(evt){
      console.log("go bottom");
      evt.preventDefault();
      var $target = $('section:eq(3)');
      $('html,body').animate({scrollTop: $target.offset().top},800,'easeInCubic');
  }),

    $(window).resize(function (){
    var width_size = window.outerWidth;
    if (width_size >= 640) {
      $('.mb_main_menu').css('display', 'none');
    }
    }),
    
    $(document).ready( function() {
        var fixedGnb = $( '.gnb' ).offset();
        $(window).scroll( function() {
          if ( $(document).scrollTop() > fixedGnb.top ) {
            $('.gnb').addClass('gnb_fixed');
          }
          else {
            $('.gnb').removeClass('gnb_fixed');
          }
        })
      })
  }
}
</script>

<style scoped>

/*헤더 영역*/
.main_header{
  background-image: url(../../assets/images/k-021.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
/* 로고 */
@keyframes runingCar {
  0% {left: -6rem;}
  85% {transform: rotate(10deg);}
  90% {transform: rotate(15deg);}
  95% {transform: rotate(20deg);}
  100% {left: 15%;}
}

.logo {
  background-color: #fff;
  display: inline-block;
  width: 8rem;
  height: 7.5rem;
  border-radius: 0 0 5px 5px;
  border: none;
  position: absolute;
  top: -35px;
  transition: all .5s;
  padding: 0.5rem;
  animation-name: runingCar;
  animation-iteration-count: 1;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}
.logo:hover {
  top: -20px;
  background-color: #fff;
}
.logo a {
  width: 100%;
  margin: 0;
}
.logo a img {
  display: block;
  width: 100%;
  height: auto;
  margin-top: 2rem;
}
/* 탑 네비게이션 */
.nav_top {
  position: relative;
}

/* 마이페이지, 입점신청 */
.my_page_btn,
.register_company_btn {
  width: 5rem;
  padding: .4rem 0;
  float: right;
  text-align: center;
  text-decoration: none;
  color: #ecf0f1;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 20px;
  position: relative;
}
.my_page_btn:hover,
.register_company_btn:hover {
  color: #ecf0f1;
  border-color: #ecf0f1;
}
/*마이페이지 버튼*/
.my_page_btn {
  margin-right: 10%;
}
/*입점신청 버튼*/
.register_company_btn {
  margin-right: .7rem;
}
/* 모바일 메뉴(max-width: 640px) */
.burger_bar {
  display: none;
}
.burger_bar .fa-align-justify{
  display: block;
  float: right;
  margin-right: 5%;
  margin-top: 4px;
  color: #e0685c;
  font-size: 2.5rem;
  text-align: right;
  position: relative;
}
.mb_main_menu {
  display: none;
  background: rgba(51, 51, 51, 0.97);
  width: 100%;
  position: absolute;
  top: 44px;
}
.mb_main_menu li a{
  display: block;
  width: 100%;
  color: #ecf0f1;
  padding: .5rem 0;
  text-align: center;
  text-decoration: none;
  letter-spacing: .1rem;
}
.mb_main_menu li a:hover {
  background: #000;
  color: #fff;
}
/*검색폼*/
.search_region_form {
  width: 60%;
  margin: 0 auto;
  text-align: center;
  padding: 10rem 0 4rem 0;
}
.search_region_form p {
  padding: 5rem 0 2rem 0;
  color: #ecf0f1;
  font-weight: 700;
  font-size: 1.5rem;
}
#search_bar {
  text-align: center;
  width: 70%;
  height: 3rem;
  padding-left: 2rem;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
}
.search_btn {
  width: 8%;
  height: 3rem;
  vertical-align: top;
  background: #E74C3C;
  color: #fff;
  border: none;
  font-size: 0.8rem;
  border :1px solid #E74C3C;
  border-radius: 0 5px 5px 0;
  outline: none;
}
.fa.fa-search {
  font-size: 1.4rem;
  color: #ecf0f1;
}
/* 메인 네비게이션 */
.gnb {
  position: relative;
  padding: .5rem 0;
  overflow: hidden;
  z-index: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.19);
}
.gnb::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: content-box;
    background-color: hsla(0, 0%, 100%, 0.1); 
    box-shadow: 0 4px 10px #333;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    transform: scale(1.4);
}
.main_menu {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.main_menu li {
  width: 20%;
  text-align: center;
}
.main_menu li a {
  display: inline-block;
  width: 60%;
  padding: .3rem 0;
  text-decoration: none;
  white-space: nowrap;
  color: #ecf0f1;
  font-size: .9rem;
  transition: all .3s ease-in-out;
  position: relative;
}
/* 호버 효과 */
.main_menu li a::after,
.my_page_btn::after,
.register_company_btn::after {
  content: '';
  position: absolute;
  transition: all .5s ease-in-out;
  height: 3px;
  bottom: 0;
  left: 50%;
  right: 50%;
  background: #ecf0f1;
}
.main_menu li a:hover::after,
.my_page_btn:hover::after,
.register_company_btn:hover::after {
  right: 0;
  left: 0;
}

@media screen and (max-width: 640px) {
  /*메인페이지 헤더*/
  .main_header{
    display: block;
  }
  .nav_top {
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .logo {
    position: absolute;
    margin-left: -5%;
    width: 5rem;
    height: 5rem;
    top: -16px;
    padding: 0;
    z-index: 100;
  }
  .logo a img {
    width: 100%;
    padding: .5rem;
    margin: 10px 0 0 0;
  }
  /*모바일 메뉴*/
  .burger_bar {
    display: block;
  }
  .burger_bar .fa-align-justify{
    display: block;
    float: right;
    margin-right: 5%;
    margin-top: 4px;
    color: #e0685c;
    font-size: 2.5rem;
    text-align: right;
    position: relative;
  }
  .gnb,
  .my_page_btn,
  .register_company_btn {
    display: none;
  }
}
</style>