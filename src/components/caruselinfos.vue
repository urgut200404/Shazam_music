<template > 
  <div style="background: #242d3d;height: 100vh;" id="umumiy7777777777"> 
    <div class="container pt-5" id="eng_tepa">
        
    <router-link to="/" class="fs-5 text-light"> <MDBIcon icon="fa fa-chevron-left text-light" icon-style="fas" /> Main Menu</router-link>
        <div class="pt-5 " v-for="item in musicArray[$route.params.orin]">
            <section class="d-flex justify-content-around umumiy" id="caruselinfos" v-for="item_child in item[$route.params.id]">
                <div class=" bg-info_mx p-2" style="width: 50%;">
                    <img :src="item_child.images.coverart" alt="" class="bg-info_mx-img"  >
                   
                </div>
                <div class="pt-4 pb-4" id="card_infos" >
                    <div class="" id="infos"><div id="infos_title">Type</div>Music</div>
                    <div class="" id="infos"><div id="infos_title">Title</div>{{item_child.title}}</div>
                    <div class="" id="infos"><div id="infos_title">Subtitle</div>{{item_child.subtitle}}</div> 
                    <div class="" id="infos"><div id="infos_title">Vaqti</div>02-03-2004</div> 
                    <div class="" id="infos"><div id="infos_title">time</div>1:29 m</div> 
                    <div class="" id="infos"><div id="infos_title">Link</div> <a :href="item_child.url">Musiqa toliq Linki</a></div>
                    <div class="infos777" id="infos"><audio src="../assets/music/Jaloliddin-Ahmadaliyev - Hoqon-yagon-(2023).mp3" id="rengtong_uchun" controls></audio></div>
                </div>
            </section>
        </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted} from "vue";
import { arabic_remix, jaloliddin_A, Sherali_J, leyla } from "../music_sort.js";
import { MDBIcon } from "mdb-vue-ui-kit";
let musicArray = ref([[arabic_remix], [jaloliddin_A], [Sherali_J], [leyla]]);

let body = ref(document.body);
// let sharanimatiya = onMounted(async () =>{
//     let miqdor = ref(200);
//     let iii = ref(0);
//     while(iii.value <miqdor.value){
//         let sharcha = ref(document.createElement("i"));
//         sharcha.value.classList.add("sharcha_animation");
//         let size = Math.random()*5;
//         let posx = Math.floor(Math.random()*window.innerWidth);
//         let delay =Math.random()* -20;
//         let duration = Math.random()*25;
//         sharcha.value.style.width=2+size+`px`;
//         sharcha.value.style.left=posx+`px`;
//         sharcha.value.style.animationDelay=1+`s`;
//         sharcha.value.style.animationDuration=1+duration+`s`;
//         // sharcha.value.innerText = `Assalomu alaykum`
//         body.value.appendChild(sharcha.value)
//         iii.value++;
//     }
// })
 
</script>

<style  scoped> 
.infos777{
background:none !important;
}
 
.bg-info_mx {
    height: 500px;
    background: none;
    /* border: solid #2e3041; */
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 70;
}

.bg-info_mx-img {
    width: 100%;
    height: 90%;
    border-radius: 10px;
    outline: solid #383a4c 5px;
  outline-offset: 10px;
}
#card_infos{
    width: 50%;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: solid; */
    position: relative;
    z-index: 71;
}

#card_infos::before{
    content: "";
    position: absolute;
    width: 5px;
    height: 95%;
    background: #1f262f;
    top: 10px;
    left: 45px;
}
#infos{height: 11%; position: relative;color: #cac5c5; display: flex;align-items: center;  border-radius: 5px;
    gap: 10px;background: #20242b;
    border: solid #212935 1px;
}

#infos_title{
    width: 30%;
    height: 100%;
    background: #304156;
    border-radius: 5px 0 0 5px;
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #9eaabd;
    display: flex;
    align-items: center;
    padding-left: 15px;
    position: relative;
    z-index: 12;
}

#infos_title::before{
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background: #304156;
    left: -5px;
    transform: rotate(45deg);
    z-index: 10;
}

#card_infos #infos::before{
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #3c3d53;
    left: -59.8px; 
    top: 25%;
}

  #card_infos #infos:hover::before{
    background: #526480;
    /* color: #3d394a; */
}

 
</style>