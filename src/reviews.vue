<template>
	<transition name="bounce">
	<div class="pageContainer">
		<div class="pageTitle">My Reviews</div>
		<template v-for="review in reviews">
			<transition :name="revTran">
				<div v-if="review.active" class="reviewHexagon">
					<div class="text">&quot;{{review.text}}&quot;</div>
					<div class="client">
						<div>{{review.clientName}}</div>
						<div>{{review.clientCompany}}</div>
					</div>
				</div>
			</transition>
		</template>
		<div class="leftArrow" @click="changeReview('left')"></div>
		<div class="rightArrow" @click="changeReview('right')"></div>
		<hexagon-grid page="reviews"></hexagon-grid>
		<div class="downArrowArea">
			<div class="downArrowText">ABOUT</div>
			<div class="downArrow"></div>
		</div>
	</div>
	</transition>
</template>

<script>
	import HexagonGrid from './hexagon-grid.vue';
	export default
	{
		name: 'reviews',
		data: () => ({
			reviews:
			[
				{
					active: true,
					text: "Sam makes the best damn websites around, and he's very quick and efficient at what he does. My business has nearly tripled since we got our new website!",
					clientName: "Gay Thrush",
					clientCompany: "Thrush Designs"
				},
				{
					active: false,
					text: "I effin love my new website. Sam made a kickass admin page to go along with my kickass website and I love it and stuff woo hoo!",
					clientName: "Brad White",
					clientCompany: "Koza Customs"
				},
				{
					active: false,
					text: "WAAAAAT Up my guy.",
					clientName: "Gay Thrush",
					clientCompany: "Thrush Designs"
				}
			],
			revTran: 'leftRev'
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
			changeReview: function(direction)
			{
				if (direction == 'left')
				{
					this.revTran = 'leftRev';
				}
				else
				{
					this.revTran = 'rightRev';	
				}
				for (var i = 0; i < this.reviews.length; i++)
				{
					if (this.reviews[i].active)
					{
						this.reviews[i].active = false;
						if (direction == 'left')
						{
							if (i == 0)
							{
								this.reviews[this.reviews.length-1].active = true;
							}
							else
							{
								this.reviews[i-1].active = true;
							}
						}
						else
						{
							if (i == this.reviews.length-1)
							{
								this.reviews[0].active = true;
							}
							else
							{
								this.reviews[i+1].active = true;
							}
						}
						break;
					}
				}
			}
		},
		components:
		{
			HexagonGrid
		}
	}
</script>

<style lang="scss" scoped>
	.reviewHexagon
	{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 350px;
		height: 400px;
		background: url(/img/hexagon-04.png) no-repeat;
		background-size: contain;
		z-index: 1;

		.text
		{
			width: 265px;
		    position: absolute;
		    top: 100px;
		    left: 36px;
		    text-align: center;
		}

		.client
		{
			text-align: center;
		    position: absolute;
		    width: 329px;
		    top: 250px;
		}
	}
	.leftArrow
	{
		cursor: pointer;
		width: 100px;
		height: 100px;
		background: url(/img/left.png) no-repeat;
		background-size: contain;
		position: absolute;
		left: 50px;
		top: 50%;
		transform: translateY(-50%);
	}
	.rightArrow
	{
		cursor: pointer;
		width: 100px;
		height: 100px;
		background: url(/img/right.png) no-repeat;
		background-size: contain;
		position: absolute;
		right: 50px;
		top: 50%;
		transform: translateY(-50%);
	}
	.leftRev-enter-active, .leftRev-leave-active
	{
		transition: all .5s ease;
	}

	.leftRev-enter-to, .leftRev-leave
	{
		left: 50% !important;
	}
	.leftRev-enter
	{
		left: 120% !important;
	}
	.leftRev-leave-to
	{
		left: -20% !important;
	}

	.rightRev-enter-active, .rightRev-leave-active
	{
		transition: all .5s ease;
	}

	.rightRev-enter-to, .rightRev-leave
	{
		left: 50% !important;
	}
	.rightRev-leave-to
	{
		left: 120% !important;
	}
	.rightRev-enter
	{
		left: -20% !important;
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
		.reviewHexagon
		{
			width: 252px;
    		height: 287px;
    		top: calc(50% + 30px);
		}

		.reviewHexagon .text
		{
			width: 177px;
    		font-size: 13px;
    		top: 63px;
		}

		.reviewHexagon .client
		{
			width: 240px;
    		top: 181px;
		}

		.leftArrow, .rightArrow
		{
			width: 30px;
			height: 30px;
			top: calc(50% + 50px);
		}
		.leftArrow
		{
			left: 0px;
		}
		.rightArrow
		{
			right: 0px;
		}
		.rightRev-leave-to
		{
			left: 200% !important;
		}
		.rightRev-enter
		{
			left: -100% !important;
		}
		.leftRev-enter
		{
			left: 200% !important;
		}
		.leftRev-leave-to
		{
			left: -100% !important;
		}
	}
</style>