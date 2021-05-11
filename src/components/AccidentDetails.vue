<template>
  <div class="accidentDetails">
    <h1>Accident avec Adelle</h1>
    <span>Crée le 2008-03-30 à 5h15 par Kristin</span>
    <h3>Titre</h3>
    <input value="Accident avec Adelle">

    <h3>Description</h3>
    <textarea name="" id="" cols="30" rows="10"></textarea>
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
    <input value="Ouvert">

    <h3>Employé impliqué</h3>
    <input value="Adelle Thornburg(1868)">

    <h3>Témoins</h3>
    <input value="Mureil">
  </div>
</template>

<script>
export default {
  name: 'AccidentDetails',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.schedule{
    display: flex;
    margin: 1rem 0;
}

input, textarea{
    width:100%;
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
