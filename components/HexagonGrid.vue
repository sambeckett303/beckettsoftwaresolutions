<template>
	<div>
		<div v-for="hexagon in hexagons" class="hexagon"
			:style="{
				width: hexagon.size,
				height: hexagon.size,
				top: hexagon.top,
				bottom: hexagon.bottom,
				left: hexagon.left,
				right: hexagon.right
			}">
			<gradient-hex :scale="hexagon.scale"></gradient-hex>
		</div>
	</div>
</template>

<script>
	export default
	{
		name: 'hexagon-grid',
		props:
		{
			page: String
		},
		data: () => ({
			hexagons: [],
			mobileReviewHexagons:
			[
				{
					size: '30px',
					top: '60px',
					right: '20px'
				},
				{
					size: '15px',
					top: '110px',
					right: '100px'
				},
				{
					size: '45px',
					top: '140px',
					left: '10px'
				},
				{
					size: '45px',
					bottom: '10px',
					right: '10px'
				},
				{
					size: '28px',
					bottom: '30px',
					left: '30%'
				},
				{
					size: '18px',
					bottom: '60px',
					left: '15px'
				}
			],
			mobileServiceHexagons:
			[
				{
					size: '50px',
					bottom: '15px',
					right: '50px'
				},
				{
					size: '150px',
					bottom: '10px',
					left: '8px'
				},
				{
					size: '100px',
					top: '75px',
					right: '10px'
				},
				{
					size: '40px',
					top: '130px',
					left: '50px'
				},
				{
					size: '30px',
					top: '220px',
					left: '10px'
				},
				{
					size: '30px',
					bottom: '220px',
					right: '10px'
				}
			],
			mobileWorkHexagons:
			[
				{
					size: '30px',
					top: '45%',
					left: '55%'
				},
				{
					size: '60px',
					top: '25%',
					right: '10px'
				},
				{
					size: '15px',
					top: '0px',
					left: '5px'
				},
				{
					size: '100px',
					left: '-25px',
					top: '75%'
				},
				{
					size: '60px',
					right: '15px',
					bottom: '55px'
				},
				{
					size: '30px',
					left: '30%',
					bottom: '40%'
				}
			],
			mobileBlogHexagons:
			[
				{
					size: '30px',
					bottom: '75px',
					left: '5%'
				},
				{
					size: '60px',
					top: '330px',
					right: '110px'
				},
				{
					size: '15px',
					bottom: '130px',
					right: '5px'
				},
				{
					size: '100px',
					left: '25px',
					top: '130px'
				},
				{
					size: '60px',
					right: '15px',
					top: '55px'
				},
				{
					size: '30px',
					left: '30%',
					bottom: '25px'
				}
			],
			workHexagons:
			[
				{
					size: '350px',
					top: '75%',
					left: '-10px'
				},
				{
					size: '200px',
					top: '25%',
					right: '185px'
				},
				{
					size: '50px',
					top: '50%',
					left: '50px'
				},
				{
					size: '40px',
					top: '-150px',
					left: '65%'
				},
				{
					size: '100px',
					bottom: '100px',
					right: '450px'
				},
				{
					size: '50px',
					bottom: '300px',
					right: '150px'
				}
			],
			servicesHexagons:
			[
				{
					size: '350px',
					bottom: '0px',
					right: '50px'
				},
				{
					size: '200px',
					bottom: '100px',
					left: '-10px'
				},
				{
					size: '50px',
					top: '50px',
					left: '65%'
				},
				{
					size: '40px',
					top: '300px',
					right: '50px'
				},
				{
					size: '100px',
					bottom: '100px',
					left: '450px'
				},
				{
					size: '50px',
					top: '300px',
					left: '150px'
				}
			],
			reviewHexagons:
			[
				{
					size: '350px',
					top: '50%',
					right: '50px'
				},
				{
					size: '200px',
					top: '20px',
					left: '420px'
				},
				{
					size: '50px',
					top: '50px',
					right: '180px'
				},
				{
					size: '40px',
					bottom: '10px',
					left: '35%'
				},
				{
					size: '100px',
					bottom: '100px',
					left: '250px'
				},
				{
					size: '50px',
					top: '60%',
					left: '60%'
				}
			],
			blogHexagons:
			[
				{
					size: '350px',
					bottom: '50px',
					left: '25%'
				},
				{
					size: '200px',
					top: '200px',
					right: '20px'
				},
				{
					size: '50px',
					top: '50px',
					left: '380px'
				},
				{
					size: '40px',
					top: '10px',
					left: '60%'
				},
				{
					size: '100px',
					top: '50%',
					left: '100px'
				},
				{
					size: '50px',
					bottom: '60px',
					left: '60%'
				}
			],
			blogPostHexagons:
			[
				{
					size: '350px',
					top: '193px',
					left: '0px'
				},
				{
					size: '200px',
					top: '170px',
					right: '20px'
				},
				{
					size: '50px',
					top: '50px',
					left: '420px'
				},
				{
					size: '40px',
					top: '10px',
					left: '70%'
				},
				{
					size: '100px',
					bottom: '10px',
					right: '100px'
				},
				{
					size: '50px',
					bottom: '60px',
					left: '43px'
				}
			]
		}),
		beforeMount: function()
		{
			this.blogPostHexagons.forEach((pg) => {
				pg.scale = (Number(pg.size.substring(0, pg.size.length - 2)) / 200).toString();
			});
			this.blogHexagons.forEach((pg) => {
				pg.scale = (Number(pg.size.substring(0, pg.size.length - 2)) / 200).toString();
			});
			this.reviewHexagons.forEach((pg) => {
				pg.scale = (Number(pg.size.substring(0, pg.size.length - 2)) / 200).toString();
			});
			this.servicesHexagons.forEach((pg) => {
				pg.scale = (Number(pg.size.substring(0, pg.size.length - 2)) / 200).toString();
			});
			this.workHexagons.forEach((pg) => {
				pg.scale = (Number(pg.size.substring(0, pg.size.length - 2)) / 200).toString();
			});
			this.mobileBlogHexagons.forEach((pg) => {
				pg.scale = (Number(pg.size.substring(0, pg.size.length - 2)) / 200).toString();
			});
			this.mobileReviewHexagons.forEach((pg) => {
				pg.scale = (Number(pg.size.substring(0, pg.size.length - 2)) / 200).toString();
			});
			this.mobileServiceHexagons.forEach((pg) => {
				pg.scale = (Number(pg.size.substring(0, pg.size.length - 2)) / 200).toString();
			});
			this.mobileWorkHexagons.forEach((pg) => {
				pg.scale = (Number(pg.size.substring(0, pg.size.length - 2)) / 200).toString();
			});
			if ((window.innerHeight > window.innerWidth && window.innerWidth <= 600) ||
				(window.innerWidth > window.innerHeight && window.innerHeight <= 600))
			{
				switch (this.page)
				{
					case 'services':
						this.hexagons = this.mobileServiceHexagons;
						break;
					case 'work':
						this.hexagons = this.mobileWorkHexagons;
						break;
					case 'contact':
						this.hexagons = this.mobileReviewHexagons;
						break;
					case 'blog':
					case 'blogpost':
						this.hexagons = this.mobileBlogHexagons;
						break;
				}
			}
			else
			{
				switch (this.page)
				{
					case 'services':
						this.hexagons = this.servicesHexagons;
						break;
					case 'work':
						this.hexagons = this.workHexagons;
						break;
					case 'reviews':
						this.hexagons = this.reviewHexagons;
						break;
					case 'blog':
						this.hexagons = this.blogHexagons;
						break;
					case 'blogpost':
						this.hexagons = this.blogPostHexagons;
						break;
				}
			}
		}
	}
</script>

<style lang="scss">
	.hexagon
	{
		position: absolute;
		// background: url(/img/hexagon-01.png);
		// background-size: contain;
		z-index: -1;
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
			-webkit-transform: scale(0);
			-moz-transform: scale(0);
			-o-transform: scale(0);
			-ms-transform: scale(0);
		}
		100% {
			transform: scale(1);
			-webkit-transform: scale(1);
			-moz-transform: scale(1);
			-o-transform: scale(1);
			-ms-transform: scale(1);
		}
	}
	@keyframes bounce-out {
		0% {
			transform: scale(1);
			-webkit-transform: scale(1);
			-moz-transform: scale(1);
			-o-transform: scale(1);
			-ms-transform: scale(1);
		}
		100% {
			transform: scale(0);
			-webkit-transform: scale(0);
			-moz-transform: scale(0);
			-o-transform: scale(0);
			-ms-transform: scale(0);
		}
	}
</style>