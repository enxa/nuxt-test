<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Nuxt Test` : 'Nuxt Test';
    }
  })

  const layout = "different";
  </script>

<template>
  <section>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </section>
</template>