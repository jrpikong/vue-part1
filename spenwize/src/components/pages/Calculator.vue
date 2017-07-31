<template>
  <div role="main" class="main">
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumb">
              <li><a href="#">Home</a></li>
              <li class="active">Kalkulator</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h1>Kalkulator</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="col-md-6">
        <h2 class="mb-sm mt-sm"><strong>Kalkulator</strong> Perhitungan</h2>
        <form id="contactForm" @submit.prevent="hitung">
          <div class="row">
            <div class="form-group">
              <div class="col-md-6">
                <label>Profile Resiko</label>
                <select name="profile_resiko" class="form-control" v-model="form.profile_resiko" required>
                  <option value="">Pilih Resiko</option>
                  <option value="0.47">Konservatif</option>
                  <option value="0.90">Moderat</option>
                  <option value="1.33">Agresif</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6"><label>Investasi Perbulan</label>
                <div class="input-group">
                  <div class="input-group-addon">Rp.</div>
                  <input type="text" class="form-control" placeholder="1000000" required v-model="form.formattedCurrencyValue" @blur="focusOut" @focus="focusIn">
                </div>
              </div>
              <div class="col-md-6"><label>Lama waktu investasi</label>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Input Dalam Bulan" required v-model="form.waktu">
                  <div class="input-group-addon">Bulan</div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><label>Target hasil investasi</label>
                <div class="input-group">
                  <div class="input-group-addon">Rp.</div>
                  <input type="text" class="form-control" readonly  placeholder="Investasi Perbulan" required v-model="form.hasil">
                </div>
              </div>
            </div>

          </div>
          <div class="row">
            <div class="col-md-12">
              <input type="submit" value="Hitung" class="btn btn-primary btn-lg mb-xlg" data-loading-text="Loading...">
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <h4 class="heading-primary mt-lg">Asumsi yang digunakan dalam simulasi<strong> Spenwize</strong></h4>
        <p>Imbal hasil Profil Risiko Konservatif: 5.6% p.a. Asumsi yang digunakan adalah rata-rata historis inflasi inti 10 tahun terakhir </p>
        <p>Imbal hasil Profil Risiko Moderat): 10.75% p.a. Asumsi yang digunakan adalah pengembalian Reksa Dana berbasis campuran antara Saham dan Obligasi yang dianggap mencerminkan profil risiko moderat</p>
        <p>Imbal hasil Profil Risiko Agresif:  15.9% p.a. Asumsi yang digunakan adalah rata-rata pengembalian asset berisiko lebih tinggi seperti Reksa Dana berbasis Saham, atau Peer-to-Peer Lending</p>
        <p style="font-size: 11px;"><i>(*) Asumsi-asumsi di atas akan sangat dipengaruhi oleh kondisi makro dan mikro ekonomi Indonesia</i></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return{
              form:{
                  profile_resiko:"",
                  waktu:0,
                  hasil:0,
                  currencyValue:0,
                  formattedCurrencyValue:""
              }
          }
      },
      methods:{
          hitung () {
              var profileResiko = this.form.profile_resiko;
              var targetInvestasi = this.remomovePoint(this.form.formattedCurrencyValue);
              var waktu = this.form.waktu;
              var variable1 = 1+ (profileResiko/100) ;
              var variable2 = Math.pow(variable1,waktu);
              var variable3 = variable2 - 1;
              var variable4 = variable3 / (profileResiko/100);
              this.form.hasil = this.formatPrice(Math.round(variable4 * targetInvestasi));
          },
          formatPrice(value) {
              let val = (value/1).toFixed(2).replace('.', ',')
              return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
          },
          focusOut: function() {
              this.form.currencyValue = parseFloat(this.form.formattedCurrencyValue.replace(/[^\d\.]/g, ""))
              if (isNaN(this.form.currencyValue)) {
                this.form.currencyValue = 0
              }
              this.form.formattedCurrencyValue =this.form.currencyValue.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
          },
          focusIn: function() {
              this.form.formattedCurrencyValue = this.form.currencyValue.toString()
          },
          remomovePoint:function (val) {
              return parseFloat(val.replace(/[^\d\.]/g, ""))
          }
      }
  }
</script>
