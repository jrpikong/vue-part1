<template>
  <div role="main" class="main">

    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumb">
              <li><a href="#">Home</a></li>
              <li class="active">Contact Us</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Maps - Go to the bottom of the page to change settings and map location. -->
    <!--<div id="googlemaps" class="google-map"></div>-->

    <div class="container">

      <div class="row">
        <div class="col-md-6">

          <div class="alert alert-success hidden mt-lg" id="contactSuccess">
            <strong>Success!</strong> Your message has been sent to us.
							</div>

          <div class="alert alert-danger hidden mt-lg" id="contactError">
            <strong>Error!</strong> There was an error sending your message.
								<span class="font-size-xs mt-sm display-block" id="mailErrorMessage"></span>
          </div>

          <h2 class="mb-sm mt-sm"><strong>Contact</strong> Us</h2>
          <form id="contactForm" @submit.prevent="submit">
            <div class="row">
              <div class="form-group">
                <div class="col-md-6">
                  <label>Your name *</label>
                  <input type="text" value="" data-msg-required="Please enter your name." maxlength="100" class="form-control" name="name" id="name" v-model="form.name" required>
                </div>
                <div class="col-md-6">
                  <label>Your email address *</label>
                  <input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" class="form-control" name="email" v-model="form.email" id="email" required>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <div class="col-md-12">
                  <label>Subject</label>
                  <input type="text" value="" data-msg-required="Please enter the subject." maxlength="100" class="form-control" name="subject" v-model="form.subject" id="subject" required>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <div class="col-md-12">
                  <label>Message *</label>
                  <textarea maxlength="5000" v-model="form.body" data-msg-required="Please enter your message." rows="10" class="form-control" name="body" id="message" required></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input type="submit" value="Send Message" class="btn btn-primary btn-lg mb-xlg" data-loading-text="Loading...">
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-6">

          <h4 class="heading-primary mt-lg">Get in <strong>Touch</strong></h4>
          <p>Saat ini perencanaan keuangan dan investasi tidak lagi hanya terbatas untuk kalangan berada, semua orang harus melek investasi untuk menyiasati laju inflasi. Perencanaan Keuangan dan Investasi dengan SpenWize semudah membalik telapak tangan. Spenwize menyediakan kalkulator perencanaan keuangan, artikel edukasi yang mudah dicerna.</p>

          <hr>

          <h4 class="heading-primary">The <strong>Office</strong></h4>
          <ul class="list list-icons list-icons-style-3 mt-xlg">
            <li><i class="fa fa-map-marker"></i> <strong>Address:</strong> Graha Inovasi, Jalan Panjang Raya No.28A, Kebon Jeruk, Jakarta Barat 11530</li>
            <li><i class="fa fa-phone"></i> <strong>Phone:</strong> (+6221) 533 1877</li>
          </ul>

        </div>

      </div>

    </div>

  </div>
</template>
<script>
  export default{
      data(){
          return{
              form:{
                  name:'',
                  email:'',
                  subject:'',
                  body:''
              }
          }
      },
      methods:{
          submit(){
              var dataPost = {
                name:this.form.name,
                email:this.form.email,
                subject:this.form.subject,
                body:this.form.body,
                scope: ''
            }

            this.$http.post('api/contact',dataPost)
              .then(response =>{
                this.$swal('Register Sukses .. ',
                  response.body.message,
                  'success')
              })
              .catch(function (error) {
                this.$swal('Gagal .. ',
                  "Maaf Pengiriman Gagal, Silahkan Coba lagi",
                  'error')
              })
          }
      }
  }
</script>
