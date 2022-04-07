<template>
  <div class="productcls">
    <div class="block">
      <el-carousel trigger="click" height="400px" class="elbox">
        <el-carousel-item v-for="arr in list" :key="arr.id">
          <img :src="arr.imgone" class="imgcls" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block listbox">
      <p class="Lall">
        <a href="#">查看全部<span>></span></a>
      </p>
      <div class="showbox">
        <div class="fl" v-for="obj in newList" :key="obj.id">
          <img :src="require('../assets/images/' + obj.List_img)" alt="" />
          <p>{{ obj.List_text }}</p>
          <div class="Sdbox">
            <span>￥{{ obj.List_newprice }}</span>
            <del>￥{{ obj.List_oldprice }}</del>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          imgone: require("../assets/images/1.webp"),
        },
        {
          id: 2,
          imgone: require("../assets/images/2.webp"),
        },
        {
          id: 3,
          imgone: require("../assets/images/3.webp"),
        },
        {
          id: 4,
          imgone: require("../assets/images/4.webp"),
        },
      ],
      newList: [],
    };
  },
  created() {
    const myarr = window.JSON.parse(localStorage.getItem("mylist"));
    if (!myarr) {
      this.$axios({
        url: "/get",
        method: "GET",
      }).then((res) => {
        // console.log("服务器" + res.data.data);
        const time = new Date().getTime();
        console.log("存入时间" + time);
        localStorage.setItem("mytime", time);
        localStorage.setItem("mylist", window.JSON.stringify(res.data.data));
        const arr = window.JSON.parse(localStorage.getItem("mylist"));
        // console.log("取到本地" + arr);
        this.newList = arr;
        // console.log(this.newList);
      });
    } else {
      const time1 = new Date().getTime();
      console.log("有值的本地时间" + time1);
      const oldtime = localStorage.getItem("mytime");
      // console.log(timer);
      if (time1 - oldtime > 60 ) {
        this.$axios({
          url: "/get",
          method: "GET",
        }).then((res) => {
          // console.log(res.data.data);
          const time2 = new Date().getTime();
          console.log("重新存入的时间" + time2);
          localStorage.setItem("mytime", time2);
          localStorage.setItem("mylist", window.JSON.stringify(res.data.data));
          const arr = window.JSON.parse(localStorage.getItem("mylist"));
          // console.log(arr);
          this.newList = arr;
          // console.log(this.newList);
        });
      } else {
        const arr = window.JSON.parse(localStorage.getItem("mylist"));
        // console.log(arr);
        this.newList = arr;
      }
    }
  },
};
</script>

<style>
.elbox {
  border-radius: 5px;
}
.block {
  width: 1200px;
  margin: 0 auto;
}
.imgcls {
  width: 100%;
  height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.Lall {
  text-align: right;
  padding-right: 50px;
}
.Lall span {
  margin-left: 4px;
}
.listbox {
  margin-top: 30px;
}
.showbox {
  overflow: hidden;
}
.showbox .fl {
  width: 200px;
  height: 250px;
  /* border: 1px solid #d3dce6; */
  margin: 20px 49px;
  background-color: #ffffff;
  border-radius: 5px;
}
.fl {
  float: left;
}
.fl img {
  width: 200px;
  height: 170px;
}
.fl div {
  margin-top: 10px;
}
.fl p {
  text-align: center;
  margin-top: 10px;
  color: #525e69;
}
.fl span {
  margin-left: 55px;
  color: #f54545;
}
.fl del {
  margin-left: 10px;
  color: #b5b4b8;
}
</style>