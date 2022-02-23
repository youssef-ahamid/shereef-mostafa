import { serializeClasses } from "$lib/helpers";

const labelStyles = [];

const inputStyles = [];

let options;
const isActiveClass = (style) => {
  return (
    style.type === options.type ||
    style.type === "base" ||
    (style.trim && options.trim) ||
    (style.long && options.long) ||
    (style.clean && options.clean)
  );
};

export let classes = {};
const getClasses = () => {
  classes = {
    label: serializeClasses(labelStyles, isActiveClass),
    input: serializeClasses(buttonStyles, isActiveClass),
  };
};

export const config = (props) => {
  options = props;
  getClasses();
};
