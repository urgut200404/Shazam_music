<script setup>

</script>

<template id="app">
  <router-view v-slot="{ Component, route }">
    <transition name="slide-fade" mode="out-in" :duration="400">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<style  >

.router-link-exact-active {
  border-bottom: solid 2px rgb(218, 142, 0) !important;
  border-radius: 0;
  color: rgb(255, 255, 255) !important;
  font-weight: 700 !important; 
}


.slide-fade-enter-active {
  transition: all .4s ease-out;
}
 
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  opacity: 0;
}

.slide-fade-leave-to {
  opacity: 0;
}
</style>
