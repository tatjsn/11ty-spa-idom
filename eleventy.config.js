module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'dist/*' : '.'});

  return {
    templateFormats: ['njk'],
    dir: {
      input: 'njk',
    },
  }
}
