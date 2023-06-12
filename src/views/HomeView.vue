<template>
  <div class="home">

    <div v-if="questions.length">
      <div v-for="questionItem in questions">
        <questionItem :questionItem="questionItem"></questionItem>
      </div>
    </div>
    <p>datanın gelmesi için json-server --watch ./data/db.json
      çalıştır</p>
    </div>
</template>

<script>
import questionItem from '../components/questionItem'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'HomeView',
  components: {questionItem,FilterNav},
  data() {
    return{
      questions:[],
      current:'all',
      questionsData:[]

    }
  },
  mounted() {
    fetch('http://localhost:3000/exams/' + this.$route.params.id, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},

    }).then(response => response.json())
        .then(data => {
          // Mevcut veriyi alırken başarılı olduysa yeni soruyu ekleyin
          this.questions = data.questions;
           console.log('questions',this.questions.questions)
        })
  },
  methods: {
   /* handleDelete(id){
      this.questions = this.questions.filter((questionItem) => questionItem.id !== id)
    },
    handleCompled(id){
      console.log(id)
      let p=this.questions.find((questionItem) => questionItem.id === id)
      p.completed=!p.completed
    }*/

  },
  /*computed:{
    filteredProjects(){
      if (this.current === 'complated'){
        return this.questions.filter((questionItem) => questionItem.completed)
      }
      if (this.current === 'ongoing'){
        return this.questions.filter((questionItem) => !questionItem.completed)
      }
      return this.questions
    }
  },*/
}
</script>
