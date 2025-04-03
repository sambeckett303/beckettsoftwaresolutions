<template>
	<transition name="fadeDown">
	<div div class="pageContainer">
		<div id="bg">
			<h1 id="aboutTitle">About Vail Valley Web Works</h1>
			<div id="aboutWhitePolygon"></div>
			<p id="aboutMeText">
				Vail Valley Web Works, founded by Sam Beckett, a Computer Science Engineering graduate from the University of Colorado at Boulder, is dedicated to building high-quality, results-driven websites.
				<br><br>
				With a deep technical foundation and a passion for web development, we specialize in creating seamless, high-performing websites that help businesses thrive online.
				<br><br>
				Years of industry experience have sharpened our ability to collaborate with top-tier designers and recognize what makes a design truly effective. The result? Websites that not only look great but also function flawlessly and drive real results for your business.
				<!--
				Vail Valley Web Works is owned and operated by Sam Beckett, a Computer Science Engineering graduate from the
				University of Colorado at Boulder. 
				<br><br>
				With a strong interest in and foundation in web projects, the web development process has become a core focus.
				<br><br>
				While design might not be my primary area of day to day expertise, through years of experience in the industry,
				we work with some of the best designers and have an eye for what makes a good design work. 
				-->
			</p>
		</div>
		<client-only>
			<div id="triangle" :style="{ top: getTriangleTop }">
				<svg :width="getTriangleWidth" height="230">
					<polygon :points="getTrianglePoints" style="fill:#675AFF;"></polygon>
				</svg>
			</div>
		</client-only>
	</div>
	</transition>
</template>

<script>
	export default
	{
		data: function()
		{
			return {
				windowWidth: 1000
			};
		},
		computed: {
			getTriangleTop: function()
			{
				if (process.client) {
					if (this.windowWidth <= 823 && this.windowWidth > window.innerHeight)
					{
						if (this.windowWidth < 700)
						{
							// Landscape mobile
							return window.innerHeight - 35 + 'px';
						}
						else
						{
							return window.innerHeight - 110 + 'px';
						}
					}
					else if (this.windowWidth <= 667)
					{
						// portrait mobile
						return window.innerHeight - 70 + 'px';
					}
					if (this.windowWidth <= 1060)
					{
						return window.innerHeight - 110 + 'px';
					}
					else
					{
						return window.innerHeight - 251 + 'px';
					}
				}
			},
			getTriangleWidth: function()
			{
				if (process.client) {
					return this.windowWidth - 30;
				}
			},
			getTrianglePoints: function()
			{
				if (process.client) {
					var width = this.windowWidth - 30;
					if (this.windowWidth <= 823 && this.windowWidth > window.innerHeight)
					{
						// Landscape mobile
						var height = '35';
					}
					else if (this.windowWidth <= 667)
					{
						// Portrait mobile
						var height = '60';
					}
					else if (this.windowWidth <= 1060)
					{
						var height = '100';
					}
					else
					{
						var height = '230';
					}
					return "0,0 " + width.toString() + ",0 " + Math.round(width / 2) + "," + height;
				}
			}
		},
		mounted() {
			this.windowWidth = window.innerWidth;
		    this.$nextTick(() => {
		      	window.addEventListener('resize', () => {
		        	this.windowWidth = window.innerWidth;
		      	});
		    });
		}
	}
</script>

