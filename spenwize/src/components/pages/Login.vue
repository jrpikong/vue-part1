<template>
  <div>
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumb">
              <li><a href="#">Home</a></li>
              <li class="active">Pages</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h1>Login</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="container">

      <div class="row">
        <div class="col-md-12">

          <div class="featured-boxes">
            <div class="row">
              <div class="col-sm-6">
                <div class="featured-box featured-box-primary align-left mt-xlg" style="height: 327px;">
                  <div class="box-content">
                    <h4 class="heading-primary text-uppercase mb-md">I'm a Returning Customer</h4>
                    <form action="/" id="frmSignIn" method="post">
                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-12">
                            <label>Username or E-mail Address</label>
                            <input type="text" value="" class="form-control input-lg">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-12">
                            <a class="pull-right" href="#">(Lost Password?)</a>
                            <label>Password</label>
                            <input type="password" value="" class="form-control input-lg">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
															<span class="remember-box checkbox">
																<label for="rememberme">
																	<input type="checkbox" id="rememberme" name="rememberme">Remember Me
																</label>
															</span>
                        </div>
                        <div class="col-md-6">
                          <fb-signin-button
                            :params="fbSignInParams"
                            class="btn btn-default pull-right"
                            @success="onSignInSuccess"
                            @error="onSignInError">
                            Sign in with Facebook
                          </fb-signin-button>
                          <input type="submit" value="Login" class="btn btn-primary pull-right mb-xl" data-loading-text="Loading...">
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="featured-box featured-box-primary align-left mt-xlg" style="height: 327px;">
                  <div class="box-content">
                    <h4 class="heading-primary text-uppercase mb-md">Register An Account</h4>
                    <form action="/" id="frmSignUp" method="post">
                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-12">
                            <label>E-mail Address</label>
                            <input type="text" value="" class="form-control input-lg">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-6">
                            <label>Password</label>
                            <input type="password" value="" class="form-control input-lg">
                          </div>
                          <div class="col-md-6">
                            <label>Re-enter Password</label>
                            <input type="password" value="" class="form-control input-lg">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <input type="submit" value="Register" class="btn btn-primary pull-right mb-xl" data-loading-text="Loading...">
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        fbSignInParams: {
          scope: 'email,user_likes',
          return_scopes: true
        }
      }
    },
    methods: {
      onSignInSuccess (response) {
        FB.api('/me?locale=en_ID&fields=name,email,first_name', dude => {
          console.log('Good to see you '+ dude.name + dude.email+ dude.first_name)
        })
      },
      onSignInError (error) {
        console.log('OH NOES', error)
      }
    }
  }
</script>

<style>
  .fb-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #4267b2;
    color: #fff;
  }
</style>
