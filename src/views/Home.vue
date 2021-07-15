<template>
  <div>
    <section>
      <img src="image/stars.png" id="stars">
      <img src="image/moon.png" id="moon">
      <img src="image/mountains_behind.png" id="mountains_behind">
      <h2 id="text">練習用</h2>
      <a href="https://github.com/Z1yx?tab=repositories" id="btn">My Github</a>
      <img src="image/mountains_front.png" id="mountains_front">
    </section>
    <div class="sec" id="sec">
      <h2>唐銘der練習網頁</h2>
      <p class="date">Start Date: 7/12</p>
      <p>這個網頁主要是用來練習Vue3做為frontend，golang作為backend</p>
      <p>目前主要功能為todolist 練習使用golang撰寫CRUD 未來可能擴充</p>
      <p>7/14 3:55 今天瞎搞排版搞了一天，vue3實作於vue2相對麻煩，但是做完蠻有成就感的，又更熟悉了flex的用法，之後要學一下grid layout</p>
      <p>7/15 17:18 今天終於把Go的CRUD看懂了，也成功實做出來，語法相對nodejs來說好像比較麻煩，但go太香了受不了</p>
      <p>我好爛，沒救了</p>
      <p>窩4大便 2ㄏ</p>
      <p></p>
    </div>
    <div class="trd" id="trd">
      <h2 class="title">我的應用程式</h2>
      <a href="https://www.facebook.com/profile.php?id=100008041262760" class="item"><logo-facebook-icon class="logo" /></a>
      <a href="https://www.instagram.com/tang.ming0413/" class="item"><logo-instagram-icon class="logo" /></a>
      <a href="https://www.youtube.com/channel/UCTNaiwfrpAHnyRfTeS8skWA" class="item"><logo-youtube-icon class="logo" /></a>
      <a href="https://github.com/Z1yx?tab=repositories" class="item"><logo-github-icon class="logo" /></a>
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
.date {
  font-weight: bold;
}
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
    pointer-events: none;
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
.trd {
  background: linear-gradient(to bottom,#1c0522,transparent);
  display: flex;
  padding: 100px;

  .title {
    width:100%;
    font-size:3.5em;
    color:#fff;
    margin-bottom: 10px;
  }
  .item {
    
  }
  .logo{
    margin-left: 50px;
    fill:#fff;
    font-size:8em;
    transition: all .3s;

    &:hover {
      transform: translateY(-5px);
    }
  }
}
</style>
