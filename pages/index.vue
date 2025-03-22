<template>
	<div >
		<div class="heroContainer">
			<div id="background">
				<div class="homeContainer">
					<h1 class="headline">
						<span v-for="(item, index) in 'Hello&nbsp;there!'" class="char" :style="`--char-index: ${index};`">{{ item }}</span>
					</h1>
					<div class="headline2">
						We build innovative web solutions tailored to your unique needs -- Handcrafted websites, superior results, starting at just $100 per month
					</div>
				</div>
			</div>
			<client-only>
				<div id="triangle">
					<svg :width="getTriangleWidth" height="230">
						<polygon :points="getTrianglePoints" style="fill:#675AFF;"></polygon>
					</svg>
				</div>
			</client-only>
			<div id="whitePolygon">
				<snow-hex></snow-hex>
			</div>
			<client-only>
				<div
					v-for="h in homePolygons()"
					class="homePolygon"
					:style="{
						top: h.top,
						bottom: h.bottom,
						left: h.left,
						right: h.right
					}">
					<blue-hex :scale="h.scale"></blue-hex>
				</div>
			</client-only>
			
			<!--
			<div class="primaryButton homeButton">Let's Chat!</div>
			<div class="downArrowArea">
				<div class="selectableCircle" @click="$router.push('/services')">
					<div class="downArrowText">TAP</div>
					<div class="downArrow"></div>
				</div>
			</div>
			-->
		</div>
		<div style="margin-top: 35px">
			<section-title title="Focus on Your Business—We’ll Handle Your Website"></section-title>
		</div>
		<div class="whatWeDo sectionTitleHeader">
			<h1>WHAT WE DO</h1>
		</div>
		<p style="margin-top: 55px">
			At Eagle Valley Web Design, we design and develop high-quality websites for new and growing businesses. Our custom-built sites are optimized for performance,
			security, and search engines—helping you attract more customers and increase revenue. We also handle ongoing updates and maintenance, so you can focus on
			building your business while we keep your website running smoothly.
		</p>
		<div>
			<services></services>
		</div>
		<offerings></offerings>
		<portfolio></portfolio>
		<pricing></pricing>
		<div class="snowboardingYeti">
			<img src="/img/CarveOut.webp">
		</div>
		<p>
			We’re here to help small businesses succeed with websites that are fast, reliable, and built for growth. Let’s create something great together—get in touch today!
		</p>
	</div>
</template>

<script>
export default {
    data() {
        return { windowWidth: 1000 }
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
                return window.innerHeight - 250 + 'px';
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
    methods:
    {
        homePolygons: function()
        {
            if (process.client) {
                if (window.innerWidth <= 823 && window.innerWidth > window.innerHeight)
                {
					// Landscape mobile
                    var polygons =
                    [
                        { top: '80px', right: '22px', size: '65px' },
                        { bottom: '47px', right: '25px', size: '50px' },
                        { bottom: '120px', right: '56px', size: '25px' },
                        { bottom: '37px', right: '140px', size: '30px' }
                    ];
                }
                else if (window.innerWidth <= 320)
                {
					// Smallest mobile
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
						// Mobile potrait
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
						// Mobile landscape
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
					// Big mobile
                    var polygons =
                    [
                        { top: '0px', right: '0px', size: '95px' },
                        { bottom: '50%', right: '0px', size: '50px' },
                        { bottom: '80px', right: '20px', size: '25px' },
                        { bottom: '100px', left: '-10px', size: '100px' }
                    ];
                }
                else if (window.innerWidth < 1000)
                {
					// Tablet
                    var polygons =
                    [
                        { top: '30px', right: '30px', size: '155px' },
                        { bottom: '270px', right: '205px', size: '84px' },
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
                            { top: '50%', right: '205px', size: '84px' },
                            { bottom: '200px', right: '27%', size: '150px' },
                            { bottom: '500px', left: '200px', size: '100px' }
                        ];
                    }
                    else
                    {
                        var polygons =
                        [
                            { top: '156px', right: '110px', size: '155px' },
                            { top: '317px', right: '205px', size: '84px' },
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
                        { top: '317px', right: '15px', size: '84px' },
                        { top: '400px', right: '235px', size: '125px' },
                        { top: '500px', right: '500px', size: '70px' }
                    ];
                }
				polygons.forEach((pg) => {
					pg.scale = (Number(pg.size.substring(0, pg.size.length - 2)) / 200).toString();
				});
				console.log(polygons);
                return polygons;
            }
        }
    },
    mounted() {
        this.windowWidth = document.body.clientWidth; 
        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                this.windowWidth = document.body.clientWidth; 
            });
        });
    }
}
</script>

