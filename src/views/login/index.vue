<template>
    <div class="login-container">
        <el-card class="login-box">
            <img src="../../assets/images/logo_index.png" alt="">
            <el-input class="login-input"></el-input>
            <el-input class="login-input1"></el-input>
            <el-button class="login-button">发送验证码</el-button>
            <el-checkbox class="checkbox" v-model='checked'>我已阅读并同意 用户协议 和 隐私条款</el-checkbox >
            <el-button class="login-button1" type="primary">登陆</el-button>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style scoped lang='less'>
.login-container{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url('../../assets/images/login_bg.jpg')no-repeat center / cover;
    .login-box{
        width: 400px;
        height: 300px;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        img{
            display:block;
            width: 260px;
            margin: -5px auto;
        }
        .login-input{
            margin: 10px 0;
        }
        .login-input1{
            width: 240px;
            margin: 10px 0;
        }
        .login-button{
            width: 100px;
            margin: 0 0 0 20px;
        }
        .checkbox{
            margin: 17px 0;
        }
        .login-button1{
            width: 360px;
        }

    }
}
</style>
