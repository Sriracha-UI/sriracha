export interface Props {
  theme?: any;
}

export interface ColorProps extends Props {
  color?: string;
}

export interface ActiveBackgroundProps extends Props {
  activeBg?: string;
}

export interface BackgroundProps extends Props {
  bg?: string;
}

export interface BorderRadiusProps extends Props {
  radius?: string;
}

export interface BorderProps extends Props {
  border?: string;
}

export interface BorderStyleProps extends Props {
  bs?: string;
}

export interface BorderWidthProps extends Props {
  bw?: string;
}

export interface BorderColorProps extends Props {
  bc?: string;
}

export interface OpacityProps extends Props {
  opacity?: string;
}

export interface ShadowProps extends Props {
  shadow?: string;
}

export interface HvrShadowProps extends Props {
  hvrShadow?: string;
}

export interface HvrColorProps extends Props {
  hvrColor?: string;
}

export interface HvrBgProps extends Props {
  hvrBg?: string;
}

export interface HvrBorderProps extends Props {
  hvrBorder?: string;
  border?: string;
}

export interface HvrBsProps extends Props {
  hvrBs?: string;
  bs?: string;
  bw?: string;
}

export interface HvrBwProps extends Props {
  hvrBw?: string;
  bw?: string;
}

export interface HvrBcProps extends Props {
  hvrBc?: string;
  bc?: string;
}

export interface BcProps extends Props {
  bc?: string;
}

// tooltip

export interface TooltipMarginProps extends Props {
  ttM?: string;
}

export interface TooltipPaddingProps extends Props {
  ttP?: string;
}

export interface TooltipWidthProps extends Props {
  ttW?: string;
}

export interface TooltipHeightProps extends Props {
  ttH?: string;
}

export interface TooltipBorderRadiusProps extends Props {
  ttRadius?: string;
}

export interface ZIndexProps extends Props {
  zIndex?: string;
}

// focus

export interface FocusColorProps extends Props {
  fcsColor?: string;
}

export interface FocusBackgroundProps extends Props {
  fcsBg?: string;
}

export interface FocusBorderProps extends HvrBorderProps {
  fcsBorder?: string;
}

export interface FocusBsProps extends HvrBsProps {
  fcsBs?: string;
}

export interface FocusBwProps extends HvrBwProps {
  fcsBw?: string;
}

export interface FocusBcProps extends HvrBcProps {
  fcsBc?: string;
}

export interface FocusShadowProps extends Props {
  fcsShadow?: string;
}

// background props

export interface BackgroundSourceProps extends Props {
  bgSrc?: string;
}

export interface BackgroundPositionProps extends Props {
  bgPosition?: string;
}

export interface BackgroundRepeatProps extends Props {
  bgRepeat?: string;
}

export interface BackgroundAttachmentProps extends Props {
  bgAttachment?: string;
}

export interface BackgroundSizeProps extends Props {
  bgSize?: string;
}

export interface OpacityProps extends Props {
  opacity?: string;
}

// center align

export interface FontProps extends Props {
  font?: string;
}

export interface FontSizeProps extends Props {
  size?: string;
}

export interface WeightProps extends Props {
  weight?: string;
}

export interface TextDecorationProps extends Props {
  decoration?: string;
}

export interface TextAlignProps extends Props {
  textAlign?: string;
}

// flex column

export interface FlexWrapProps extends Props {
  wrap?: string;
}

export interface FlexDirectionProps extends Props {
  direction?: string;
}

export interface JustifyContentProps extends Props {
  justify?: string;
}

export interface AlignItemProps extends Props {
  align?: string;
}

export interface AlignContentProps extends Props {
  content?: string;
}

// position

export interface PositionProps extends Props {
  position?: string;
}

export interface TopProps extends Props {
  top?: string;
}

export interface RightProps extends Props {
  right?: string;
}

export interface BottomProps extends Props {
  bottom?: string;
}

export interface LeftProps extends Props {
  left?: string;
}

// shape

export interface OverFlowProps extends Props {
  overflow?: string;
}

export interface ClipProps extends Props {
  clip?: string;
}

// size

export interface HeightProps extends Props {
  h?: string;
  sqr?: string;
}

export interface WidthProps extends Props {
  w?: string;
  sqr?: string;
}

export interface MaxHeightProps extends Props {
  maxH?: string;
}

export interface MaxWidthProps extends Props {
  maxW?: string;
}

export interface MinHeightProps extends Props {
  minH?: string;
}

export interface MinWidthProps extends Props {
  minW?: string;
}

export interface MarginProps extends Props {
  m?: string;
}

export interface MarginTopProps extends Props {
  mt?: string;
}

export interface MarginBottomProps extends Props {
  mb?: string;
}

export interface MarginLeftProps extends Props {
  ml?: string;
}

export interface MarginRightProps extends Props {
  mr?: string;
}

export interface PaddingProps extends Props {
  p?: string;
}

export interface PaddingTopProps extends Props {
  pt?: string;
}

export interface PaddingBottomProps extends Props {
  pb?: string;
}

export interface PaddingLeftProps extends Props {
  pl?: string;
}

export interface PaddingRightProps extends Props {
  pr?: string;
}
