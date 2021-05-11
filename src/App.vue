<template>
  <div id="app">
    <div class="container">
      <div class="wrapper"> 
        <Nav msg="Welcome to Your Vue.js App"/>
        <AccidentDetails />
        <Comments />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import AccidentDetails from './components/AccidentDetails.vue'
import Comments from './components/Comments.vue'

export default {
  name: 'App',
  components: {
    Nav,
    AccidentDetails,
    Comments
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
.container{
  width: 80vw;
 
  margin: auto;
}
.wrapper{
  display: flex;
  justify-content: space-between;
  }

</style>
