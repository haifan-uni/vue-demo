<template>
  <div>
    <h1>login {{message}}</h1>
    <router-link to="/account">account</router-link>
    <router-link to="/goodslist">goodslist</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "123"
    };
  },
  methods: {
    show() {
      console.log("show methods");
    }
  }
};
</script>

<style scoped>
</style>