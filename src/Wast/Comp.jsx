{heroPages.map((item, indexSlider) => {
          const { id, imgSrc, TagLine, TitleLine, DisLine } = item;
          let position = "nextslide";
          if (indexSlider === indexImage) {
            position = "currentslide";
          }
          if (
            indexSlider === indexImage - 1 ||
            (indexImage === 0 && indexSlider === heroPages.length - 1)
          ) {
            position = "lastslide";
          }