<style lang="scss">
// * {
//   outline: 1px solid red;
// }
	.sectionTitleHeader {
		text-align: center;
		color: #565454;
	}
	p {
		text-align: center;
		width: 96%;
		max-width: 25rem;
		margin: auto;
		margin-bottom: 1.875rem;
		margin-top: 1.875rem;
		color: #656565;
		display: block;
		font-size: 1.3rem;
	}
	.char {
		display: inline-block;
		-webkit-animation-delay: calc(1s + var(--char-index) * 0.1s);
				animation-delay: calc(1s + var(--char-index) * 0.1s);
		transition: all 1s calc(1s + var(--char-index) * 0.1s);
	}
	.char {
		-webkit-animation-name: bulge;
				animation-name: bulge;
		-webkit-animation-duration: 0.25s;
				animation-duration: 0.25s;
	}
	@-webkit-keyframes bulge {
		50% {
			transform: scale(1.5);
		}
	}
	@keyframes bulge {
		50% {
			transform: scale(1.5);
		}
	}

	.whatWeDo {
		margin-top: 100px;
	}

	.heroContainer
	{
		position: relative;
		height: calc(100vh - 65px);
		width: 100%;
	}
	#background {
		position: relative;
		height: calc(100% - 295px);
		width: calc(100% - 30px);
		left: 15px;
		background: #675AFF;
	}
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
		width: calc(100% - 30px);
		margin: 0 auto;
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
	}
	.homePolygon
	{
		position: absolute;
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

	.fadeDown-enter-from, .fadeDown-leave-to
	{
	  	opacity: 0;
	}

	.downArrowArea
	{
		position: absolute;
		bottom: 12px;
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

	.downArrowText
	{
		font-size: 10px;
		color: black;
	    position: absolute;
	    left: 50%;
    	transform: translateX(-50%);
		top: 8px;
	}

	.downArrow
	{
		width: 50px;
		height: 50px;
		background: url(/img/down.png) no-repeat;
		background-size: contain;
		position: relative;
		top: 4px;
	}

    .bounce-enter-active {
		animation: bounce-in .5s;
	}
	.bounce-leave-active {
	 	animation: bounce-out .3s;
	}
	@keyframes bounce-in {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
	@keyframes bounce-out {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(0);
			opacity: 0;
		}
	}

	@media only screen and (min-width: 667px) and (max-width: 1060px) {
		#background {
			height: calc(100vh - 180px);
		}
	}

	@media only screen and (max-width: 667px) {
		#background {
			height: calc(100vh - 220px);
		}
	}

	@media only screen and (min-width: 770px) and (max-width: 1060px) {
		#bg 
		{
			top: 80px;
			bottom: 110px;
		}

		.pageTitle
		{
			padding: 8px 15px;
    		font-size: 37px;
		}

		#whitePolygon
		{
			left: 45%;
			top: 16%;
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

	@media only screen and (min-width: 135px) and (max-width: 570px) {
		.pageTitle
		{
			top: 70px;
			padding: 8px 15px;
			font-size: 21px;
		}
	}

	@media only screen and (min-width: 575px) and (max-width: 770px) {
		#bg 
		{
			top: 35px;
			bottom: 110px;
		}
		.pageTitle
		{
			top: 70px;
			padding: 8px 15px;
			font-size: 21px;
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
	  and (max-device-height: 640px) 
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
			margin-top: 8px;
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
			bottom: 109px;
		}
		#whitePolygon
		{
			left: 49%;
    		top: 30%;
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
			margin-top: 8px;
		}
		.homeButton
		{
			font-size: 12px;
		}
	}

	/* Portrait */
	@media only screen 
	  and (max-device-width: 568px)
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: portrait) {
	  	#bg
		{
			top: 65px;
			bottom: 100px;
		}
	  	#whitePolygon
		{
			top: 44%;
		    left: 27%;
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
	  		top: 40%;
		    left: 40%;
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
		}
	}

	@media only screen and (min-width: 1060px) {
		.downArrowArea .selectableCircle {
			top: -20px;
		}
	}

    @media only screen and (max-width: 375px) {
        .homeButton {
            display: none;
        }
    }

	.snowboardingYeti {
		margin: 0 auto;
  		width: 50%;

		img {
			width: 100%;
			border-radius: 20px;
		}
	}

	@media only screen and (max-width: 800px) {
		.snowboardingYeti {
			margin: 0 auto;
			width: 80%;
		}
	}
</style>