import { resolve } from "$lib/helpers";

const stepperStyles = (props) => {
  [
    { classes: "flex flex-nowrap" },
    { on: [options.direction, "vertical"], classes: "flex-col" },
    { on: [options.direction, "horizontal"], classes: "flex-row" },
  ];
};

const stepStyles = (props) => {
  [
    { classes: "rounded-lg transition duration-300 ease-out bg-primary m-1" },
    { on: [active, true], classes: "bg-opacity-100" },
    { on: [active, false], classes: "bg-opacity-50" },
    { on: [options.direction, "vertical"], classes: "w-1 h-[40px]" },
    { on: [options.direction, "horizontal"], classes: "h-1 w-[40px]" },
  ];
};

const activeStyles = (props) => {
  [
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
