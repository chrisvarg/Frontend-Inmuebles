<template>
  <div id="app" class="app">
    
    <div class="header">
      <div class="header__container">
        <a href="">
          <figure class="header__logo">
            <img src="./assets/logo.svg" alt="" class="logo__image">
          </figure>
        </a>
        <div class="header__menu">
          <nav class="menu__container">
            <ul class="menu__list">
              <li class="menu__items"><a href="">Home</a></li>
              <li class="menu__items"><a href="">Servicio</a></li>
              <li class="menu__items"><a href="">Nosotros</a></li>
              <li class="menu__items"><a href="">Contáctanos</a></li>
            </ul>
          </nav>
        </div>
        <div class="header__sessions">
          <a href="" class="buttom">Iniciar Sesion</a>
          <button v-if="is_auth" class="buttom"></button>
          
          <a href="" class="buttom">Registrate</a>


          <figure class="sessions__photo">
            <!-- <img src="./assets" alt=""> -->
          </figure>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data: function(){
  }, 

  methods: {
  },
  
  created: function(){
  }

}
</script>


<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background-color: #101013;
    font-size: 62.5%;
    font-family: "Lato", sans-serif;
    color: #FFFFFF;
  }

  body {
    margin: 0 0 0 0;
  }
  
  p {
    font-size: 1.6rem;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
  }

  .header {
    background-image: url("./assets/baneer.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 58rem;
    padding-top: 5rem;
  }

  .header__container {
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-wrap: wrap;
  height: 8rem;
  font-size: 1.6rem;
  justify-content: space-between;
  margin: 0 8rem;
  }
  .header__logo a {
    height: 100%;
  }
  .header__menu {
    font-weight: bold;
    height: 4rem;
  }
  .header .menu__container {
    height: 100%;
  }
  .header .menu__list {
    display: flex;
    align-items: center;
    list-style: none;
    height: 100%;
  }
  .header .menu__items a {
    padding: 1rem 1.5rem;
  }
  .header .menu__items a:hover {
    background-color: #171E27;
    border-radius: 1.5rem;
  }
  .header__sessions {
    display: flex;
    align-items: center;
  }
  .header .buttom {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 2.5rem;
    color: black;
    font-size: 1.3rem;
    font-weight: bold;
    margin-right: 1rem;
    padding: 1.5rem 1rem;
    text-align: center;
    width: 10rem;
  }
  .header .buttom:hover {
    background-color: #171E27;
    color: #FFFFFF;
  }
  .header .sessions__photo {
    width: 4.7rem;
    height: 4.7rem;
  }
  .header .sessions__photo img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
