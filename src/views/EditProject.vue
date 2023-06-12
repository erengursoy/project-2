<template>
  <div>
    <h3>Edit Project</h3>
    <form  @submit.prevent="handleSubmit">
      <div>
        <label>
          Soru:
        </label>
        <input  v-model.trim="question" required type="text">
      </div>

      <div v-for="(answerItem,index) in answers">
        <label>
          Soru Şıkkı {{ index + 1 }}
        </label>
        <input  v-model.trim="answerItem.answer" required type="text">
        <!--        <label>
                  Cevap
                </label>
                <input v-model="answerItem.isTrue" required type="text">-->
      </div>
      <label>
        Cevap:
      </label>
      <select v-model="selectedOption" @change="answersChange($event)" name="answers" id="answers">
        <option v-for="(answerItem, index) in options" :value="index">{{ answerItem.answer }}</option>
      </select>
      <div>
        <label>
          İmage:
        </label>
        <input  v-for="imageItem in  image" v-model.trim="imageItem.path">
      </div>
      <button>
        Add Project
      </button>
    </form>
  </div>

</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      exams: [],
      selectedOption: null,
      title: "",
      details: "",
      uri: 'http://localhost:3000/exams/' + this.$route.query.examId,
      editUrl: 'http://localhost:3000/exams/' + this.$route.query.examId,
      question: '',
      image: [
        {
          path: ''
        }
      ],
      answers: [
        {
          answer: '',
          isTrue: '',
        },
        {
          answer: '',
          isTrue: '',
        },
        {
          answer: '',
          isTrue: '',
        },
        {
          answer: '',
          isTrue: '',
        }
      ],
      options: [
        {
          answer: 'A'
        },
        {
          answer: 'B'
        },
        {
          answer: 'C'
        },
        {
          answer: 'D'
        },

      ]
    }

  },
  mounted() {



  },
  methods: {
   /* formAction(){
     console.log('eren',this.answers)
    },*/
    answersChange(value) {
      console.log('eren', this.selectedOption)
      for (let index in this.options) {
        if (event.target.value === index) {
          this.answers[index].isTrue = true
          this.answers.forEach((item) => {
            item.isTrue = false
            if (item.isTrue == false) {
              this.answers[index].isTrue = true
              console.log('item', item)
            }
          })
        }
      }
    },
    handleSubmit() {
    setTimeout(() => {
      fetch('http://localhost:3000/exams/', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},

      }).then(response => response.json())
          .then(data => {
            this.exams = data[this.$route.query.examId -1].questions;
            this.exams[this.$route.query.id].question = this.question
            this.exams[this.$route.query.id].answers = this.answers
            this.exams[this.$route.query.id].image = this.image
           /* console.log('this.exams[this.$route.query.id]', this.answer)*/
          })
    },100)

      setTimeout(() => {
            fetch(this.editUrl, {
         method: 'PATCH',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({questions: this.exams}),
       })
           .then((data) => console.log('editUrl',data))
           .then(() => this.$router.push('/Exams'))
           .catch(err => console.log(err))
      }, 200)


    },
  },
  created() {
    fetch(this.uri)
        .then((res) => res.json())
        .then((data) => {
          let selectedItem = data.questions.find(x => x.id === parseInt(this.$route.query.id))

  /*                console.log('seçilen soru',data.questions.find( x => x.id === parseInt(this.id)))*/
    /*      console.log('id', this.id)*/
          this.question = selectedItem.question;
          this.answers = selectedItem.answers;
          this.image = selectedItem.image;
          this.selectedOption = selectedItem.answers
          console.log('answer',data.questions[this.$route.query.id].answers)
          console.log('answers',selectedItem.answers)
          const trueIndex = this.answers.findIndex(item => item.isTrue === true);

          console.log('trueIndex',trueIndex);
          this.selectedOption = trueIndex;
        })


  },
  watch :{
    question(){
     /* console.log('exams[this.$route.query.examId -1].questions[this.$route.query.id].question',this.exams[this.$route.query.examId -1].questions[this.$route.query.id].question)
      console.log('en5',this.exams[this.$route.query.examId -1].questions)*/
   /*   console.log('answers',this.answers)
      console.log('question',this.question)
      console.log('image',this.image)*/
    }

  }
}
</script>
<style>
form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  border: 2px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}

form button {
  display: block;
  margin: 20px auto 0;
  background: #76dd78;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 9px;
  font-size: 16px;
  cursor: pointer;
}
</style>
