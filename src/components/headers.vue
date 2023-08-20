<template >
  <div>
    <Navv />
    <div class="container df ps-0 pe-0 pt-5">
      <div class="w-100">
        <div class="input-group d-none">
          <div class="w-100"><input type="text" class="form-control" placeholder="Search Music" v-model="input_value"></div>
          <button type="button" class="btn btn-primary" @click="search_music">
            <i class="fas fa-search" v-if="spinner_uchun"></i>
            <span class="spinner-border text-light m-auto" v-if="!spinner_uchun" style="font-size: 20px !important;"></span></button>
        </div>

        <div class="click_like d-none ">
          Thank You, from like
        </div>

        <!-- carousel -->
        <div class="pt-5">
          <section v-for="(artest, artindex) in artist_name">
            <h5 class="text-secondary " id="artest_still_name">{{ artest.name }}</h5>
            <carousel :items-to-show="1.5" :wrap-around="true" class="note note-danger  p-0  mb-5 " id="carusel">
              <slide v-for="(slide, index) in carousel_list7[artest.id]" :key="slide" class="w-50">
                <div class="card" id="carusel_card_still">
                  <div class="d-flex w-100 h-100">
                    <div class="w-100 "><img :src="slide.track.images.coverart" :alt="slide.title" class="card-img"></div>
                    <div id="hover_visible_card" class="bg-dark">
                      <div class="h-50">
                        <div class="w-100 bg-dark text-end pe-4">
                          <MDBIcon icon="fas fa-heart" id="liki_Like" class="text-light" icon-style="fas" @click="like_uchun_fung7(index, 'fas fa-heart')" />
                        </div>
                        <p class="card-text m-0"><MDBIcon icon="user" icon-style="fas" /> {{ slide.track.subtitle }}</p>
                        <p class="card-text m-0"><MDBIcon icon="music" icon-style="fas" /> {{ slide.track.title }}</p>
                        <p class="card-text m-0"><MDBIcon icon="pen" icon-style="fas" /> {{ slide.track.share.subject }}</p>
                        <p class="card-text text-center mt-3" id="play_music_icon"> <MDBIcon icon="play" icon-style="fas" @click="carusel_info_fung(artest.name, slide.track.subtitle,  slide.track.title,  slide.track.share.subject, index, artindex)"/>
                        
                        </p>
                      </div>
                      <div class="h-50  pb-4 d-flex gap-4 justify-content-between" style="align-items: end !important; padding-right: 65px;">
                        <p class="m-0"><MDBIcon icon="earth" icon-style="fas" /><sub>11T нравиться</sub></p>
                        <p class="d-flex m-0 gap-2">
                        <p class="m-0"><MDBIcon icon="telegram" icon-style="fab" /></p>
                        <p class="m-0"><MDBIcon icon="youtube" icon-style="fab" /></p>
                        <p class="m-0"><MDBIcon icon="instagram" icon-style="fab" /></p>
                        </p>
                      </div>
                    </div>
                    <div id="play_music_play_child" class="d-none">
                      <p class="card-text text-center mt-3" id="play_music_icon"> <MDBIcon icon="play" icon-style="fas" @click="carusel_info_fung(artest.name, slide.track.subtitle,  slide.track.title,  slide.track.share.subject, index, artindex)"/></p>
                    </div>
                  </div>
                </div>
              </slide>
              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
          </section>
        </div>

        <!-- izlanganlardan -->
        <div class="df p-0 m-0 d-none">
          <div class="card  mb-5" style="width: 18rem;"
            v-for="item in card_listlar">
            <img :src="item.track.images.coverart" class="card-img-top" alt="Sunset Over the Sea" />

            <!-- <p class="card-text m-0">{{ item.heading}}</p> -->
            <p class="card-text m-0">{{ item.track.title }}</p>
            <p class="card-text m-0">{{ item.track.subtitle }}</p>
            <!-- <a :href="item.track.url" class="text-primary border-bottom fs-5">Music Link</a> -->
            <!-- {{ item.track.hub.actions[1].uri }} -->
            <audio :src="item.track.hub.actions[1].uri" controls id="musiqa_uchun"></audio>
          </div>
        </div>
        <!-- {{ card_listlar }} -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Navv from "../components/navbar.vue";
import { useRoute, useRouter } from "vue-router";
import Mainif from "../components/mainif.vue"
import particleKonfig from "../particles-config.json";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import axios from "axios";
import 'vue3-carousel/dist/carousel.css'
import { arabic_remix, jaloliddin_A, Sherali_J, leyla } from '../music_sort.js'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { MDBIcon } from "mdb-vue-ui-kit";
let router = useRouter();

