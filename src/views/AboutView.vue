<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>
        Soru
      </label>
      <input v-model.trim="question" required type="text">
    </div>

    <div v-for="(answerItem,index) in answers">
      <label>
        Soru Şıkkı {{index + 1}}
      </label>
      <input v-model.trim="answerItem.answer" required type="text">
<!--      <label>
        Cevap
      </label>
      <input v-model="answerItem.isTrue" required type="text">-->
    </div>
    <label>
      Cevap:
    </label>
    <select @change="answersChange($event)" name="answers" id="answers">
      <option v-for="(answerItem, index) in options" :value="index">{{ answerItem.answer }}</option>
    </select>
   <div>
     <label>
       İmage:
     </label>
     <input v-model.trim="image[0].path">
   </div>
    <button>
      Add Project
    </button>
  </form>
</template>
<script>
export default{
  data(){
    return{
      title:'',
      details:'',
      currentData:null,
      question:'',
      image:[
        {
          path:''
        }
      ],
      noImage:[
        {
          path: 0
        }
      ],
      answers: [
        {
          answer:'',
          isTrue: '',
        },
        {
          answer:'',
          isTrue: '',
        },
        {
          answer:'',
          isTrue: '',
        },
        {
          answer:'',
          isTrue: '',
        }
      ],
      options:[
        {
          answer:'A'
        },
        {
          answer:'B'
        },
        {
          answer:'C'
        },
        {
          answer:'D'
        },

      ]

    }
  },
  methods:{
    answersChange(value){
      for(let index in this.options){
        if(event.target.value === index){
          console.log('index',index)
          this.answers.forEach((item) => {

              item.isTrue = false

            console.log(item.isTrue)
          })
          this.answers[index].isTrue = true

        }
      }
    },
    handleSubmit(){
      console.log('this.image[0].path',this.image[0].path)



    /*  fetch('http://localhost:3000/exams/' + this.$route.params.id, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(exam)
      }).then(() =>this.$router.push("/")).catch(err=>console.log(err))*/



      fetch('http://localhost:3000/exams/' + this.$route.params.id, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},

      }).then(response => response.json())
          .then(data => {
            const currentData = data;
            this.currentData = currentData
            let questionItem = {
              question: this.question,
              image: this.image[0].path === '' ? this.noImage : this.image,
              answers: this.answers,
              id: currentData.questions.length

            }

            currentData.questions.push(questionItem);
            console.log('currentData.questions',currentData.questions)
            return fetch('http://localhost:3000/exams/' + this.$route.params.id, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(currentData)
            }).then(() =>this.$router.push("/Exams")).catch(err=>console.log(err));
          })

    }
  },
  created(){
      if(this.answers[0].isTrue==''){
        this.answers.forEach(item=>{
          /*console.log('item',  this.answers[0].isTrue)*/
          item.isTrue = false;
          this.answers[0].isTrue = true;
        })
      }

    console.log('item',  this.answers)  }
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
  text-transform:uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input{
  padding: 10px;
  border:0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea{
  border: 2px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button{
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
