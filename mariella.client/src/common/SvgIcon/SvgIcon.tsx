export interface SvgIconProps {
    src: string;
    width?: string;
    height?: string;
    className?: string;
}

export const SvgIcon = ({ src, width, height, className }: SvgIconProps) => (
    <img
        className={className}
        src={`/img/svg/${src}`}
        alt={src}
        width={width}
        height={height}
    />
);
