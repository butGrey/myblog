<template>
  <footer class="font">
    <section id="copyright">
      <p>" Copyright © 2018 noWhite. All Rights Reserved. "<br>" Powered by Element UI + Vue2.x "</p>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footers',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font {
    position: relative;
    height: 160px;
    border-top: 1px solid #eee;
    color: hsla(0,0%,100%,.69);
    font-size: 12px;
    text-align: center;
    border-top: 2px dashed #ADBC93;
    transition: height .1s 1s;
    margin-top: 90px;
}
#copyright {
    position: absolute;
    top: 0;
    left: 0;
    background: #7B975D;
    width: 100%;
    height: 100%;
    transform-origin: 100% 0;
    transition: all .5s;
}
#copyright p {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    line-height: 2;
}
</style>
