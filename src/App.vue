<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="text-center my-4">
      <img alt="Vue logo" class="" src="@/assets/logo.svg" width="300" height="125" />
    </div>

    <div class="text-center">
      <div class="btn-group" role="group">
        <RouterLink to="/" class="btn btn-outline-primary">Home</RouterLink>
        <RouterLink to="/about" class="btn btn-outline-primary">About</RouterLink>
        <RouterLink to="/services" class="btn btn-outline-primary">Services</RouterLink>
      </div>
    </div>

    <RouterView />
  </div>
</template>
