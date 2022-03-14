<template>
  <div class="main_container">
    <h1>{{ msg }}</h1>
    <details>
      <summary class="all_cities_summary">Города</summary>
      <details class="city_details" v-for="city in Object.keys(this.structured)" :key="city">
        <summary class="city_summary">{{ city }}</summary>

        <details class="district_details" v-for="district in Object.keys(this.structured[city])" :key="district">
          <summary class="district_summary">{{ district }}</summary>

          <details class="street_details" v-for="street in Object.keys(this.structured[city][district])" :key="street">
            <summary class="street_summary" >{{ street }}</summary>

            <div class="citizen_div"
                 v-for="citizen in this.structured[city][district][street]"
                 :key="citizen"
                 :data-city="city"
                 @mouseover="onHover"
                 @mouseout="clear">
              {{ citizen }}
              <div  id="tooltip"
                    :style="{ top: `${vertPos}px`, left: `${horizPos}px` }"
                    v-if="show"
              >
                {{this.tooltip}}
              </div>
            </div>


          </details>
        </details>
      </details>
    </details>

  </div>
</template>

<script>
import cities from '../../public/taskFiles/cities.json';
import citizens from '../../public/taskFiles/updCitizens.json';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      cities,
      citizens,
      structured:{},
      tooltip:'',
      show: false,
      horizPos: 0,
      vertPos: 0
    }
  },
  created(){
    this.fetcher();
  },
  updated() {

  },
  methods: {
    async fetcher(){//---запрос к серверу для получения городов и горожан из БД------
      try{
        let citiesAndCitizens = await fetch(
            //'http://127.0.0.1:3003/getCiCi' // - локальный адрес при запуске с локалхостА
            'https://steadyserv2.herokuapp.com/getCiCi' // - удалённый сервер на Хероку
        )
            .then(response => response.json())
        this.cities = citiesAndCitizens.cities;
        this.citizens = citiesAndCitizens.citizens;

        this.sortAndChange();
        this.structuring();
      } catch(e){ console.error(`Error from Ierarchical.vue/created(): `,e)}
    },
    //функция сортировки
    sortAndChange(){
      this.citizens.sort(function (citiz1, citiz2) {
        for (let i = 3; i < Object.values(citiz1).length; i++) {
          let res = Object.values(citiz1)[i].localeCompare(Object.values(citiz2)[i]);
          if(res !==0) {
            return res;
          }
        }
      })
    },

    // преобразование массива горожан в структурированный объект {cities:{districts:{streets:{names:{}}}}}
    // надо бы отрефакторить...
    structuring(){
      let str = this.structured;
      this.citizens.forEach(citizen => {
        if(str[citizen.city] === undefined){
          str[citizen.city] = {}
        } else {
          if(str[citizen.city][citizen.district] === undefined){
            str[citizen.city][citizen.district]={}
          } else {
            if(str[citizen.city][citizen.district][citizen.street] === undefined){
              str[citizen.city][citizen.district][citizen.street]=[]
            } else {
                str[citizen.city][citizen.district][citizen.street].push(citizen.name)
            }
          }
        }
      })
      //console.log(this.structured)
      //console.log(Object.keys(this.structured))
    },

    //при наведении мыши, если у элемента класс = "name", покажем тултип
    onHover(e) {
      let city = e.target.dataset.city;

      let trueCity = this.cities.find(nextCity => {
        return nextCity.name.indexOf(city.slice(0, 5)) >= 0
      });

      this.tooltip = `${trueCity.name}, ${trueCity.data} жителей`

      const {pageX, pageY} = e;

      this.show = true;
      this.horizPos = pageX;
      this.vertPos = pageY;

    },
    //скрыть тултип
    clear(){
      this.tooltip = '';
      this.show = false;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all_cities_summary{
  margin:5px;
  color:orangered;
}
.city_summary{
  color:forestgreen;
}
.district_summary{
  color:dodgerblue;
}
.street_summary{
  color:lightcoral;
}

.citizen_div{
  font-style:italic;
  margin:10px;
}

details{
  text-align:left;
  margin-top:10px;
  margin-left:20px;
}

.main_container{
  display:flex;
  flex-direction: column;
  align-items: center;
}

.main_table{
  margin-top:30px;
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

td{
  border:1px dashed blue;
  padding: 5px;
}

</style>
