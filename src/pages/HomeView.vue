<template>
	<div class="contentbg">
		<div class="content">
			<!-- {{ hello }} -->
  		<article class="article" v-for="articles in articleList">
				<section class="article-content">
					<time>{{articles.date}}</time>
				  <h2><router-link :to="{name: 'articleView', params: { art: articles, id: articles.uniquekey }}">{{articles.title}}</router-link></h2>
			   </section>
			   <img :src="articles.thumbnail_pic_s" alt="">
    			<footer>
    				<router-link :to="{name: 'articleView', params: { art: articles, id: articles.uniquekey }}">阅读全文</router-link>
    			</footer>
  		</article>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home',
	data () {
		return {
			hello:"hello sunshine",
			articleList:[]
    	}
  	},
	created(){
		this.$axios("https://www.wwtliu.com/sxtstu/news/juhenews.php?type=junshi&count=30")
		.then(res => {
			this.articleList = res.data.result.data;
			console.log(res);
		})
		.catch(error =>{
			console.log(error);
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.contentbg{
	position: relative;
	height: 100%;
	width: 100%;
}
.content{
	position: relative;
/*	margin-left: 180px;
	height: 100%;
	width: 1006px;*/
	top: 40px;
	text-align: center;
}
section h2{
	font-size: 1.3rem;
  	font-weight: 500;
  	color: #494949;
}
.article{
	box-shadow: 5px 5px 25px #dadada;
	position: relative;
    padding: 0 20px;
    margin: 40px auto;
    max-width: 950px;
    background: #fff;
    text-align: center;
}
time{
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    padding: 4px 5px 0;
    color: #999;
}
section h2{
    line-height: 1.225;
    padding: 50px 0 45px;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
}
footer{
    padding: 25px 0 20px;
}
footer a{
    display: inline-block;
    color: #2D7D4D;
    cursor: pointer;
    padding: 4px 20px;
    border-radius: 5px;
    transition: all .5s;
    border: 1px solid #2D7D4D;
}
</style>
