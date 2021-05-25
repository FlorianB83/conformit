<template>
  <div class="col-5">
    <div class="accidentDetails padding">
    <h1>{{ accident.title }}</h1>
    <span
      >Créé le {{ accident.creationDate | moment("YYYY-MM-DD") }}  à
      {{ accident.creationDate | moment("HH:mm") }} par
      {{ accident.createdBy }}</span
    >
    <h3>Titre</h3>
   <input v-model="accident.title" />
   

    <h3>Description</h3>
    <textarea
      v-model="accident.description"
      name=""
      id=""
      rows="5"
    ></textarea>
    <div class="schedule">
      <div class="scheduleDate">
        <h3>Date</h3>
           <div class="input-icons">
            <i class="fas fa-calendar-alt"></i>
            <input v-bind:value="moment(accident.creationDate).format('YYYY-MM-DD')" class="input-field" type="text">
        </div>
      </div>
      <div class="heure">
        <h3>Heure</h3>
          <div class="input-icons">
           <i class="fas fa-clock"></i>
            <input v-bind:value="moment(accident.creationDate).format('HH:mm')"  class="input-field" type="text">
        </div>
      </div>
    </div>
    <!-- const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

    let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
    x(names); // 'John', 'Paul', 'George', 'Ringo' -->
    <h3>Nom du status</h3>
    <select  class="round">
      <option selected value="">{{ accident.statusName }}</option>
      <!-- <option v-for="status in statusName.filter((status) => status.statusName != accident.statusName, i).indexOf(status) === i" :key="status.id" >{{status.statusName}}</option> -->
      <option v-for="status in statusName.filter((status) => status.statusName != accident.statusName).slice(0,2)" v-bind:key="status.id" >{{status.statusName}}</option>
    </select>


    <h3>Employé impliqué</h3>
 <!--  <select v-model="accident.involvedEmployeeId" > -->
  <select class="round" >
  <!--     <option value="" selected>
        {{
          employees.filter(
            (employee) => employee.id === accident.involvedEmployeeId
          ).firstname
        }}
        {{
          employees.filter(
            (employee) => employee.id === accident.involvedEmployeeId
          ).lastname
        }}
      </option> -->
         <option  selected v-for=" employee in  employees.filter(
          (employee) => employee.id === accident.involvedEmployeeId)" v-bind:key="employee.id">
        {{
          employee.firstname
        }}
         {{
          employee.lastname
        }}   
      </option>
      
        <option v-for=" employee in  employees.filter(
          (employee) => employee.id != accident.involvedEmployeeId)" v-bind:key="employee.id">
        {{
          employee.firstname
        }}
         {{
          employee.lastname
        }}   
      </option>

  
    </select>

    <h3>Témoins</h3>
        <div class="temoins">
  
  

    <span class=" tags" v-for="Témoin in accident.Témoins" :key="Témoin">{{Témoin}} <i @click="removeTags(Témoin)" class="fas fa-times"></i></span>


  </div>
  </div>
  </div>
</template>

<script>
import "./accidentDetails.css";
import { mapState, mapActions } from "vuex";
import Vue from "vue";
import VueCompositionAPI from '@vue/composition-api'
Vue.use(require("vue-moment"));
Vue.use(VueCompositionAPI)
export default {
  name: 'AccidentDetails',
  mounted() {
       this.$nextTick(function () {
         /*  this.$store.dispatch("events/getOneAccident", 0); */
          this.$store.dispatch("employees/getAllEmployees");
       })
  }, 
  computed: mapState({
    statusName: (state) => state.events.all,
    accident: (state) => state.events.oneAccident,
    employees: (state) => state.employees.all,
    message: state => state.obj.message
  }),

   methods: mapActions('events', [

    'removeTags',
  ]),
  
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>