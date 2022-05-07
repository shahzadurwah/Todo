<template>
  <div class="container-fluid">
    <div class="row justify-content-center p-3 set">
      <div class="col-8 text-center">
        <h2>My Vue To Do App</h2>
      </div>

      <!-- input -->
      <div class="d-flex mb-3">
        <input type="text" placeholder="Write" class="form-control" v-model="task"/>
        <button class="btn btn-warning rounded" @click="onSubmit">Submit</button>
      </div>
      <!-- tabel -->

      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col" class="text-center">#</th>
            <th scope="col" class="text-center">#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task,index) in tasks" :key="task">
            <th scope="row">{{task.name}}</th>
            <td class="pointer">
              <span @click="changeStatus(index)"
              :class="{
                'text-danger':task.status==='To-Do',
                'text-warning':task.status==='In-Progress',
                'text-success':task.status==='Task-Yes'
                }">
                {{task.status}}
              </span>
            </td>
            <td >
              <div class="text-center" @click="editTask(index)">
                <span class="fa fa-pen text-info pointer"></span>
              </div>
            </td>
            <td>
               <div class="text-center"  @click="onDelete(index)">
                <span class="fa fa-trash text-danger pointer"></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      task:'',
      editnull:null,
      availabelStatus:['To-Do','In-Progress','Task-Yes'],
      tasks:[
        {
          name:'This is a fruit',
          status:'To-Do'
        },
        {
          name:'This is a animal',
          status:'To-Do-yes'
        },
        {
          name:'This is a cake',
          status:'To-Do-cake'
        },
      ]
    }
  },
  methods:{
    onSubmit(){
      if(this.task===0)return;
      if(this.editnull===null){
         this.tasks.push({
        name:this.task,
        status:'To-Do'
      });
      }else{
        this.tasks[this.editnull].name=this.task
        this.editnull=null;
      }

      this.task=''
    },
    onDelete(index){
      // alert(index);
      this.tasks.splice(index,1)
    },
    editTask(index){
      this.task=this.tasks[index].name;
      this.editnull=index;
    },
    changeStatus(index){
      let newindex=this.availabelStatus.indexOf(this.tasks[index].status);
      if(++newindex>2){
        newindex=0;
      }
      this.tasks[index].status=this.availabelStatus[newindex];
    }
  }
};
</script>

<style scoped>
.set {
  max-width: 600px;
  margin: 2rem auto;
}
.pointer{
  cursor: pointer;
}
</style>