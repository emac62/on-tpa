module.exports = function (eleventyConfig) {
  // Pass your static assets through untouched
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("ads.txt");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};