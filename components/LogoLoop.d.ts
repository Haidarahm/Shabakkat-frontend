import type { CSSProperties, FC, ReactNode } from "react";

export interface LogoItemImage {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
  href?: string;
}

export interface LogoItemNode {
  node: ReactNode;
  title?: string;
  href?: string;
  ariaLabel?: string;
}

export type LogoItem = LogoItemImage | LogoItemNode;

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: string) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

export const LogoLoop: FC<LogoLoopProps>;
export default LogoLoop;
