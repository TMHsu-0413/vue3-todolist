<template>
	<div class="flex">
		<h2 class="continued">To be continued...</h2>
	</div>
</template>

<script>
export default {
    name:'Undone'
}
</script>

<style lang="scss" scoped>
.flex{
    display: flex;
    justify-content: center;
    flex:1;
    align-items: center;
}
.continued {
    color:white;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
		font-size: 3em;
    transition: 0.5s;
    border-right: 1px solid black;
    animation: typing 5s steps(18) infinite;
}
@keyframes typing {
  0%,90%,100%{
    width:0px;
  }
  30%,60%{
    width:435.55px;
  }
}
</style>