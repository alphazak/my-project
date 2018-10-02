<template>
  <section class="recipes">
    <article class="recipe">
    <div class="thumbnail" style="background-image: url('https://wallpaperbrowse.com/media/images/sunflowers-mr.jpg')"></div>
     <h1>Mon Titre</h1>
     <p> Bien que Vuex nous aide à faire face à la gestion partagée des états, elle s'accompagne aussi du coût de plus de concepts et de la norme. C'est un compromis entre la productivité à court et à long terme.

Si vous n'avez jamais construit de SPA à grande échelle et que vous n'avez pas directement accès à Vuex, cela peut sembler verbeux et décourageant. C'est tout à fait normal - si votre application est simple, vous n'aurez probablement aucun problème avec Vuex. Un modèle de magasin simple peut être tout ce dont vous avez besoin. Mais si vous construisez un SPA de moyenne à grande envergure, vous avez probablement rencontré des situations qui vous font penser à la façon de mieux gérer l'état en dehors de vos composants Vue, et Vuex sera la prochaine étape naturelle pour vous. Il y a une bonne citation de </p>
    </article>
    <article class="recipe">
    <div class="thumbnail" style="background-image: url('https://wallpaperbrowse.com/media/images/6986083-waterfall-images_Mc3SaMS.jpg')"></div>
     <h1>Mon Titre</h1>
     <p>Bien que Vuex nous aide à faire face à la gestion partagée des états, elle s'accompagne aussi du coût de plus de concepts et de la norme. C'est un compromis entre la productivité à court et à long terme.

Si vous n'avez jamais construit de SPA à grande échelle et que vous n'avez pas directement accès à Vuex, cela peut sembler verbeux et décourageant. C'est tout à fait normal - si votre application est simple, vous n'aurez probablement aucun problème avec Vuex. Un modèle de magasin simple peut être tout ce dont vous avez besoin. Mais si vous construisez un SPA de moyenne à grande envergure, vous avez probablement rencontré des situations qui vous font penser à la façon de mieux gérer l'état en dehors de vos composants Vue, et Vuex sera la prochaine étape naturelle pour vous. Il y a une bonne citation de </p>
    
    </article>
    <article class="recipe">
    <div class="thumbnail" style="background-image: url('https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg')"></div>
     <h1>Mon Titre</h1>
     <p>Bien que Vuex nous aide à faire face à la gestion partagée des états, elle s'accompagne aussi du coût de plus de concepts et de la norme. C'est un compromis entre la productivité à court et à long terme.

Si vous n'avez jamais construit de SPA à grande échelle et que vous n'avez pas directement accès à Vuex, cela peut sembler verbeux et décourageant. C'est tout à fait normal - si votre application est simple, vous n'aurez probablement aucun problème avec Vuex. Un modèle de magasin simple peut être tout ce dont vous avez besoin. Mais si vous construisez un SPA de moyenne à grande envergure, vous avez probablement rencontré des situations qui vous font penser à la façon de mieux gérer l'état en dehors de vos composants Vue, et Vuex sera la prochaine étape naturelle pour vous. Il y a une bonne citation de </p>
    </article>
  </section>
</template>
<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.recipes{
display: flex;
flex-flow: row wrap;
justify-items: center;
justify-content: center;
justify-self: center;
text-align: center;
}
.recipe{
box-sizing: border-box;
width: 31%;
padding: 8px;
margin: 10px;
}
.thumbnail{
  background-position: center;
  background-size: cover;
  height: 200px;
  width: 100%;
}
</style>
