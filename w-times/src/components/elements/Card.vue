<template>
    <div>
        <div class="header" id="header">
            <div class="featured-news-slider">
                <div class="featured-slider-2 owl-carousel owl-theme">
                  <div v-if="headLines" v-for="(headLine, index) in headLines">
                    <div class="item">
                    <div class="post-content">
                      <div class="catname">
                        <a :class="'btn btn-'+headLine.category.color" href="#">
                          <div>{{headLine.category.name}}</div>
                        </a>
                      </div>
                      <h5> <a href="#">{{headLine.title}}</a> </h5>
                      <ul class="post-tools">
                        <li> by <a href=""><strong> {{headLine.author_id.name}}</strong></a> </li>
                        <li>  {{headLine.created_at}} </li>
                        <li> <a href=""><i class="ti-thought"></i> 99 </a></li>
                      </ul>
                    </div>
                    <div class="post-thumb"> <a href=""><img style="height: 450px;" alt="" v-if="headLine.image" :src="imgUrl+headLine.image"></a> </div>
                  </div>
                  </div>
                  <div class="item">
                    <div class="post-content">
                      <div class="catname">
                        <a class="btn btn-gray" href="#">
                          <div>Food and Health</div>
                        </a>
                      </div>
                      <h5> <a href="#">Breakfast Containing juices</a> </h5>
                      <ul class="post-tools">
                        <li> by <a href=""><strong> Arslan Ch</strong></a> </li>
                        <li>  2 days Ago </li>
                        <li> <a href=""><i class="ti-thought"></i> 99 </a></li>
                      </ul>
                    </div>
                    <div class="post-thumb"> <a href=""><img alt="" src="../../../static/images/posts/top-slider/10.jpg"></a> </div>
                    <div class="hover-show-div hidden-xs">
                      <a href="" class="post-type">
                        <i class="ti-music-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  /* eslint-disable space-before-blocks,key-spacing,indent */
  import { imgUrl } from '../../env'
  import { getheadline } from '../../api'
  export default{
    data () {
      return {
        headLines: [],
        imgUrl
      }
    },
    created (){
      this.get_headLine()
    },
    methods: {
      get_headLine (){
        this.$http.get(getheadline)
          .then((response) => {
            this.headLines = response.data.data
          })
      }
    }
  }
</script>
