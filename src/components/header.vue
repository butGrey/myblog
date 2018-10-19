<template>
	<div>
		<header id="header">
			<nav>
			  	<ul>
			  		<li>
			  			<router-link to="/">首页</router-link>
			  			<a href="#">demo</a>
			  		</li>
			  	</ul>
			  	<div class="info" @mouseover="myinfo" @mouseout="dmyinfo">
			  		<figure></figure>
			  		<span>订阅我</span>
			  		<div class="pull_down" v-show="show"><img src="#"/></div>
			  	</div>
	  		</nav>
		</header>
		<div class="bg">
	  		<p>Hello , Sunshine .</p>
	  	</div>
 	</div>
</template>

<script>
export default {
  name: 'Headers',
  data () {
    return {
  		show:false
    }
  },
  methods:{
	myinfo(){
	    this.show="ture";//this指向当前组件
	},
	dmyinfo(){
		this.show=!this.show;
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header{
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	height: 66px;
	width: 100%;
}
nav{
	position: relative;
	align-content: center;
	width: 80%;
	height: 66px;
	margin: 0 auto;
}

ul{
	list-style-type: none;
	float: left;
	height: 100%;
	width: 100%;
}
li{
	display:inline-block;
	font-size: 18px;
	height: 100%;
	width: 100%;
}
a{
	padding: 10px;
	color: white;
	text-decoration: none;
	display:inline-block;
	height:100%;
	padding: 0 10px; 
	vertical-align:middle;
	line-height:77px;
}
img{
	padding-left: 1000px;
	padding-right: 20px;
}
a:hover{
		color: #2D7D4D;	
}
.info{
	position: absolute;
	padding-top: 14px;
	right: 0;
	color: white;

}
figure,span{
	display: inline-block;
    vertical-align: middle;
    font-size: 18px;
}
figure{
    height: 50px;
    width: 50px;
    margin: 0;
    padding: 0;
    background: url(#) no-repeat;
    background-size: cover;
    border-radius: 50%;
}
.pull_down{
    position: absolute;
    right: 0;
    left: -45px;
    top: 70px;
    background: #fff;
    text-align: center;
    font-size: 12px;
    width: 200px;
    padding: 15px 0;
    border-radius: 2px;
    z-index: 999;
}
.bg{
	position: relative;
	height: 100%;
	width: 100%;
	background:url(../assets/bg13.jpg);
	background-size:100% 100%;
}
.bg p {
    position: relative;
    padding: 200px 0 70px;
    color: hsla(0,0%,100%,.9);
    text-align: center;
    font-size: 35px;
    line-height: 2;
    z-index: 2;
    letter-spacing: 2.5px;
    text-shadow: 0 3px 25px rgba(0,0,0,.3);
    cursor: progress;
}
router-link{
	margin: 0px;
	padding: 0px;
}
</style>
