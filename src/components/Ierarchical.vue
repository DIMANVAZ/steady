<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table>
      <tr>
        <th v-for="field in Object.keys(citizens[0])" :key="field">{{field}}</th>
      </tr>
      <tr v-for="citizen in citizens" :key="citizen">
        <td v-for="(value,index) in citizen" :key="value" :class="index" :data-city="cityDetector(citizen)" @mouseover="onHover">{{value}}</td>
      </tr>
    </table>
            <div  id="tooltip"
                  :style="{ top: `${clientY}px`, left: `${clientX}px` }"
                  v-if="show"
                  @mouseout="clear"
            >
              {{ this.detectedCity }} жителей
            </div>
  </div>
</template>

<script>
import cities from '../../public/taskFiles/cities.json';
import citizens from '../../public/taskFiles/updCitizens.json';

/*/!*будем исходить из того, что в массиве groups тип адреса всегда идёт от большего к меньшему.
то есть, страна-> город, город-> улица и т.д.*!/

// 1. Сортируем по алфавиту по полям группы
citizens.sort(function (citiz1, citiz2) {
  for (let i = 0; i < citiz1.groups.length; i++) {
  let res = citiz1.groups[i].name.localeCompare(citiz2.groups[i].name);
    if(res !==0) {
      return res;
    }
  }
})

// 2. Выносим поля группы и их значения в поля горожанина(для удобства доступа)
// citizens.forEach(citizen => {
//   citizen.groups.forEach(group => {
//     citizen[group.type] = group.name
//   })
// })*/

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      cities,
      citizens,
      detectedCity:'',
      show: false,
      clientX: 0,
      clientY: 0
    }
  },
  created(){
    this.fetcher();
  },
  methods: {
    async fetcher(){//---запрос к серверу для получения городов и горожан из БД------
      try{
        let citiesAndCitizens = await fetch('http://127.0.0.1:3003/getCiCi')
            .then(response => response.json())
        this.cities = citiesAndCitizens.cities;
        this.citizens = citiesAndCitizens.citizens;
        console.log(this.citizens)
      } catch(e){ console.error(`Error from Ierarchical.vue/created(): `,e)}
    },
    cityDetector(citizen){
      let match = this.cities.find(city => {
        return city.id === citizen.city_id;
      });
      return [match.name,match.data]
    },
    onHover(e) {
      if(e.target.classList.value === 'name'){
        console.log(e.target.dataset.city)
        this.detectedCity = e.target.dataset.city;
        const { clientX, clientY } = e;
        this.show = true;
        this.clientX = clientX;
        this.clientY = clientY;
      }
    },
    clear(){
      this.show = false;
      this.clientX = 0;
      this.clientY = 0;
      alert('clr')
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
#tooltip {
  border: 1px solid black;
  padding: 5px;
  position: absolute;
  background-color: white;
}

</style>
