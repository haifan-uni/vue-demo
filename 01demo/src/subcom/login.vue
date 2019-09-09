<template>
    <div>
       <h1 @click="login">登录</h1> 
    </div>
</template>
<script>
export default {
    methods:{
        login(){
            console.log('测试');
             this.$router.push('/index')
        }
    }
}
</script>
<style lang="scss" scoped>
div{
    color :red;
    cursor: pointer;
}
</style>