<template>
    <div class="login-container">
        <el-card class="login-box">
            <img src="../../assets/images/logo_index.png" alt="">
            <!-- 登录表单 -->
            <el-form ref="loginForm" status-icon="true" :model="loginForm" :rules="loginRules">
                <el-form-item prop="mobile">
                    <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px"></el-input>
                    <el-button style="float:right">发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox :value="true">我已阅读并同意 用户协议 和 隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button style="width:100%" type="primary" @click='login()'>登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {

  data () {
    // 校验手机号
    const checkMobile = (rule, value, callback) => {
      // 校验逻辑 把value拿出来进行手机号校验
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不正确'))
      }
    }
    return {
      // 表单数据对象
      loginForm: {
        mobile: '',
        code: ''
      },
      // 表单验证规则对象
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 提交登录请求 axios
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm)
            .then(res => {
              // res是响应对象 包含后台返回的数据 res.data
            //   console.log(res.data)
              this.$router.push('/')
            })
            .catch(() => {
              // 提示错误信息
              this.$message.error('手机号错误')
            })
        }
      })
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
       // cover 铺满容器 多余裁剪  contain在内容完全显示图片
       background:url(../../assets/images/login_bg.jpg) no-repeat center / cover;
       .login-box{
           width: 400px;
           height: 330px;
           position: absolute;
           left: 50%;
           top:50%;
           transform: translate(-50%,-50%);
           img{
               display: block;
               width: 200px;
               margin: 10px auto;
           }
       }
   }
</style>
