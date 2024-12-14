"use client";

interface TitleProps {
    titleText: string;
}

const Title = ({ titleText }: TitleProps) => {
    return (
        <div className="text-8xl text-extrabold text-white">{titleText}</div>
    );
};

export default Title;