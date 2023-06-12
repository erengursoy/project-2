<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>
        Sınav İsmi
      </label>
      <input v-model.trim="name" required type="text">
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
      name:'',
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
          this.answers[index].isTrue = true
          this.answers.forEach((item) =>{
            if(item.isTrue == ''){
              item.isTrue=false
            }
            console.log(item.isTrue)
          })
        }
        if(event.target.value !== 0){
          this.answers[0].isTrue = false;
        }
      }
    },
    handleSubmit(){
      console.log(this.question)
      console.log('this.image[0].path',this.image[0].path)
      let questionItem = {
        name: this.name,
        questions:[]
      }
      fetch('http://localhost:3000/exams', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(questionItem)
      }).then(() =>this.$router.push("/Exams")).catch(err=>console.log(err))

    }
  },
  created(){

    if(this.answers[0].isTrue == ''){
      this.answers.forEach(item=>{
        /*console.log('item',  this.answers[0].isTrue)*/
        item.isTrue = false;
        this.answers[0].isTrue = true;


      })
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
