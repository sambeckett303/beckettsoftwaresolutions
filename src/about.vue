<template>
	<transition name="fadeDown">
	<div div class="pageContainer">
		<div id="bg">
			<h1 id="aboutTitle">About Me</h1>
			<div id="aboutWhitePolygon"></div>
			<p id="aboutMeText">
				I grew up in a beautiful mountain town called Conifer, Colorado before going to college at University of Colorado at Boulder, graduating with a degree in Computer Science Engineering. During this time, through course projects and internships, I developed an interest in web development, and web projects have been the majority of my software focus. When I'm not coding up websites, you can find me going recklessly fast on my mountain bike or snowboard (depending on the season).
			</p>
		</div>
		<div id="triangle" :style="{ top: getTriangleTop() }">
			<svg :width="getTriangleWidth()" height="230">
				<polygon :points="getTrianglePoints()" style="fill:#675AFF;"></polygon>
			</svg>
		</div>
		<div class="downArrowArea">
			<div class="downArrowText">BLOG</div>
			<div class="downArrow"></div>
		</div>
	</div>
	</transition>
</template>

<script>
	export default
	{
		data: function()
		{
			 return {

			 };
		},
		methods:
		{
			getTriangleTop: function()
			{
				if (window.innerWidth <= 823 && window.innerWidth > window.innerHeight)
				{
					// Landscape mobile
					return window.innerHeight - 35 + 'px';
				}
				else if (window.innerWidth <= 415)
				{
					// portrait mobile
					return window.innerHeight - 70 + 'px';
				}
				if (window.innerWidth < 1060)
				{
					return window.innerHeight - 110 + 'px';
				}
				else
				{
					return window.innerHeight - 250 + 'px';
				}
			},
			getTriangleWidth: function()
			{
				return window.innerWidth - 30;
			},
			getTrianglePoints: function()
			{
				var width = window.innerWidth - 30;
				if (window.innerWidth <= 823 && window.innerWidth > window.innerHeight)
				{
					// Landscape mobile
					var height = '35';
				}
				else if (window.innerWidth <= 415)
				{
					// Portrait mobile
					var height = '60';
				}
				else if (window.innerWidth < 1060)
				{
					var height = '100';
				}
				else
				{
					var height = '230';
				}
				return "0,0 " + width.toString() + ",0 " + Math.round(width / 2) + "," + height;
			}
		},
		mounted() {
		    this.$nextTick(() => {
		      window.addEventListener('resize', () => {
		        this.$forceUpdate();
		      });
		    })
		    var pageElement = document.getElementsByClassName('pageContainer')[0];
		    pageElement.addEventListener('touchmove', function(e) { e.preventDefault() }, {passive: false });
		}
	}
</script>

<style lang="scss" scoped>
	#aboutTitle
	{
		position: absolute;
		left: 7%;
		top: 5%;
		color: #FFFFFF;
		font-family: 'Russo One';
	}
	#aboutWhitePolygon
	{
		position: absolute;
	    left: 62%;
    	top: 15px;
	    background: url(/img/hexagon-03.png) no-repeat;
	    background-size: contain;
	    width: 302px;
	    height: 340px;
	}
	#aboutMeText
	{
		color: #FFFFFF;
		position: absolute;
		left: 7%;
	    top: 100px;
	    width: 47%;
	}
	@media only screen and (min-width: 300px) and (max-width: 600px) and (orientation: portrait),
		   only screen and (min-height: 300px) and (max-height: 600px) and (orientation: landscape)
	{
		#aboutTitle
		{
			left: 30px;
		    top: 40px;
		    font-size: 22px;
		    margin: 0;
		}
		#aboutWhitePolygon
		{
			top: 5px;
		    left: 72%;
		    transform: translateX(-50%);
		    width: 98px;
		    height: 109px;
		}
		#aboutMeText
		{
			top: 103px;
    		width: 87%;
    		font-size: 11px;
		}
	}
</style>