<template>
  <div class="main">
    <header class="header">
      <router-link to="/" class="bigicon"><logo-snapchat-icon class="logo flexmid" /><h2 class="word">Tang-Ming</h2></router-link>
      <ul>
        <li><router-link to="/" active-class="active">Home</router-link></li>
        <li><router-link to="/Todolist" active-class="active">Todolist</router-link></li>
        <li><router-link to="/Undone" active-class="active">Undone</router-link></li>
        <li><router-link to="/Add" active-class="active">Add</router-link></li>
      </ul>
    </header>

    <router-view class="mb-auto"></router-view>

    <footer class="footer">
      <span>Copyright &copy; 2021 Tang-Ming Hsu. All Rights Reserved.</span>
      <span class="timeflex"><md-time-icon class="timelogo flexmid" />{{state.timestamp}}</span>
    </footer>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
export default {
  setup() {
    const state = reactive({
      timestamp: ""
    })
    setInterval(() =>{
      getNow()
    },1000)
    function getNow() {
      const today = new Date();
      const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
      var apm = "AM"
      var hour = today.getHours()
      if(hour > 12){
        hour = hour - 12
        apm="PM"
      }
      var minute = today.getMinutes()
      var second = today.getSeconds()
      hour = hour < 10 ? '0'+hour:hour
      minute = minute < 10 ? '0'+minute:minute
      second = second < 10 ? '0'+second:second
      const time = hour + ":" + minute + ":"+ second + " " + apm
      const dateTime = date +'  '+ time;
      state.timestamp = dateTime
    }
    return {
      state
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Poppins', sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
}
.main {
  min-height: 100vh;
  min-width:100%;
  display: flex;
  flex-direction: column;
}
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(#2b1055,#7597de);
}
.mb-auto {
  margin-bottom: auto;
}
.header{
  position: relative;
  top:0;
  left:0;
  width: 100%;
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
.footer{
  display:flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-top: 1px solid #fff;
  //border-left:1px solid #fff;
  background: transparent;
  //align-self: flex-end;
  font-size: 1.2em;
  padding: 10px 20px;
  color:#fff;
}
.timeflex {
  display: flex;
  align-items: center;
  letter-spacing: 1.5px;
}
.timelogo {
  font-size: 1.5em;
}
.flexmid{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
