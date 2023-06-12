<template>
  <div class="home">
    <div v-if="questions.length">
      <div v-for="questionItem in filteredProjects">
        <questionItem @delete="handleDelete" :questionItem="questionItem"></questionItem>
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
    }
  },
  mounted() {
    fetch('http://localhost:3000/exams')
        .then(res => res.json())
        .then(data=> this.questions = data)
        .catch(err => console.error(err.message))
    console.log('this.questions',this.questions)
  },
  methods: {
  },
  computed:{
    filteredProjects(){
      return this.questions
    }
  },
}
</script>
