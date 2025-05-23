<template>
	<div class="pageContainer">
		<div class="pageTitle">Work</div>
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
				<!--<div id="activeWorkTitle"><div class="title">{{activeWork.title}}</div></div>-->
				<div id="activeWorkDescription">
					<div class="workLogo" :class="activeWork.logoClass"></div>
					<div class="text" :style="{ top: activeWork.descriptionTop }" v-html="activeWork.description"></div>
				</div>
				<div v-if="!isMobile" id="activeWorkImages" style="display: none;">
					<div v-for="image in activeWork.images" class="workImage" :style="{ 'background-image': image }"></div>
				</div>
				<div id="backContainer" @click="backToWork">
					<div class="text">BACK</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
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
            // {
            //     title: 'Seagate Technologies',
			// 	   top: 'calc(50% - 150px)',
			// 	   left: 'calc(50% - 275px)',
            //     hovering: false,
            //     description: 'I worked full time at Seagate for 7 years. I worked on various web based projects during my time here.<br><br>Was the lead architect and technical developer of building a completely re-designed and modernized version of a large single page application interface used for monitoring and configuring data storage systems.<br><br>I am now working on a new project, helping build out a Node.js microservices backend for a unified data experience.',
            //     descriptionTop: '205px',
            //     logoClass: 'seagateWork'
            // },
            {
                title: 'Thrush Designs',
				top: 'calc(50% - 150px)',
                left: 'calc(50% - 275px)',
                hovering: false,
                description: 'A Seattle based artist with amazing and creative art products, often plant-based artwork. The site is a portfolio that showcases her various categories of artwork, along with an online store where she can sell her current projects. Includes an administration page where all the site content and orders can be managed.<br><br>Check out this project live at <a href="https://www.thrushdesigns.art">ThrushDesigns.art</a>.',
                descriptionTop: '260px',
                logoClass: 'thrushWork'
            },
            {
                title: 'B-Rad Customs',
				top: 'calc(50% - 150px)',
                left: 'calc(50% - 100px)',
                hovering: false,
                description: 'A custom metal fabrication shop located out of Cedaredge, Colorado. The site features a photo gallery of all his previous work, categorized by their two channels of work: Vehicles and Art. The site also has an online store, where users can buy his various vehicle and/or artwork products. This particular site uses PayPal for the checkout process. The site includes a custom administration page I have built where all the site content, including the slideshow images, reviews, gallery projects, store products, and orders can be managed.<br><br>You can check out this project live over at <a href="https://b-rad-customs.netlify.app/">b-rad-customs.netlify.app.com</a>',
                descriptionTop: '235px',
                // logoClass: 'kozaWork'
            },
            {
                title: 'North Pole Lighting',
				top: '50%',
                left: 'calc(50% - 189px)',
                hovering: false,
                descriptionTop: '260px',
                description: 'A simple but effective one-page website for a holiday season lighting company that features some fun graphics and showcases some of their work. Includes the ability for potential customers to easily email the business owner with a quote request.<br><br>You can check out this project live over at <a href="https://www.northpolelightingcompany.com">NorthPoleLightingCompany.com</a>',
                logoClass: 'nplcWork'
            },
            // {
            //     title: 'Universal Studios',
            //     top: '50%',
            //     left: 'calc(50% - 12px)',
            //     hovering: false,
            //     descriptionTop: '260px',
            //     description: 'Worked together with Universal Studios where I was writing backend Node.js code that supported the theme parks and resorts in Orlando, Hollywood, and Japan.<br><br>This was an excellent experience and got exposed to several new technologies and processes. I worked on several projects including Third Tier Express, Mobile Food and Drink Orders, and repo containerization migration.',
            //     logoClass: 'universalWork'
            // }
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
        },
        handleTouchMove: function(event)
        {
            var touchobj = event.changedTouches[0]
            var distX = touchobj.pageX - this.startX // get horizontal dist traveled by finger while in contact with surface
            var distY = touchobj.pageY - this.startY // get vertical dist traveled by finger while in contact with surface
            var currentLeftPosition = parseInt(this.leftToHold.slice(0, -1));
            if (distX < 0)
            {
                // left swipe, move panel to right
                var leftAmt = Math.round(Math.abs(distX)/2);
                var newLeft = currentLeftPosition - leftAmt;
                
            }
            else if (distX > 0)
            {
                // right swipe, move panel to left
                var leftAmt = Math.round(Math.abs(distX)/2);
                var newLeft = currentLeftPosition + leftAmt;
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
    }
}
</script>

