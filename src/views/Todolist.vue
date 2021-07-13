<template>
  <div class="flex">
    <h2 class=title>Todolist.</h2>
    <ios-add-icon class="btn add" />
    <div class="thing">
      <h2>倒垃圾</h2>
      <button class="btn">&times;</button>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: "Done",
};
</script>

<style lang="scss" scoped>
.flex {
  height: 100%;
  margin-bottom: auto;
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
  font-size: 3em;
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    z-index: 9999;
    background: linear-gradient(#362469,#3A2B70);
    animation: type 4s steps(24) forwards;
  }
  &::after {
    content: '';
    position: absolute;
    top:0;
    left:0;
    width:0.125em;
    background: black;
    z-index:10001;
    animation: type 4s steps(24) forwards,blink 500ms steps(24) infinite;
    height: 100%;
  }
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
  right:40%;
  top: 17%;
  z-index: 10001;

  &:hover {
    background: green;
    fill: #fff;
  }
}
@keyframes type {
  to{
    left:100%;
  }
}
@keyframes blink {
  to{
    background: transparent;
  } 
}
</style>
