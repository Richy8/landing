<template>
    <div container-fluid m-0 p-0>
        <div id="contact" class="p-4">
            <div class="row justify-content-center mt-3 mb-3">

                <div class="col-lg-4 v-step-1">
                    <h2>Have Any Questions?</h2>
                    <p>Contact us by filling out the information below</p>

                    <form>
                        <div class="form-group text-left">
                            <input type="email"
                                class="form-control"
                                placeholder="Enter-Email"
                                >
                            <textarea class="form-control mt-3"
                                placeholder="Enter Your Message"
                                rows="5">
                            </textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
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
