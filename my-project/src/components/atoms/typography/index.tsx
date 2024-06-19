import React from "react";


type TypographyVariant = 'title' | 'subtitle' | 'text' | 'navBar';

interface TypographyProps {
    variant: TypographyVariant;
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
    switch (variant) {

        case 'title':
            return <h1 className="font-popins text-2xl text-gray-100	">{children}</h1>;

        case 'subtitle':
            return <h2 className="font-popins text-xl text-gray-100">{children}</h2>;

        case 'text':
            return <p className="font-roboto text-lg text-gray-100">{children}</p>;

        case 'navBar':
            return <p className="font-popins text-2xl">{children}</p>

        default:
            return <p>{children}</p>;

    }
};

export default Typography;