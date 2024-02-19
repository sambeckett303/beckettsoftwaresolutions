<template>
	<div id="appWrapper">
		<header id="header">
			<div id="logoContainer">
				<div id="logo"></div>
				<div id="letters"></div>
			</div>
			<div id="menuButtonContainer" @click="menuActive = true">
				<div id="menuText">MENU</div>
			</div>
		</header>
        <main>
            <slot />
        </main>
        <transition name="slideFromRight">
			<div v-if="menuActive" id="menuContainer">
				<div id="menuLogoContainer">
					<div id="logo"></div>
					<div id="letters"></div>
				</div>
				<div id="closeMenuContainer" @click="menuActive = false">
					<div id="closeMenu">CLOSE</div>
				</div>
				<div id="menuItemsContainer">
					<div v-for="menuItem in menu"
						class="menuHexagon"
						@click="menuSelected(menuItem)"
						@mouseover="menuItem.hovering = true"
						@mouseout="menuItem.hovering = false"
						:class="{ active: menuItem.hovering }"
						:style="{
							top: menuItem.top,
							right: menuItem.right,
							bottom: menuItem.bottom,
							left: menuItem.left
						}">
						<div class="menuLabel">{{menuItem.label}}</div>
					</div>
				</div>
			</div>
		</transition>
    </div>
</template>

<script>
	export default
	{
		name: "main-component",
		data: () => ({
			showWorkTogetherIcon: false,
			menuActive: false,
			threshold: 100, //required min distance traveled to be considered swipe
		    restraint: 100, // maximum distance allowed at the same time in perpendicular direction
		    allowedTime: 300, // maximum time allowed to travel that distance
			menu:
			[
				{
					label: "HOME",
					page: "/",
					left: 'calc(50% - 167px)',
					top: 'calc(50% - 244px)',
					hovering: false
				},
				{
					label: "SERVICES",
					page: "/services",
					left: 'calc(50% - 3px)',
					top: 'calc(50% - 243px)',
					hovering: false
				},
				{
					label: "WORK",
					page: "/work",
					left: 'calc(50% + 79px)',
					top: 'calc(50% - 100px)',
					hovering: false
				},
				{
					label: "REVIEWS",
					page: "/reviews",
					left: 'calc(50% - 1px)',
					top: 'calc(50% + 44px)',
					hovering: false
				},
				{
					label: "ABOUT",
					page: "/about",
					left: 'calc(50% - 165px)',
					top: 'calc(50% + 43px)',
					hovering: false
				},
				{
					label: "BLOG",
					page: "/blog",
					left: 'calc(50% - 246px)',
					top: 'calc(50% - 100px)',
					hovering: false
				}
			],
			imagesToLoad: [

			]
		}),
		methods:
		{
			goToQuote: function() {
				this.$router.push('/quote');
			},
			menuSelected: function(menuItem)
			{
				this.$router.push(menuItem.page);
				this.menuActive = false;
			}
		}
	}
