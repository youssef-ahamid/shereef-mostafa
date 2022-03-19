export const imgWrapper = (props) => {
  return [
    { classes: "relative group w-fit", on: true },
    { classes: "", styles: "", on: props.type == "custom" },
    { classes: "h-[700px]", styles: "", on: props.type == "custom" && props.size == "lg" },
    { classes: "h-[420px]", styles: "", on: props.type == "custom" && props.size == "md" },
    { classes: "", styles: "", on: props.type == "card" },
    { classes: "", styles: "", on: props.type == "overlay" },
  ];
};

export const imgOverlay = (props) => {
  return [
    { classes: "scale-75 transition ease-out duration-300", on: props.type == "custom" },
    { classes: "w-[390px] -translate-y-24 group-hover:-translate-y-40 translate-x-24 group-hover:translate-x-40", on: props.type == "custom" && props.size == 'lg' },
    { classes: "w-72 -translate-y-12 group-hover:-translate-y-20 translate-x-12 group-hover:translate-x-20", on: props.type == "custom" && props.size == 'md' },
    { classes: "", styles: "", on: props.type == "card" },
    { classes: "", styles: "", on: props.type == "overlay" },
  ];
};

export const img = (props) => {
  return [
    { classes: "h-full object-cover inline-block", styles: `clip-path: url('#window-${props.size}');`, on: props.type == "custom" },
    { classes: "w-[420px]", styles: "", on: props.size == "lg" && props.type == "custom" },
    { classes: "w-72", styles: "", on: props.size == "md" && props.type == "custom" },
    { classes: "", styles: "", on: props.type == "card" },
    { classes: "", styles: "", on: props.type == "overlay" },
  ];
};
