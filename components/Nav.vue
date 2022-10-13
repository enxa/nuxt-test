<template>
  <section>
    <br>
    <NuxtLink to="https://nuxtjs.org">
      Nuxt website
    </NuxtLink>
    <br>
    <NuxtLink to="/about">
      About page
    </NuxtLink>
    <br>
    <NuxtLink to="/posts/1">
      Post1
    </NuxtLink>
    <br>
    <NuxtLink to="/posts/2">
      Post2
    </NuxtLink>
    <br>
    <ClientOnly>
      <!-- this component will only be rendered on client side -->
      <AuthSignUp />
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </ClientOnly>
    <AuthSignUp />
  </section>
</template>