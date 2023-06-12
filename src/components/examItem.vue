<template>
  <div>
    <h1>eren</h1>
    
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props:['questionItem'],
  data(){
    return{
      showDetails: false,
      uri: 'http://localhost:3000/questions/' + this.questionItem.id,
    }
  },
  methods:{
    changeDetail(){
      this.showDetails = !this.showDetails
    },
  /*  deleteProject(){
      fetch(this.uri, {method: "DELETE",}).then(()=>
          this.$emit('delete', this.questionItem.id)
      ).catch(err =>console.log(err))

    },*/
   /* toggleComplete(){
      fetch(this.uri, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({completed:!this.questionItem.completed})
      }).then(()=>
          this.$emit('completed', this.questionItem.id)
      ).catch(err =>console.log(err))
    }*/
  }

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
