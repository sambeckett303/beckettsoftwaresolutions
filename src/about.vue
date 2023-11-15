<template>
	<transition name="fadeDown">
	<div div class="pageContainer">
		<div id="bg">
			<h1 id="aboutTitle">About Me</h1>
			<div id="aboutWhitePolygon"></div>
			<p id="aboutMeText">
				I grew up in a beautiful mountain town called Conifer, Colorado before going to college at
				University of Colorado at Boulder, graduating with a degree in Computer Science Engineering.
				<br><br>
				During this time, through course projects and internships, I developed an interest in web
				development, and web projects have been the majority of my software focus.
				<br><br>
				When I'm not coding up websites, you can find me enjoying the outdoors on my mountain bike
				or snowboard depending on the season.
			</p>
		</div>
		<div id="triangle" :style="{ top: getTriangleTop() }">
			<svg :width="getTriangleWidth()" height="230">
				<polygon :points="getTrianglePoints()" style="fill:#675AFF;"></polygon>
			</svg>
		</div>
		<div class="downArrowArea">
			<div class="selectableCircle" @click="$router.push('/blog')">
				<div class="downArrowText">BLOG</div>
				<div class="downArrow"></div>
			</div>
		</div>
		<div class="upArrowArea">
			<div class="selectableCircle" @click="$router.push('/work')">
				<div class="upArrowText">WORK</div>
				<div class="upArrow"></div>
			</div>
		</div>
		<div @click="$router.push('/quote')" class="letsWorkTogether"><div class="logo"></div></div>
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
					if (window.innerWidth < 700)
					{
						// Landscape mobile
						return window.innerHeight - 35 + 'px';
					}
					else
					{
						return window.innerHeight - 110 + 'px';
					}
				}
				else if (window.innerWidth <= 667)
				{
					// portrait mobile
					return window.innerHeight - 70 + 'px';
				}
				if (window.innerWidth <= 1060)
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
				else if (window.innerWidth <= 667)
				{
					// Portrait mobile
					var height = '60';
				}
				else if (window.innerWidth <= 1060)
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
	.downArrowArea
	{
		position: absolute;
		bottom: 2px;
		left: 50%;
		transform: translateX(-50%);

		.selectableCircle {
			position: relative;
			cursor: pointer;
  			top: -4px;
			height: 50px;
			width: 50px;
			border-radius: 50%;
			background: white;
			border: 2px solid #ec99ec;
		}
	}

	.upArrowArea
	{
		position: absolute;
		bottom: 2px;
		right: 5px;

		.selectableCircle {
			position: relative;
			cursor: pointer;
  			top: -4px;
			height: 50px;
			width: 50px;
			border-radius: 50%;
			background: white;
			border: 2px solid #ec99ec;
		}
	}

	.downArrowText, .upArrowText
	{
		font-size: 10px;
		color: #000000;
	    position: absolute;
	    left: 50%;
    	transform: translateX(-50%);
		top: 7px;
	}

	.downArrow, .upArrow
	{
		width: 50px;
		height: 50px;
		background: url(/img/down.png) no-repeat;
		background-size: contain;
	}
	.upArrow {
		transform: rotate(180deg);
		position: relative;
		top: 6px;
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
    		font-size: 16px;
		}
	}
</style>