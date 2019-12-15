<template>
	<transition name="fadeDown">
	<div class="pageContainer">
		<div id="bg"></div>
		<div id="triangle" :style="{ top: getTriangleTop() }">
			<svg :width="getTriangleWidth()" height="230">
				<polygon :points="getTrianglePoints()" style="fill:#675AFF;"></polygon>
			</svg>
		</div>
		<div class="homeContainer">
			<div class="headline">
				SIMPLE DESIGNS &<br>
				AMAZING EXPERIENCES
			</div>
			<div class="headline2">Hello! I am Sam Beckett, a software developer from Colorado who is passionate about building beautiful and unique websites that <b>deliver results</b>.</div>
		</div>
		<div id="whitePolygon"></div>
		<div
			v-for="h in homePolygons()"
			class="homePolygon"
			:style="{
				top: h.top,
				bottom: h.bottom,
				left: h.left,
				right: h.right,
				width: h.size,
				height: h.size
			}">
		</div>
		<div v-if="showButton()" class="primaryButton homeButton">Let's Chat!</div>
		<div class="downArrowArea">
			<div class="downArrowText" v-html="swipeOrScroll()"></div>
			<div class="downArrow"></div>
		</div>
		<div style="display: none;">
			<img v-for="img in images" :src="img">
		</div>
	</div>
	</transition>
</template>

<script>
	export default
	{
		name: 'home',
		data() {
			return {
				images: [
					"/img/hexagon-01.png",
					"/img/hexagon-02.png",
					"/img/hexagon-03.png",
					"/img/hexagon-04.png",
					"/img/advertisingIcon.png",
					"/img/contentIcon.png",
					"/img/developmentIcon.png",
					"/img/domainsIcon.png"
				]
			};
		},
		methods:
		{
			swipeOrScroll: function()
			{
				if (window.innerWidth <= 375)
				{
					return 'SWIPE&nbsp;FAST';
				}
				else
				{
					return 'SCROLL';
				}
			},
			showButton: function()
			{
				if (window.innerWidth <= 375)
				{
					return false;
				}
				else
				{
					return true;
				}
			},
			homePolygons: function()
			{
				if (window.innerWidth <= 823 && window.innerWidth > window.innerHeight)
				{
					var polygons =
					[
						{ top: '80px', right: '42px', size: '65px' },
						{ bottom: '47px', right: '25px', size: '50px' },
						{ bottom: '120px', right: '56px', size: '25px' },
						{ bottom: '37px', right: '140px', size: '30px' }
					];
				}
				else if (window.innerWidth <= 320)
				{
					var polygons =
					[
						{ top: '75px', right: '25px', size: '65px' },
						{ top: '50%', right: '22px', size: '50px' },
						{ bottom: '60px', right: '45px', size: '25px' },
						{ bottom: '62px', left: '29px', size: '60px' }
					];
				}
				else if (window.innerWidth <= 375)
				{
					if (window.innerHeight > 667)
					{
						var polygons =
						[
							{ top: '73px', right: '23px', size: '95px' },
							{ top: '317px', right: '22px', size: '50px' },
							{ bottom: '150px', right: '56px', size: '25px' },
							{ bottom: '60px', left: '31px', size: '100px' }
						];
					}
					else
					{
						var polygons =
						[
							{ top: '73px', right: '23px', size: '95px' },
							{ top: '317px', right: '22px', size: '50px' },
							{ bottom: '60px', right: '46px', size: '25px' },
							{ bottom: '60px', left: '31px', size: '100px' }
						];
					}
				}
				else if (window.innerWidth < 850)
				{
					var polygons =
					[
						{ top: '95px', right: '30px', size: '95px' },
						{ top: '317px', right: '22px', size: '50px' },
						{ bottom: '120px', right: '56px', size: '25px' },
						{ bottom: '100px', left: '50px', size: '100px' }
					];
				}
				else if (window.innerWidth < 1000)
				{
					var polygons =
					[
						{ top: '120px', right: '35px', size: '155px' },
						{ bottom: '270px', right: '75px', size: '84px' },
						{ bottom: '100px', left: '50%', size: '125px' },
						{ bottom: '100px', left: '100px', size: '70px' }
					];
				}
				else if (window.innerWidth < 1160)
				{
					if (window.innerHeight > 1000)
					{
						var polygons =
						[
							{ top: '156px', right: '110px', size: '155px' },
							{ top: '50%', right: '75px', size: '84px' },
							{ bottom: '200px', right: '27%', size: '150px' },
							{ bottom: '500px', left: '200px', size: '100px' }
						];
					}
					else
					{
						var polygons =
						[
							{ top: '156px', right: '110px', size: '155px' },
							{ top: '317px', right: '75px', size: '84px' },
							{ top: '450px', right: '135px', size: '125px' },
							{ top: '500px', right: '500px', size: '70px' }
						];
					}
				}
				else
				{
					var polygons =
					[
						{ top: '156px', right: '167px', size: '175px' },
						{ top: '317px', right: '65px', size: '84px' },
						{ top: '400px', right: '235px', size: '125px' },
						{ top: '500px', right: '500px', size: '70px' }
					];
				}
				return polygons;
			},
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
		    });
		    var pageElement = document.getElementsByClassName('pageContainer')[0];
		    pageElement.addEventListener('touchmove', function(e) { e.preventDefault() }, {passive: false });
		}
	}
