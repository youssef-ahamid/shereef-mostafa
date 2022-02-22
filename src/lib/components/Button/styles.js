import { serializeClasses } from "$lib/helpers";

export const styleButton = (type, shape, active = true) => {
  const isActiveClass = (style) => {
    return (
      style.type === type ||
      style.type === "base" ||
      style.shape === shape ||
      (!active && style.type === "disabled")
    );
  };

  const styles = [
    { type: "base", classes: "" },
    { type: "primary", classes: "" },
    { type: "secondary", classes: "" },
    { type: "disabled", classes: "" },
    { shape: "default", classes: "" },
    { shape: "ghost", classes: "" },
    { shape: "full", classes: "" },
  ];

  return serializeClasses(styles, isActiveClass);
};

export const styleLabel = (type, shape) => {
  const isActiveClass = (style) => {
    return (
      style.type === type || style.type === "base" || style.shape === shape
    );
  };

  const styles = [
    { type: "base", classes: "" },
    { type: "primary", classes: "" },
    { type: "secondary", classes: "" },
    { shape: "default", classes: "" },
    { shape: "ghost", classes: "" },
    { shape: "full", classes: "" },
  ];

  return serializeClasses(styles, isActiveClass);
};

export const styleIcon = (type) => {
  const isActiveClass = (style) => {
    return style.type === type || style.type === "base";
  };

  const styles = [
    { type: "base", classes: "" },
    { type: "primary", classes: "" },
    { type: "secondary", classes: "" },
  ];

  return serializeClasses(styles, isActiveClass);
};
