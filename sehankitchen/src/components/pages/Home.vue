<template>
  <div>
    <!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators hidden-xs">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="first-slide" src="./../../assets/images/slider-1.png" alt="First slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>Example headline.</h1>
              <p>URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
              <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div><!-- /.carousel -->

    <section id="culinaryPleasure">
      <div class="container text-center">
        <h2 class="title-section">Culinary<p>Pleasure</p></h2>
        <div class="col-md-3 col-xs-6 text-center">
          <img src="./../../assets/images/pelayanan_terbaik.png" style="display:inline;" class="img-responsive"/>
          <h3 class="title-culinary">Pelayanan Terbaik</h3>
        </div>
        <div class="col-md-3 col-xs-6 text-center">
          <img src="./../../assets/images/bahan_makanan_segar.png" style="display:inline;" class="img-responsive"/>
          <h3 class="title-culinary">Bahan Makanan Segar</h3>
        </div>
        <div class="col-md-3 col-xs-6 text-center">
          <img src="./../../assets/images/rasa_terbaik.png" style="display:inline;" class="img-responsive"/>
          <h3 class="title-culinary">Rasa Terbaik</h3>
        </div>
        <div class="col-md-3 col-xs-6 text-center">
          <img src="./../../assets/images/hallal.png" style="display:inline;" class="img-responsive"/>
          <h3 class="title-culinary">Bersetifikasi</h3>
        </div>
      </div>
    </section>

  </div>
</template>
