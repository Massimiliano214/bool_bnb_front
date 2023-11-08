<template>
  <div class="container-fluid"></div>
  <nav class="d-flex justify-content-end">
    <router-link v-if="$route.name !== 'home'" :to="{ name: 'home' }">
      <h4>HOME</h4>
    </router-link>
<p v-if="$route.name !== 'home'" ><h3>|</h3></p>
<router-link v-if="$route.name === 'home.message'" :to="{ name: 'home.show' }">
      <h4> INDIETRO</h4>
    </router-link>
<p v-if="$route.name !== 'home.show'" ><h3>|</h3></p>
<router-link v-if="$route.name === 'home.show'" :to="{ name: 'home.message' }">
      <h4> CONTATTACI</h4>
    </router-link>
<p v-if="$route.name === 'home.show'" ><h3>|</h3></p>
    <a href="http://127.0.0.1:8000/"><h4>BACK-OFFICE</h4></a>
  </nav>
  <router-view> </router-view>
  <footer>
    <nav class="d-flex justify-content-center">
    <router-link v-if="$route.name !== 'home'" :to="{ name: 'home' }">
      <h4>HOME</h4>
    </router-link>
<p v-if="$route.name !== 'home'" ><h3>|</h3></p>
<router-link v-if="$route.name === 'home.message'" :to="{ name: 'home.show' }">
      <h4> INDIETRO</h4>
    </router-link>
<p v-if="$route.name !== 'home.show'" ><h3>|</h3></p>
    <a href="http://127.0.0.1:8000/"><h4>BACK-OFFICE</h4></a>
  </nav>
  </footer>
</template>

<script></script>

<style lang="scss">
@use "./style/general.scss";
nav {
  margin: 15px 15px;
  a {
    text-decoration: none;
    color: black;
    position: relative;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: rgb(122, 122, 199);
      transform: scale(1.1);
      transform-origin: center;
      ::before {
        content: "";
        position: absolute;
        display: inline-block;
        height: 2px;
        width: 100%;
        background-color: red;
        top: 25px;
      }
    }
  }
  p {
    margin-left: 15px;
    margin-right: 15px;
  }
}
footer {
  margin-top: auto;
background-color: black;
color: antiquewhite;
padding: 15px;
a{
  color: antiquewhite;
}
}
</style>
