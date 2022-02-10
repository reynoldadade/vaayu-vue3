<template>
  <div class="hello flex justify-center">
    <h1 class="">{{ msg }}</h1>
    <BeakerIcon class="h-6 w-6" />
  </div>
</template>

<script>
import { BeakerIcon } from "@heroicons/vue/solid";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    BeakerIcon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
