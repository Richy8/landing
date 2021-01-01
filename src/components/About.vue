<template>
    <div container-fluid m-0 p-0>
        <div id="about" class="bg-light p-3 p-md-5">
            <div class="row">
                <div class="col-lg">
                    <img src="../assets/study.jpeg" height="120" class="m-4">
                    <div>
            <h2 class="v-step-1">Get Access To All Our New Features</h2>
            <ul class="li-list" data-v-step="2">
            <li><router-link to="/">1. Login</router-link></li>
            <li><router-link to="/add">2. Product</router-link></li>
            <li><router-link to="/add">3. Services</router-link></li>
            <li><router-link to="/add">4. Sign Up</router-link></li>
            
            </ul>
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

    .li-list {
        list-style: none;
    }
</style>
