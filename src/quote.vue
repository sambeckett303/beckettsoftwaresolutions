<template>
	<transition name="bounce">
	<div>
		<div class="pageTitle" style="width: 80%;left: 0;right: 0;margin: auto;">Let's Build Something Awesome!</div>
		<div class="quoteContainer">
			<div class="quoteLabel">Tell me a little about your project:</div>
			<textarea rows="10" cols="100" class="quoteText"></textarea>
			<div class="quoteLabel">Email Address:</div>
			<input class="quoteText"></input>
			<div style="margin-bottom: 50px;">
				<div class="button">SUBMIT</div>
			</div>
		</div>
	</div>
	</transition>
</template>

<script>
	export default
	{
		name: 'quote',
		beforeMount: function()
		{
			$('body').css('overflow-y', 'scroll');
			
		},
		beforeDestroy: function()
		{
			$('body').css('overflow-y', 'hidden');
		}
	}
</script>

<style lang="scss">
	.quoteLabel {
		font-size: 18px;
	    color: #6160ff;
	    padding-bottom: 10px;
	}

	.quoteText {
		margin-bottom: 15px;
		border: 1px solid #6160ff;
		background: #efefef;
	    font-size: 15px;
	    padding: 10px;
	    max-width: 100%;
	}

	.button {
		background: linear-gradient(90deg, #605eff 0%, #b675ff 45%, #54e1f2 100%);
	    color: #FFFFFF;
	    padding: 15px 30px;
	    font-size: 20px;
	    font-family: 'Russo One', sans-serif;
	    display: inline-block;
	    cursor: pointer;
	    margin-top: 15px;
	}

	.quoteContainer {
		position: relative;
    	top: 230px;
    	width: 80%;
		margin: auto;
    	color: #6f6868;

    	p {
    		margin: 20px;
		    font-size: 15px;
    	}
	}

	@media only screen and (min-width: 437px) {
		.quoteContainer {
			top: 111px;
		}
	}

	@media only screen and (min-width: 600px) {
		.quoteContainer {
			top: 290px;
		}
	}

	@media only screen and (min-width: 868px) {
		.quoteContainer {
			top: 250px;
		}
	}
		

	@media only screen and (min-width: 300px) and (max-width: 600px) and (orientation: portrait),
		   only screen and (min-height: 300px) and (max-height: 600px) and (orientation: landscape)
	{
		
	}
</style>