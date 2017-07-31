<template>
<div>
  <div role="main" class="main">

    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumb">
              <router-link to="/" tag="li"><a>Home</a></router-link>
              <router-link to="/article" tag="li"><a>Article</a></router-link>
              <li class="active">{{ this.$route.params.slug}}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h1>Article</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="blog-posts single-post">
            <article class="post post-large blog-single-post" v-for="post in postData">
              <div class="post-image">
                <div>
                  <div class="img-thumbnail">
                    <img class="img-responsive" :src="imgUrl+post.image" alt="" height="100px">
                  </div>
                </div>
              </div>
              <div class="post-date">
                <span class="day">{{ getDate_(post.created_at)}}</span>
                <span class="month">{{ getMont(post.created_at)}}</span>
              </div>

              <div class="post-content">

                <h2><a href="#">{{post.title}}</a></h2>

                <div class="post-meta">
                  <span><i class="fa fa-user"></i> By <a href="#">{{post.user.name}}</a> </span>
                  <span><i class="fa fa-tag"></i> {{post.category.name}}</span>
                </div>

                <div v-html="post.body"></div>

                <div class="comments">
                  <disqus shortname="spenwize-com"></disqus>
                </div>

              </div>
            </article>
          </div>
        </div>
        <div class="col-md-3">
          <aside class="sidebar">
            <h4 class="heading-primary">Categories</h4>
            <ul class="nav nav-list mb-xlg" v-for="category in categorys">
              <li><a href="#">{{ category.name}}</a></li>
            </ul>
            <div class="tabs mb-xlg">
              <ul class="nav nav-tabs">
                <li class="active"><a href="#popularPosts" data-toggle="tab"><i class="fa fa-star"></i> Popular</a></li>
                <li><a href="#recentPosts" data-toggle="tab">Recent</a></li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="popularPosts">
                  <ul class="simple-post-list" v-for="post in postNews">
                    <li>
                      <div class="post-image">
                        <div class="img-thumbnail">
                          <router-link :to="'../../'+blogDetail+post.id+'/'+post.slug">
                            <img :src="imgUrl+post.image" :alt="post.title" width="50px">
                          </router-link>
                        </div>
                      </div>
                      <div class="post-info">
                        <router-link :to="'../../'+blogDetail+post.id+'/'+post.slug">{{post.title | truncate(20,'...')}}</router-link>
                        <div class="post-meta">
                          {{post.created_at}}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="tab-pane" id="recentPosts">
                  <ul class="simple-post-list" v-for="post in postNews">
                    <li>
                      <div class="post-image">
                        <div class="img-thumbnail">
                          <router-link :to="'../../'+blogDetail+post.id+'/'+post.slug">
                            <img :src="imgUrl+post.image" :alt="post.title" width="50px">
                          </router-link>
                        </div>
                      </div>
                      <div class="post-info">
                        <router-link :to="'../../'+blogDetail+post.id+'/'+post.slug">{{post.title | truncate(20,'...')}}</router-link>
                        <div class="post-meta">
                          {{post.created_at}}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr>
            <h4 class="heading-primary">About Us</h4>
            <p>Saat ini perencanaan keuangan dan investasi tidak lagi hanya terbatas untuk kalangan berada, semua orang harus melek investasi untuk menyiasati laju inflasi.
Perencanaan Keuangan dan Investasi dengan SpenWize semudah membalik telapak tangan. Spenwize menyediakan kalkulator perencanaan keuangan, artikel edukasi yang mudah dicerna, , beserta pilihan berbagai jenis investasi yang dapat anda bandingkan antara satu sama lain. Semuanya dapat anda nikmati secara cuma-cuma. Visi kami adalah ingin membuat bangsa Indonesia melek investasi. Tabung sekarang, gunakan kemudian…</p>

          </aside>
        </div>
      </div>

    </div>

  </div>
</div>
</template>

<script>
  import Disqus from 'vue-disqus/VueDisqus.vue'
  import moment from 'moment'
export default {
    components: {
      Disqus
    },
    data(){
        return{
            postData:"",
            id:this.$route.params.id,
            slug:this.$route.params.slug,
            imgUrl:'http://128.199.204.149/storage/',
            blogDetail:'detail-article/',
            postNews :'',
            categorys:''
        }
    },
    created(){
      this.$http.get('api/detail-post/'+this.id)
        .then(response => {
          this.postData= response.body.message
        })
      /*get news*/
      this.$http.get('api/article-news')
        .then(response => {
          this.postNews = response.body.message
        })

      /*get all category*/
      this.$http.get('api/category')
        .then(response => {
          this.categorys= response.body.message
        })
    },
    filters: {
      truncate: function (text, length, clamp) {
        clamp = clamp || '...';
        var node = document.createElement('div');
        node.innerHTML = text;
        var content = node.textContent;
        return content.length > length ? content.slice(0, length) + clamp : content;
      }
    },
    methods:{
      getDate_ : function (date) {
        return moment(date, 'YYYY-MM-DD').format('DD');
      },
      getMont:function (date) {
        return moment(date, 'YYYY-MM-DD').format('MMM');
      }
    }
}
</script>
