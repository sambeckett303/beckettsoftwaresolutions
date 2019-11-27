<template>
	<transition name="bounce">
	<div class="pageContainer">
		<div class="pageTitle">My Blog</div>
		<hexagon-grid page="blog"></hexagon-grid>
		<!-- For now, we hide this
		<div
			id="featuredPosts"
			class="blogSortTitle"
			:class="{ notActive: activeSection == 'full' }"
			@click="changeView('featured')">
			Featured Posts
		</div>
		<div
			id="fullArchive"
			class="blogSortTitle"
			:class="{ notActive: activeSection == 'featured' }"
			@click="changeView('full')">
			Full Archive
		</div>
		<div id="activeBar" :style="{ left: activeLeft }"></div>
		-->
		<transition name="slideInFromLeft">
			<div v-if="activeSection == 'featured'" id="featuredContainer" :style="{ left: activeFeatureLeft }">
				<div v-for="blog in featuredBlogs"
					class="featuredHexagon"
					@mouseover="blog.hovering = true"
					@mouseout="blog.hovering = false"
					@click="blogSelected(blog)"
					:class="{ active: blog.hovering }"
					:style="{
						top: blog.top,
						right: blog.right,
						bottom: blog.bottom,
						left: blog.left
					}">
					<div class="title">{{blog.title}}</div>
					<div class="date">{{blog.date}}</div>
				</div>
			</div>
		</transition>
		<div v-if="isMobile" class="leftRightSwipe"></div>
	</div>
	</transition>
</template>

<script>
	import HexagonGrid from './hexagon-grid.vue';
	export default
	{
		name: 'blog',
		data: () => ({
			activeSection: 'featured',
			activeLeft: '',
			activeFeatureLeft: '0',
			isMobile: false,
			dist: null,
			startX: null,
			startY: null,
			featuredBlogs:
			[
				{
					title: "10 Reasons Why You Should Hire Professional Developers For Your Website",
					date: "Oct 27, 2019",
					url: "10_Reasons_Why_You_Should_Hire_Professional_Developers_For_Your_Website",
					hovering: false,
					top: "10px",
					left: "calc(50% - 108px)"
				}
			]
		}),
		beforeMount: function()
		{
			if ((window.innerHeight > window.innerWidth && window.innerWidth <= 600) ||
						(window.innerWidth > window.innerHeight && window.innerHeight <= 600))
			{
				this.isMobile = true;
				this.activeFeatureLeft = '-130px';
			}
			this.changeView('featured');
		},
		mounted: function()
		{
			document.getElementById('featuredContainer').addEventListener('touchstart', this.handleTouchStart.bind(this), {passive: false});
			document.getElementById('featuredContainer').addEventListener('touchmove', this.handleTouchMove);
			document.getElementById('featuredContainer').addEventListener('touchend', this.handleTouchEnd.bind(this), {passive: false});
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
			document.getElementById('featuredContainer').removeEventListener('touchstart', this.handleTouchStart);
			document.getElementById('featuredContainer').addEventListener('touchmove', this.handleTouchMove);
			document.getElementById('featuredContainer').removeEventListener('touchend', this.handleTouchEnd);
		},
		methods:
		{
			changeView: function(view)
			{
				this.activeSection = view;
				if (this.activeSection == 'featured')
				{
					if ((window.innerHeight > window.innerWidth && window.innerWidth <= 600) ||
						(window.innerWidth > window.innerHeight && window.innerHeight <= 600))
					{
						this.activeLeft = '20px';
					}
					else
					{
						this.activeLeft = 'calc(50% - 318px)';
					}
					
				}
				else
				{
					if ((window.innerHeight > window.innerWidth && window.innerWidth <= 600) ||
						(window.innerWidth > window.innerHeight && window.innerHeight <= 600))
					{
						this.activeLeft = '164px';
					}
					else
					{
						this.activeLeft = 'calc(50% + 58px)';
					}
				}
			},
			blogSelected: function(blog)
			{
				this.$router.push('/blog/'+blog.url);
			},
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
		    	var currentLeftPosition = parseInt(this.activeFeatureLeft.slice(0, -1));
		        console.log("current activeFeatureLeft: "+this.activeFeatureLeft);
		        console.log("current left: " + currentLeftPosition);
		        if (distX < 0)
		        {
		        	// left swipe, move panel to right
		        	console.log("left swipe")
		        	var leftAmt = Math.round(Math.abs(distX));
		        	var newLeft = currentLeftPosition - leftAmt;
		        	console.log("new left: "+ newLeft);
		        }
		        else if (distX > 0)
		        {
		        	// right swipe, move panel to left
		        	console.log("right swipe");
		        	var leftAmt = Math.round(Math.abs(distX));
		        	var newLeft = currentLeftPosition + leftAmt;
		        	console.log("new left: " + newLeft);
		        }
		        else
		        {
		        	return;
		        }
		        if (newLeft > -130)
		        {
		        	newLeft = -130;
		        }
		        else if (newLeft < -260)
		        {
		        	newLeft = -260;
		        }
		        this.activeFeatureLeft = newLeft + 'px';
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
			}
		},
		components:
		{
			HexagonGrid
		}
	}
