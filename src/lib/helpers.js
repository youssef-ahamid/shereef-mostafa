export const serializeClasses = (styles, condition) => {
  return styles
    .filter((s) => condition(s))
    .map((_) => _.classes)
    .join(" ");
};
