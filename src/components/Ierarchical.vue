<template>
  <div class="main_container">
    <h1>{{ msg }}</h1>
    <table class="main_table">
      <tr>
        <th v-for="field in Object.keys(citizens[0])" :key="field">{{field}}</th>
      </tr>
      <tr v-for="citizen in citizens" :key="citizen">
        <td v-for="(value,index) in citizen" :key="value" :class="index" :data-city="cityDetector(citizen)" @mouseover="onHover">{{value}}</td>

      </tr>
      <div  id="tooltip"
            :style="{ top: `${vertPos}px`, left: `${horizPos}px` }"
            v-if="show"
            @mouseout="clear"
      >
        {{ this.detectedCity }} жителей
      </div>
    </table>

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
      horizPos: 0,
      vertPos: 0
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
        //console.log(this.citizens)
      } catch(e){ console.error(`Error from Ierarchical.vue/created(): `,e)}
    },
    //определем город по совпадению id города и city_id жителя
    cityDetector(citizen){
      let match = this.cities.find(city => {
        return city.id === citizen.city_id;
      });
      return [match.name,match.data]
    },
    //при наведении мыши, если у элемента класс = "name", покажем тултип
    onHover(e) {
      if(e.target.classList.value === 'name'){

        this.detectedCity = e.target.dataset.city;
        const { pageX,pageY } = e;

        this.show = true;
        this.horizPos = pageX;
        this.vertPos = pageY;
      }
    },
    //скрыть тултип
    clear(){
      this.show = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_container{
  display:flex;
  flex-direction: column;
  align-items: center;
}

.main_table{

}

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
