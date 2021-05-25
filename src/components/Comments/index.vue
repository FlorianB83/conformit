<template>
    <div class="col-4">
      <div class="content-comments">
        <h3>Commentaires</h3>
        <div class="comments">
          <div class="cards">
            <div class="card"
            v-for="comment in comments"
            :key="comment.creationDate" >
                <div class="icons">
                      <button v-if="!editing" @click="editComment(editing)" class="fas fa-pen"></button>
                      <button v-if="editing"  @click="editComment(editing)" class="fas fa-check"> Valider</button>
                      <button @click="removeComment(comment.creationDate)" class="fas fa-trash-alt"></button>
                </div>
                <div class="content">
                  <i class="fas fa-user-circle"></i>
                    <div class="comment">
                        <h5>{{comment.author}}</h5>
                         <div v-if="editing">
                        <input v-model="comment.content">
                      </div>
                       <p v-else>{{comment.content}}</p>
                  </div>
                </div>
                <span class="date">{{comment.creationDate  | moment(" MMMM Do YYYY")}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import './comments.css';
import { mapState, mapActions} from "vuex";

export default {
  
  name: 'Comments',
  computed: mapState({
    comments: (state) => state.events.comments,
    editing : (state) => state.comments.editing
  }),
methods: {
  ...mapActions('events', ['removeComment']),
  ...mapActions('comments', ['editComment']),

}
 
  
}
</script>

