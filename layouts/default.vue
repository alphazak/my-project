<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <nuxt/>
    </main>
    <Footer />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import Footer from '@/components/Footer'
export default {
  components: {
    TheHeader,
    Footer
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
}
div{
  width: 100%;
  height: 100%;
}
</style>
