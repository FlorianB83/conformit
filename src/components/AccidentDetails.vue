<template>
  <div class="accidentDetails">
    <h1>Accident avec Adelle</h1>
    <span>Crée le 2008-03-30 à 5h15 par Kristin</span>
    <h3>Titre</h3>
    <input value="Accident avec Adelle">

    <h3>Description</h3>
    <textarea name="" id="" cols="30" rows="5"></textarea>
    <div class="schedule">
        <div class="date">
          <h3>Date</h3>
            <input value="2008-03-30">  
        </div>
        <div class="heure">
            <h3>Heure</h3>
            <input value="05:13">
        </div>
        
    </div>

    <h3>Nom du status</h3>
      <select v-model="selected">
            <option disabled value="">Choisissez</option>
            <option>Ouvert</option>
            <option>Fermé</option>
        </select>

    <h3>Employé impliqué</h3>
        <select v-model="selected">
            <option disabled value="">Choisissez</option>
            <option>Adelle Thornburg (1868)</option>
            <option>Amara Toto (1928)</option>
            <option>Helena Titi (1478)</option>
        </select>

    <h3>Témoins</h3>
     <div>
     <Multiselect
      v-model="value"
      mode="tags"
      placeholder="Select your characters"
      :options="options"
      :search="true"
    />
  </div>
  </div>
</template>

<script>
import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'
export default {
  name: 'AccidentDetails',
  props: {
    msg: String
  },
 components: {Multiselect},
    data() {
      return {
        value: [],
        options: ['Batman', 'Robin', 'Joker']
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>

.schedule{
    display: flex;
    margin: 1rem 0;
}

input, textarea, select{
    width:100%;
    padding: 0.5rem;
}

h3, h1{
    margin-bottom: 5px;
}
.accidentDetails{
    text-align: left;
}
.date{
    padding-right: 2rem;
}
</style>
