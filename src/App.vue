<script setup>
import Sidebar from './components/Sidebar.vue'
import Calender from './components/Calender.vue';
</script>

<template class="">
  <div class="flex">
    <Sidebar class=" hidden xl:block w-1/5" />
    <Calender class="w-full" />
  </div>
</template>

<style>
h1 {
  color: white;
  font-size: 2rem;
  font-weight: bold;
}

h2 {
  color: white;
  font-size: 1vw;
}
</style>