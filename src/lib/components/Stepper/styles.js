import { resolve } from "$lib/helpers";

export let stepperStyles = (props) => {
  return [
    { classes: "flex flex-nowrap" },
    { on: [options.direction, "vertical"], classes: "flex-col" },
    { on: [options.direction, "horizontal"], classes: "flex-row" },
  ];
};

export let stepStyles = (props) => {
  return [
    { classes: "rounded-lg transition duration-300 ease-out bg-primary m-1" },
    { on: [active, true], classes: "bg-opacity-100" },
    { on: [active, false], classes: "bg-opacity-50" },
    { on: [options.direction, "vertical"], classes: "w-1 h-[40px]" },
    { on: [options.direction, "horizontal"], classes: "h-1 w-[40px]" },
  ];
};

export let activeStyles = (props) => {
  return [
    { on: [options.direction, "vertical"], classes: "scale-y-[200%]" },
    { on: [options.direction, "horizontal"], classes: "scale-x-[200%]" },
  ];
};

let options;
export const config = (props) => {
  options = props;
  return {
    stepper: resolve(stepperStyles(options)),
    step: resolve(stepStyles(options)),
    active: resolve(activeStyles(options)),
  };
};
