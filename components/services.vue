<template>
	<div id="services" class="pageContainer">
		<h1 class="sectionTitleHeader" style="margin-top: 100px;">OUR PROCESS</h1>
		<hexagon-grid page="services"></hexagon-grid>
		<div id="servicesContainer"
			:class="[panAnimation, anchorOutOfSight]"
			:style="{ transform: zoomToHold, '-webkit-transform': zoomToHold }">
			<!--<div id="centerPiece">YOUR<br>SUCCESSFUL<br>WEBSITE</div>-->
			<div
				v-for="serviceHexagon in serviceHexagons"
				class="serviceHexagon"
				@click="serviceSelected(serviceHexagon)"
				@mouseover="serviceHexagon.hovering = true"
				@mouseout="serviceHexagon.hovering = false"
				:class="{ active: serviceHexagon.hovering }"
				:style="{
					top: serviceHexagon.top,
					right: serviceHexagon.right,
					bottom: serviceHexagon.bottom,
					left: serviceHexagon.left
				}">
				<div class="serviceLabel">{{serviceHexagon.label}}</div>
			</div>
		</div>
		<transition :name="activeTransition">
			<div id="activeService"
				v-if="serviceActive"
				:class="{ activeServiceAnchored: serviceAnchored }">
				<div class="title">{{activeService.label}}</div>
				<div class="serviceImage" :class="[activeService.imageClass]"></div>
				<div class="text">{{activeService.text}}</div>
			</div>
		</transition>
		<transition name="backTransition">
			<div id="backContainer" :class="{backAnchored: backAnchored}" v-if="serviceActive" @click="backToServices">
				<div class="text">BACK</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default
	{
		name: 'services',
		data: () => ({
			serviceActive: false,
			activeTransition: 'topLeftToMiddle',
			zoomToHold: '',
			panAnimation: '',
			serviceAnchored: false,
			backAnchored: false,
			serviceSized: false,
			anchorOutOfSight: '',
			serviceHexagons:
			[
				{
					label: "1. PLANNING",
					left: 'calc(50% - 167px)',
					top: 'calc(50% - 244px)',
					hovering: false,
					transition: 'topLeftToMiddle',
					panAnimation: 'One',
					imageClass: 'planningImage',
					text: 'Each project should be approached with a focus on the big picture. Defining your business goals along with a portfolio of ideal users and their use cases is crucial to design and build the best website possible for your business.'
				},
				{
					label: "2. DESIGN",
					left: 'calc(50% - 3px)',
					top: 'calc(50% - 243px)',
					hovering: false,
					transition: 'topRightToMiddle',
					panAnimation: 'Two',
					imageClass: 'designImage',
					text: 'We work with one of the best designers in the industry to create simple, clean, and effective user interface designs that are paired with a great user experience, leading to happy customers that deliver results.'
				},
				{
					label: "3. DEVELOPMENT",
					left: 'calc(50% + 79px)',
					top: 'calc(50% - 100px)',
					hovering: false,
					transition: 'topMiddleToMiddle',
					panAnimation: 'Three',
					imageClass: 'developmentImage',
					text: 'Drag-and-drop website builders with pre-made templates can only take a website so far. If you want a fast, optimized, and custom site, it need to be hand-built by a professional developer. Ideally, a developer with excellent communication, professionalism, and extensive technical experience and abilities will lead to more successful results.'
				},
				{
					label: "4. SETUP",
					left: 'calc(50% - 1px)',
					top: 'calc(50% + 44px)',
					hovering: false,
					transition: 'bottomRightToMiddle',
					panAnimation: 'Four',
					imageClass: 'domainsImage',
					text: 'A website needs to live somewhere and it also needs a name. Whether you already own a domain, or you want/need a new one, someone needs to be able to navigate this space by porting a website to the domain, along with providing hosting. We can handle all this for you!'
				},
				{
					label: "5. MARKETING",
					left: 'calc(50% - 165px)',
					top: 'calc(50% + 43px)',
					hovering: false,
					transition: 'bottomLeftToMiddle',
					panAnimation: 'Five',
					imageClass: 'advertisingImage',
					text: 'Online marketing is critical to gaining more business. Two of the most important marketing factors includes optimizing Search Engine Optimization (SEO) along with advertising your services on the right platform(s) (Google, Facebook, and/or Instagram). We do not offer social media management.'
				},
				{
					label: "6. SUPPORT",
					left: 'calc(50% - 246px)',
					top: 'calc(50% - 100px)',
					hovering: false,
					transition: 'leftToMiddle',
					panAnimation: 'Six',
					imageClass: 'contentImage',
					text: 'A website is never done, it should always be improved over time. Most successful websites are frequently updated. Small tweaks to the design can end up making a big impact. Update the site for seasonal and holiday sales, new services, etc.'
				}
			]
		}),
		mounted() {
		    this.$nextTick(() => {
		      window.addEventListener('resize', () => {
		        this.$forceUpdate();
		      });
		    });
		},
		methods:
		{
			serviceSelected: function(serviceHexagon)
			{
				this.activeService = serviceHexagon;
				this.activeTransition = serviceHexagon.transition;
				this.panAnimation = 'panAnimation' + serviceHexagon.panAnimation;
				this.serviceActive = true;
				setTimeout(function() {
					this.backAnchored = true;
					this.anchorOutOfSight = 'anchorOutOfSight';
					this.panAnimation = '';
				}.bind(this), 750);
				setTimeout(function() {
					this.serviceAnchored = true;
				}.bind(this), 500);
			},
			backToServices: function() {
				this.backAnchored = false;
				this.panAnimation = 'panInAnimation' + this.activeService.panAnimation;
				this.anchorOutOfSight = '';
				this.serviceActive = false;
				setTimeout(function() {
					this.serviceAnchored = false;
					this.panAnimation = '';
				}.bind(this), 750);
			}
		}
	}
