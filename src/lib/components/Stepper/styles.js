import { resolve } from "$lib/helpers";

export let stepperStyles = (props) => {
  return [
    { classes: "w-full" },
    
  ];
};

export let stepStyles = (props) => {
  return [
    { classes: "rounded-lg transition duration-300 ease-out bg-primary mx-1 cursor-pointer bg-opacity-50" },
    { on: [props.direction, "vertical"], classes: "w-1 h-[40px]" },
    { on: [props.direction, "horizontal"], classes: "h-1 w-[40px] inline-block" },
  ];
};

export let activeStyles = (props) => {
  return [
    { on: [props.direction, 'vertical'], classes: "scale-y-[150%] bg-opacity-100" },
    { on: [props.direction, 'horizontal'], classes: "scale-x-[150%] bg-opacity-100" },
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
