<template>
    <div id="portfolio" class="pageContainer">
        <hexagon-grid page="work"></hexagon-grid>
        <h1 class="sectionTitleHeader">PORTFOLIO</h1>
        <p>
            Every great business starts somewhere, and so does every great website. While we’re a new company, we’re already building clean, high-performing websites. Check out our latest work, and let’s create something amazing for your business next!
        </p>
        <div id="portfolioGrid">
            <div class="item" v-for="item in portfolioItems">
                <div class="itemPhoneContainer"><img src="/img/phone.png" class="itemPhone"></div>
                <img :src="item.gif" class="itemGif">
                <div class="itemTitle">{{ item.title }}</div>
                <div class="itemDescription">
                    {{ item.description }}
                    <div class="visitSiteContainer">
                        <a :href="item.link" class="visitSite">Visit Site</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#portfolio {
    margin-top: 75px;
    height: fit-content;
    margin-bottom: 75px;

    #portfolioGrid {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;

        .item {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .itemPhoneContainer {
            position: relative;
            width: 235px;
            margin: 0 auto;
        }
        .itemPhone {
            width: 269px;
            position: absolute;
            height: 560px;
            left: -18px;
            top: -76px;
        }
        .itemGif {
            margin: 0 auto;
            width: 235px;
            border-radius: 20px;
        }
        .itemTitle {
            background: var(--primary-color);
            color: white;
            width: 80%;
            margin: 0 auto;
            margin-top: 20px;
            border-radius: 7px 7px 0px 0px;
            padding: 15px;
            box-sizing: border-box;
            font-weight: bold;
            font-size: 17px;
        }
        .itemDescription {
            background: white;
            border: 4px solid var(--primary-color);
            padding: 20px;
            width: 80%;
            min-height: 50px;
            margin: 0 auto;
            border-radius: 0px 0px 7px 7px;
            box-sizing: border-box;

            .visitSiteContainer {
                margin: 20px;
                margin-top: 30px;
            }

            .visitSite {
                box-shadow: 1px 1px 1px 1px var(--secondary-color);
                background-color: var(--third-color);
                color: #FFFFFF;
                text-decoration: none;
                padding: 20px;
                margin-top: 10px;
            }
        }
    }
    @media only screen and (max-width: 865px) {
        #portfolioGrid {
            grid-template-columns: 1fr !important;
            gap: 50px;
        }
    }
}
</style>

<script>
	export default
	{
		name: 'services',
		data: () => ({
            portfolioItems: [{
                title: 'North Pole Lighting Company',
                gif: '/gif/northpole.gif',
                description: 'North Pole Lighting Comapny provides holiday that services the Southern Denver / Castle Rock area. This was a fun and unique design that does well.',
                link: 'https://www.northpolelightingcompany.com',
            }, {
                title: 'Thrush Designs',
                gif: '/gif/thrushdesigns.gif',
                description: 'A portfolio website for an Seattle-based Artist to showcase (and edit) her various unique artwork, services, and includes an editable blog.',
                link: 'https://thrushdesigns.art',
            }],
        })
    }
</script>