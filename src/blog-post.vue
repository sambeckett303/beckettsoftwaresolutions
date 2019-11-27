<template>
	<transition name="bounce">
	<div style="position: absolute;">
		<div class="blogPostContainer">
			<div v-html="blogText"></div>
		</div>
	</div>
	</transition>
</template>

<script>
	import HexagonGrid from './hexagon-grid.vue'
	export default
	{
		name: 'blog-post',
		data: function()
		{
			return {
				blogText: ''
			};
		},
		beforeMount: function()
		{
			$('body').css('overflow-y', 'scroll');
			$.ajax(
			{
				url: '/views/' + this.$route.params.title + '.html',
		        dataType: "text",
		        method: "GET",
		        success: this.handleSuccess.bind(this),
		        error: this.handleError.bind(this)
			});
		},
		beforeDestroy: function()
		{
			$('body').css('overflow-y', 'hidden');
		},
		methods:
		{
			handleSuccess: function(data)
			{
				this.blogText = data;
			},
			handleError: function(data)
			{
				console.log("error!");
			}
		},
		components:
		{
			HexagonGrid
		}
	}
</script>

<style lang="scss">
	.backText
	{
		position: absolute;
	    top: 40px;
	    left: 65px;
	    font-family: 'Russo One', sans-serif;
	    font-size: 20px;
	    color: #000000;
	}
	.blogPostContainer
	{
		margin-top: 130px;
	}
	.blogTitle
	{
		font-family: 'Russo One', sans-serif;
		text-align: center;
		position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	    color: #FFFFFF;
	}
	.mainBlogImage
	{
		width: 100%;
		height: 100vh;
	}
	.mainBlogImageCover
	{
		position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100vh;
	    background: black;
	    opacity: .4;
	}
	.blogContentContainer
	{
		position: relative;

		p
		{
			width: 60%;
    		margin: 35px auto;
		}
		p:first-of-type
		{
			padding-top: 60px;
		}

		ol {
			width: 60%;
    		margin: 0 auto;
		}
	}

	@media only screen and (min-width: 300px) and (max-width: 600px) and (orientation: portrait),
		   only screen and (min-height: 300px) and (max-height: 600px) and (orientation: landscape)
	{
		.blogPostContainer
		{
			margin-top: 67px;
		}
		.mainBlogImage
		{
			height: 250px
		}
		.mainBlogImageCover
		{
			height: 250px;
		}
		.blogTitle
		{
			font-size: 11px;
		}
		.blogContentContainer p {
    		width: 80%;
    	}
    	.blogContentContainer p:first-of-type {
    		padding-top: 22px;
    	}
    	.backText
    	{
    		top: -17px;
    		left: 17px;
    		font-size: 16px;
    	}
	}
</style>