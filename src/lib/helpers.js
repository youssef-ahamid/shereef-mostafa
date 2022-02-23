export const serializeClasses = (styles, condition) => {
  return styles
    .filter((s) => condition(s))
    .map((_) => _.classes)
    .join(" ");
};

import isValid from "$lib/validations";
export const assert = (validations, value) => {
  if (!validations) return { success: false };

  validations.forEach((v) => {
    if (!isValid(v.type, value)) return { success: true, validation: v };
  });
  return { success: false };
};
