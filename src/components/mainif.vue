<template  >    

    <div class="container pb-0">
        <div class="card">
            <p class="text-end"><i class="fa fa-list text-light"></i></p>
            <p>
                <MDBBtn class="border" v-for="tarmoq  in connect_me" :key="tarmoq.id"><MDBIcon icon="apple" icon-style="fab"></MDBIcon></MDBBtn>
            </p>
            <p class="text-center"><img src="../assets/userimg.png" alt="" class="w-50" ></p>
             
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'; 
import { MDBBtn, MDBIcon} from 'mdb-vue-ui-kit';


AOS.init();
let connect_me = ref([
    {"id":0, "name":"telegram", "link":"https://t.me/urgut_mx"}, 
    {"id":1, "name":"facebook", "link":"https://facebook.com"},
    {"id":2, "name":"you tube", "link":"https://facebook.com"},
    {"id":3, "name":"instagram", "link":"https://instagram/mavlonberdiyevx"}
])



// const input = document.querySelector("input");
// const parent = document.querySelector(".parent");
// const selectOption = document.querySelector(".perantOption");
// const option = document.querySelectorAll("option");
// input.focus();

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "7009611da7mshda5b1b25e4b96bcp114d27jsncb90c97c6b2a",
//     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//   },
// };
// input.addEventListener("keyup", () => {
//   if (event.code == "Enter") {
//     fetch(
//       `https://shazam.p.rapidapi.com/search?term=${input.value}&locale=en-US&offset=0&limit=408`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         response.tracks.hits.forEach((el) => {
//           parent.innerHTML += `
//           <div class="card">
//            <div class="img"><img src="${el.track.images.background}" alt=""></div>
//           <div class="title">${el.track.subtitle}</div>
//           <div class="desc">${el.track.title}</div>
//           <a href="${el.track.url}">music link</a>
//           </div>
//           `;
//         });
//         console.log(response);
//         input.value = "";
//       })
//       .catch((err) => {
//         input.value = "";
//         console.error(err);
//       });
//   }
// });

</script>

<style  scoped>
    .card{
        background: none;
        height: 200px;
        border: none;
        outline: none;
        box-shadow: none;
    }
</style>