</script>

<style lang="scss">
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
	}
	.homeContainer
	{
		color: #FFFFFF;
		position: absolute;
	    top: 165px;
	    left: 10%;
	}
	.headline
	{
		font-size: 36px;
	}
	.headline2
	{
		margin-top: 15px;
		width: 413px;
		font-size: 20px;
	}
	#whitePolygon
	{
		position: absolute;
	    left: 47%;
	    top: 22%;
	    background: url(/img/hexagon-03.png) no-repeat;
	    background-size: contain;
	    width: 302px;
	    height: 340px;
	}
	.homePolygon
	{
		position: absolute;
		background: url(/img/hexagon-02.png) no-repeat;
		background-size: contain;
	}
	.homeButton
	{
		position: absolute;
	    top: 410px;
	    left: 10%;
	}

	.fadeDown-enter-active, .fadeDown-leave-active
	{
		transition: opacity .5s ease;
	}

	.fadeDown-enter, .fadeDown-leave-to
	{
	  	opacity: 0;
	}

	.downArrowArea
	{
		position: absolute;
		bottom: 12px;
		left: 50%;
		transform: translateX(-50%);
	}

	.downArrowText
	{
		font-size: 10px;
		color: #FFFFFF;
	    position: absolute;
	    left: 50%;
    	transform: translateX(-50%);
	}

	.downArrow
	{
		width: 50px;
		height: 50px;
		background: url(/img/downWhite.png) no-repeat;
		background-size: contain;
	}

	@media only screen and (min-width: 770px) and (max-width: 1060px) {
		#bg 
		{
			top: 80px;
			bottom: 110px;
		}

		#whitePolygon
		{
			left: 45%;
			top: 16%;
			width: 350px;
			height: 350px;
		}

		.homeContainer
		{
			top: 147px;
		}

		.homeButton
		{
			top: 355px;
    		font-size: 13px;
		}

		.headline
		{
			font-size: 24px;
		}

		.headline2
		{
			width: 260px;
			font-size: 15px;
		}
	}

	@media only screen and (min-width: 575px) and (max-width: 770px) {
		#bg 
		{
			top: 35px;
			bottom: 110px;
		}
	}

	@media only screen and (min-width: 575px) and (max-width: 770px) and (orientation: portrait) {
		#bg 
		{
			top: 80px;
			bottom: 110px;
		}

		#whitePolygon
		{
			left: 48%;
		    top: 37%;
		    width: 300px;
		    height: 300px;
		}

		.homeContainer
		{
			top: 147px;
		}

		.homeButton
		{
			top: 360px;
    		font-size: 13px;
		}

		.headline
		{
			font-size: 24px;
		}

		.headline2
		{
			width: 260px;
			font-size: 15px;
		}
	}

	@media only screen and (min-width: 400px) and (max-width: 415px)
	{
		#bg
		{
			top: 80px;
			bottom: 70px;
		}

		#whitePolygon
		{
			left: 31%;
		    top: 49%;
		    width: 270px;
		    height: 270px;
		}
		.homeContainer
		{
			top: 147px;
		}

		.homeButton
		{
			top: 319px;
    		font-size: 13px;
		}

		.headline
		{
			font-size: 24px;
		}

		.headline2
		{
			width: 260px;
			font-size: 15px;
		}
	}

	@media only screen and (min-width: 416px) and (max-width: 575px) {
		#bg 
		{
			top: 80px;
			bottom: 110px;
		}

		#whitePolygon
		{
			left: 31%;
		    top: 49%;
		    width: 270px;
		    height: 270px;
		}

		.homeContainer
		{
			top: 147px;
		}

		.homeButton
		{
			top: 319px;
    		font-size: 13px;
		}

		.headline
		{
			font-size: 24px;
		}

		.headline2
		{
			width: 260px;
			font-size: 15px;
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
		#whitePolygon
		{
			top: 51%;
		    left: 29%;
		    width: 230px;
		    height: 230px;
		}
		.homeContainer
		{
			top: 120px;
		}

	}

	/* Portrait */
	@media only screen 
	  and (min-device-width: 375px) 
	  and (max-device-width: 667px) 
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: portrait) { 
	  	.homeButton
		{
			top: 295px;
			font-size: 12px;
		}

		.headline
		{
			font-size: 24px;
		}

		.headline2
		{
			width: 260px;
			font-size: 15px;
		}
	}

	/* Landscape */
	@media only screen 
	  and (min-device-width: 375px) 
	  and (max-device-width: 667px) 
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: landscape) { 
	  	.homeButton
		{
			top: 295px;
			font-size: 12px;
		}

		.headline
		{
			font-size: 13px;
		}

		.headline2
		{
			width: 260px;
			font-size: 11px;
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
		#whitePolygon
		{
			top: 51%;
		    left: 29%;
		    width: 230px;
		    height: 230px;
		}
		.homeContainer
		{
			top: 120px;
		}

		.homeButton
		{
			top: 295px;
			font-size: 12px;
		}

		.headline
		{
			font-size: 24px;
		}

		.headline2
		{
			width: 260px;
			font-size: 15px;
		}
	}

	/* Portrait */
	@media screen 
	  and (device-width: 320px) 
	  and (device-height: 640px) 
	  and (-webkit-device-pixel-ratio: 3) 
	  and (orientation: portrait) {

	}

	/* Landscape */
	@media screen 
	  and (device-width: 320px) 
	  and (device-height: 640px) 
	  and (-webkit-device-pixel-ratio: 3) 
	  and (orientation: landscape) {

	}

	/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

	/* Portrait and Landscape */
	@media only screen 
	  and (min-device-width: 375px) 
	  and (max-device-width: 667px) 
	  and (-webkit-min-device-pixel-ratio: 2) { 
		.headline
		{
			font-size: 24px;
		}

		.headline2
		{
			width: 260px;
			font-size: 15px;
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
		.homeContainer
		{
			top: 136px;
		}
		.homeButton
		{
			top: 308px;
		}
		#whitePolygon
		{
			top: 45%;
		    left: 23%;
		    width: 270px;
		    height: 270px;
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
		.homeContainer
		{
			top: 90px;
		}
		.homeButton {
		    top: 270px;
		}
		#whitePolygon {
		    top: 24%;
		    left: 51%;
		    width: 240px;
		    height: 240px;
		}
	}

	/* ----------- iPhone 6+, 7+ and 8+ ----------- */

	/* Portrait and Landscape */
	@media only screen 
	  and (min-device-width: 414px) 
	  and (max-device-width: 736px) 
	  and (-webkit-min-device-pixel-ratio: 3) { 
		.headline
		{
			font-size: 24px;
		}

		.headline2
		{
			width: 260px;
			font-size: 15px;
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
		#whitePolygon
		{
			top: 45%;
		    left: 23%;
		    width: 270px;
		    height: 270px;
		}
		.homeContainer
		{
			top: 136px;
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
		.homeContainer
		{
			top: 90px;
		}
		.homeButton {
		    top: 270px;
		}
		#whitePolygon {
		    top: 24%;
		    left: 51%;
		    width: 240px;
		    height: 240px;
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
		#whitePolygon
		{
			left: 49%;
    		top: 30%;
		    width: 350px;
	    	height: 350px;
		}

		.headline
		{
			font-size: 32px;
		}

		.headline2
		{
			width: 360px;
    		font-size: 21px;
		}

		.homeButton
		{
			top: 415px;
    		font-size: 16px;
		}
	}

	/* Portrait */
	@media only screen 
	  and (min-device-width: 768px) 
	  and (max-device-width: 1024px) 
	  and (orientation: portrait) 
	  and (-webkit-min-device-pixel-ratio: 2) {

	}

	/* Landscape */
	@media only screen 
	  and (min-device-width: 768px) 
	  and (max-device-width: 1024px) 
	  and (orientation: landscape) 
	  and (-webkit-min-device-pixel-ratio: 2) {

	}

	/* ----------- iPad Pro 12.9" ----------- */

	/* Portrait and Landscape */
	@media only screen 
	  and (min-device-width: 1024px) 
	  and (max-device-width: 1366px)
	  and (-webkit-min-device-pixel-ratio: 2) {
	  	/*
	  	#bg
		{
			top: 65px;
			bottom: 110px;
		}
		*/
		#whitePolygon
		{
			left: 46%;
		    top: 20%;
		    width: 350px;
	    	height: 350px;
		}

		.headline
		{
			font-size: 32px;
		}

		.headline2
		{
			width: 360px;
    		font-size: 21px;
		}

		.homeButton
		{
			top: 420px;
    		font-size: 16px;
		}
	}

	/* Portrait */
	/* Declare the same value for min- and max-width to avoid colliding with desktops */
	/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
	@media only screen 
	  and (min-device-width: 1024px) 
	  and (max-device-width: 1024px) 
	  and (orientation: portrait) 
	  and (-webkit-min-device-pixel-ratio: 2) {

	}

	/* Landscape */
	/* Declare the same value for min- and max-width to avoid colliding with desktops */
	/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
	@media only screen 
	  and (min-device-width: 1366px) 
	  and (max-device-width: 1366px) 
	  and (orientation: landscape) 
	  and (-webkit-min-device-pixel-ratio: 2) {

	}

	/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

	/* Portrait and Landscape */
	@media only screen 
	  and (min-device-width: 320px) 
	  and (max-device-width: 568px)
	  and (-webkit-min-device-pixel-ratio: 2) {
		.headline
		{
			font-size: 18px;
		}
		.headline2
		{
			font-size: 12px;
			width: 215px;
		}
		.homeButton
		{
			font-size: 12px;
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
	  	#whitePolygon
		{
			top: 44%;
		    left: 27%;
		    width: 180px;
		    height: 180px;
		}
		.homeContainer
		{
			top: 75px;
		}
		.homeButton
		{
			top: 212px;
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
	  	#whitePolygon
	  	{
	  		top: 23%;
		    left: 54%;
		    width: 170px;
		    height: 170px;
	  	}
	  	.homeContainer
		{
			top: 85px;
		}
		.homeButton
		{
			top: 226px;
		}
	}

	/* ----------- iPhone X ----------- */

	/* Portrait and Landscape */
	@media only screen 
	  and (min-device-width: 375px) 
	  and (max-device-width: 812px) 
	  and (-webkit-min-device-pixel-ratio: 3) { 
	 	
	}

	/* Portrait */
	@media only screen 
	  and (min-device-width: 375px) 
	  and (max-device-width: 812px) 
	  and (-webkit-min-device-pixel-ratio: 3)
	  and (orientation: portrait) { 
	  	.homeContainer
	 	{
	 		top: 105px;
	 	}
	 	.headline
	 	{
	 		font-size: 21px;
	 	}
	 	.headline2
	 	{
	 		font-size: 15px;
	 		width: 240px;
	 	}
	 	.homeButton {
		    top: 286px;
		}
	  	#whitePolygon
	  	{
	  		top: 46%;
		    left: 22%;
		    width: 275px;
		    height: 275px;
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
	  	.homeContainer
	 	{
	 		top: 84px;
	 	}
	 	.headline
	 	{
	 		font-size: 25px;
	 	}
	 	.headline2
	 	{
	 		font-size: 16px;
	 		width: 295px;
	 	}
	 	.homeButton {
		    top: 286px;
		}
		#whitePolygon
		{
			left: 52%;
		    top: 19%;
		    width: 250px;
		    height: 250px;
		}
	}
</style>