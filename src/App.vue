<template>
  <div id="app">
    <Header></Header>
    <router-view
      style="min-height:750px;min-width:750px;box-sizing:border-box;margin-top:81px;"
    />
    <!-- <Footer></Footer>
    -->
  </div>
</template>

<script>
import Header from "@/components/header";
// import Footer from "@/components/footer";
export default {
  name: "App",
  components: {
    Header
    // Footer
  }
};
</script>

<style>
  div{
    -moz-user-select:none;

    -webkit-user-select:none;

    user-select:none;
  }
</style>
