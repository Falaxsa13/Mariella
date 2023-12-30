import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, className }: SvgIconProps) => (
    <img
        className={className}
        src={`/img/svg/${src}`}
        alt={src}
        width={width}
        height={height}
    />
);
