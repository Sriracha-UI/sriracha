/// <reference types="react" />
interface ImgProps {
    src: string;
    alt: string;
}
export default function Img({ src, alt, ...rest }: ImgProps): JSX.Element;
export {};
