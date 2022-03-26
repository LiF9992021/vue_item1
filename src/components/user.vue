<template>
  <div class="loginD">
    <div class="login_box">
      <p>用户注册</p>
      <el-form
        label-width="0px"
        class="login_from"
        :model="loginform"
        :rules="rules"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            placeholder="手机号"
            class="user_input"
            v-model="loginform.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="设置6-16位登录密码"
            class="lock_input"
            v-model="loginform.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="phoneword">
          <el-input
            prefix-icon="el-icon-mobile"
            placeholder="短信验证码"
            class="mobile_input"
            v-model="loginform.phoneword"
          ></el-input>
          <!-- <el-button type="danger" class="iphone_btn">获取验证码</el-button> -->
        </el-form-item>
        <el-form-item>
          <el-button type="danger" class="login_btn" @click="user_btn"
            >立即注册</el-button
          >
        </el-form-item>
      </el-form>
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
        phoneword: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "输入11位手机号",
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
        phoneword: [
          { required: true, message: "请输入验证码", trigger: "blur" },
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
    user_btn() {
      this.$router.push("login");
    },
  },
};
</script>

<style lang="less" scoped>
.login_from {
  box-sizing: border-box;
  padding: 0 30px;
}
p {
  text-align: center;
  font-size: 30px;
  padding-top: 20px;
  color: #2e2e2e;
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
  margin-top: 10px;
}
.mobile_input {
  margin-top: 8px;
  width: 200px;
}
.iphone_btn {
  width: 140px;
}
.login_btn {
  width: 340px;
  margin-top: 8px;
}
.pas_login {
  float: left;
  margin-top: 20px;
  margin-left: 30px;
}
.user_login {
  float: right;
  margin-top: 20px;
  margin-right: 30px;
}
</style>