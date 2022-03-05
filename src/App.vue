<template>
  <img alt="SteadyControl logo" src="./assets/logo.png">
  <Ierarchical msg="Тестовое задание Сунгатуллин А.А."/>
</template>

<script>
import Ierarchical from './components/Ierarchical.vue';

export default {
  name: 'App',
  components: {
    Ierarchical
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
img{
  width:15%;
}
</style>
