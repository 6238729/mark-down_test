<template>
  <div class="about">
    <h6>This is an about page</h6>
    <!-- <mdfile/> -->
    <test/>
    <textarea rows="10" v-model="mdText"></textarea>

    <div v-html="markdownToHtml"></div>
  </div>
</template>
<script>

import test from "../../public/blog/test.vue"
// import mdfile from "../../public/blog/Test-vuejs-page.md"
import axios from "axios";

export default {
  name: "ShowMdPage",
  data() {
    return {
      mdText: ""
    };
  },
  mounted() {
    this.getMarkdown();
  },
  methods: {
    getMarkdown() {
      const url =
        "http://localhost:8081/elfinos/#/about";
      axios.get(url).then(response => {
        this.mdText = response.data;
      });
    }
  },

  components:{
    test,
    // mdfile
  },
  // computed: {
  //  markdownToHtml(){
  //    return marked(this.markdown);
  //  }
  // 페이지 불러오기
// components : {
//   mdfile
// }
}

  // const path = require("path");
  // // const fs = require("fs");
  // const directoryPath = path.join(__dirname, "blog");
  // console.log(directoryPath);



  // const contentFiles = fs.readdirSync(directoryPath);
  // console.log(contentFiles);

// let fs = require("fs");
// let dir = "jsons";

// let files = fs.readdirSync(dir);
// console.log(files)



</script>

<style scoped>
textarea{
  width: 100%;
}
</style>