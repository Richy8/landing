<template>
  <div>
    <!-- <div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div> -->
    <!-- <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div> -->
    <!-- <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div> -->

    <v-tour name="myTour" :steps="steps"></v-tour>
  </div>
</template>

<script>
  export default {
    name: 'my-tour',
    data () {
      return {
        steps: [
          {
            target: '.v-step-00',  // We're using document.querySelector() under the hood
            content: `This is your <strong>Landing Page</strong>`
          },
          {
            target: '.v-step-011',  // We're using document.querySelector() under the hood
            content: `See new features`
          },
          {
            target: '[data-v-step="2"]',
            content: 'Get the app',
            params: {
              placement: 'top'
            }
          }
        ]
      }
    },
    mounted: function () {
      this.$tours['myTour'].start()
    }
  }
</script>

<style>
    .v-step {
      background-color: #fff !important;
      color: black !important;
    }

     

  .v-step__button {
    border: .05rem solid rgb(141, 202, 240) !important;
    color: black !important;
    background: rgb(141, 202, 240) !important;
    border-radius: 20rem !important;
  }

  .v-step__button-skip {
    background: #fff !important;
    border: none !important;
    margin-right: 5rem !important;
  }

</style>