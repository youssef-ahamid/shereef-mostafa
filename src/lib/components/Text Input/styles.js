import { serializeClasses } from "$lib/helpers";

const labelStyles = [];

const nameStyles = [];

const inputStyles = [
  { type: "base", classes: "transition duration-200 ease-out appearance-none outline-none bg-primary bg-opacity-[15%] focus:bg-opacity-25 px-2 pt-1 md:px-3 md:pt-2 pb-2 border-content border-b-2 border-primary border-opacity-50 focus:border-opacity-100" }
];

let options;
const isActiveClass = (style) => {
  return (
    style.type === "base" ||
    style.type === options.type ||
    (style.trim && options.trim) ||
    (style.long && options.long) ||
    (style.clean && options.clean)
  );
};

export let classes = {};
const getClasses = () => {
  classes = {
    label: serializeClasses(labelStyles, isActiveClass),
    input: serializeClasses(inputStyles, isActiveClass),
    name: serializeClasses(nameStyles, isActiveClass),
  };
};

export const config = (props) => {
  options = props;
  getClasses();
};
