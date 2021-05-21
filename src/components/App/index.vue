<template>
  <div id="app">
   <div class="container">
      <div class="row"> 
          <Nav />
          <AccidentDetails />
          <Comments />
      </div>
    </div>
  </div>
</template>

<script>

import Nav from '../Nav';
import AccidentDetails from '../AccidentDetails';
import Comments from '../Comments';
import './app.css';

export default {
  name: 'App',
  components: {
    Nav,
    AccidentDetails,
    Comments
  }
}
</script>
