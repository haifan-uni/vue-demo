<template>
  <div>
    <router-view></router-view>
    <router-view name="header"></router-view>
    <div class="container">
      <router-view name="left"></router-view>
      <router-view name="content"></router-view>
    </div>
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
html,
body {
  margin: 0;
  padding: 0;
}
h1 {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
.container {
  display: flex;
  height: 100%;
  padding: 0;
  width: 100%;
}
</style>