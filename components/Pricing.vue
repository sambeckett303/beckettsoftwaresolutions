<template>
    <div>
        <section-title title="Priced right, built to impress"></section-title>
        <h1 class="sectionTitleHeader">PRICING</h1>
        <div id="pricingGrid">
            <div class="pricingCard" v-for="pricingCard in pricingCards" :class="{
                selected: pricingCard.title === 'Monthly',
                normal: pricingCard.title !== 'Monthly',
            }">
                <div class="title">{{ pricingCard.title }}</div>
                <div v-for="component in pricingCard.components" class="componentContainer">
                    <div class="component">{{ component.label }}</div>
                     <PricingCheckMark v-if="component.icon === 'checked'"
                        height="20px"
                        width="20px">
                    </PricingCheckMark>
                    <PricingX v-else
                        height="20px"
                        width="20px">
                    </PricingX>
                </div>
                <div class="priceContainer">
                    <div class="price">{{ pricingCard.price }}</div>
                    <span class="subPriceText">{{ pricingCard.subPriceText }}</span>
                </div>
            </div>
        </div>
        <div class="priceButton">
            <my-button @click="$router.push('/quote')" buttonText="Get Started"></my-button>
        </div>
    </div>
</template>


<script>
    export default {
		data: () => ({
            pricingCards: [{
                title: 'Upfront',
                price: '$2500',
                subPriceText: '+$25 Per Month Hosting',
                components: [{
                    label: 'Design & Development',
                    icon: 'checked',
                }, {
                    label: '+$25 Per Month Hosting',
                    icon: 'checked',
                }, {
                    label: '$100 Per Page after 5',
                    icon: 'checked',
                }, {
                    label: '+$50 Per Month Unlimited Edits',
                    icon: 'checked',
                }, {
                    label: '+$200 For Blog Page',
                    icon: 'checked',
                }, {
                    label: 'Unlimited Support',
                    icon: 'slashed',
                }],
            }, {
                title: 'Monthly',
                price: '$150',
                subPriceText: 'Per Month',
                components: [{
                    label: 'Design & Development',
                    icon: 'checked',
                }, {
                    label: 'Hosting Inlcuded',
                    icon: 'checked',
                }, {
                    label: '$100 per page after 5',
                    icon: 'checked',
                }, {
                    label: 'Unlimited Edits Included',
                    icon: 'checked',
                }, {
                    label: '+$200 For Blog Page',
                    icon: 'checked',
                }, {
                    label: 'Unlimited Support',
                    icon: 'checked',
                }],
            }, {
                title: 'Ecommerce',
                price: '$4k',
                subPriceText: 'Starting',
                components: [{
                    label: 'Custom Shopify Shop',
                    icon: 'checked',
                }, {
                    label: 'Fully Editable CMS',
                    icon: 'checked',
                }, {
                    label: 'Simplified shipping',
                    icon: 'checked',
                }, {
                    label: '+$50 per month Unlimited Edits',
                    icon: 'checked',
                }, {
                    label: '+$200 for Blog page',
                    icon: 'checked',
                }, {
                    label: 'Unlimited Support',
                    icon: 'slashed',
                }],
            }]
        })
    }
</script>

<style scoped>
h1 {
    margin-top: 65px;
}
#pricingGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 25px;
    margin: 25px;
}
.selected {
    border-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 50%, #b675ff 100%) 1;
    border-width: 4px;
    border-style: solid;
}

.priceButton {
    width: 200px;
    margin: 0 auto;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-top: 50px;
    margin-bottom: 75px;
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: 10px 5px 5px gray;
}

.normal {
    border: 1px solid #605eff;
}
.pricingCard {
    padding: 25px;
    border-radius: 10px;

    .title {
        font-size: 22px;
        font-weight: bold;
    }

    .componentContainer {
        display: flex;
        margin-top: 11px;
        justify-content: space-between;
    }

    .priceContainer {
        display: flex;
        margin-top: 35px;

        .price {
            font-size: 45px;
            font-weight: bold;
        }
        
        .subPriceText {
            font-size: 22px;
            color: grey;
            margin-left: 7px;
        }
    }
}
@media only screen and (max-width: 865px) {
    #pricingGrid {
        grid-template-columns: 1fr !important;
        gap: 50px;
    }
}
</style>