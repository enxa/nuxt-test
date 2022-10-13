<script setup>
  const route = useRoute()

  definePageMeta({
    middleware: ["auth"]
  })
</script>

<template>
  <section>
    {{ route.params.id }}
    <Nav />
  </section>
</template>