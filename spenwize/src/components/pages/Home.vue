<template>
  <div>
    <div role="main" class="main">
      <div class="slider-with-overlay">

        <div class="slider-container rev_slider_wrapper" style="height: 560px;">
          <div id="revolutionSlider" class="slider rev_slider" data-plugin-revolution-slider data-plugin-options="{'delay': 9000, 'gridwidth': 1170, 'gridheight': 560}">
            <ul>
              <li data-transition="fade">
                <img src="http://preview.oklerthemes.com/porto/5.7.2/img/slides/slide-bg-5.jpg"
                     alt=""
                     data-bgposition="center center"
                     data-bgfit="cover"
                     data-bgrepeat="no-repeat"
                     class="rev-slidebg">

                <div class="tp-caption"
                     data-x="137"
                     data-y="185"
                     data-start="1000"
                     data-transform_in="x:[-300%];opacity:0;s:500;"><img src="../../../static/img/slides/slide-title-border.png" alt=""></div>

                <div class="tp-caption top-label"
                     data-x="177"
                     data-y="180"
                     data-start="500"

                     data-transform_in="y:[-300%];opacity:0;s:500;">SPEND LATER</div>

                <div class="tp-caption"
                     data-x="330"
                     data-y="185"
                     data-start="1000"
                     data-transform_in="x:[300%];opacity:0;s:500;"><img src="../../../static/img/slides/slide-title-border.png" alt=""></div>

                <div class="tp-caption main-label"
                     data-x="135"
                     data-y="210"
                     data-start="1500"
                     data-whitespace="nowrap"
                     data-transform_in="y:[100%];s:500;"
                     data-transform_out="opacity:0;s:500;"
                     data-mask_in="x:0px;y:0px;">SAVE NOW</div>
                <div class="tp-caption bottom-label"
                     data-x="135"
                     data-y="280"
                     data-start="2000"
                     data-transform_in="y:[100%];opacity:0;s:500;">Coba kalkulator perencanaan keuangan &</div>
                <div class="tp-caption bottom-label"
                     data-x="135"
                     data-y="310"
                     data-start="2500"
                     data-transform_in="y:[100%];opacity:0;s:500;" >Temukan pilihan investasi yang sesuai dengan anda</div>

              </li>
            </ul>
          </div>
        </div>

        <div class="home-intro" id="home-intro">
          <div class="container">

            <div class="row">
              <div class="col-md-8">
                <p>
                  The fastest way to grow your business with the leader in <em>Technology</em>
                  <span>Check out our options and features included.</span>
                </p>
              </div>
              <div class="col-md-4">
                <div class="get-started">
                  <a href="#" class="btn btn-lg btn-primary">Get Started Now!</a>
                  <div class="learn-more">or <a href="index.html">learn more.</a></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="slider-contact-form">
          <div class="container">

            <div class="row">
              <div class="col-md-5 col-md-offset-7">

                <div class="featured-boxes mt-none mb-none">
                  <div class="tabs mb-xlg">
                    <ul class="nav nav-tabs">
                      <li class="active"><a href="#popularPosts" data-toggle="tab" aria-expanded="false"><i class="fa fa-star"></i> News</a></li>
                      <li class=""><a href="#recentPosts" data-toggle="tab" aria-expanded="true">Recent</a></li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane active" id="popularPosts">
                        <ul class="simple-post-list" v-for="post in postNews">
                          <li>
                            <div class="post-image">
                              <div class="img-thumbnail">
                                <router-link :to="blogDetail+post.id+'/'+post.slug" tag="a">
                                  <img :src="imgUrl+post.image" :alt="post.title" width="50px">
                                </router-link>
                              </div>
                            </div>
                            <div class="post-info">
                              <router-link :to="blogDetail+post.id+'/'+post.slug" tag="a">{{post.title | truncate(45,'...')}}</router-link>
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
                                <router-link :to="blogDetail+post.id+'/'+post.slug" tag="a">
                                  <img :src="imgUrl+post.image" :alt="post.title" width="50px">
                                </router-link>
                              </div>
                            </div>
                            <div class="post-info">
                              <router-link :to="blogDetail+post.id+'/'+post.slug" tag="a">{{post.title}}</router-link>
                              <div class="post-meta">
                                {{post.created_at}}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <router-link to="/article" class="btn btn-primary mb-xl" tag="a">More article</router-link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row center">
          <div class="col-md-12">
            <h1 class="mb-sm word-rotator-title">
              SpenWize adalah
              <strong class="inverted">
									<span class="word-rotate" data-plugin-options="{'delay': 2000, 'animDelay': 300}">
										<span class="word-rotate-items">
											<span>Kalkulator keuangan</span>
											<span>Edukasi Investasi</span>
											<span>Produk Investasi</span>
										</span>
									</span>
              </strong>
              <!--beautiful and fully responsive.-->
            </h1>
            <p class="lead">
              Saat ini perencanaan keuangan dan investasi tidak lagi hanya terbatas untuk kalangan berada, semua orang harus melek investasi untuk menyiasati laju inflasi.
