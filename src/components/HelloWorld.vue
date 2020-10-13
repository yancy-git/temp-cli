<template>
  <div class="hello">
    <h1>{{ msg }}{{ this.$store.state.count }}</h1>
    <h2>Essential Links</h2>
    
    <router-link to="/tes">Ecosystem</router-link>
    
  </div>
</template>

<script>
import service from '@/api/service'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$testColor: red;
h1, h2 {
  font-weight: normal;
  color: $testColor;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
