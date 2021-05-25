<template>
  <div class="nav">
    <nav>
      <ul>
        <li v-for="accident in events" :key="accident.title" v-bind:class="{ 'active-tab': selectedAccident == accident }"
           @click="getOneAccident(accident.id); selectedAccident = accident;">
          {{ accident.title }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import "./nav.css";
import { mapState, mapActions } from "vuex";
export default {
  name: "Nav",
  created() {
    this.$store.dispatch("events/getAllEvents");
    this.selectedAccident =this.events[0]
  },
  data: function () {
    return {
      selectedAccident: "",
    };
  },

  
  methods: mapActions("events", ["getOneAccident"]),
  computed: mapState({
    events: (state) => state.events.all,
  }),
};
</script>





 