let music7777 = ref(new URL('../assets/music/Jaloliddin-Ahmadaliyev - Hoqon-yagon-(2023).mp3', import.meta.url))
let carousel_list7 = ref([...[arabic_remix], ...[jaloliddin_A], ...[Sherali_J], ...[leyla]])
let artist_name = ref([{ id: 0, name: "Arabic Remix" }, { id: 1, name: "Jaloliddin Ahmadaliyev" }, { id: 2, name: "Sherali Jo'rayev" }, { id: 3, name: "Leyla" }])
let option = ref(particleKonfig)
let input_value = ref("");
let spinner_uchun = ref(true)
let card_listlar = ref([])
let iconColor = ref("")


let search_music = (async () => {
  spinner_uchun.value = false;
  const options = {
    headers: {
      "X-RapidAPI-Key": "35d013e542msh34c087a21af9318p13b6afjsnfad04a26bc3f",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
       
    },
  };

  try {
    axios.get(`https://shazam.p.rapidapi.com/search?term=${input_value.value}&locale=uz-uz&offset=0&limit=5`, options)
      .then((res) => {
        card_listlar.value = [...(res.data.tracks.hits)]

        // localStorage.setItem("music", JSON.stringify(res.data.result.tracks.hits))

        console.log(res.data);
        spinner_uchun.value = true;
        input_value.value = "";
      })
      .catch((err) => {
        console.log(err);
        alert(err)
        spinner_uchun.value = true
      });
  } catch (error) {
    alert("tarmoqni tekshiring")
    spinner_uchun.value = true
  }
})



// const particlesInit = async engine => {
//   //await loadFull(engine);
//   await loadSlim(engine);
// };
// const particlesLoaded = async container => {
//   // console.log("Particles container loaded", container);
// };

// import particlesJS from "../particles-template.js";
// import particlesConfig from "../particles-config.json";
// let ParticleAnimation = onMounted(()=>{
//     particlesJS.load('particles-js', particlesConfig, function() {
//       console.log('callback - particles.js config loaded');
//     });
// })

let like_uchun_fung7 = (async (event, iconname) => {
  let liki_Like = document.querySelectorAll("#carusel")

})  

let carusel_info_fung = (async(typeAr, subtitle, title, subject, index, orin) =>{
  router.push({path:`/carusel/${index}/${typeAr}/${subtitle}/${title}/${subject}/${orin}`})
})
</script>
<style scoped>
.container {
  position: relative;
}

.click_like {
  position: sticky;
  background: #38e480;
  float: right;
  z-index: 4;
  transform: translateY(120px);
  width: 250px;
  border-radius: 10px;
  top: 80px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-group {
  position: sticky;
  top: 3px;
  z-index: 2;
}

.particles-js-canvas-el {
  width: 100% !important;
  height: 100% !important;
  /* object-fit: cover !important;  */

}

#hover_visible_card {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  /* transform: scale(0); */
  /* background: rgb(149, 149, 149); */
  opacity: 85%;
  border-radius: 7px;
  transition: ease 0.2s !important;
  color: #1aa2fc;
  text-orientation: sideways;
  font-size: 20px;
  text-align: start;
  padding-left: 70px;
  font-weight: 600;
  transform: translateY(-100%);
} 
.card:hover #hover_visible_card {
  /* transform: scale(1); */
  transition: ease 0.2s;
  /* height: 100%; */
  transform: translateY(0);
}


#musiqa_uchun {
  border-radius: 0 !important;
  width: 97%;
  height: 40px !important;
}

#card_info {
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  /* justify-content: space-around; */
}

#card_info_child {
  width: 85% !important;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#play_music_icon {
  width: 88%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#play_music_icon i {
  border: solid orangered;
  width: 50px;
  height: 50px;
  z-index: 21;
  border-radius: 50%;
  cursor: pointer !important;
  color: rgb(90, 85, 83);
  background: #e1e3e2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease 0.1s;
  position: relative;
}

#play_music_icon i:is(:hover){
  transform: scale(0.8);
}

#play_music_icon::before{
  content: "";
  cursor: pointer !important;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  outline: 1.7px solid #1aa2fc;
  opacity: 0.8;
  border-radius: 50%;
  outline-offset: 3px;

}


#play_music_icon::after {
  animation-delay: 0.5s !important;
}

.card:hover #play_music_icon::before {
  animation: icon_animation 2s ease infinite;
}

/* .card:hover #play_music_icon::after {
  animation: icon_animation 2s ease infinite;
} */

@keyframes icon_animation {

  0% {
    outline-offset: 0;
    opacity: 1;
  }

  100% {
    outline-offset: 25px;
    opacity: 0;
  }
}


/* Responsive */
@media (max-width: 576px){
  
}
 </style>