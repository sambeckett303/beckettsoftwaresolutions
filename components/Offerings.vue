<template>
    <div>
       <h1 class="sectionTitleHeader">WHAT WE OFFER</h1>
       <div id="offeringsBg">
            <div id="offeringsGrid">
                <div class="whiteText">
                    <h2 style="font-size: 26px;">Websites for $0 down and $100 per month</h2>
                    <div style="font-size: 18px;">
                        We offer a professional 5-page small business website with $0 upfront cost starting at $100 a month. Need more pages? We will do custom pricing based on the project. Our plans come with a 12-month minimum contract and include design, development, hosting, unlimited edits, support, and updates.
                    </div>
                    <div id="offeringsInnerGrid">
                        <div class="offeringsContainer" v-for="offering in offerings">
                            <OfferingsCheckmark height="50px" width="50px"></OfferingsCheckmark>
                            <div>
                                <div class="offeringTitle">{{ offering.title }}</div>
                                <div class="offeringsDescriptoin">{{ offering.description }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="meContainer">
                    <div id="whitePolygonMe"></div>
                    <div id="nameContainer">
                        <div id="name">Sam Beckett</div>
                        <div id="owner">Owner / Developer</div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<style scss="true" scoped>
    #offeringsBg {
        background: #675AFF;
        margin: 20px 60px;
        padding: 50px 30px 70px 30px;
        border-radius: 10px;
    }
    .whiteText {
        color: white;
    }

    #whitePolygonMe {
	    background: url(/img/owner.JPG) no-repeat;
	    border-radius: 10px 10px 0px 0px;
        height: 0;
        padding: 0;
        padding-bottom: 0px;
        padding-bottom: 75%;
        background-position: center center;
        background-size: 100%;
        background-repeat: no-repeat;
	}
    #offeringsGrid {
        display: grid;
        grid-template-columns: 1fr 303px;
        grid-gap: 20px;
        
        #nameContainer {
            width: 271px;
            padding: 15px;
            background: white;
            border-radius: 0px 0px 10px 10px;

            #name {
                font-weight: bold;
                font-size: 18px;
            }
        }
        #offeringsInnerGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            margin-top: 40px;

            .offeringsContainer {
                display: flex;
                width: 83%;
                margin: 0 auto;
                gap: 15px;
            }

            .offeringTitle {
                font-weight: bold;
                font-size: 22px;
            }
        }
    }

    .meContainer {
        align-content: center;
        margin: 0 auto;
        width: 100%;
    }

    @media only screen and (max-width: 1135px) {
        #offeringsBg {
            margin: 20px 10px;
            width: 95%;
            box-sizing: border-box;
        }
        #offeringsGrid {
            grid-template-columns: 1fr;
        }
        #nameContainer {
            width: 100%;
            box-sizing: border-box;
        }

    }

    @media only screen and (max-width: 865px) {
        #offeringsInnerGrid {
            grid-template-columns: 1fr !important;
        }
    }
    
</style>

<script>
	export default
	{
		name: 'services',
		data: () => ({
            offerings: [{
                title: 'Fully Secure',
                description: 'Our websites are built with pure HTML and CSS, making them completely static—no databases or dynamic code, which means there’s nothing for hackers to exploit.',
            }, {
                title: 'Swift Performance',
                description: 'We optimize our sites to load as quickly as possible on each device size with no wasted resources, resulting in lightning-fast performance and high Google speed scores.',
            }, {
                title: 'Built Just for You',
                description: 'Each website is custom designed for the business. We\'re not bound by templates and we work to find something that is specifically curated for your industry.',
            }, {
                title: 'Risk-Free Guarantee',
                description: 'If we can\'t create a design you love, you\'ll get a full refund, and the contract will be canceled—no hassle, no risk. We’re confident in our work and committed to your satisfaction.'
            }, {
                title: 'Personalized Support',
                description: 'Call or text anytime —- no customer support hotline. When you reach out, you get me—the owner and developer—ready to help directly.'
            }, {
                title: 'Drive Sales',
                description: 'We optimize your site with best possible SEO practices to get your site at the top of Google. We can also help increase traffic by running targeted advertisements.',
            }],
        })
    }
</script>