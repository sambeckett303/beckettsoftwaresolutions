<template>
	<transition name="bounce">
	<div class="pageContainer">
		<div class="pageTitle">My Services</div>
		<hexagon-grid page="services"></hexagon-grid>
		<div id="servicesContainer"
			:class="[zoomAnimation, anchorOutOfSight]"
			:style="{ transform: zoomToHold }">
			<div id="centerPiece">YOUR<br>SUCCESSFUL<br>WEBSITE</div>
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
				:class="{ activeServiceAnchored: serviceAnchored, activeServiceBigSize: serviceSized }">
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
		<div class="downArrowArea">
			<div class="downArrowText">WORK</div>
			<div class="downArrow"></div>
		</div>
	</div>
	</transition>
</template>

<script>
	import HexagonGrid from './hexagon-grid.vue';
	export default
	{
		name: 'services',
		data: () => ({
			serviceActive: false,
			activeTransition: 'topLeftToMiddle',
			zoomToHold: '',
			zoomAnimation: '',
			serviceAnchored: false,
			backAnchored: false,
			serviceSized: false,
			anchorOutOfSight: '',
			serviceHexagons:
			[
				{
					label: "PLANNING",
					left: 'calc(50% - 167px)',
					top: 'calc(50% - 244px)',
					hovering: false,
					transition: 'topLeftToMiddle',
					zoomAnimation: 'One',
					imageClass: 'planningImage',
					text: 'Each project should be approached with a focus on the big picture. First we need to define your business goals along with your ideal users and their use cases. This approach will allow us to best build the best interface possible for your business.'
				},
				{
					label: "DESIGN",
					left: 'calc(50% - 3px)',
					top: 'calc(50% - 243px)',
					hovering: false,
					transition: 'topRightToMiddle',
					zoomAnimation: 'Two',
					imageClass: 'designImage',
					text: 'Any custom built website requires a custom design that is tailored for your specific audience and industry. Simple, clean, and effective user interface designs that are paired with a great user experience, leading to happy customers that deliver results.'
				},
				{
					label: "DEVELOPMENT",
					left: 'calc(50% + 79px)',
					top: 'calc(50% - 100px)',
					hovering: false,
					transition: 'topMiddleToMiddle',
					zoomAnimation: 'Three',
					imageClass: 'developmentImage',
					text: 'Over 5+ years of professional full stack web development experience. Excellent communication and grasp of technical abilities. Efficient and well experienced with building both "single page applications" web apps and tranditional multi-page websites.'
				},
				{
					label: "SETUP",
					left: 'calc(50% - 1px)',
					top: 'calc(50% + 44px)',
					hovering: false,
					transition: 'bottomRightToMiddle',
					zoomAnimation: 'Four',
					imageClass: 'domainsImage',
					text: 'A website needs to live somewhere and it also needs a name. Whether you already own the domain, or you need one, I help plug your new website to the domain of your choice. I can also help with providing affordable hosting the website.'
				},
				{
					label: "MARKETING",
					left: 'calc(50% - 165px)',
					top: 'calc(50% + 43px)',
					hovering: false,
					transition: 'bottomLeftToMiddle',
					zoomAnimation: 'Five',
					imageClass: 'advertisingImage',
					text: 'Nowadays, online marketing is critical. Expand your reach by adding my marketing package to your website. This includes my Search Engine Optimization (SEO) services, along with help advertising your services on the right platform (Google, Facebook, and/or Instagram).'
				},
				{
					label: "SUPPORT",
					left: 'calc(50% - 246px)',
					top: 'calc(50% - 100px)',
					hovering: false,
					transition: 'leftToMiddle',
					zoomAnimation: 'Six',
					imageClass: 'contentImage',
					text: 'A website is never done, it should always be improved over time. Small tweaks to the design can make a big impact. Update the site for seasonal and holiday sales. Whatever changes you want to make over time, we can make it happen quickly and easily.'
				}
			]
		}),
		mounted() {
		    this.$nextTick(() => {
		      window.addEventListener('resize', () => {
		        this.$forceUpdate();
		      });
		    });
		    var pageElement = document.getElementsByClassName('pageContainer')[0];
		    pageElement.addEventListener('touchmove', function(e) { e.preventDefault() }, {passive: false });
		},
		methods:
		{
			serviceSelected: function(serviceHexagon)
			{
				this.activeService = serviceHexagon;
				this.activeTransition = serviceHexagon.transition;
				this.zoomAnimation = 'zoomOutAnimation' + serviceHexagon.zoomAnimation;
				setTimeout(function() {
					this.serviceActive = true;
					if ((window.innerHeight > window.innerWidth && window.innerWidth <= 700) ||
						(window.innerWidth > window.innerHeight && window.innerHeight <= 700))
					{
						this.zoomToHold = 'scale(0.45)';
					}
					else
					{
						this.zoomToHold = 'scale(0.6)';
					}
					setTimeout(function() {
						this.serviceAnchored = true;
						this.backAnchored = true;
						this.serviceSized = true;
						setTimeout(function() {
							this.zoomToHold = '';
							this.zoomAnimation = '';
							this.anchorOutOfSight = 'anchorOutOfSight';
						}.bind(this), 500);
					}.bind(this), 500)
				}.bind(this), 500);
			},
			backToServices: function()
			{
				this.serviceSized = false;
				setTimeout(function() {
					this.backAnchored = false;
					this.zoomAnimation = 'zoomInAnimation' + this.activeService.zoomAnimation;
					this.anchorOutOfSight = '';
					if ((window.innerHeight > window.innerWidth && window.innerWidth <= 700) ||
						(window.innerWidth > window.innerHeight && window.innerHeight <= 700))
					{
						this.zoomToHold = 'scale(0.45)';
					}
					else
					{
						this.zoomToHold = 'scale(0.6)';
					}
					setTimeout(function() {
						this.serviceAnchored = false;
						this.serviceActive = false;
						setTimeout(function() {
							this.zoomToHold = '';
						}.bind(this), 740);
						setTimeout(function() {
							this.zoomAnimation = '';
						}.bind(this), 1400);
					}.bind(this), 10);
				}.bind(this), 500);
			}
		},
		components:
		{
			HexagonGrid
		}
	}
