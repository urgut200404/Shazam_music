<template>
  <div class="container pt-5">

    <div class="spinner-border text-light" id="spinner_uchun7" v-if="!spinner_uchun"></div>
    <carousel :items-to-show="1.5" :wrap-around="true" class="d-none">
      <slide v-for="slide in items" :key="slide">
        {{ slide.id }}
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

    <router-link to="/" class="fs-5 text-light"> <MDBIcon icon="fa fa-chevron-left text-light" icon-style="fas" /> Main Menu</router-link>
    <form>
      <div class="d-flex gap-2 mt-5" id="search_music__form_teplate">
        <select class="form-select" required v-model="select_value">
          <option value="">Davlatni Tanlang</option>
          <option :value="i.locale" v-for="i in davlatlar">{{ i.name }}</option>
        </select>
        <div class="input-group">
          <div class="w-100">
            <input type="search" class="form-control h-100" placeholder="Search Music" v-model="input_value" required>
          </div>
          <MDBBtn type="button" class="btn btn-primary" @click="search_music">
            <i class="fas fa-search"></i>
          </MDBBtn>
        </div>
      </div>
    </form> 

    <div class="df pt-5" id="search_music__form_teplate_cards" style="z-index: 121;">
      <div class="card" style="width: 18rem;" v-for="item in card_listlar">
        <img :src="item.track.images.background" class="card-img-top" alt="Sunset Over the Sea" />
        <div class="card-body p-2">
          <p class="card-text m-0">{{ item.track.subtitle }}</p>
          <p class="card-text m-0">{{ item.track.title }}</p>
          <p class="card-text m-0">{{ item.track.subtitle }}</p>
          <a :href="item.track.url" class="text-primary border-bottom fs-5">Music Link</a>
          <!-- {{ item.track.hub.actions[1].uri }} -->
          <audio :src="item.track.hub.actions[1].uri" controls id="musiqa_uchun"></audio>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { MDBIcon, MDBBtn } from 'mdb-vue-ui-kit';
import { arabic_remix, jaloliddin_A, Sherali_J, leyla } from '../music_sort.js'
import { Search } from '@vicons/ionicons5'; 
import axios from "axios";

let router = useRouter();
let route = useRoute()
let input_value = ref("");
let select_value = ref("");
let spinner_uchun = ref(true)
const items = ref([
  { "id": 0, "name": "a" },
  { "id": 1, "name": "a" },
  { "id": 2, "name": "a" },
  { "id": 3, "name": "a" },
  { "id": 4, "name": "a" },
  { "id": 5, "name": "a" },
  { "id": 6, "name": "a" },
  { "id": 7, "name": "a" },
  { "id": 8, "name": "a" },
  { "id": 9, "name": "a" },
  { "id": 10, "name": "a" },
  { "id": 11, "name": "a" },
  { "id": 12, "name": "a" },
]);
let card_listlar = ref([])
let davlatlar = ref([
  { id: 0, name: "Uzbekistan", locale: "uz-uz" },
  { id: 1, name: "Russian", locale: "ru-ru" },
  { id: 3, name: "English", locale: "eng-eng" },
  { id: 4, name: "Turkie", locale: "tr-tr" },
  { id: 5, name: "China", locale: "chn-chn" },
  { id: 6, name: "Germanie", locale: "gr-gr" },
  { id: 7, name: "Poland", locale: "pl-pl" },
  { id: 8, name: "Arabic", locale: "ar-ar" },
])


let search_music = (async () => {
  let select1 = davlatlar.value.find(el => el.locale == select_value.value);
  if (!select1 || !input_value.value) { alert("Davlatni va Musiqa Nomini toliq kiriting") }
  if (select_value && input_value.value) {
    card_listlar.value = ""
    spinner_uchun.value = false;
    const options = { headers: { "X-RapidAPI-Key": "35d013e542msh34c087a21af9318p13b6afjsnfad04a26bc3f", "X-RapidAPI-Host": "shazam.p.rapidapi.com", }, };
    try {
      axios.get(`https://shazam.p.rapidapi.com/search?term=${input_value.value}&locale=${select_value.value}&offset=0&limit=5`, options)
        .then((res) => {
          card_listlar.value = [...(res.data.tracks.hits)]
          // console.log(res.data);
          spinner_uchun.value = true;
          input_value.value = "";
        })
        .catch((err) => {
          console.log(err);
          alert(err)
          spinner_uchun.value = true
        });
    } catch (error) {
      // alert("tarmoqni tekshiring")
      console.log(error);
      spinner_uchun.value = true
    }
  }
})

const musiqa = onMounted(async () => {
  spinner_uchun.value = false
  const options = { headers: { "X-RapidAPI-Key": "35d013e542msh34c087a21af9318p13b6afjsnfad04a26bc3f", "X-RapidAPI-Host": "shazam.p.rapidapi.com", }, };
  try {
    axios.get(`https://shazam.p.rapidapi.com/search?term=${useRoute().params.id}&locale=uz-uz&offset=0&limit=5`, options)
      .then((res) => {
        card_listlar.value = [...(res.data.tracks.hits)]
        // console.log(res.data);
        spinner_uchun.value = true;
        input_value.value = "";
      })
      .catch((err) => {
        console.log(err);
        alert(err)
      });
  } catch (error) {
    // alert("tarmoqni tekshiring")
    console.log(error);
    spinner_uchun.value = true
  }
})
musiqa()
</script>



<style scoped>
.container {
  position: relative;
}

#spinner_uchun7 {
  position: absolute;
  top: 150px;
  left: 50%;
  z-index: 122;
}
</style>
  