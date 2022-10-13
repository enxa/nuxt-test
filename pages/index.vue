<script setup>
  const { data: posts, pending, refresh, error } = await useLazyFetch('https://jsonplaceholder.typicode.com/posts', {
    pick: []
  })

  const first = useFirst()
</script>

<template>
  <section>
    Posts:
    <Nav />

    <div v-if="pending">
      Pending...
    </div>

    <div v-else>
      <ul v-for="post in posts" :key="post.id">
        <li>{{post.title}}</li>
      </ul>
    </div>

    <div v-if="error">
      {{error.message}}
    </div>

    <button @click="() => refresh()">Refresh</button>
    <button @click="() => refreshNuxtData()">Refresh all</button>

    <hr>

    {{ first }}

    <ContentDoc />
  </section>
</template>
