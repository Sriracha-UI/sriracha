export const getColor = (props, def) => ({
  color: !props.color
    ? def
    : props.theme.colors[props.color]
    ? props.theme.colors[props.color]
    : props.color,
});

export const getBackground = (props, def) => ({
  color: !props.bg
    ? def
    : props.theme.colors[props.bg]
    ? props.theme.colors[props.bg]
    : props.bg,
});

export const getHvrColor = (props, def) => ({
  color: !props.hvrColor
    ? def
    : props.theme.colors[props.hvrColor]
    ? props.theme.colors[props.hvrColor]
    : props.hvrColor,
});

export const getHvrBackground = (props, def) => ({
  color: !props.hvrBg
    ? def
    : props.theme.colors[props.hvrBg]
    ? props.theme.colors[props.hvrBg]
    : props.hvrBg,
});

export const getTooltipColor = (props, def) => ({
  color: !props.ttColor
    ? def
    : props.theme.colors[props.ttColor]
    ? props.theme.colors[props.ttColor]
    : props.ttColor,
});

export const getTooltipBackground = (props, def) => ({
  color: !props.ttBg
    ? def
    : props.theme.colors[props.ttBg]
    ? props.theme.colors[props.ttBg]
    : props.ttBg,
});

export const getWidth = (props, def) => ({
  width: !props.w
    ? def
    : props.theme.space[props.w]
    ? props.theme.space[props.w]
    : props.w,
});

export const getMinWidth = (props, def) => ({
  width: !props.minW
    ? def
    : props.theme.space[props.minW]
    ? props.theme.space[props.minW]
    : props.minW,
});

export const getMaxWidth = (props, def) => ({
  width: !props.maxW
    ? def
    : props.theme.space[props.maxW]
    ? props.theme.space[props.maxW]
    : props.maxW,
});

export const getHeight = (props, def) => ({
  height: !props.h
    ? def
    : props.theme.space[props.h]
    ? props.theme.space[props.h]
    : props.h,
});

export const getMinHeight = (props, def) => ({
  height: !props.minH
    ? def
    : props.theme.space[props.minH]
    ? props.theme.space[props.minH]
    : props.minH,
});

export const getMaxHeight = (props, def) => ({
  height: !props.maxH
    ? def
    : props.theme.space[props.maxH]
    ? props.theme.space[props.maxH]
    : props.maxH,
});

export const getMargin = (props, def) => ({
  margin: !props.m
    ? def
    : props.theme.space[props.m]
    ? props.theme.space[props.m]
    : props.m,
  marginTop: !props.mt
    ? "none"
    : props.theme.space[props.mt]
    ? props.theme.space[props.mt]
    : props.mt,
  marginBottom: !props.mb
    ? "none"
    : props.theme.space[props.mb]
    ? props.theme.space[props.mb]
    : props.mb,
  marginLeft: !props.ml
    ? "none"
    : props.theme.space[props.ml]
    ? props.theme.space[props.ml]
    : props.ml,
  marginRight: !props.mr
    ? "none"
    : props.theme.space[props.mr]
    ? props.theme.space[props.mr]
    : props.mr,
});

export const getPadding = (props, def) => ({
  padding: !props.p
    ? def
    : props.theme.space[props.p]
    ? props.theme.space[props.p]
    : props.p,
  paddingTop: !props.pt
    ? "none"
    : props.theme.space[props.pt]
    ? props.theme.space[props.pt]
    : props.pt,
  paddingBottom: !props.pb
    ? "none"
    : props.theme.space[props.pb]
    ? props.theme.space[props.pb]
    : props.pb,
  paddingLeft: !props.pl
    ? "none"
    : props.theme.space[props.pl]
    ? props.theme.space[props.pl]
    : props.pl,
  paddingRight: !props.pr
    ? "none"
    : props.theme.space[props.pr]
    ? props.theme.space[props.pr]
    : props.pr,
});
