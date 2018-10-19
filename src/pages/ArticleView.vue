<template>
	<div>
        <div class="contentbg">
            <div class="content">
            <!-- {{ hello }} -->
            <article class="article">
                <section class="article-content">
                    <time>{{$route.params.art.date}}</time>
                    <h2>{{ $route.params.art.title }}</h2>
                    <img :src="$route.params.art.thumbnail_pic_s" alt="">
                    <p>{{$route.params.art.url}}</p>
               </section>
           </article>
            </div>
        </div>
    </div>
</template>

<script>
export default { 
	name: 'articleView',
	data () {
		return {
			arts:"$route.params.art"
    	}
  	}
	// computed:{
	// 	getCount(){
	// 		return this.$store.state.count;
	// 	}
	// }
 //  	created () {
 //    // Getting route params
 //    const id = this.$route.params.id
	// }
}
</script>

<style scoped>

</style>
