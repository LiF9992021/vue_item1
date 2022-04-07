<template>
  <div class="loginD">
    <div class="login_box">
      <p class="plist">用户登录</p>
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
          <el-button type="danger" class="login_btn" @click="login_btn"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
      <span class="pas_login"><a href="#">忘记密码？</a></span>
      <span class="user_login"
        ><a href="#" @click="btn_login">用户注册</a></span
      >
      <div class="boolbox" :class="{ showbox: isShow }">
        <span><a href="#" @click="isShowbtn">+</a></span>
        <p>账号或者密码错误,请重新输入</p>
      </div>
    </div>
  </div>
</template>

<script>
// 引入jquery
import $ from "jquery";
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
            min: 5,
            max: 16,
            message: "长度在 5 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
      isShow: true,
    };
  },

  methods: {
    btn_login() {
      this.$router.push("user");
    },
    login_btn() {
      this.$refs.login_table.validate((bool) => {
        if (!bool) return console.log("登录失败");

        this.$axios({
          url: "/post",
          method: "POST",
          data: {
            username: this.loginform.username,
            password: this.loginform.password,
          },
        }).then((res) => {
          console.log(res.data.token);
          localStorage.setItem('token',res.data.token)
          this.list = res.data.data;
          // console.log(this.list);
          if (this.list.length === 0) {
            $(".boolbox").fadeIn(1000);
          } else {
            this.$router.push("product");
          }
        });
      });
    },
    isShowbtn() {
      $(".boolbox").fadeOut(1000);
    },
  },
};
</script>

<style lang="less" scoped>
.login_from {
  box-sizing: border-box;
  padding: 0 30px;
}
.login_box .plist {
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
  position: relative;
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
.boolbox {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 220px;
  height: 100px;
  text-align: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #606162;
  border-radius: 10px;
  opacity: 0.8;
  span {
    a {
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      display: inline-block;
      font-size: 50px;
      color: #fdfdfd;
      transform: rotate(45deg);
    }
  }
  p {
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
    color: #fdfdfd;
  }
}
.showbox {
  display: none;
}
</style>