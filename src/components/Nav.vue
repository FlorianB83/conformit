<template>
  <div class="hello">
    <nav>
      <ul>
        <li>Accident avec Adelle</li>
        <li>Accident avec Amara</li>
        <li>Accident avec Helena</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav{
  overflow-y:scroll;
  height: 100%;
  padding: 3rem;
  background-color: lightgray;
}

li{
  list-style:none;
  padding: 1rem 2rem;
  margin: 1rem 0;
  border: 1px solid darkgrey;
  background-color: white;
}
ul{
  padding: 0;
  }



</style>
