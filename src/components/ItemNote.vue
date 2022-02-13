<template>
  <div>
    <div class="item">
      <div>
        <h5>{{data.title}}</h5>
      </div>
      <div class="">
        <div class="borderless"></div>
      </div>
      <div>
        <p>{{desription}}</p>
        <p class="date">{{date}}</p>
      </div>
      <div class="footer">
        <button @click="edit" class="btn primary">Edit</button>
        <button @click="remove" class="btn secondary">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props: {
    data: {
      id: {
        type: String
      },
      title: {
        type: String
      }
    }
  },
  data(){
    return{}
  },
  methods: {
    remove(){
      this.$store.commit('removeNote', this.$props.data.id)
    },
    edit(){
      this.$store.commit('editNote', this.$props.data.id)
    }
  },
  computed: {
    date(){
      var date = new Date(this.$props.data.createdAt)
      var dateToString = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
      return dateToString
    },
    desription(){
      if(this.$props.data.note.length >= 100){
        return this.$props.data.note.slice(0, 100) + '...'
      }else{
        return this.$props.data.note
      }
    }
  }
}
</script>