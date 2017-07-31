<template>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="footer-ribbon">
          <span>Get in Touch</span>
        </div>
        <div class="col-md-3">
          <div class="newsletter">
            <h4>Spenwize.com</h4>
            <p>Saat ini perencanaan keuangan dan investasi tidak lagi hanya terbatas untuk kalangan berada, semua orang harus melek investasi untuk menyiasati laju inflasi. Perencanaan Keuangan dan Investasi dengan SpenWize semudah membalik telapak tangan. Spenwize menyediakan kalkulator perencanaan keuangan, artikel edukasi yang mudah dicerna.</p>
          </div>
        </div>
        <div class="col-md-3">
          <h4>Latest Tweets</h4>
          <div class="twitter">
            <Tweet :id="'884111485147807744'"  :options="{ theme: 'dark' }"></Tweet>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact-details">
            <h4>Contact Us</h4>
            <ul class="contact">
              <li><p><i class="fa fa-map-marker"></i> <strong>Address:</strong> Graha Inovasi, Jalan Panjang Raya No.28A, Kebon Jeruk, Jakarta Barat 11530</p></li>
              <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> (+6221) 533 1877</p></li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <h4>Follow Us</h4>
          <ul class="social-icons">
            <li class="social-icons-facebook"><a href="https://www.facebook.com/profile.php?id=100011710715295" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
            <li class="social-icons-twitter"><a href="https://twitter.com/VenoueId" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a></li>
            <li class="social-icons-linkedin"><a href="https://www.linkedin.com/in/venoue-com-959b5b125/" target="_blank" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-1">
            <a href="/" class="logo">
              <img alt="Porto Website Template" class="img-responsive" src="./../assets/spenwize_logo.png">
            </a>
          </div>
          <div class="col-md-7">
            <p>© Copyright 2017. All Rights Reserved.</p>
          </div>
          <div class="col-md-4">
            <nav id="sub-menu">
              <ul>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import Vue from 'vue'
  import Tweet from 'vue-tweet-embed'
  export default{
    data(){
        return{
            twet_:""
        }
    },
    components: {
      'Tweet': Tweet
    },
    mounted(){

    }
  }
</script>
