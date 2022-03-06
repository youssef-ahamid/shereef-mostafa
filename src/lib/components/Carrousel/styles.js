import { resolve } from "$lib/helpers";

export let carrouselWrapper = (options) => {
  return [
    {
      classes: "",
    },
  ];
};

export let carrousel = (options) => {
  return [
    {
      classes: "flex flex-nowrap items-center overflow-x-scroll",
    },
  ];
};

export let carrouselItem = (options) => {
  return [
    {
      classes: "",
    },
  ];
};

let options;
export const config = (props) => {
  options = props;
  return {
    carrouselItemWrapper: resolve(carrouselItemWrapper(options)),
    infoContainer: resolve(infoContainer(options)),
    logo: resolve(logo(options)),
  };
};
