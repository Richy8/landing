<template>
    <div container-fluid m-0 p-0>
    
        <div id="footer" class="p-4">
            <footer class="text-light p-4">
                <a href="https://www.abc.com" target="_blank" class="text-warning"> All right reserved </a>
                <a href="#" class="text-warning">Privacy Policy</a>
                <br>
                <small id="v-step-2">&copy; 2020, Landing Page</small>
            </footer>
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
