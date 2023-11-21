const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const dynamicCategories = require("eleventy-plugin-dynamic-categories");

// const getSimilarCategories = function (categoriesA, categoriesB) {
// 	return categoriesA.filter(Set.prototype.has, new Set(categoriesB)).length;
// };

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

module.exports = function (eleventyConfig) {
	// Copy the `css` directory to the output
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("static");
	eleventyConfig.addPassthroughCopy("js");

	// Watch the `css` directory for changes
	eleventyConfig.addWatchTarget("css");
	eleventyConfig.addWatchTarget("static");
	eleventyConfig.addWatchTarget("js");

	// double pagination for categories
	eleventyConfig.addPlugin(dynamicCategories, {
		categoryVar: "categories", // "tags" Name of your category variable from your frontmatter (default: categories)
		itemsCollection: "post", // Name of your collection to use for the items (default: posts)
		categoryCollection: "categories", // "tags" Name of the new collection to use for the categories (default: value in categoryVar)
		// categoryCollection MUST be unique currently
		perPageCount: 16, // Number of items to display per page of categoriesByPage (default: 5)
	});

	// rss
	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	eleventyConfig.addFilter("related", (collection, url) => {
		let relatedFilter = [];
		// let number = 0;
		for (let i = 0; i < collection.length; i++) {
			// if (url == collection[i].url) {
			// 	number = i;
			// }

			if (url !== collection[i].url) {
				relatedFilter.push(collection[i]);
			}
		}
		// if (number > 0) {
		// 	relatedFilter.push(collection[number - 1]);
		// }
		// if (collection.length - 1 !== number) {
		// 	relatedFilter.push(collection[number + 1]);
		// }
		const shuffled = shuffle(relatedFilter);

		return shuffled.slice(0, 4);
	});

	eleventyConfig.addCollection("tagsList", function (collectionApi) {
		const tagsList = new Set();
		collectionApi.getAll().map((item) => {
			if (item.data.tags) {
				// handle pages that don't have tags
				item.data.tags.map((tag) => tagsList.add(tag));
			}
		});
		return tagsList;
	});

	return {
		dir: {
			output: "docs",
		},
	};
};
