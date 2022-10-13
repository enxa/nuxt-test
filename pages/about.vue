<script setup>
  definePageMeta({
    layout: "another",
  });

  const title = ref('Best about page ever')

  useHead({
    script: {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.2/gsap.min.js',
      body: true
    }
  })

  const counter = useInterval(200)
  
  watchEffect(() => {
    console.log(counter.value)
  })
</script>

<template>
  <section>
    <Head>
      <Title>{{title}}</Title>
    </Head>
    <Nav />
    <button @click="setPageLayout('different')">Update layout</button>

  </section>
</template>