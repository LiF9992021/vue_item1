<template>
  <div class="loginD">
    <div class="login_box">
      <p>用户登录</p>
      <el-form
        label-width="0px"
        class="login_from"
        :model="loginform"
        :rules="rules"
        ref="login_table"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            placeholder="手机号/用户名"
            class="user_input"
            v-model="loginform.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="登录密码"
            class="lock_input"
            v-model="loginform.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" class="login_btn" @click="login_btn">立即登录</el-button>
        </el-form-item>
      </el-form>
      <span class="pas_login"><a href="#">忘记密码？</a></span>
      <span class="user_login"
        ><a href="#" @click="btn_login">用户注册</a></span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginform: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 6,
            message: "输入3-6位用户名",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    btn_login() {
      this.$router.push("user");
    },
    login_btn(){
    this.$refs.login_table.validate((bool =>{
        if (!bool) return console.log('登录失败');
        
    })
    )}
  },
};
</script>

<style lang="less" scoped>
.login_from {
  box-sizing: border-box;
  padding: 0 30px;
}
p {
  font-size: 24px;
  padding-left: 30px;
  padding-top: 20px;
  color: #666666;
}
.loginD {
  background-color: #eee;
  height: 100%;
}
.login_box {
  height: 350px;
  width: 400px;
  //   background-color: red;
  border: 1px solid #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.user_input,
.lock_input {
  margin-top: 15px;
}
.login_btn {
  width: 340px;
  margin-top: 15px;
}
.pas_login {
  float: left;
  margin-top: 15px;
  margin-left: 30px;
}
.user_login {
  float: right;
  margin-top: 15px;
  margin-right: 30px;
}
</style>