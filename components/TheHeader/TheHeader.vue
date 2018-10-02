<template>
<div>
  <ul>
    <img src="logo_ayaline-1.png" alt="logo aYaline" />
    <nuxt-link to="/equipe" tag="li" class="nav-link"><a>Equipe</a></nuxt-link>
    <nuxt-link to="/agence" tag="li" class="nav-link"><a>L'agence</a></nuxt-link>
    <nuxt-link to="/reference" tag="li" class="nav-link"><a>Nos references</a></nuxt-link>
    <nuxt-link to="/" tag="li" class="nav-link"><a>Acueil</a></nuxt-link>
</ul>
  <form>
        <input type="text" id="algolia_doc_search_query">
    </form>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js"></script>
    <script type="text/javascript">
        window.onload = function() {
            docsearch({
                apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
                indexName: 'instant_search',
                inputSelector: '#algolia_doc_search_query',
                algoliaOptions: { filters: 'version:current' },
                autocompleteOptions: {
                    templates: {
                        header: function() {
                            return 'The header...';
                        },
                        suggestion: function(suggestion) {
                            return 'The search result...';
                        }
                    }
                }
            });
        }
    </script>
</div>
</template>
<style scoped>
body {
    margin: 0;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    padding-right: 75px;
    text-transform: uppercase;
    border-top: 6px solid #FDD262;
}

li {
    float: right;
}
img{
  margin-left: 75px;
  float: left;
  padding-top: 15px;
  width: auto;
  height: auto;
}
li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px 16px;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
}

li a:hover {
    background-color: #111;
}
.search-container{
    display: inline-block;
    position: relative;
     top : -55px;
   padding-right: 20px;
}
</style>

