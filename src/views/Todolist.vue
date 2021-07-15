<template>
  <div class="flex">
    <h2 class=title>My Todolist.</h2>
    <ios-add-icon class="btn add" @click="create" />
    <div class="thing" v-for="(item,idx) in data.allThing" :key="'list'+idx">
      <h2>{{item.Name}}</h2>
      <button class="btn" @click="rm(item.ID)">&times;</button>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import axios from 'axios'
export default {
  setup () {
    const data = reactive({
      allThing: []
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
      let thing = {"Name":"好欸"}
      await axios.post(`http://127.0.0.1:8888/api/`,thing)
      init()
    }
    return {
      data,
      init,
      rm,
      create
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
  color:red;
  position: absolute;
  right:0%;
  top:5%;
  border-radius: 500px;
  width:50px;
  height: 50px;
  background: transparent;
  cursor: pointer;
  transition: all .3s ease-out;

  &:hover {
    transform: translateY(-3px);
    color:#fff;
    background: red;
  }

  &:active {
    transform: translateY(1px);
  }
}
.add{
  fill: green;
  text-align: center;
  right:38%;
  top: 17%;
  z-index: 10001;

  &:hover {
    background: green;
    fill: #fff;
  }
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
