module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/Favicon");
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };
  