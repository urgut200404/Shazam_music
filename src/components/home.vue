<!-- <template>
  <div>
    <div class="container"   id="mmmsm"> 
    <vue-particles id="tsparticles"   :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options=option />
  
    </div>

 </div>
</template>
<script setup>
import { ref, onMounted} from "vue";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import particleKonfig from "../particles-config.json"
 
const particlesInit = async engine => {
  //await loadFull(engine);
  await loadSlim(engine);
};
const particlesLoaded = async container => {
  // console.log("Particles container loaded", container);
};


let option = ref(particleKonfig)
 

</script>
<style >
#mmmsm{
  position: absolute !important;
  width: 20% !important;
}
</style> -->





<template>
  <div>
    <div v-for="item in paginatedItems" :key="item.id" class="card">
      <!-- Karta ma'lumotlari -->
      {{ item.id }}
    </div>

    <paginate
      :container-class="'pagination'"
      :page-count="totalPages"
      :click-handler="changePage"
    >
    </paginate>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Paginate from 'vuejs-paginate-next';

const items = ref([
  {"id":0, "name":"a"},
  {"id":1, "name":"a"},
  {"id":2, "name":"a"},
  {"id":3, "name":"a"},
  {"id":4, "name":"a"},
  {"id":5, "name":"a"},
  {"id":6, "name":"a"},
  {"id":7, "name":"a"},
  {"id":8, "name":"a"},
  {"id":9, "name":"a"},
  {"id":10, "name":"a"},
  {"id":11, "name":"a"},
  {"id":12, "name":"a"},
]); // Barcha kardlar
const itemsPerPage = ref(5); // Bitta sahifada ko'rsatiladigan kardlar soni
let currentPage = ref(1); // Joriy sahifa

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return items.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
  return Math.ceil(items.value.length / itemsPerPage.value);
});

const changePage = (pageNumber) => {
  currentPage.value = pageNumber;
};
</script>

<style>
/* Kerakli stil tahrirlari */
</style>
