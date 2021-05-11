<template>
  <div class="content-comments">
    <h3>{{ msg }}Commentaires</h3>
    <div class="comments">
      <div class="cards">
        <div class="card">
            <div class="icons">
                <i class="fas fa-pen"></i>
                <i class="fas fa-trash-alt"></i>
            </div>
         
            <div class="content">
               <i class="fas fa-user-circle"></i>
                <div class="comment">
                    <h5>jean Valjean</h5>
                    <p>Océane est arrivée il y a seulement 3 mois</p>
                </div>
            </div>
            <span class="date">10 janvier 2015</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.comments{
 overflow-y:scroll;
 height: 100%;
  padding: 3rem;
  background-color: lightgray;
}

.card{
    background-color: white;
    border: 1px solid darkgray;
    margin: 2rem 0;
    padding: 2rem;
    position: relative;
}

.icons{
    position: absolute;
    right: 0;
    top:0;
    }
.icons i{
    padding: 5px;
    }

.date{
     position: absolute;
    right: 0;
    bottom:0;
    padding: 10px;
    font-size: 0.8rem;
}

.content{
    display: flex;
}

.comment{
    text-align: left;
}

h5{
    margin: 0;
}

.fa-user-circle{
    width:20%;
    height: auto;
    font-size: 3rem;
    padding: 1rem;
}

.fa-trash-alt{
    color: red;
}

.fa-pen{
    color:aquamarine;
}
</style>
