<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="text-center my-4">
      <img alt="Vue logo" class="" src="@/assets/logo.svg" width="125" height="125" />
    </div>

    <div class="wrapper">
      <nav class="text-center">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <RouterLink to="/" class="btn btn-outline-primary">Home</RouterLink>
          <RouterLink to="/about" class="btn btn-outline-primary">About</RouterLink>
          <RouterLink to="/services" class="btn btn-outline-primary">Services</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
