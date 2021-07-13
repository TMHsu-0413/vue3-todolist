<template>
  <div>
    <section>
      <img src="image/stars.png" id="stars">
      <img src="image/moon.png" id="moon">
      <img src="image/mountains_behind.png" id="mountains_behind">
      <h2 id="text">Moon Light</h2>
      <a href="#" id="btn">Explore</a>
      <img src="image/mountains_front.png" id="mountains_front">
    </section>
    <div class="sec" id="sec">
      <h2>唐銘der練習網頁</h2>
      <p>這個網頁主要是用來練習Vue3做為frontend，golang作為backend</p>
      <p>主要功能為todolist</p>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: "Home",
  setup() {
    onMounted(() => {
      var stars = document.getElementById('stars');
      var moon = document.getElementById('moon');
      var mountains_behind = document.getElementById('mountains_behind');
      var mountains_front = document.getElementById('mountains_front');
      var btn = document.getElementById('btn');
      var text = document.getElementById('text');
      var header = document.querySelector('header');

      window.addEventListener('scroll', function(){
        var value = window.scrollY;
        stars.style.left = value + 'px';
        moon.style.top = value * 1.05 + 'px';
        mountains_behind.style.top = value * 0.5 +'px';
        mountains_front.style.top = value * 0 +'px';
        text.style.marginRight = value * 4 +'px';
        text.style.marginTop = value * 1.5 + 'px';
        btn.style.marginTop = value * 1.5 +'px';
        header.style.top = value * 0.5 +'px';
      })
    })
  }
}
</script>

<style lang="scss" scoped>

section {
  position: relative;
  height: 100vh;
  padding:4px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width:100%;
    height: 100px;
    background: linear-gradient(to top,#1c0522,transparent);
    z-index:1000;
  }
  img {
    position: absolute; 
    top:0;
    left:0;
    width:100%;
    height: 100%;
    object-fit: cover;

    &#moon {
      mix-blend-mode: screen;
    }

    &#mountains_front {
      z-index:10;
    }
  }
  #text {
    position: absolute;
    color: #fff;
    right: -350px;
    white-space: nowrap;
    font-size:7.5vw;
    z-index: 9;
  }

  #btn {
    text-decoration: none;
    padding: 8px 30px;
    border-radius: 40px;
    background: #fff;
    color:#2b1055;
    font-size:1.5em;
    z-index: 9;
    transform: translateY(200px);
  }
}

.sec{
    position: relative;
    padding:100px;
    background: #1c0522;

    h2{
      font-size:3.5em;
      margin-bottom: 10px;
      color: #fff;
    }

    p{
      font-size:1.5em;
      color:#fff;
    }
}
</style>
