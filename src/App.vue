<template>
  <div id="app">
    <itemheader></itemheader>
    <itemaside></itemaside>    
    <el-col :span="21">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box"><router-view></router-view></div>
      </transition>
    </el-col>
  </div>
</template>


<script>
import itemheader from "./components/public/header.vue";
import itemaside from "./components/public/aside.vue";

export default {
  el: "#app",
  render: h => h(App),
  components: {
    itemheader,
    itemaside
  },
  data: () => ({
    show: true
  })
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}
body {
  overflow: hidden;
}
ul {
  text-decoration: none;
  list-style-type: none;
}
a,
a:active {
  text-decoration: none;
}
table {
  border-collapse: collapse;
}
input,
button,
img,
select,
textarea {
  outline: none;
  border: none;
}
</style>
