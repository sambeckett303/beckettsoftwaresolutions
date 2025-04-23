<template>
	<transition name="bounce">
	<div>
		<div style="margin-top: 15px">
			<section-title title="Let's build something amazing"></section-title>
		</div>
		<form @submit.prevent="submitQuoteRequest" name="contact">
			<div class="quoteContainer">
				<div class="quoteLabel">Tell me a little about your project:</div>
				<textarea rows="10" cols="100" class="quoteText" v-model="description"></textarea>
				<div class="quoteLabel">Name:</div>
				<input class="quoteText" v-model="name">
				<div class="quoteLabel">Email Address:</div>
				<input class="quoteText" v-model="email">
				<p v-if="showMissingFieldsMessage">Please provide both email and password</p>
				<div style="margin-bottom: 50px;">
					<my-button buttonText="SUBMIT"></my-button>
				</div>
			</div>
		</form>
		<div class="fadeBg" v-if="sending || success || showErrorDialog"></div>
		<div class="circleContainer" v-if="sending">
			<svg fill="none" class="circle-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<circle class="circle" cx="50" cy="50" r="45" />
			</svg>
		</div>
		<div class="dialogContainer" v-if="success">
			<div class="text">Successfully sent request. We will be in touch shortly!</div>
			<div class="button" @click="closeSuccess">BACK TO HOME</div>
		</div>
		<div class="dialogContainer" v-if="showErrorDialog">
			<div class="text">Oops.. Sorry, there was an unexpected error. Please contact sam@vailvalleywebworks.com</div>
			<div class="button" @click="closeSuccess">BACK TO HOME</div>
		</div>
	</div>
	</transition>
</template>

<script>
	export default
	{
		name: 'quote',
		data: () => ({
			sending: false,
			success: false,
			showErrorDialog: false,
			showMissingFieldsMessage: false,
			email: '',
			name: '',
			description: ''
		}),
		methods: {
			submitQuoteRequest(e) {
				if (!this.email || !this.description) {
					this.showMissingFieldsMessage = true;
					return;
				} else {
					this.showMissingFieldsMessage = false;
				}
				this.sending = true;
				fetch('/.netlify/functions/contact-submitted', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name: this.name,
						email: this.email,
						description: this.description
					})
				})
				.then(response => {
					if (response.ok) {
						this.handleSuccess();
					} else {
						throw new Error('Network response was not ok.');
					}
				})
				.catch(error => {
					console.error('There has been a problem with your fetch operation:', error);
					this.handleError();
				});
			},
			handleSuccess() {
				this.sending = false;
				this.success = true;
			},
			closeSuccess() {
				this.$router.push('/');
			},
			handleError() {
				this.sending = false;
				this.showErrorDialog = true;
			},
		}
	}
</script>

<style lang="scss">
	body {
		overflow: auto !important;
	}
	.quoteLabel {
		font-size: 18px;
	    color: var(--primary-color);
	    padding-bottom: 10px;
	}

	.quoteText {
		margin-bottom: 15px;
		border: 1px solid var(--secondary-color);
		background: #efefef;
	    font-size: 15px;
	    padding: 10px;
	    max-width: 100%;
		box-sizing: border-box;
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
    	width: 80%;
		margin: 75px auto;
    	color: #6f6868;

    	p {
    		margin: 20px;
		    font-size: 15px;
    	}
	}

	.fadeBg {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: black;
		opacity: .6;
	}

	.circleContainer {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.circle-svg {
		--_circle-radius: 45px;
		--_svg-width: 100px;
		--_stroke-width: 10px; /* svg-width - (circle-radius * 2) */

		width: var(--_svg-width);
		height: var(--_svg-width);

		stroke: white;
		/*   stroke-linecap: round; */
		stroke-width: var(--_stroke-width);

		stroke-dashoffset: 1;
		stroke-dasharray: 1 1000;

		animation: loader 1500ms infinite linear, spin 3000ms infinite linear;
	}

	@keyframes loader {
		0% {
			stroke-dashoffset: 1;
			stroke-dasharray: 1 1000;
		}

		100% {
			stroke-dashoffset: calc(var(--_circle-radius) * -2 * 3.1415);
			stroke-dasharray: calc(var(--_circle-radius) * 2 * 3.1415) 1000;
		}
	}

	@keyframes spin {
		0% {
			rotate: 0deg;
		}

		100% {
			rotate: 360deg;
		}
	}

	.dialogContainer {
		width: calc(100vw - 60px);
		max-width: 350px;
		background: white;
		position: fixed;
		z-index: 1000;
		padding: 20px;
		border-radius: 10px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}


	@media only screen and (min-width: 1060px) {
		.quoteContainer {
			top: 250px;
		}
	}
</style>