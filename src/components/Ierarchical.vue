<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table>
      <tr>
        <th v-for="group in citizens[0].groups" :key="group">{{group.type}}</th>
        <th> Имя</th>
      </tr>
      <tr v-for="citizen in citizens" :key="citizen">
        <th v-for="group in citizen.groups" :key="group">{{group.name}}</th>
        <th>{{citizen.name}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
import cities from '../../public/taskFiles/cities.json';
import citizens from '../../public/taskFiles/updCitizens.json';
citizens.sort(function (citiz1, citiz2) {
  for (let i = 0; i < citiz1.groups.length; i++) {
  let res = citiz1.groups[i].name.localeCompare(citiz2.groups[i].name);
    if(res !==0) {
      return res;
    }
  }
})
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
