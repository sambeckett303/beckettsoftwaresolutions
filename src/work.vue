<template>
	<transition name="bounce">
	<div class="pageContainer">
		<div class="pageTitle">My Work</div>
		<hexagon-grid page="work"></hexagon-grid>
		<div id="workContainer"
			:class="[zoomAnimation, anchorOutOfSight]"
			:style="{
				transform: zoomToHold,
				left: leftToHold
			 }">
			<div v-for="work in workTiles" class="workHexagon"
				@mouseover="work.hovering = true"
				@mouseout="work.hovering = false"
				@click="workClicked(work)"
				:class="{ active: work.hovering }"
				:style="{
					top: work.top,
					left: work.left
				}">
				<div class="title">{{work.title}}</div>
			</div>
		</div>
		<transition name="fade">
			<div v-if="isMobile && !workActive && zoomAnimation == ''" class="leftRightSwipe"></div>
		</transition>
		<transition name="workTransition">
			<div id="activeWork" v-if="workActive" :class="{ activeServiceBigSize: activeWorkBigSize }">
				<div id="activeWorkTitle"><div class="title">{{activeWork.title}}</div></div>
				<div id="activeWorkDescription">
					<div class="text" :style="{ top: activeWork.descriptionTop }">{{activeWork.description}}</div>
				</div>
				<div v-if="!isMobile" id="activeWorkImages">
					<div v-for="image in activeWork.images" class="workImage" :style="{ 'background-image': image }"></div>
				</div>
				<div id="backContainer" @click="backToWork">
					<div class="text">BACK</div>
				</div>
			</div>
		</transition>
		<div class="downArrowArea">
			<div class="downArrowText">REVIEWS</div>
			<div class="downArrow"></div>
		</div>
	</div>
	</transition>
</template>

