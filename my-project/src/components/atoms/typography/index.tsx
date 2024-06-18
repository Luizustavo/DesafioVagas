import React from "react";


type TypographyVariant = 'title' | 'subtitle' | 'text';

interface TypographyProps {
    variant: TypographyVariant;
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
    switch (variant) {
        case 'title':
            return <h1 className="text-2xl font-roboto">{children}</h1>;
        case 'subtitle':
            return <h2 className="font-roboto text-xl">{children}</h2>;
        case 'text':
            return <p className="font-roboto text-base">{children}</p>;
        default:
            return <p>{children}</p>;
    }
};

export default Typography;