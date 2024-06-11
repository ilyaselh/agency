module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/Favicon");
  eleventyConfig.addPassthroughCopy("./src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("./src/_redirects");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/my-app");

  eleventyConfig.ignores.add("**/node_modules/**");
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };

