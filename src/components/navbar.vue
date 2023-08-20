<template >
    <div  id="Navbar_uchun" class="pt-2">
        <div class="container p-0 ">
            <MDBNavbar expand="lg" light bg="none" container class="border-none shadow-none navbaar">
            <MDBNavbarBrand href="#"><img src="../assets/shazam.svg" class="shazam_777 bg-light" alt="">Shazam Music </MDBNavbarBrand>
            <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent" class="text-light">
            </MDBNavbarToggler>
            <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
                <MDBNavbarNav class="mb-2 mb-lg-0 text-light">
                    <MDBNavbarItem to="/" active>
                        Home
                    </MDBNavbarItem> 
                    <MDBNavbarItem>
                        <!-- Navbar dropdown -->
                        <MDBDropdown class="nav-item" v-model="dropdown1">
                            <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown1 = !dropdown1">Dropdown
                            </MDBDropdownToggle>
                            <MDBDropdownMenu aria-labelledby="dropdownMenuButton" class="">
                                <MDBDropdownItem href="#" class="text-dark">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#" class="text-dark">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#" class="text-dark">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>
                    <MDBNavbarItem :to="{name:'listpages', params:({id:'Jaloliddin Ahmadaliyev'})}">
                        Search Music
                    </MDBNavbarItem>
                </MDBNavbarNav>
                <!-- Search form -->
                <form class="d-flex input-group w-auto">
                    <input type="search" class="form-control" placeholder="Search Music" aria-label="Search"  v-model="search_input"/>
                    <MDBBtn outline="primary" class="text-light" @click="search_music_fung">
                        Search
                    </MDBBtn>
                </form>
            </MDBCollapse>
        </MDBNavbar>
        </div>
    </div>
</template>
<script setup>
import {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdb-vue-ui-kit';
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
let dropdown1 = ref(false);
let collapse1 = ref(false);
let search_input = ref();
let router = useRouter();

let search_music_fung = async()=>{
    if (search_input.value ==null) {alert('Qoshiq nomi yoki Artistni kiriting')}
  if(search_input.value){
    router.push({path:`/listpages/${search_input.value}`})
  }
}
</script>
<style  >
a {
    color: #fff !important;
}


#Navbar_uchun{
    position: sticky !important;
    top: 0 !important;
    z-index: 5;
    backdrop-filter: brightness(20%);
    /* filter: brightness(50%); */
}

.shazam_777{
    width: 50px;
    border-radius: 50%;
}
</style>                                                                                                                                                                       