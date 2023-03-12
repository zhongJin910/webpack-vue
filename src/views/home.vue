<template>
  <div class="ss">
    <div>00</div>
  </div>
</template>

<script>
import { setCookie, getCookie } from '@/utils/cookies'
export default {
  mounted() {
    setCookie('nuserName', 'root', true)
    setTimeout(() => {
      console.log(getCookie('nuserName'));
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.ss {
  div {
    color: red;
  }
}
</style>
