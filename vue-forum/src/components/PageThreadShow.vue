
<script>
export default {

}
</script>


<template>
  <div class="col-large push-top" >

    <h1>{{ thread.title}}</h1>



    <div class="post-list">


      <div class="post"
           v-for="postId in thread.posts"
           :key="postId">

        <div class="user-info">
          <a href="#" class="user-name">{{userById(postById(postId).userId).name}}</a>

          <a href="#">
            <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="">
          </a>

          <p class="desktop-only text-small">107 posts</p>



        </div>

        <div class="post-content">
          <div>
            <p>
              {{postById(postId).text}}
            </p>
          </div>
        </div>



        <div class="post-date text-faded">
          {{postById(postId).publishedAt}}
        </div>


      </div>

    </div>
  </div>

  <h1>Home Page</h1>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{thread.title}}</h2>
    <div v-for="postId in thread.posts" :key="postId">
      <p>{{userById(postById(postId).userId).name}}</p>
      <p>{{postById(postId).text}}</p>
    </div>
  </div>
</template>



<style scoped>

</style>