<br>Perencanaan Keuangan dan Investasi dengan SpenWize semudah membalik telapak tangan.
Spenwize menyediakan kalkulator perencanaan keuangan, artikel edukasi yang mudah dicerna, , beserta pilihan berbagai jenis investasi yang dapat anda bandingkan antara satu sama lain. Semuanya dapat anda nikmati secara cuma-cuma.
Visi kami adalah ingin membuat bangsa Indonesia melek investasi. Tabung sekarang, gunakan kemudian…
          </p>
          </div>
        </div>
      </div>

      <div class="home-concept appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="500">
        <svg class="home-concept-bg" x="0px" y="0px" width="345px" height="93px" viewBox="0 0 345 83" enable-background="new 0 0 345 93" xml:space="preserve">
						<image overflow="visible" width="26" height="39" xlink:href="../../../static/img/home-concept-pin.png" transform="matrix(0.169 0.1308 -0.1308 0.169 339.8496 0.6826)" class="final-pin appear-animation" data-appear-animation="animated-pin" data-appear-animation-delay="3650">
						</image>
						<path class="line appear-animation" fill="none" stroke="#6f6f6f" stroke-width="0.25" stroke-miterlimit="0" stroke-dasharray="0" data-appear-animation="animated-line" data-appear-animation-duration="4s" d="M7.086,87.455c8.133-8.646,54.247-51.634,155.173-36.766C268.762,66.38,327.34,17.642,337.992,10.241"/>
						<path fill="none" stroke="#FFF" stroke-width="0.50" stroke-miterlimit="10" stroke-dasharray="1,2.5" d="M7.086,87.455c8.133-8.646,54.247-51.634,155.173-36.766C268.762,66.38,327.34,17.642,337.992,10.241"/>
						<image overflow="visible" width="26" height="39" xlink:href="static/img/home-concept-pin.png" transform="matrix(0.2137 0 0 0.2137 1 81.5898)" class="initial-pin appear-animation" data-appear-animation="animated-pin">
						</image>
					</svg>
        <div class="container">
          <div class="row center">
            <span class="sun"></span>
            <span class="cloud"></span>
            <div class="col-md-2 col-md-offset-1">
              <div class="process-image">
                <div class="box-image">
                  <svg class="small-circle" x="0px" y="0px" width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">
											<circle class="line appear-animation" fill="#FFF" stroke="#6f6f6f" stroke-width="0.25" stroke-miterlimit="0" stroke-dasharray="0" data-appear-animation="animated-line" data-appear-animation-delay="800" cx="19.5" cy="19.5" r="19.063"/>
											<circle fill="none" stroke="#FFF" stroke-width="0.50" stroke-miterlimit="10" stroke-dasharray="1,2.5" cx="19.5" cy="19.5" r="19.063"/>
										</svg>
                  <img src="../../../static/img/pelajari.png" alt="" class="appear-animation" data-appear-animation="zoomIn" data-appear-animation-duration="300" data-appear-animation-delay="1400" />
                </div>
                <strong class="appear-animation" data-appear-animation="fadeInDown" data-appear-animation-delay="1150" data-plugin-options="{'accY': 200}">Rencanakan</strong>
              </div>
            </div>
            <div class="col-md-2">
              <div class="process-image">
                <div class="box-image">
                  <svg class="small-circle" x="0px" y="0px" width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">
											<circle class="line appear-animation" fill="#FFF" stroke="#6f6f6f" stroke-width="0.25" stroke-miterlimit="0" stroke-dasharray="0" data-appear-animation="animated-line" data-appear-animation-delay="1200" cx="19.5" cy="19.5" r="19.063"/>
											<circle fill="none" stroke="#FFF" stroke-width="0.50" stroke-miterlimit="10" stroke-dasharray="1,2.5" cx="19.5" cy="19.5" r="19.063"/>
										</svg>
                  <img src="../../../static/img/rencanakan.png" alt="" class="appear-animation" data-appear-animation="zoomIn" data-appear-animation-duration="300" data-appear-animation-delay="1900" />
                </div>
                <strong class="appear-animation" data-appear-animation="fadeInDown" data-appear-animation-delay="2150" data-plugin-options="{'accY': 200}">Pelajari</strong>
              </div>
            </div>
            <div class="col-md-2">
              <div class="process-image">
                <div class="box-image">
                  <svg class="small-circle" x="0px" y="0px" width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">
											<circle class="line appear-animation" fill="#FFF" stroke="#6f6f6f" stroke-width="0.25" stroke-miterlimit="0" stroke-dasharray="0" data-appear-animation="animated-line" data-appear-animation-delay="1700" cx="19.5" cy="19.5" r="19.063"/>
											<circle fill="none" stroke="#FFF" stroke-width="0.50" stroke-miterlimit="10" stroke-dasharray="1,2.5" cx="19.5" cy="19.5" r="19.063"/>
										</svg>
                  <img src="../../../static/img/investasi.png" alt="" class="appear-animation" data-appear-animation="zoomIn" data-appear-animation-duration="300" data-appear-animation-delay="2400" />
                </div>
                <strong class="appear-animation" data-appear-animation="fadeInDown" data-appear-animation-delay="2650" data-plugin-options="{'accY': 200}">Investasi</strong>
              </div>
            </div>
            <div class="col-md-4 col-md-offset-1">
              <div class="project-image">
                <div class="box-image">
                  <svg class="big-circle" x="0px" y="0px" width="85px" height="85px" viewBox="0 0 85 85" enable-background="new 0 0 85 85" xml:space="preserve">
											<circle class="line appear-animation" fill="#FFF" stroke="#6f6f6f" stroke-width="0.25" stroke-miterlimit="0" stroke-dasharray="0" data-appear-animation="animated-line" data-appear-animation-delay="2250" cx="42.5" cy="42.5" r="42.063"/>
											<circle fill="none" stroke="#FFF" stroke-width="0.50" stroke-miterlimit="10" stroke-dasharray="1,2.5" cx="42.5" cy="42.5" r="42.063"/>
										</svg>
                  <div id="fcSlideshow" class="fc-slideshow appear-animation" data-appear-animation="zoomIn" data-appear-animation-duration="300" data-appear-animation-delay="2900">
                    <ul class="fc-slides">
                      <li><a href="#"><img class="img-responsive" src="../../../static/img/goal.png" alt="" /></a></li>
                      <li><a href="#"><img class="img-responsive" src="../../../static/img/goal.png" alt="" /></a></li>
                      <li><a href="#"><img class="img-responsive" src="../../../static/img/goal.png" alt="" /></a></li>
                    </ul>
                  </div>
                </div>
                <strong class="our-work appear-animation" data-appear-animation="fadeInDown" data-appear-animation-delay="3150" data-plugin-options="{'accY': 300}">Goal & Impian Anda</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="container">
        <div class="row">
          <hr class="tall">
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 center">
            <h2 class="mb-sm word-rotator-title">Kalkulator Perencanaan Keuangan.</h2>
            <h4 class="heading-primary lead tall">
              Setiap goal keuangan mempunyai pendekatan yang sedikit berbeda antara satu sama lain.
              Coba kalkulator kami untuk perencanaan keuangan anda.
              Selanjutnya, temukan dan bandingkan berbagai macam pilihan produk investasi beserta
              penyedia jasa investasi yang paling sesuai dengan anda</h4>
          </div>
          <div class="col-md-12">
            <div class="featured-boxes featured-boxes-flat">
              <div class="row">
                <router-link to="/calculators" tag="a">
                  <div class="col-md-3 col-sm-6">
                    <div class="featured-box featured-box-primary featured-box-effect-2" style="height: 206px;">
                      <div class="box-content">
                        <i class="icon-featured fa fa-user"></i>
                        <h4>Dana Pensiun</h4>
                        <p> Dana yang dapat digunakan untuk menunjang kebutuhan hidup di periode setelah berhenti bekerja secara produktif (usia pensiun di Indonesia adalah rata-rata 55 tahun).</p>
                      </div>
                    </div>
                  </div>
                </router-link>

                <router-link to="/calculators" tag="a">
                  <div class="col-md-3 col-sm-6">
                    <div class="featured-box featured-box-tertiary featured-box-effect-2" style="height: 206px;">
                      <div class="box-content">
                        <i class="icon-featured fa fa-bolt"></i>
                        <h4>Dana Emergency</h4>
                        <p>Mengapa harus memiliki dana emergency? Karena banyak sekali hal berisiko yang dapat terjadi di masa depan dan dapat dimitigasi dengan menyisihkan sebagian dana sebagai dana emergency.</p>
                      </div>
                    </div>
                  </div>
                </router-link>
                <router-link to="/calculators" tag="a">
                  <div class="col-md-3 col-sm-6">
                    <div class="featured-box featured-box-secondary featured-box-effect-2" style="height: 206px;">
                      <div class="box-content">
                        <i class="icon-featured fa fa-building"></i>
                        <h4>Dana Usaha</h4>
                        <p>Dengan SpenWize, kami akan membantu Anda mengoptimalkan nilai dari uang yang Anda miliki untuk dapat menjadi Dana Usaha yang Anda inginkan.</p>
                      </div>
                    </div>
                  </div>
                </router-link>
                <router-link to="/calculators" tag="a">
                  <div class="col-md-3 col-sm-6">
                    <div class="featured-box featured-box-quaternary featured-box-effect-2" style="height: 206px;">
                      <div class="box-content">
                        <i class="icon-featured fa fa-home"></i>
                        <h4>Renovasi / Furniture</h4>
                        <p>Kini Anda dapat merencanakan renovasi rumah dan home furnishing bersama SpenWize dan Venoue, partner terpercaya untuk mewujudkan rumah impian Anda.</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="row">
                <router-link to="/calculators" tag="a">
                  <div class="col-md-3 col-sm-6">
                    <div class="featured-box featured-box-primary featured-box-effect-2" style="height: 2010px;">
                      <div class="box-content">
                        <i class="icon-featured fa fa-car"></i>
                        <h4>Mobil</h4>
                        <p>Bagi sebagian besar orang, mobil merupakan hal yang dikategorikan sebagai big ticket item. Biaya pembelian maupun pemeliharaannya juga mahal.</p>
                      </div>
                    </div>
                  </div>
                </router-link>
                <router-link to="/calculators" tag="a">
                  <div class="col-md-3 col-sm-6">
                    <div class="featured-box featured-box-tertiary featured-box-effect-2" style="height: 233px;">
                      <div class="box-content">
                        <i class="icon-featured fa fa-mars-double"></i>
                        <h4>Pernikahan / Event khusus</h4>
                        <p>Keuangan juga merupakan faktor yang penting yang dapat disiapkan dari jauh-jauh hari! Investasikan sebagian dari pendapatan kamu sebagai modal pernikahan</p>
                      </div>
                    </div>
                  </div>
                </router-link>
                <router-link to="/calculators" tag="a">
                  <div class="col-md-3 col-sm-6">
                    <div class="featured-box featured-box-secondary featured-box-effect-2" style="height: 233px;">
                      <div class="box-content">
                        <i class="icon-featured fa fa-book"></i>
                        <h4>Dana Pendidikan</h4>
                        <p> Tingginya inflasinya pendidikan mengharuskan Anda untuk dapat menyiasatinya dengan cerdas mengelola keuangan melalui investasi.</p>
                      </div>
                    </div>
                  </div>
                </router-link>
                <router-link to="/calculators" tag="a">
                  <div class="col-md-3 col-sm-6">
                    <div class="featured-box featured-box-quaternary featured-box-effect-2" style="height: 233px;">
                      <div class="box-content">
                        <i class="icon-featured fa fa-plane"></i>
                        <h4>Umrah / Liburan</h4>
                        <p>Niat yang baik harus dimulai dengan perencanaan yang matang. Wujudkan niat Anda dalam menunaikan ibadah umroh melalui pengelolaan keuangan dan investasi bersama SpenWize sekarang!</p>
                      </div>
                    </div>
                  </div>
                </router-link>

              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section section-custom-map">
        <section class="section section-default section-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="recent-posts mb-xl">
                  <h2>Newsletter</h2>
                  <div class="row">
                    <div class="">
                      <div class="owl-stage-outer">
                        <h4 class="heading-primary">Ikuti perkembangan layanan & artikel terbaru dari kami. Masukan email anda dan subscribe newsletter kami</h4>
                        <form class="form-horizontal"  @submit.prevent="sendNewsletter">
                          <div class="form-group form-group-lg">
                            <div class="col-sm-12">
                              <div class="input-group">
                                <input type="text" name="sld" v-model="email_newsletter" class="form-control" aria-label="..." placeholder="Enter your email" required="" data-msg-required="Please enter your domain." aria-required="true">
                                <div class="input-group-btn">
                                  <button type="submit" class="btn btn-default btn-lg" aria-expanded="false" id="tldBtn">Send</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="btn btn-lg btn-primary mt-md" href="#">or Register Here</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h2><strong>and</strong> More...</h2>
                <div class="row">
                  <div class="">
                    <div class="col-md-12">
                      <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                          <div class="panel-heading">
                            <h4 class="panel-title">
                              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                <i class="fa fa-usd"></i>
                                Beriklan dengan kami
                              </a>
                            </h4>
                          </div>
                          <div id="collapseOne" class="accordion-body collapse in">
                            <div class="panel-body">
                              Kami membuka kerjsama untuk pemasangan iklan.
                            </div>
                          </div>
                        </div>
                        <!--<div class="panel panel-default">-->
                          <!--<div class="panel-heading">-->
                            <!--<h4 class="panel-title">-->
                              <!--<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">-->
                                <!--<i class="fa fa-comment"></i>-->
                                <!--T&C-->
                              <!--</a>-->
                            <!--</h4>-->
                          <!--</div>-->
                          <!--<div id="collapseTwo" class="accordion-body collapse">-->
                            <!--<div class="panel-body">-->
                              <!--Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.-->
                            <!--</div>-->
                          <!--</div>-->
                        <!--</div>-->
                        <div class="panel panel-default">
                          <div class="panel-heading">
                            <h4 class="panel-title">
                              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                <i class="fa fa-laptop"></i>
                                Privacy Policy
                              </a>
                            </h4>
                          </div>
                          <div id="collapseThree" class="accordion-body collapse">
                            <div class="panel-body">
                              Jika Anda memerlukan informasi lebih lanjut atau memiliki pertanyaan lain tentang kebijakan privasi pada spenwize.com, silahkan menghubungi pada email info@venoue.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            postNews:'',
            imgUrl:'http://128.199.204.149/storage/',
            blogDetail:'detail-article/',
            email_newsletter:""
        }
    },
  mounted() {
    this.$http.get('api/article-news')
      .then(response => {
        this.postNews = response.body.message
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
    sendNewsletter(){
      var postData = {
        email : this.email_newsletter
      }

      this.$http.post('api/newsletter',postData)
        .then(response => {
          this.$swal('Sukses ..',
            'Terima Kasih telah berlangganan pada situs SpenWize',
            'success')
        })
        .catch(function (error) {
          this.$swal('Error .. ',
            "Maaf Email sudah terdaftar",
            'error')
        })
    }
  }
}
</script>
