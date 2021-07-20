<template>
	<div class="flex">
    <img src="image/temp_back.jpg" id="temprature" />
    <input type="text" class="text" v-model="Locale" @keydown.enter="$store.dispatch('api_temp')" />
    <h2 class="text">{{ $store.state.Locale}}</h2>
    <h2 class="text">{{ $store.state.temprature}}</h2>
    <div class="temprature"></div>
  </div>
</template>

<script>
export default {
  computed: {
    Locale: {
      get() {
        return this.$store.state.Locale
      },
      set(newValue) {
        this.$store.commit('changeLocale',newValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.flex{
    display: flex;
    justify-content: center;
    flex:1;
    align-items: center;
}
#temprature {
  width:100%;
  height: 100%;
  position: absolute;
  left:0;
  top:0;
}
.text {
  z-index: 10001;
}
</style>