</script>
<style lang="scss">
	body
	{
		overflow: hidden;
		margin: 0;
		font-family: 'Open Sans', sans-serif;
	}
	#logoContainer
	{
		position: absolute;
		top: 5px;
		left: 25px;
	}
	#menuLogoContainer
	{
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		top: 40px;
    	width: 340px;
	}
	#logo
	{
		width: 110px;
		height: 122px;
		background: url(/img/BeckettSoftwareSolutionsLogo.png) no-repeat;
		background-size: contain;
		display: inline-block;
	}
	#letters
	{
		width: 200px;
	    height: 120px;
	    background: url(/img/BeckettSoftwareSolutionsText.png) no-repeat;
	    background-size: contain;
	    display: inline-block;
	    top: 18px;
	    position: relative;
	    left: 20px;
	}
	#menuButtonContainer
	{
		position: absolute;
	    right: 72px;
    	top: 53px;
    	z-index: 1;
    	padding: 10px;
    	cursor: pointer;
    	transition: all .3s ease;
	}
	#menuButtonContainer:hover
	{
		box-shadow: 1px 1px 1px 1px #7a5b9e;
	    background-color: #b475ff;
	    color: #FFFFFF;
	}
	#menuText
	{
		font-family: 'Russo One', sans-serif;
	}
	#menuContainer
	{
		position: fixed;
		width: 100%;
		height: 100vh;
		top: 0;
    	left: 0;
		background: #FFFFFF;
		z-index: 2;
	}
	#menuItemsContainer
	{
		position: absolute;
		width: 100%;
		height: 100vh;
		top: 0;
    	left: 0;
	}
	.slideFromRight-enter-active, .slideFromRight-leave-active
	{
		transition: transform .5s ease;
        -webkit-transition: transform .5s ease;
		-moz-transition: transform .5s ease;
		-o-transition: transform .5s ease;
		-ms-transition: transform .5s ease;
	}
	.slideFromRight-enter-from, .slideFromRight-leave-to
	{
		transform: translateX(100%);
		-webkit-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-o-transform: translateX(100%);
		-ms-transform: translateX(100%);
	}
	.slideFromRight-enter-to, .slideFromRight-leave-from
	{
		transform: translateX(0%);
		-webkit-transform: translateX(0%);
		-moz-transform: translateX(0%);
		-o-transform: translateX(0%);
		-ms-transform: translateX(0%);
	}
	.primaryButton
	{
		padding: 10px 15px;
	    border: 2px solid #FFFFFF;
	    color: #FFFFFF;
	    font-weight: bold;
	    display: inline-block;
	    cursor: pointer
	}
	.pageTitle
	{
		position: absolute;
	    top: 141px;
	    left: 25px;
	    background: #605eff;
	    background: linear-gradient(90deg, #605eff 0%, #b675ff 45%, #54e1f2 100%);
	    color: #FFFFFF;
	    padding: 15px 30px;
	    font-size: 41px;
	    font-family: 'Russo One', sans-serif;
		max-width: calc(100% - 71px);
	}

	.pageContainer
	{
		position:absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		overflow: hidden;
	}

	.anchorOutOfSight
	{
		top: 120% !important;
		left: 120% !important;
	}

	#closeMenuContainer
	{
		position: absolute;
	    right: 72px;
    	top: 53px;
    	z-index: 3;
    	padding: 10px;
    	cursor: pointer;
    	transition: all .3s ease;
	}
	#closeMenuContainer:hover
	{
		box-shadow: 1px 1px 1px 1px #7a5b9e;
	    background-color: #b475ff;
	    color: #FFFFFF;
	}
	#closeMenu
	{
		font-family: 'Russo One', sans-serif;
	}

	.menuHexagon
	{
		position: absolute;
		background: url(/img/hexagon-04.png) no-repeat;
		background-size: contain;
		width: 174px;
		height: 198px;
		transition: all .3s ease;
		cursor: pointer;

		.menuLabel
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
	}

	.menuHexagon.active
	{
		transform: scale(1.2);
		z-index: 4;
	}

	@media only screen and (min-width: 1060px) {
		@keyframes zoomout {
			from {
				transform: scale(1);
				-moz-transform: scale(1);
				-o-transform: scale(1);
				-ms-transform: scale(1);
			}
			to {
				transform: scale(0.6);
				-moz-transform: scale(0.6);
				-o-transform: scale(0.6);
				-ms-transform: scale(0.6);
			}
		}
		@-webkit-keyframes zoomout {
			0% {
				-webkit-transform: scale(1);
			}
			100% {
				-webkit-transform: scale(0.6);
			}
		}
		@keyframes zoomin {
			from {
				transform: scale(0.6);
				-moz-transform: scale(0.6);
				-o-transform: scale(0.6);
				-ms-transform: scale(0.6);
			}
			to {
				transform: scale(1);
				-moz-transform: scale(1);
				-o-transform: scale(1);
				-ms-transform: scale(1);
			}
		}
	}

	@media only screen and (max-width: 1060px) {
		@keyframes zoomin {
			from {
				transform: scale(0.6);
				-moz-transform: scale(0.6);
				-o-transform: scale(0.6);
				-ms-transform: scale(0.6);
			}
			to {
				transform: scale(1);
				-moz-transform: scale(1);
				-o-transform: scale(1);
				-ms-transform: scale(1);
			}
		}
		#logo
		{
			width: 56px;
			height: 61px;
		}
		#letters
		{
			width: 146px;
		    height: 52px;
		    top: -7px;
		    left: 10px;
		}
		#menuButtonContainer
		{
			right: 15px;
    		top: 18px;
		}
	}

	@media only screen and (min-width: 300px) and (max-width: 600px) and (orientation: portrait),
		   only screen and (min-height: 300px) and (max-height: 600px) and (orientation: landscape)
	{
		#menuLogoContainer
		{
			top: 75px;
			width: 180px;
		}
		#menuItemsContainer
		{
			transform: scale(0.6);
		}
		#closeMenuContainer
		{
			right: 15px;
    		top: 15px;
		}
		#logo
		{
			width: 48px;
    		height: 53px;
		}
		#letters
		{
			width: 117px;
		    height: 41px;
		    top: -6px;
		    left: 3px;
		}
		#menuButtonContainer
		{
			right: 15px;
		    top: 18px;
		    font-size: 13px;
		}

		@keyframes zoomout {
			0% {
				transform: scale(0.7);
				-moz-transform: scale(0.7);
				-o-transform: scale(0.7);
				-ms-transform: scale(0.7);
			}
			100% {
				transform: scale(0.45);
				-moz-transform: scale(0.45);
				-o-transform: scale(0.45);
				-ms-transform: scale(0.45);
			}
		}
		@-webkit-keyframes zoomout {
			0% {
				-webkit-transform: scale(0.7);
			}
			100% {
				-webkit-transform: scale(0.45);
			}
		}
		@keyframes zoomin {
			0% {
				transform: scale(0.45);
				-webkit-transform: scale(0.45);
				-moz-transform: scale(0.45);
				-o-transform: scale(0.45);
				-ms-transform: scale(0.45);
			}
			100% {
				transform: scale(0.7);
				-webkit-transform: scale(0.7);
				-moz-transform: scale(0.7);
				-o-transform: scale(0.7);
				-ms-transform: scale(0.7);
			}
		}
	}
	.letsWorkTogether {
		position: absolute;
		background: #605eff;
		bottom: 10px;
        left: 10px;
        border-radius: 8px;

		.logo {
			background: url(/img/workTogether.png) no-repeat;
			background-size: contain;
			width: 60px;
			height: 60px;
		}
	}
</style>