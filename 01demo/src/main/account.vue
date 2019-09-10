<template>
  <div>
    <div class="content">
      <form class="login-form" action="index.html" method="post" novalidate="novalidate">
        <div class="form-title">
          <span class="form-title">Welcome.</span>
          <span class="form-subtitle">Please login.</span>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-solid placeholder-no-fix"
            placeholder="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control form-control-solid placeholder-no-fix"
            placeholder="Password"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="form-actions">
          <button type="submit" class="btn red btn-block  btn-danger" @click="login">LOGIN</button>
        </div>
        <!-- <div class="create-account">
          <p>
            <a
              href="javascript:;"
              class="btn-primary btn btn-block"
              @click="register"
            >Create an account</a>
          </p>
        </div> -->
      </form>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$router.push("/index");
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 400px;
  margin: 40px auto;
  .form-title {
    margin-bottom: 25px;
    color: #edf4f8;
    font-size: 19px;
    font-weight: 400 !important;
  }
  .form-subtitle {
    color: #c9dce9;
    font-size: 17px;
    font-weight: 300 !important;
    padding-left: 10px;
  }
  .login-form {
    padding: 0;
    margin: 200px 0 0 0;
  }
  .create-account {
    margin: 10px 0 0 0;
  }
}
</style>