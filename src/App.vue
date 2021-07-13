<template>
  <div class="main">
    <header class="header">
      <a href="#" class="bigicon"><logo-snapchat-icon class="logo" /><h2 class="word">Tang-Ming</h2></a>
      <ul>
        <li><router-link to="/" active-class="active">Home</router-link></li>
        <li><router-link to="/Done" active-class="active">Todolist</router-link></li>
        <li><router-link to="/Undone" active-class="active">Undone</router-link></li>
        <li><router-link to="/Add" active-class="active">Add</router-link></li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
#app {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(#2b1055,#7597de);
}
.header{
  position: absolute;
  top:0;
  left:0;
  width: 90%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index:10000;

  .logo {
    flex-basis: 10%;
    fill: #fff;
    width:20%;
    font-size: 3em;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      margin-left: 20px;

      a{
        text-decoration: none;
        padding: 6px 15px;
        color:#fff;
        border-radius: 20px;

        &:hover,&.active {
          color:#2b1055;
          background: #fff;
        }
      }
    }
  }
  .bigicon {
    width:30%;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .word {
    flex:1;
    font-size: 2em;
    letter-spacing: 2px;
    font-weight: 600;
    color: #fff;
  }
}
</style>
