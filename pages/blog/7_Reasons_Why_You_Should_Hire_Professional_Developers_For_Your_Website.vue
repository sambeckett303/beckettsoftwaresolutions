<template>
	<div>
		<div class="blogPostContainer">
			<div class="backContainer">
				<MyButton @click="$router.push('/blog')" button-text="Back"></MyButton>
			</div>
			<div style="position: relative;">
				<img class="mainBlogImage" src="/img/testblog.jpg">
				<div class="mainBlogImageCover"></div>
				<div class="blogTitle">
					<h1>7 Reasons Why You Should Hire Professional Developers For Your Website</h1>
					<div>April 2nd, 2025</div>
				</div>
			</div>
			<div class="blogContentContainer">
				<p>Now, I should start off by saying I might be <i>a little</i> biased writing this. As a Software Engineer with 5+ years of industry web development experience, I consider myself a "Professional Developer".</p><p>However, after you read these 7 reasons down below, hopefully you will have a better understanding of what advantages come from building custom websites with a Developer such as myself vs using a cheaper, template based drag-and-drop website builder.</p>

				<ol>
					<li>
						<h4>CUSTOM DESIGNS</h4>
						<div>
							Templates can only take you so far, quite literally. There is no doubt that they look nice... But if you want a website that is truly unique to your brand and really makes your online presence stand out, you are going to need a custom website design. A professional developer knows how to create the best custom design for your business. They also have the expertise to solve the technical problems that arise from creating complex websites with such custom designs.
						</div>
					</li>
					<li>
						<h4>TIME SAVER</h4>
						<div>
							Creating a successful website is not a simple process. There is a lot of thought and planning that goes behind building and running a professional website, and by hiring an expert in website development, they can take care of all that for you, saving you more time to focus other aspects of your business.
						</div>
					</li>
					<li>
						<h4>CONVENIENCE</h4>
						<div>
							A high quality professional developer should be able to walk you through the entire process of creating the perfect custom website for your business, and the whole process should be a fun, easy, and mostly hands-off experience for you. For the most convenient experience, it's best to find a developer with good communication skills.
						</div>
					</li>
					<li>
						<h4>ONGOING SUPPORT</h4>
						<div>
							Having a good developer by your side can provide reassurance that your website will be dependable. They can help make improvements to the website over time that can lead to big differences. A developer can make sure your website adapts to changes that are necessary, for example, if there is a <a href="https://www.cookielaw.org/the-cookie-law/" target="_blank">new law out that enforces certain cookie rules</a>.
						</div>
					</li>
					<li>
						<h4>SEO</h4>
						<div>
							For many businesses, having a website with good Search Engine Optimization has played an impactful role in their business. A good web professional understand SEO thoroughly and know how to build a search-friendly website, and also understand how to improve the website's SEO over time.
						</div>
					</li>
					<li>
						<h4>CREDIBILITY & TRUSTWORTHINESS</h4>
						<div>
							Having a professional, clean, and custom website that is easy to use will give your business much more credibility, and leave customers with more trust in your company. In this modern day, these are the kinds of things that will give your business the competitive advantage.
						</div>
					</li>
					<li>
						<h4>NEW TECHNOLOGIES</h4>
						<div>
							A professional developer will always be staying up to date with the latest web technologies. By working with a professional, you can ensure that your website will be built with the latest and greatest technologies and solutions, which will mean the the website will always have a very modern look and feel.
						</div>
					</li>
				</ol>
				<h3>Conclusion</h3>
				<p>
					And there you have it! 7 reasons why you should hire a professional developer to build your website. There are more reasons, and I may add and edit this list over time. Are you looking to hire a professional developer for your website? If so, totally not biased, but I would suggest hiring me! <a @click="$router.push('/quote')">Let's work together!</a>
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    background-color: #fafafa;
    margin: 0;
    padding: 20px;
}

/* Centering Content */
.blogPostContainer {
    max-width: 800px; /* Adjust as needed */
    margin: 0 auto; /* Centers the content */
    background: #fff; /* Optional: adds a white background */
    padding: 20px;
    border-radius: 8px; /* Optional: soft rounded corners */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow */
}

