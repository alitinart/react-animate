interface Props {
    children: any;
    animationDuration: string;
    animationName: 'fadeIn' | 'slideRight' | 'slideLeft';
    classToGive?: string;
    customAnimationClass?: string;
}
export declare const Animate: ({ children, animationDuration, animationName, classToGive, customAnimationClass }: Props) => JSX.Element;
export {};