</script>

<style lang="scss" scoped>
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
	    transform: translate(-50%, -50%) scale(0.8);
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
	.serviceHexagon.active
	{
		transform: scale(1.2);
		z-index: 2;
	}
	.zoomOutAnimationOne
	{
		animation: zoomout .5s,
					pandownleft 1s;
		animation-delay: 0s, .5s;
	}
	.zoomOutAnimationTwo
	{
		animation: zoomout .5s,
					panintwo 1s;
		animation-delay: 0s, .5s;
	}
	.zoomOutAnimationThree
	{
		animation: zoomout .5s,
					paninthree 1s;
		animation-delay: 0s, .5s;
	}
	.zoomOutAnimationFour
	{
		animation: zoomout .5s,
					paninfour 1s;
		animation-delay: 0s, .5s;
	}
	.zoomOutAnimationFive
	{
		animation: zoomout .5s,
					paninfive 1s;
		animation-delay: 0s, .5s;
	}
	.zoomOutAnimationSix
	{
		animation: zoomout .5s,
					paninsix 1s;
		animation-delay: 0s, .5s;
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
	.topLeftToMiddle-enter-to, .topLeftToMiddle-leave,
	.topMiddleToMiddle-enter-to, .topMiddleToMiddle-leave,
	.topRightToMiddle-enter-to, .topRightToMiddle-leave,
	.bottomRightToMiddle-enter-to, .bottomRightToMiddle-leave,
	.bottomLeftToMiddle-enter-to, .bottomLeftToMiddle-leave,
	.leftToMiddle-enter-to, .leftToMiddle-leave
	{
		top: 50%;
		left: 50%;
	}

	.topLeftToMiddle-enter, .topLeftToMiddle-leave-to
	{
		top: -100%;
		left: -100%;
	}

	.topRightToMiddle-enter, .topRightToMiddle-leave-to
	{
		top: -100%;
		left: 100%;
	}

	.topMiddleToMiddle-enter, .topMiddleToMiddle-leave-to
	{
		top: 50%;
		left: 150%;
	}

	.bottomRightToMiddle-enter, .bottomRightToMiddle-leave-to
	{
		top: 100%;
		left: 150%;
	}

	.bottomLeftToMiddle-enter, .bottomLeftToMiddle-leave-to
	{
		top: 120%;
		left: -50%;
	}

	.leftToMiddle-enter, .leftToMiddle-leave-to
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
	.backTransition-enter, .backTransition-leave-to
	{
		right: -200px !important;
	}
	.backTransition-enter-to, .backTransition-leave
	{
		right: 25px !important;
	}
	.backAnchored
	{
		right: 25px;
	}
	.zoomInAnimationOne
	{
		animation: panbackone .75s,
					zoomin .5s;
		animation-delay: 0s, .75s;
	}
	.zoomInAnimationTwo
	{
		animation: panbacktwo .75s,
					zoomin .5s;
		animation-delay: 0s, .75s;
	}
	.zoomInAnimationThree
	{
		animation: panbackthree .75s,
					zoomin .5s;
		animation-delay: 0s, .75s;
	}
	.zoomInAnimationFour
	{
		animation: panbackfour .75s,
					zoomin .5s;
		animation-delay: 0s, .75s;
	}
	.zoomInAnimationFive
	{
		animation: panbackfive .75s,
					zoomin .5s;
		animation-delay: 0s, .75s;
	}
	.zoomInAnimationSix
	{
		animation: panbacksix .75s,
					zoomin .5s;
		animation-delay: 0s, .75s;
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
	}

	.downArrowText
	{
		font-size: 10px;
		color: #000000;
	    position: absolute;
	    left: 50%;
    	transform: translateX(-50%);
	}

	.downArrow
	{
		width: 50px;
		height: 50px;
		background: url(/img/down.png) no-repeat;
		background-size: contain;
	}

	@media only screen and (min-width: 300px) and (max-width: 700px) and (orientation: portrait),
		   only screen and (min-height: 300px) and (max-height: 700px) and (orientation: landscape)
	{
		#servicesContainer
		{
			transform: scale(.6);
		}
		#activeService
		{
			width: 304px;
		    height: 352px;
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
			top: 150px;
			font-size: 11px;
		}
		.serviceImage
		{
			top: 90px;
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
			bottom: 15px;
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