<style lang="scss" scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
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
	    right: 35%;
	    top: 35px;
	    background: url(/img/hexagon-04.png) no-repeat;
	    background-size: contain;
	    width: 175px;
	    height: 200px;
	    transform: translateX(-50%);
	    display: table;

	    .title
	    {
		    width: 156px;
		    text-align: center;
		    display: table-cell;
		    vertical-align: middle;
		    font-size: 22px;
    		padding: 0px 10px 5px 10px;
	    }
	}

	#activeWorkDescription
	{
	    position: absolute;
	    left: calc(50% + 5px);
	    top: 50%;
	    background: url(/img/hexagon-04.png) no-repeat;
	    background-size: contain;
	    width: 600px;
	    height: 690px;
	    transform: translate(-50%, -50%);

	    .workLogo
	    {
	    	position: absolute;
	   		background-size: contain;
	   		left: 50%;
	   		transform: translateX(-50%);
	    }

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

	.workTransition-enter-from, .workTransition-leave-to
	{
		top: -100%;
		left: 0px;
	}

	.workTransition-enter-to, .workTransition-leave-from
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
		bottom: 66px;
		right: -20px ;
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
		position: absolute;
    	bottom: 140px;
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

	.seagateWork
	{
		background: url(/img/logo.png) no-repeat;
		width: 200px;
		height: 200px;
		top: 60px;
	}

	.thrushWork
	{
		background: url(/img/thrushlogo.png) no-repeat;
		width: 400px;
		height: 75px;
		top: 153px;
	}

	.kozaWork
	{
		background: url(/img/kozalogo.png) no-repeat;
		width: 398px;
		height: 64px;
		top: 165px;
	}

	.nplcWork {
		background: url(/img/NPLC.png) no-repeat;
		width: 254px;
		height: 146px;
		top: 109px;
	}

	.universalWork {
		background: url(/img/Universal_Parks_and_Resorts_logo.webp) no-repeat;
		width: 254px;
		height: 146px;
		top: 109px;
	}

	@media only screen and (min-width: 300px) and (max-width: 600px) and (orientation: portrait),
		   only screen and (min-height: 300px) and (max-height: 600px) and (orientation: landscape)
	{
		#pageContainer {
			overflow: hidden;
		}
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
    		top: 50%;
			width: calc(100vw - 23px);
    		height: calc(100vw + 30px);
		}
		#activeWorkDescription .text
		{
			top: 50% !important;
			left: 50%;
			transform: translate(-50%, -50%);
    		width: calc(100vw - 85px);
			font-size: 10px;
		}
		#backContainer
		{
			width: 87px;
    		height: 100px;
    		bottom: 150px;
    		right: -10px;
		}
		#backContainer .text
		{
			top: 38px;
		    left: 20px;
		    font-size: 18px;
		}

		.seagateWork {
			width: 75px;
		    height: 75px;
			top: 40px;
		}

		.thrushWork {
			width: 164px;
			height: 30px;
			top: 72px;
		}

		.kozaWork {
			width: 136px;
    		height: 22px;
			top: 74px;
		}
	}
	@media only screen and (min-width: 100px) and (max-width: 400) {
		#activeWorkDescription .text {
			font-size: 12px;
		}
	}

	@media only screen and (min-width: 100px) and (max-width: 475) {
		#activeWorkDescription .text {
			font-size: 14px;
		}
	}
</style>