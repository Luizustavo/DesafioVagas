import React from "react";

export type ImageProps = {
    src: string,
    alt: string,
    width?: number,
    height?: number,
    className?: string,
    onClick?: () => void
}

const Image: React.FC<ImageProps> = ({className, onClick, src, alt, width, height}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        />
    )
}

export default Image