</script>

<style lang="scss" scoped>
	#services {
		overflow: hidden;
	}
	#servicesContainer
	{
		position: absolute;
		height: 100vh;
		width: 100%;
		top: 0px;
	}
	#centerPiece
	{
		position: absolute;
	    top: 50%;
	    transform: translateY(-50%);
	    left: 0;
	    right: 0;
	    margin: auto;
	    width: 125px;
	    text-align: center;
	    font-size: 20px;
	}
	#activeService
	{
		position: absolute;
		background: url(/img/hexagon-04.png) no-repeat;
		background-size: contain;
		width: 600px;
	    height: 690px;
	    transform: translate(-50%, -50%);
	    transition: all .5s ease;

	    .title
	    {
	    	font-size: 25px;
		    text-align: center;
		    position: absolute;
		    left: 0;
		    right: 0;
		    top: 105px;
		    width: 300px;
		    margin: auto;
	    }

	    .text
	    {
	    	position: absolute;
		    top: 360px;
		    padding: 10px 60px;
		    left: -15px;
		    text-align: center;
		    font-size: 20px;
	    }
	}
	#backContainer
	{
		width: 200px;
		height: 200px;
		background: url(/img/hexagon-04.png) no-repeat;
		background-size: contain;
		position: absolute;
		bottom: 25px;
		right: 25px;
		cursor: pointer;

		.text
		{
			position: absolute;
		    top: 80px;
		    left: 55px;
		    font-size: 25px;
		}
	}
	.activeServiceAnchored
	{
		top: 50%;
		left: 50%;
	}
	.activeServiceBigSize
	{
		transform: translate(-50%, -50%) scale(1.1) !important;
	}
	.serviceHexagon
	{
		position: absolute;
		background: url(/img/hexagon-04.png) no-repeat;
		background-size: contain;
		width: 174px;
		height: 198px;
		transition: all .3s ease;
		cursor: pointer;
	}
	.serviceLabel
	{
	    position: absolute;
	    top: 50%;
	    transform: translateY(-50%);
	    left: 0;
	    right: 0;
	    margin: 0 auto;
	    width: 149px;
	    margin-left: 9px;
	    text-align: center;
	}

	.serviceHexagon.active
	{
		transform: scale(1.2);
		z-index: 2;
	}
	.panAnimationOne
	{
		animation: pandownleft .75s;
		-webkit-animation: pandownleft .75s
	}
	.panAnimationTwo
	{
		animation: panintwo .75s;
		-webkit-animation: panintwo .75s
	}
	.panAnimationThree
	{
		animation: paninthree .75s;
		-webkit-animation: paninthree .75s
	}
	.panAnimationFour
	{
		animation: paninfour .75s;
		-webkit-animation: paninfour .75s
	}
	.panAnimationFive
	{
		animation: paninfive .75;
		-webkit-animation: paninfive .75s
	}
	.panAnimationSix
	{
		animation: paninsix .75s;
		-webkit-animation: paninsix .75s
	}
	@keyframes pandownleft {
		0% {
			left: 0px;
		}
		100% {
			top: 70%;
			left: 70%;
		}
	}
	@keyframes panintwo {
		0% {
			left: 0px;
		}
		100% {
			top: 100%;
			left: -100%;
		}
	}
	@keyframes paninthree {
		0% {
			left: 0px;
		}
		100% {
			left: -100%;
		}
	}
	@keyframes paninfour {
		0% {
			left: 0px;
		}
		100% {
			top: -100%;
			left: -100%;
		}
	}
	@keyframes paninfive {
		0% {
			left: 0px;
		}
		100% {
			top: -100%;
			left: 100%;
		}
	}
	@keyframes paninsix {
		0% {
			left: 0px;
		}
		100% {
			left: 100%;
		}
	}
	.topLeftToMiddle-enter-active, .topLeftToMiddle-leave-active,
	.topRightToMiddle-enter-active, .topRightToMiddle-leave-active,
	.topMiddleToMiddle-enter-active, .topMiddleToMiddle-leave-active,
	.bottomRightToMiddle-enter-active, .bottomRightToMiddle-leave-active,
	.bottomLeftToMiddle-enter-active, .bottomLeftToMiddle-leave-active,
	.leftToMiddle-enter-active, .leftToMiddle-leave-active
	{
		transition: all .5s ease;
	}
	.topLeftToMiddle-enter-to, .topLeftToMiddle-leave-from,
	.topMiddleToMiddle-enter-to, .topMiddleToMiddle-leave-from,
	.topRightToMiddle-enter-to, .topRightToMiddle-leave-from,
	.bottomRightToMiddle-enter-to, .bottomRightToMiddle-leave-from,
	.bottomLeftToMiddle-enter-to, .bottomLeftToMiddle-leave-from,
	.leftToMiddle-enter-to, .leftToMiddle-leave-from
	{
		top: 50%;
		left: 50%;
	}

	.topLeftToMiddle-enter-from, .topLeftToMiddle-leave-to
	{
		top: -100%;
		left: -100%;
	}

	.topRightToMiddle-enter-from, .topRightToMiddle-leave-to
	{
		top: -100%;
		left: 100%;
	}

	.topMiddleToMiddle-enter-from, .topMiddleToMiddle-leave-to
	{
		top: 50%;
		left: 150%;
	}

	.bottomRightToMiddle-enter-from, .bottomRightToMiddle-leave-to
	{
		top: 100%;
		left: 150%;
	}

	.bottomLeftToMiddle-enter-from, .bottomLeftToMiddle-leave-to
	{
		top: 120%;
		left: -50%;
	}

	.leftToMiddle-enter-from, .leftToMiddle-leave-to
	{
		top: 50%;
		left: -50%;
	}

	.serviceImage
	{
		position: absolute;
	    left: 0;
	    right: 0;
	    margin: 0 auto;
	    top: 165px;
	}
	.planningImage
	{
		width: 165px;
		height: 165px;
		background: url(/img/planningIcon.png) no-repeat;
		background-size: contain;
	}
	.designImage
	{
		width: 165px;
		height: 165px;
		background: url(/img/designIcon.png) no-repeat;
		background-size: contain;
	}
	.developmentImage
	{
		width: 165px;
		height: 165px;
		background: url(/img/developmentIcon.png) no-repeat;
		background-size: contain;
	}
	.domainsImage
	{
		width: 165px;
		height: 165px;
		background: url(/img/domainsIcon.png) no-repeat;
		background-size: contain;
	}
	.advertisingImage
	{
		width: 165px;
		height: 165px;
		background: url(/img/advertisingIcon.png) no-repeat;
		background-size: contain;
	}
	.contentImage
	{
		width: 165px;
		height: 165px;
		background: url(/img/contentIcon.png) no-repeat;
		background-size: contain;	
	}
	.backTransition-enter-active, .backTransition-leave-active
	{
		transition: all .5s ease;
	}
	.backTransition-enter-from, .backTransition-leave-to
	{
		right: -200px !important;
	}
	.backTransition-enter-to, .backTransition-leave-from
	{
		right: 25px !important;
	}
	.backAnchored
	{
		right: 25px;
	}
	.panInAnimationOne
	{
		animation: panbackone .75s;
		-webkit-animation: panbackone .75s;
	}
	.panInAnimationTwo
	{
		animation: panbacktwo .75s;
		-webkit-animation: panbacktwo .75s;
	}
	.panInAnimationThree
	{
		animation: panbackthree .75s;
		-webkit-animation: panbackthree .75s;
	}
	.panInAnimationFour
	{
		animation: panbackfour .75s;
		-webkit-animation: panbackfour .75s;
	}
	.panInAnimationFive
	{
		animation: panbackfive .75s;
		-webkit-animation: panbackfive .75s;
	}
	.panInAnimationSix
	{
		animation: panbacksix .75s;
		-webkit-animation: panbacksix .75s;
	}
	
	@keyframes panbackone {
		0% {
			top: 70%;
			left: 70%;
		}
		100% {
			left: 0px;
		}
	}
	@keyframes panbacktwo {
		0% {
			top: 100%;
			left: -100%;
		}
		100% {
			left: 0;
		}
	}
	@keyframes panbackthree {
		0% {
			top: 0px;
			left: -100%;
		}
		100% {
			left: 0px;
		}
	}
	@keyframes panbackfour {
		0% {
			top: -100%;
			left: -100%;
		}
		100% {
			left: 0px;
		}
	}
	@keyframes panbackfive {
		0% {
			top: -100%;
			left: 100%;
		}
		100% {
			left: 0px;
		}
	}
	@keyframes panbacksix {
		0% {
			top: 0%;
			left: 100%;
		}
		100% {
			left: 0px;
		}
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

	@media only screen and (min-width: 300px) and (max-width: 700px) and (orientation: portrait),
		   only screen and (min-height: 300px) and (max-height: 700px) and (orientation: landscape)
	{
		.backTransition-enter-to, .backTransition-leave-from
		{
			right: 10px !important;
		}
		#servicesContainer
		{
			transform: scale(.7);
		}
		#activeService
		{
			width: 375px;
		    height: 424px;
		    margin-left: 5px;
		}
		#activeService .title
		{
			top: 45px;
			font-size: 16px;
			width: 115px;
    		padding-right: 8px;
		}
		#activeService .text
		{
			top: 140px;
			font-size: 14px;
		}
		.serviceImage
		{
			top: 75px;
			padding-right: 10px;
		}
		.planningImage
		{
			width: 65px;
			height: 65px;
		}
		.designImage
		{
			width: 65px;
			height: 65px;
		}
		.developmentImage
		{
			width: 65px;
			height: 65px;
		}
		.domainsImage
		{
			width: 65px;
			height: 65px;
		}
		.advertisingImage
		{
			width: 65px;
			height: 65px;
		}
		.contentImage
		{
			width: 65px;
			height: 65px;
		}
		#backContainer
		{
			width: 100px;
			height: 100px;
			bottom: 50px;
			right: 10px;
		}
		.backAnchored
		{
			right: 10px;
		}
		#backContainer .text
		{
			top: 39px;
			left: 24px;
			font-size: 15px;
		}
	}
</style>