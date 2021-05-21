<template>
  <div class="col-5">
    <div class="accidentDetails padding">
    <h1>{{ accident.title }}</h1>
    <span
      >Créé le dffd à
      fdfd par
  dfd</span
    >
    <h3>Titre</h3>
    <input />

    <h3>Description</h3>
    <textarea
      name=""
      id=""
      cols="30"
      rows="5"
    ></textarea>
    <div class="schedule">
      <div class="scheduleDate">
        <h3>Date</h3>
        <input/>
      </div>
      <div class="heure">
        <h3>Heure</h3>
           <input/>
      </div>
    </div>

    <h3>Nom du status</h3>
    <select>
      <option disabled value="">Choisissez</option>
      <option value="Open">Ouvert</option>
      <option value="Closed">Fermé</option>
    </select>

    <h3>Employé impliqué</h3>
    <select>
    <option disabled value="">Choisissez</option>
      <option value="Open">Ouvert</option>
      <option value="Closed">Fermé</option>
    </select>

    <h3>Témoins</h3>
    <div>
    <!--   <Multiselect
        v-model="value"
        mode="tags"
        placeholder="Select your characters"
        :options="accident.Témoins"
        :search="true"
      /> -->
    </div>
  </div>
  </div>
</template>

<script>
import "./accidentDetails.css";
import { mapState } from "vuex";
export default {
  name: 'AccidentDetails',
/*    mounted() {
       this.$nextTick(function () {
          this.$store.dispatch("events/getOneAccident", 0);
       })
  }, */
  computed: mapState({
    accident: (state) => state.events.oneAccident,
  }),
}
</script>
