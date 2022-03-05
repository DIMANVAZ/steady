<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table>
      <tr>
        <th v-for="group in citizens[0].groups" :key="group">{{group.type}}</th>
        <th> Имя</th>
      </tr>
      <tr v-for="citizen in citizens" :key="citizen">
        <td v-for="group in citizen.groups" :key="group">{{group.name}}</td>
        <td @mouseover="onHover">{{citizen.name}}</td>
        <div
            id="tooltip"
            :style="{ top: `${clientY}px`, left: `${clientX}px` }"
            v-if="show"
            @mouseout="show = false"
        >
          {{ citizen.city_id }}
        </div>
      </tr>
    </table>
  </div>
</template>

<script>
import cities from '../../public/taskFiles/cities.json';
import citizens from '../../public/taskFiles/updCitizens.json';

//будем исходить из того, что в массиве groups тип адреса всегда идёт от большего к меньшему.
// то есть, страна-> город, город-> улица и т.д.
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
      citizens:citizens,
      show: false,
      clientX: 0,
      clientY: 0
    }
  },
  methods: {
    onHover(e) {
      const { clientX, clientY } = e;
      this.show = true;
      this.clientX = clientX;
      this.clientY = clientY;
    },
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
#tooltip {
  border: 1px solid black;
  padding: 5px;
  position: absolute;
  background-color: white;
}

</style>
