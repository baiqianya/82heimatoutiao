<template>
  <div id="app">
      <div class="login">
    <el-card class="box-card">
      <img src="../../assets/img/logo_index.png" alt="黑马头条" />
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile" >
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    let func = function (rule, value, callBack) {
      if (value) {
        callBack()
      } else {
        callBack(new Error('您必须无条件同意被坑'))
      }
    }
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选协议 默认false
      },
      loginRules: {
        mobile: [{
          required: true, // 必填项 true为必填
          message: '手机号不能为空'
        }, {
          pattern: /^1[3456789]\d{9}$/,
          message: '手机号格式不正确'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码必须为6位数字'
        }],
        check: [{
          validator: func
        }]
      }
    }
  },
  methods: {
    login () {
      // this.$refs.loginForm.validate(isOk => {
      //   if (isOk) {
      //     this.$message({ type: 'success', message: '成功' })
      //   } else {
      //     this.$message({ type: 'loser', message: '失败' })
      //   }
      // 请求
      this.$axios({
        url: '/authorizations',
        method: 'post',
        data: this.loginForm
      }).then(result => {
        window.localStorage.setItem('user-token', result.data.data.token)
        this.$router.push('/home')
      }).catch(() => {
        this.$message({
          message: '手机号或者验证码错误',
          type: 'warning'
        })
      })
      // })
    }
  }
}
</script>

<style lang='less'>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 400px;
    height: 330px;
    img {
      display: block;
      width: 200px;
      margin: 10px auto;
    }
  }
}
</style>