<script>
	import HexagonGrid from './hexagon-grid.vue';
	export default
	{
		name: 'work',
		data: () => ({
			workActive: false,
			activeWorkBigSize: false,
			zoomToHold: '',
			leftToHold: '',
			startX: null,
			startY: null,
			workTiles:
			[
				{
					title: 'Seagate Technologies',
					top: 'calc(50% - 150px)',
					left: 'calc(50% - 275px)',
					hovering: false,
					description: 'A professional full stack web developer for over 3 years. During this time, I helped stabilize the current web interface, and was the lead technical developer for the next generation of the RealStor web-based management interface. The web application behaves similar to a desktop application, with all functionality in a single page, similar to this website.',
					descriptionTop: '260px',
					images:
					[
						'url(/img/seagateOne.png)'
					]
				},
				{
					title: 'Thrush Designs',
					top: 'calc(50% - 150px)',
					left: 'calc(50% - 100px)',
					hovering: false,
					description: 'A portfolio website for a Seattle based artist. The site showcases her various categories of artwork, along with an online store where she can sell her current projects. Includes an administration page where the site content and orders can be managed.',
					descriptionTop: '260px',
					images:
					[
						'thrushOne'
					]
				},
				{
					title: 'Koza Customs',
					top: '50%',
					left: 'calc(50% - 189px)',
					hovering: false,
					description: 'A small custom metal fabrication shop here in Colorado. The site features a photo gallery of all his previous work, categorized by their two channels of work: Vehicles and Art. The site also has an online store, where users can buy his various vehicle and/or artwork products. Includes an administration page where the site content and orders can be managed.',
					descriptionTop: '260px',
					images:
					[
						'kozaOne'
					]
				},
				{
					title: 'In Progress...',
					top: 'calc(50% - 150px)',
					left: 'calc(50% + 75px)',
					hovering: false,
					descriptionTop: '260px',
					description: 'Lorem ipsum this is some text about upcoming projects..'
				},
				{
					title: 'In Progress...',
					top: '50%',
					left: 'calc(50% - 12px)',
					hovering: false,
					descriptionTop: '260px',
					description: 'Lorem ipsum this is some text about upcoming projects..'
				}
			],
			isMobile: false,
			zoomAnimation: '',
			anchorOutOfSight: ''
		}),
		beforeMount: function()
		{
			if ((window.innerHeight > window.innerWidth && window.innerWidth <= 600) ||
						(window.innerWidth > window.innerHeight && window.innerHeight <= 600))
			{
				this.isMobile = true;
				this.leftToHold = '85px';
			}
			else
			{
				this.isMobile = false;
				this.leftToHold = '0px';
			}
		},
		mounted: function()
		{
			document.getElementById('workContainer').addEventListener('touchstart', this.handleTouchStart.bind(this), {passive: false});
			document.getElementById('workContainer').addEventListener('touchmove', this.handleTouchMove);
			document.getElementById('workContainer').addEventListener('touchend', this.handleTouchEnd.bind(this), {passive: false});
		    this.$nextTick(() => {
		      window.addEventListener('resize', () => {
		        this.$forceUpdate();
		      });
		    });
		    var pageElement = document.getElementsByClassName('pageContainer')[0];
		    pageElement.addEventListener('touchmove', function(e) { e.preventDefault() }, {passive: false });
		},
		beforeDestroy: function()
		{
			document.getElementById('workContainer').removeEventListener('touchstart', this.handleTouchStart);
			document.getElementById('workContainer').addEventListener('touchmove', this.handleTouchMove);
			document.getElementById('workContainer').removeEventListener('touchend', this.handleTouchEnd);
		},
		methods:
		{
			handleTouchStart: function(event)
			{
				var touchobj = event.changedTouches[0];
		        this.dist = 0;
		        this.startX = touchobj.pageX;
		        this.startY = touchobj.pageY;
		        console.log("touch start bruh");
			},
			handleTouchMove: function(event)
			{
				var touchobj = event.changedTouches[0]
				var distX = touchobj.pageX - this.startX // get horizontal dist traveled by finger while in contact with surface
		        var distY = touchobj.pageY - this.startY // get vertical dist traveled by finger while in contact with surface
		    	var currentLeftPosition = parseInt(this.leftToHold.slice(0, -1));
		        console.log("current leftToHold: "+this.leftToHold);
		        console.log("current left: " + currentLeftPosition);
		        if (distX < 0)
		        {
		        	// left swipe, move panel to right
		        	var leftAmt = Math.round(Math.abs(distX)/2);
		        	var newLeft = currentLeftPosition - leftAmt;
		        	
		        }
		        else if (distX > 0)
		        {
		        	// right swipe, move panel to left
		        	console.log("right swipe");
		        	var leftAmt = Math.round(Math.abs(distX)/2);
		        	var newLeft = currentLeftPosition + leftAmt;
		        	console.log("new left: " + newLeft);
		        }
		        else
		        {
		        	return;
		        }
		        if (newLeft > 85)
		        {
		        	newLeft = 85;
		        }
		        else if (newLeft < -85)
		        {
		        	newLeft = -85;
		        }
		        this.leftToHold = newLeft + 'px';
		        this.startX = touchobj.pageX;
		        this.startY = touchobj.pageY;
			},
			handleTouchEnd: function(event)
			{
				var touchobj = event.changedTouches[0]
		        var distX = touchobj.pageX - this.startX // get horizontal dist traveled by finger while in contact with surface
		        var distY = touchobj.pageY - this.startY // get vertical dist traveled by finger while in contact with surface
				this.startX = null;
				this.startY = null;
				console.log("touch end bruh");
			},
			workClicked: function(workSection)
			{
				this.activeWork = workSection;
				this.zoomAnimation = 'zoomOutAnimation'
				setTimeout(function() {
					if ((window.innerHeight > window.innerWidth && window.innerWidth <= 600) ||
						(window.innerWidth > window.innerHeight && window.innerHeight <= 600))
					{
						this.zoomToHold = 'scale(0.45)';
					}
					else
					{
						this.zoomToHold = 'scale(0.6)';
					}
					this.workActive = true;
					setTimeout(function() {
						this.activeWorkBigSize = true;
						setTimeout(function() {
							this.zoomToHold = '';
							this.zoomAnimation = '';
							this.anchorOutOfSight = 'anchorOutOfSight';
						}.bind(this), 500);
					}.bind(this), 500)
				}.bind(this), 500);
			},
			backToWork: function()
			{
				// TODO: animate going back to work area
				this.activeWorkBigSize = false;
				setTimeout(function() {
					this.zoomAnimation = 'zoomInAnimation';
					this.anchorOutOfSight = '';
					if ((window.innerHeight > window.innerWidth && window.innerWidth <= 600) ||
						(window.innerWidth > window.innerHeight && window.innerHeight <= 600))
					{
						this.zoomToHold = 'scale(0.45)';
					}
					else
					{
						this.zoomToHold = 'scale(0.6)';
					}
					setTimeout(function() {
						this.zoomToHold = '';
					}.bind(this), 750)
					setTimeout(function() {
						//this.serviceAnchored = false;
						this.workActive = false;
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
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
	#workContainer
	{
		position: absolute;
		height: 100vh;
		width: 100%;
	}
	.workHexagon
	{
		position: absolute;
	    background: url(/img/hexagon-04.png) no-repeat;
	    background-size: contain;
	    width: 174px;
	    height: 198px;
	    transition: all .3s ease;

	    .title
	    {
	    	position: absolute;
		    top: 68px;
		    left: 5px;
		    width: 107px;
		    text-align: center;
		    font-size: 18px;
		    margin: 0px 25px;
	    }
	}
	#activeWork
	{
		position: absolute;
		height: 100vh;
		width: 100%;
		transition: all .5s ease;
		transform: scale(0.8);
	}

	.activeServiceBigSize
	{
		transform: scale(1.1) !important;
	}

	#activeWorkTitle
	{
		position: absolute;
	    left: 50%;
	    top: 30px;
	    background: url(/img/hexagon-04.png) no-repeat;
	    background-size: contain;
	    width: 175px;
	    height: 270px;
	    transform: translateX(-50%);

	    .title
	    {
	    	position: absolute;
		    width: 156px;
		    top: 70px;
		    left: 7px;
		    text-align: center;
	    }
	}

	#activeWorkDescription
	{
	    position: absolute;
	    right: 90px;
	    top: 50%;
	    background: url(/img/hexagon-04.png) no-repeat;
	    background-size: contain;
	    width: 600px;
	    height: 690px;
	    transform: translateY(-50%);

	    .text
	    {
	    	position: absolute;
		    top: 360px;
		    padding: 10px 60px;
		    left: -15px;
	    }
	}

	#activeWorkImages
	{
		position: absolute;
	    left: 90px;
	    top: 50%;
	    background: url(/img/hexagon-04.png) no-repeat;
	    background-size: contain;
	    width: 600px;
	    height: 690px;
	    transform: translateY(-50%);
	}

	.workImage
	{
		width: 77%;
	    height: 295px;
	    background-size: contain;
	    background-repeat: no-repeat;
	    position: absolute;
	    left: 57px;
	    top: 50%;
	    transform: translateY(-50%);
	}

	.workHexagon.active
	{
		transform: scale(1.2);
		z-index: 2;
		cursor: pointer;
	}
	.zoomOutAnimation
	{
		animation: zoomout .5s,
					panup 1s;
		animation-delay: 0s, .5s;
	}
	@keyframes panup {
		0% {
			top: 0px;
		}
		100% {
			top: 100%;
		}
	}

	@keyframes panbackdown {
		0% {
			top: 100%;
		}
		100% {
			top: 0px;
		}
	}

	.zoomInAnimation
	{
		animation: panbackdown .5s,
					zoomin .5s;
		animation-delay: 0s, .5s;
	}

	.workTransition-enter-active, .workTransition-leave-active
	{
		transition: .5s ease all;
	}

	.workTransition-enter, .workTransition-leave-to
	{
		top: -100%;
		left: 0px;
	}

	.workTransition-enter-to, .workTransition-leave
	{
		top: 0px;
		left: 0px;
	}

	#backContainer
	{
		width: 200px;
		height: 200px;
		background: url(/img/hexagon-04.png) no-repeat;
		background-size: contain;
		position: absolute;
		bottom: 25px;
		left: 50%;
		transform: translateX(-50%);
		cursor: pointer;

		.text
		{
			position: absolute;
		    top: 80px;
		    left: 55px;
		    font-size: 25px;
		}
	}

	.leftRightSwipe
	{
		position: fixed;
    	bottom: 60px;
	    left: 50%;
	    width: 40px;
	    height: 40px;
	    background: url(/img/left-right-black.png) no-repeat;
	    background-size: contain;
	    transform: translateX(-50%);
	}

	.mobileWorkImages
	{
		width: 57px;
	    margin: auto;
	    text-align: center;
	    padding-right: 15px;
	    padding-top: 27px;
	    font-size: 14px;
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

	@media only screen and (min-width: 300px) and (max-width: 600px) and (orientation: portrait),
		   only screen and (min-height: 300px) and (max-height: 600px) and (orientation: landscape)
	{
		#workContainer
		{
			transform: scale(.7);
			top: -50px;
		}
		#activeWorkTitle
		{
			left: 30%;
    		top: 30px;
			width: 125px;
    		height: 147px;
		}
		#activeWorkTitle .title
		{
			top: 43px;
    		left: 10px;
    		width: 100px;
		}
		#activeWorkDescription
		{
			left: 65px;
    		top: 50%;
			width: 255px;
    		height: 289px;
		}
		#activeWorkDescription .text
		{
			top: 60px !important;
		    padding: 16px 26px 0px 36px;
		    left: -15px;
		    font-size: 10px;
		}
		#backContainer
		{
			width: 87px;
    		height: 100px;
    		bottom: 90px;
    		left: 70px;
		}
		#backContainer .text
		{
			top: 38px;
		    left: 20px;
		    font-size: 18px;
		}
	}
</style>