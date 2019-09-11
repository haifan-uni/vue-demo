<template>
  <div class="left">
    <nav>
      <ul class="nav nav-pills nav-stacked">
        <li role="presentation" class="active">
          <a href="#">Home</a>
        </li>
        <li role="presentation">
          <a href="#">Profile</a>
        </li>
        <li role="presentation" :class="{open:open}">
          <a href="#">
            ss需要隐藏
            <span
              class="glyphicon glyphicon-chevron-left li-expand"
              @click="open!=open"
            ></span>
          </a>
          <ul class="nav nav-pills nav-stacked" >
            <li role="">
              <a href="#">1</a>
            </li>
            <li role="">
              <a href="#">2</a>
            </li>
            <li role="">
              <a href="#">2</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    show() {
      console.log("show methods");
    }
  }
};
</script>
<style lang="scss">
.left {
  background-color: white;
  flex: 2;
  .nav {
    .li-expand {
      color: #5b9bd1;
      border: none;
      text-shadow: none;
      font-size: 14px;
      float: right;
    }
    li{
      ul{
        display: none;
      }
   
    } &.open{
      display: block;
    }
    }
  
}
</style>