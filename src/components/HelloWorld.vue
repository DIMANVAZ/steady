<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-for="city in cities" :key="city">{{city.name}}</p>
    <p v-for="citizen in citizens" :key="citizen">

    </p>
  </div>
</template>

<script>
import cities from '../../public/taskFiles/cities.json';
import citizens from '../../public/taskFiles/citizens.json';
console.log(citizens)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      cities:cities,
      citizens:citizens
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
