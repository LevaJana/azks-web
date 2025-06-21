export default async function(eleventyConfig) {
  // Výchozí výstupní složka je: _site
  // Zkopírovat složku images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");
  // Zkopírovat složku css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("ke-stazeni");
  eleventyConfig.addPassthroughCopy("casopis-zamkar");

  // admin složka pro Netlify CMS
  eleventyConfig.addPassthroughCopy("admin");

  

  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  eleventyConfig.addFilter("excerpt400", (post) => {
  const content = post.replace(/(<([^>]+)>)/gi, "");
  return content.substr(0, content.lastIndexOf(" ", 400)) + "...";
  });

  eleventyConfig.addFilter("excerpt600", (post) => {
  const content = post.replace(/(<([^>]+)>)/gi, "");
  return content.substr(0, content.lastIndexOf(" ", 600)) + "...";
  });

}

export const config = {
  // jako šablonu nebo soubor s obsahem
  // můžeme použít následující formáty
  templateFormats: ["njk", "html", "md"],

  // jako šablonovací jazyk zvolíme pro všechny
  // formáty výše jazyk Nunjucks
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dataTemplateEngine: "njk",
};