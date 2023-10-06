const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withOptimizedImages({
    images: {
      disableStaticImages: true,
        }
    /* config for next-optimized-images */
    // your config for other plugins or the general next.js here...
  })
);


    