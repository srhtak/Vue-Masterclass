
<script>
import sourceData from "@/data.json"
import PostList from "@/components/PostList";
export default {
  components:{
    PostList,
},
  props:{
    id:{
      required:true,
      type:String
    }
  },
  data () {
    return {
      threads : sourceData.threads,
      posts : sourceData.posts,
      newPostText: '',
    }
  },
  computed:{
    thread(){
      return this.threads.find(thread => thread.id === this.id) // also available under this.$route.params
    },
    threadPosts(){
      return this.posts.filter(post => post.threadId === this.id)
    }
  },

}
</script>


<template>
  <div  class="col-large push-top" >

    <h1>{{ thread.title}}</h1>


      <post-list :posts="threadPosts"/>


  </div>



</template>

<style>

</style>