</script>

<style lang="scss" scoped>
	.blogSortTitle
	{
		position: absolute;
		top: 160px;
		font-size: 27px;
		font-family: 'Russo One', sans-serif;
	}
	#featuredPosts
	{
		left: calc(50% - 300px);
	}
	#fullArchive
	{
		left: calc(50% + 100px);
	}
	#activeBar
	{
		height: 5px;
		width: 250px;
		background: linear-gradient(90deg, #605eff 0%, #b675ff 45%, #54e1f2 100%);
		position: absolute;
		top: 194px;
		transition: all .4s cubic-bezier(0.280, 0.840, 0.420, 1);;
	}
	.notActive
	{
		cursor: pointer;
		transition: all .2s ease;
	}
	.notActive:hover
	{
		color: #b675ff;
	}
	#featuredContainer
	{
		position: absolute;
		top: 250px;
		left: 0;
		right: 0;
	}
	.active
	{
		transform: scale(1.2);
		-webkit-transform: scale(1.2);
		-moz-transform: scale(1.2);
		-o-transform: scale(1.2);
		-ms-transform: scale(1.2);
	}
	.featuredHexagon
	{
		position: absolute;
	    background: url(/img/hexagon-04.png) no-repeat;
	    background-size: contain;
		width: 225px;
    	height: 260px;
	    transition: all .3s ease;
	    cursor: pointer;

	    .title
	    {
		    position: absolute;
		    top: 68px;
		    left: 5px;
		    width: 155px;
		    text-align: center;
		    font-size: 14px;
		    margin: 0px 25px;
	    }

	    .date
	    {
	    	position: absolute;
		    top: 170px;
		    left: 5px;
		    width: 155px;
		    text-align: center;
		    font-size: 14px;
		    margin: 0px 25px;
	    }
	}

	.leftRightSwipe
	{
		position: fixed;
    	bottom: 0px;
	    left: 50%;
	    width: 40px;
	    height: 40px;
	    background: url(/img/left-right-black.png) no-repeat;
	    background-size: contain;
	    transform: translateX(-50%);
	}

	.slideInFromLeft-enter-active, .slideInFromLeft-leave-active
	{
		transition: all .4s ease;
	}
	.slideInFromLeft-enter, .slideInFromLeft-leave-to
	{
		left: -100%;
	}
	.slideInFromLeft-enter-to, .slideInFromLeft-leave
	{
		left: 0px;
	}

	@media only screen and (min-width: 300px) and (max-width: 600px) and (orientation: portrait),
		   only screen and (min-height: 300px) and (max-height: 600px) and (orientation: landscape)
	{
		#featuredPosts
		{
			left: 25px;
		}
		.blogSortTitle
		{
			top: 130px;
    		font-size: 15px;
		}
		#fullArchive
		{
			left: 184px;
		}
		#activeBar
		{
			height: 4px;
   			width: 128px;
   			top: 148px;
		}
		#featuredContainer
		{
			top: 35px;
			right: 0;
		    bottom: 0;
		    transform: scale(.67);
		}
	}
</style>