<style lang="scss" scoped>
	#bg
	{
		position: absolute;
		left: 15px;
		right: 15px;
		top: 132px;
		bottom: 250px;
		background: #675AFF;
	}
	#triangle
	{
		position: absolute;
		left: 15px;
		right: 15px;
		bottom: 0px;
		z-index: -1;
	}
	#aboutTitle
	{
		position: absolute;
		left: 7%;
		top: 5%;
		color: #FFFFFF;
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
	    max-width: 44%;
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

	@media only screen and (min-width: 770px) and (max-width: 1060px) {
		#bg 
		{
			top: 80px;
			bottom: 110px;
		}
	}
	@media only screen and (min-width: 575px) and (max-width: 770px) {
		#bg 
		{
			top: 65px;
    		bottom: 35px;
		}
	}
	@media only screen and (min-width: 575px) and (max-width: 770px) and (orientation: portrait) {
		#bg 
		{
			top: 80px;
			bottom: 110px;
		}
	}
	@media only screen and (min-width: 400px) and (max-width: 415px)
	{
		#bg
		{
			top: 80px;
			bottom: 70px;
		}
	}
	@media only screen and (min-width: 416px) and (max-width: 575px) {
		#bg 
		{
			top: 80px;
			bottom: 70px;
		}
	}
	/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

	/* Portrait and Landscape */
	@media only screen 
	  and (min-device-width: 375px) 
	  and (max-device-width: 667px) 
	  and (-webkit-min-device-pixel-ratio: 2) { 
	  	#bg
		{
			top: 65px;
			bottom: 70px;
		}
	}
	/* ----------- Galaxy S4, S5 and Note 3 ----------- */

	/* Portrait and Landscape */
	@media screen 
	  and (device-width: 320px) 
	  and (device-height: 640px) 
	  and (-webkit-device-pixel-ratio: 3) {
		#bg
		{
			top: 65px;
			bottom: 70px;
		}
	}
	/* Portrait */
	@media only screen 
	  and (min-device-width: 375px) 
	  and (max-device-width: 667px) 
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: portrait) { 
	  	#bg
		{
			top: 65px;
			bottom: 70px;
		}
	}
	/* Landscape */
	@media only screen 
	  and (min-device-width: 375px) 
	  and (max-device-width: 667px) 
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: landscape) { 
	  	#bg
		{
			top: 65px;
			bottom: 35px;
		}
	}
	/* Portrait */
	@media only screen 
	  and (min-device-width: 414px) 
	  and (max-device-width: 736px) 
	  and (-webkit-min-device-pixel-ratio: 3)
	  and (orientation: portrait) { 
	  	#bg
		{
			top: 65px;
			bottom: 70px;
		}
	}
	/* Landscape */
	@media only screen 
	  and (min-device-width: 414px) 
	  and (max-device-width: 736px) 
	  and (-webkit-min-device-pixel-ratio: 3)
	  and (orientation: landscape) { 
	  	#bg
		{
			top: 65px;
			bottom: 35px;
		}
	}
	/* ----------- iPad 3, 4 and Pro 9.7" ----------- */

	/* Portrait and Landscape */
	@media only screen 
	  and (min-device-width: 768px) 
	  and (max-device-width: 1024px) 
	  and (-webkit-min-device-pixel-ratio: 2) {
	  	#bg
		{
			top: 65px;
			bottom: 110px;
		}
	}
	/* Portrait */
	@media only screen 
	  and (min-device-width: 320px) 
	  and (max-device-width: 568px)
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: portrait) {
	  	#bg
		{
			top: 65px;
			bottom: 70px;
		}
	}
	/* Landscape */
	@media only screen 
	  and (min-device-width: 320px) 
	  and (max-device-width: 568px)
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: landscape) {
	  	#bg {
		    top: 65px;
		    bottom: 35px;
		}
	}
	/* Landscape */
	@media only screen 
	  and (min-device-width: 375px) 
	  and (max-device-width: 812px) 
	  and (-webkit-min-device-pixel-ratio: 3)
	  and (orientation: landscape) { 
	  	#bg
	  	{
	  		bottom: 35px;
	  	}
	}
	@media only screen and (max-width: 400px) {
		#bg {
			top: 80px;
    		bottom: 70px;
		}
	}
	@media only screen and (min-width: 300px) and (max-width: 600px) and (orientation: portrait),
		   only screen and (min-height: 300px) and (max-height: 600px) and (orientation: landscape)
	{
		#aboutTitle
		{
			font-size: 22px;
			position: initial;
			margin: 0 auto;
			margin-top: 0px;
			width: fit-content;
			margin-top: 18px;
		}
		#aboutWhitePolygon
		{
			position: initial;
			margin: 0 auto;
		    width: 98px;
		    height: 109px;
		}
		#aboutMeText
		{
			position: initial;
			margin: 10px auto;
			font-size: 16px;
			width: 80%;
		}
	}
</style>