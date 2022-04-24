<script>
export default {
  name: "PostEditor",
  data () {
    return {
      text: '',
    }
  },
  methods:{
    save(){
      const postId = 'qqqq' + Math.random()
      const post = {
        id:postId,
        text:this.text,
        publishedAt:Math.floor(Date.now()/1000),
        threadId: this.id,
        userId:'7uVPJS9GHoftN58Z2MXCYDqmNAh2',
      }
      this.$emit('save',{post})
      // this.posts.push(post)
      // this.thread.posts.push(postId)
      this.text = ''
    }
  }
}
</script>

<template>

  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" name="" id="" cols="50" rows="10" class="form-input"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit Post</button>
      </div>
    </form>
  </div>

</template>



<style scoped>

</style>