<template>
<!--  <div :class="{active:questionItem.completed}" class="questionItem">
    <div class="actions">
      <h3  @click="changeDetail()">{{questionItem.question}}</h3>
      <div class="icons">
    <router-link :to="{name:'EditProject', params:{id:questionItem.id}}">
      <span class="material-symbols-outlined">edit</span>
    </router-link>
        <span @click="deleteProject" class="material-symbols-outlined">delete</span>
        <span :class="{active:questionItem.completed}" @click="toggleComplete" class="material-symbols-outlined">done</span>
      </div>
    </div>
    <div v-for="answerItem in questionItem.answers" v-if="showDetails" class="details">
      <p>{{answerItem.answer}}</p>
      <p>{{answerItem.isTrue}}</p>
    </div>
  </div>-->
    <div  class="questionItem">
    <div class="actions">
      <h3 v-if="questionItem.question" @click="nameClick()">{{questionItem.question}}</h3>
      <h3 v-if="questionItem.name" @click="nameClick()">{{questionItem.name}}</h3>
      <div class="icons">

      <span v-if="questionItem.question" class="material-symbols-outlined" @click="editProject()">edit</span>

        <span  v-if="questionItem.name" @click="questionAdd()" class="material-symbols-outlined">add</span>
<!--        <span :class="{active:questionItem.completed}" @click="toggleComplete" class="material-symbols-outlined">done</span>-->
      </div>
    </div>
      <div v-if="questionItem.answers">
        <div v-for="answerItem in questionItem.answers" v-if="showDetails" class="details">
          <p>{{answerItem.answer}}</p>
          <p>{{answerItem.isTrue}}</p>
        </div>
      </div>
      <div v-if="questionItem.questions">
        <div v-if="showDetails" class="details">
       <div>

       </div>
        </div>
      </div>

  </div>
</template>

<script>
import HomeView from '../views/HomeView'
export default {
  name: 'HelloWorld',
  components: {HomeView},

  props:['questionItem'],
  data(){
    return{
      showDetails: false,
      uri: 'http://localhost:3000/questions/' + this.questionItem.id,
    }
  },
  methods:{
    nameClick(){
      this.showDetails = !this.showDetails
      console.log('this.questionItem',this.questionItem.id)
      if(this.questionItem.name){
        this.$router.push("/" + this.questionItem.id)
      }

    },
    questionAdd(){
   /*   fetch(this.uri, {method: "DELETE",}).then(()=>
          this.$emit('delete', this.questionItem.id)
      ).catch(err =>console.log(err))*/
      this.$router.push("/AddProject/" + this.questionItem.id)




    },
    editProject() {
      console.log('quesrtion id ',this.questionItem)
/*      return*/
      this.$router.push({
        name: 'EditProject',
        query: {
          examId: this.$route.params.id,
          id: this.questionItem.id
        }
      })
    },
   /* toggleComplete(){
      fetch(this.uri, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({completed:!this.questionItem.completed})
      }).then(()=>
          this.$emit('completed', this.questionItem.id)
      ).catch(err =>console.log(err))
    }*/
  },
 /* mounted() {
    fetch('http://localhost:3000/questions')
        .then(res => res.json())
        .then(data=> this.questions = data)
        .catch(err => console.error(err.message))
  },*/

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.questionItem{
  margin: 20px auto;
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
  border-left: 4px solid #ff5500;
}
.questionItem.active{
  border-left: 4px solid #76dd78;
}
h3{
  cursor: pointer;
  font-size: 0.9rem;
}
.actions{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-symbols-outlined{
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-symbols-outlined.active{
  color: #76dd78;
}
.material-symbols-outlined.active:hover{
  color: #76dd78;
}
.material-symbols-outlined:hover{
  color: #777;
}
</style>
