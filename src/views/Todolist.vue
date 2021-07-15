<template>
  <div class="flex">
    <h2 class=title>My Todolist.</h2>
    <div class="thing" v-for="(item,idx) in data.allThing" :key="'list'+idx">
      <h2>{{item.Name}}</h2>
      <button class="btn remove" @click="rm(item.ID)">&times;</button>
    </div>
    <div class="thing flexrow">
      <h2 class="space">&nbsp;</h2>
      <button class="btn add" v-if="!data.popup" @click="pop"><ios-add-icon /></button>
      <button class="btn remove" @click="pop" v-if="data.popup">&times;</button>
      <a>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <input class="createword" v-model="data.addThing" @keydown.enter="create" v-if="data.popup" />
      </a>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import axios from 'axios'
export default {
  setup () {
    const data = reactive({
      allThing: [],
      addThing: "",
      popup: false
    })
    onMounted (async() => {
      init()
    })
    async function init() {
      var thing = await axios.get('http://127.0.0.1:8888/api/')
      data.allThing = thing.data.message
    }
    async function rm(id) {
      await axios.delete(`http://127.0.0.1:8888/api/${id}`)
      init()
    }
    async function create() {
      let thing = {"Name": data.addThing}
      await axios.post(`http://127.0.0.1:8888/api/`,thing)
      data.popup = false
      data.allThing = ""
      init()
    }
    async function pop() {
      data.popup = !data.popup
    }
    return {
      data,
      init,
      rm,
      create,
      pop
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flexrow{
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  position: relative;
  z-index: 9998;
  color:#fff;
  letter-spacing: 5px;
  white-space: nowrap;
  font-size: 3em;
  text-transform: uppercase;
  overflow: hidden;
  animation: typing 4s steps(24);
  animation-iteration-count: 1;
  border-right: 2px solid black;
}
.thing {
  width:35%;
  padding : 15px 30px;
  border-radius: 40px;
  background: #fff;
  z-index:10000;
  margin-top: 15px;
  position: relative;
}
.btn{
  border: none;
  font-size: 2.5em;
  position: absolute;
  border-radius: 500px;
  width:50px;
  height: 50px;
  background: transparent;
  cursor: pointer;
  transition: all .3s ease-out;

    &:active {
    transform: translateY(1px);
  }
}

.add{
  fill: green;
  text-align: center;
  z-index: 10001;

  &:hover {
    transform: translateY(-3px);
    background: green;
    fill: #fff;
  }
}
.remove{
  color:red;
  right:0%;
  top:5%;
  
  &:hover {
    transform: translateY(-3px);
    color:#fff;
    background: red;
  }
}

.createword{
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  position:  relative;
  padding:10px 25px;
  font-size:1.5em;
  outline:none;
  border:2px solid white;

  &:focus{
    border: 2px solid #2196f3;
    transition: 2s;
    transition-delay: 1s;
  }
}

.space {
  display: hidden;
}

a {
  position: relative;
  overflow: hidden;
}

a span {
  position: absolute;
  display: block;
  z-index: 10001;
}

a span:nth-child(1){
  top:0;
  left:-100%;
  width:100%;
  height: 2px;
  background: linear-gradient(90deg,transparent,#2196f3);
}
a:hover span:nth-child(1){
  left:100%;
  transition: 1s;
}

a span:nth-child(3){
  bottom:0;
  right:-100%;
  width:100%;
  height: 2px;
  background: linear-gradient(90deg,transparent,#2196f3);
}
a:hover span:nth-child(3){
  right:100%;
  transition: 1s;
  transition-delay: .6s;
}

a span:nth-child(2){
  top:-100%;
  right:0;
  height:100%;
  width: 2px;
  background: linear-gradient(360deg,transparent,#2196f3);
}
a:hover span:nth-child(2){
  top:100%;
  transition: 1s;
  transition-delay: .4s;
}

a span:nth-child(4){
  bottom:-100%;
  left:0;
  height:100%;
  width: 2px;
  background: linear-gradient(360deg,transparent,#2196f3);
}
a:hover span:nth-child(4){
  bottom:100%;
  transition: 1s;
  transition-delay: 1s;
}

@keyframes typing {
  0%{
    width:0px;
  }
  100%{
    width:395.66px;
  }
}
</style>
