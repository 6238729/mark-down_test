<template>
  <div class="test">
    <!-- 마크다운파일 불러오기 -->
    <textarea v-model="mdText"></textarea>
    <textarea v-model="mdfile"></textarea>
  </div>
    <!-- 불러온 마크다운 파일 변환(랜더링) -->
  <div>
    <textarea v-model="changeMarkdown"></textarea>
  </div>
  <div v-html="changeMarkdown"></div>

  <span v-html="postHtml"/>
</template>

<script>
import axios from "axios";
import marked from "marked";

// import mdfile from "../../public/blog/Test-vuejs-page.md"

export default {
  // 페이지 불러오기
  name: "ShowMdPage",
  data() {
    return {
      mdText: "",
      // mdfile: "",
    };
  },
  mounted() {
    this.getMarkdown();
  },
  methods: {
    getMarkdown() {
      const url =
        "https://raw.githubusercontent.com/sungjaeyoon/show-md/main/README.md";
        // "../components/Test-vuejs-page.md"
      axios.get(url).then(response => {
        this.mdText = response.data;
        this.mdfile = response.data;
      });
    }
  },
  // 랜더링
  computed: {
    changeMarkdown() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        headerIds: false,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      });
      return marked(this.mdText);
    }
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

textarea{
  width: 100%;
  height: 50vh;
}
</style>
