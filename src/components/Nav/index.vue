<template>
    <div class="col-3">
        <nav>
          <ul>
              <li v-for="accident in events" v-bind:class="{ active: isActive }" :key="accident.title" @click="getOneAccident(accident.id)">
                {{ accident.title }}
              </li>
          </ul>
        </nav>
    </div>
</template>

<script>
import './nav.css';
import { mapState,mapActions} from "vuex";

export default {
  name: 'Nav',
  created() {
    this.$store.dispatch("events/getAllEvents");
  },
   methods: mapActions('events', [
    'getOneAccident',
  ]),
  computed: mapState({
    events: state => state.events.all,
  }),
}
</script>

