<template>
  <header id="header" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 90, 'stickySetTop': '-145px'}">
    <div class="header-body">
      <div class="header-container container">
        <div class="header-row">
          <div class="header-column header-column-center">
            <div class="header-logo">
              <a href="/">
                <img alt="Porto" width="222" height="108" src="./../assets/spenwize_logo.png">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="header-container container header-nav header-nav-center">
        <button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
          <i class="fa fa-bars"></i>
        </button>
        <div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
          <nav>
            <ul class="nav nav-pills" id="mainNav">
              <li><a href="/">Home</a></li>
              <router-link to="/article" tag="li"><a>Article</a></router-link>
              <li><a href="https://venoue.com/" target="_blank">Venoue.com</a></li>
              <router-link to="/contact" tag="li"><a>Contact Us</a></router-link>

              <!--<li class="dropdown">-->
                <!--<a class="dropdown-toggle" href="#">More</a>-->
                <!--<ul class="dropdown-menu">-->
                  <!--<router-link to="/login" tag="li"><a>Login</a></router-link>-->
                <!--</ul>-->
              <!--</li>-->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
