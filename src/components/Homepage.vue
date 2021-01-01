<template>
    <div container-fluid m-0 p-0>
        <div id="home-page" class="full-height p-4">
            <div class="container pt-3">

                <div class="row pb-5">
                    <div class="col-lg-6 pt-4 my-auto v-step-00 v-step-011">
                        <div class="text-center mb-3 d-block d-lg-none">
                            <h1 class="display-3">{{ title }} </h1>
                            <h3>Study from home</h3>
                        </div>
                        <img id="app-img" src="../assets/app.jpeg" class="img-fluid">
                    </div>

                    <div class="col-lg-6 my-auto pt-4" data-v-step="2">
                        <div class="text-center mb-3 d-none d-lg-block v-step-0">
                            <h1 class="display-3">{{ title }} </h1>
                            <h3>Study from home</h3>
                        </div>

                        <div class="border p-3 p-md-5 bg-white rounded shadow">
                            <h2> Coming Soon </h2>
                            <form>
                                <div class="form-group">
                            <label for="emailSignup"> Reserve your account now, we'll contact you when it's live</label>
                            <input id="emailSignup" 
                            placeholder="Enter Email"
                            class="form-control"
                            >
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email address</small>
                            <button type="submit" class="btn btn-success mt-3">Join Waiting List</button>
                                </div>
                        </form>
                        </div>

                                <div id="available" class="p-2">
                                    <h4 class="text-center mb-2 mt-3 text-light">
                                        Available On
                                    </h4>
                                    <div class="row">
                                        <div class="col my-auto">
                                            <a href="#">
                                            <img src="../assets/play1.png" class="float-right img-fluid app_store_img">
                                            </a>
                                        </div>
                                        <div class="col my-auto">
                                            <a href="#">
                                            <img src="../assets/apple.png" class="float-left img-fluid app_store_img">
                                            </a>
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
      return{
          title: 'Landing Page',
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #home-page{
        background-color: #92D2F2;
        background: url('../assets/study.jpeg') no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    #about {
        min-height: 40vh;
    }

    #app-img {
        max-height: 80vh;
    }

    #contact {
        background: #57AEAF;
    }

    #footer {
        background-color: #252223;
    }

    .app_store_img {
        max-height: 80px;
    }
</style>
