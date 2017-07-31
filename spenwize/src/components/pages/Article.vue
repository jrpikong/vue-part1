<template>
  <div role="main" class="main">

    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumb">
              <li><a href="/">Home</a></li>
              <li class="active">Article</li>
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
          <div class="blog-posts">
            <div v-for="post in postData">
              <article class="post post-large">
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
                  <h2><router-link :to="'/'+blogDetail+post.id+'/'+post.slug" tag="a" >{{post.title}}</router-link></h2>
                <div v-html="post.excerpt"></div>

                <div class="post-meta">
                  <span><i class="fa fa-user"></i> By <a href="#">{{post.user.name}}</a> </span>
                  <span><i class="fa fa-tag"></i> {{post.category.name}}</span>
                  <router-link :to="'/'+blogDetail+post.id+'/'+post.slug" tag="a" class="btn btn-xs btn-primary pull-right">Read more...</router-link>
                </div>

              </div>
            </article>
            </div>
            <v-paginator :options="options" :resource_url="resource_url" @update="updateResource" class="pagination pagination-lg pull-right"></v-paginator>
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
                          <router-link :to="'/'+blogDetail+post.id+'/'+post.slug" tag="a">
                            <img :src="imgUrl+post.image" :alt="post.title" width="50px">
                          </router-link>
                        </div>
                      </div>
                      <div class="post-info">
                        <router-link :to="'/'+blogDetail+post.id+'/'+post.slug" tag="a">{{post.title | truncate(20,'...')}}</router-link>
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
                          <router-link :to="'/'+blogDetail+post.id+'/'+post.slug" tag="a">
                            <img :src="imgUrl+post.image" :alt="post.title" width="50px">
                          </router-link>
                        </div>
                      </div>
                      <div class="post-info">
                        <router-link :to="'/'+blogDetail+post.id+'/'+post.slug" tag="a">{{post.title | truncate(20,'...')}}</router-link>
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
</template>

<script>
  import VuePaginator from 'vuejs-paginator'
  import moment from 'moment'
  export default{
    components: {
      VPaginator: VuePaginator
    },
    data(){
        return {
          postData:[],
          blogDetail:'detail-article/',
          postNews :'',
          categorys:'',
          resource_url: 'api/post',
          imgUrl:'http://128.199.204.149/storage/',
          options: {
            remote_data: 'nested.data',
            remote_current_page: 'nested.current_page',
            remote_last_page: 'nested.last_page',
            remote_next_page_url: 'nested.next_page_url',
            remote_prev_page_url: 'nested.prev_page_url',
            next_button_text: 'Go Next',
            previous_button_text: 'Go Back'
          }
        }
    },

    mounted(){
      this.getNews()
      this.getCategory()
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
    methods: {
      getDate_ : function (date) {
        return moment(date, 'YYYY-MM-DD').format('DD');
      },
      getMont:function (date) {
        return moment(date, 'YYYY-MM-DD').format('MMM');
      },
      updateResource(data){
        this.postData = data
      },
      getNews(){
        this.$http.get('api/article-news')
          .then(response => {
            this.postNews = response.body.message
          })
      },
      getCategory(){
        this.$http.get('api/category')
          .then(response => {
            this.categorys= response.body.message
          })
      }
    }
  }
</script>
