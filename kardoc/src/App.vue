<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import intro from './components/intro.vue';

export default {
  name: 'app',
  components: {
    intro
  },
  data() {
    return {

    }
  }
}
</script>

<style>
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.7s;
}
.slide-leave {
  opacity: 1;
}
.slide-leave-active {
  animation: slide-out 0.7s; 
}

@keyframes slide-in {
  from {
    transform: translateX(-200px);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
    opacity: 0;
  }
}
</style>
