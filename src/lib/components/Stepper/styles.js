import { resolve } from "$lib/helpers";

export let stepperStyles = (props) => {
  return [
    { classes: "w-full flex" },
    { on: [props.direction, "vertical"], classes: "flex-col" },
    { on: [props.direction, "horizontal"], classes: "flex-row" },
  ];
};

export let stepStyles = (props) => {
  return [
    { classes: "rounded-lg transition duration-300 ease-out bg-primary cursor-pointer ring-1 ring-secondary ring-opacity-50" },
    { on: [props.direction, "vertical"], classes: "w-1.5 h-[40px]" },
    { on: [props.direction, "horizontal"], classes: "h-1.5 w-[40px] inline-block" },
  ];
};

export let activeStyles = (props) => {
  return [
    { classes: "bg-opacity-100 z-20" },
    { on: [props.direction, 'vertical'], classes: "scale-y-[150%]" },
    { on: [props.direction, 'horizontal'], classes: "scale-x-[150%]" },
  ];
};

export let inactiveStyles = (props) => {
  return [
    { classes: "bg-opacity-50 z-10" },
    { on: [props.direction, 'vertical'], classes: "scale-100" },
    { on: [props.direction, 'horizontal'], classes: "scale-100" },
  ];
};

let options;
export const config = (props) => {
  options = props;
  return {
    stepper: resolve(stepperStyles(options)),
    step: resolve(stepStyles(options)),
    active: resolve(activeStyles(options)),
    inactive: resolve(inactiveStyles(options)),
  };
};