.backContainer {
	margin-top: -10px;
	padding-bottom: 15px;
	width: 80px;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
    color: #222;
    margin-bottom: 10px;
}

h1 { font-size: 2em; }
h2 { font-size: 1.75em; }
h3 { font-size: 1.5em; }
h4 { font-size: 1.25em; }
h5 { font-size: 1.1em; }
h6 { font-size: 1em; }

/* Paragraphs */
p {
    margin-bottom: 15px;
}

/* Images */
img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 10px 0;
    border-radius: 5px;
}

/* Links */
a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
}

a:hover {
    color: #0056b3;
	cursor: pointer;
}

/* Lists */
ul, ol {
    padding-left: 20px;
    margin-bottom: 15px;
}

li {
    margin-bottom: 5px;
}

/* Blockquotes */
blockquote {
    font-style: italic;
    padding: 10px 20px;
    margin: 20px 0;
    border-left: 4px solid #007bff;
    background: #f8f9fa;
}

/* Code Blocks */
pre {
    background: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
}

code {
    font-family: 'Courier New', monospace;
    background: #eee;
    padding: 2px 5px;
    border-radius: 3px;
}

/* Responsive Design */
@media (max-width: 768px) {
    body {
        padding: 10px;
    }
    h1 { font-size: 1.8em; }
    h2 { font-size: 1.6em; }
    h3 { font-size: 1.4em; }
}
	// body {
	// 	overflow: auto !important;
	// }
	// .backContainer {
	// 	margin-top: -40px;
	// 	padding-bottom: 15px;
	// 	width: 75px;
	// }
	// .backText
	// {
	// 	position: absolute;
	//     top: 40px;
	//     left: 65px;
	//     font-family: 'Russo One', sans-serif;
	//     font-size: 20px;
	//     color: #000000;
	// }
	// .blogPostContainer
	// {
	// 	margin-top: 130px;
	// }
	// .blogTitle
	// {
	// 	font-family: 'Russo One', sans-serif;
	// 	text-align: center;
	// 	position: absolute;
	//     top: 50%;
	//     left: 50%;
	//     transform: translate(-50%, -50%);
	//     color: #FFFFFF;
	// }
	// .mainBlogImage
	// {
	// 	width: 100%;
	// 	height: 100vh;
	// }
	// .mainBlogImageCover
	// {
	// 	position: absolute;
	//     top: 0;
	//     left: 0;
	//     width: 100%;
	//     height: 100vh;
	//     background: black;
	//     opacity: .4;
	// }
	// .blogContentContainer
	// {
	// 	position: relative;

	// 	p
	// 	{
	// 		width: 60%;
    // 		margin: 35px auto;
	// 	}
	// 	h3 {
	// 		width: 60%;
	// 	}
	// 	p:first-of-type
	// 	{
	// 		padding-top: 60px;
	// 	}

	// 	ol {
	// 		width: 60%;
    // 		margin: 0 auto;
	// 	}
	// }

	// @media only screen and (min-width: 300px) and (max-width: 600px) and (orientation: portrait),
	// 	   only screen and (min-height: 300px) and (max-height: 600px) and (orientation: landscape)
	// {
	// 	.blogPostContainer
	// 	{
	// 		margin-top: 67px;
	// 		margin-bottom: 67px;
	// 	}
	// 	.mainBlogImage
	// 	{
	// 		height: 250px
	// 	}
	// 	.mainBlogImageCover
	// 	{
	// 		height: 250px;
	// 	}
	// 	.blogTitle
	// 	{
	// 		font-size: 11px;
	// 	}
	// 	.blogContentContainer p {
    // 		width: 80%;
    // 	}
	// 	.blockContentContainer h3 {
	// 		width: 80%;
	// 	}
    // 	.blogContentContainer ol {
    // 		width: 90%;
    // 	}
    // 	.blogContentContainer p:first-of-type {
    // 		padding-top: 22px;
    // 	}
    // 	.backText
    // 	{
    // 		top: -17px;
    // 		left: 17px;
    // 		font-size: 16px;
    // 	}
	// }
</style>