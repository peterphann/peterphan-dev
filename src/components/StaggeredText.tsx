import { AnimationProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StaggeredTextProps {
    children: string,
    initial: AnimationProps['initial'],
    animate: AnimationProps['animate'],
    exit?: AnimationProps['exit'],
    className?: string,
    delayBetween?: number,
    delay?: number,
    space?: number,
    opacity?: number,
    translateRange?: number,
    rotateRange?: number
}

const StaggeredText = ({
    children,
    initial,
    animate,
    exit = {},
    delay = 0,
    className = "",
    delayBetween = 0.05,
    space = 16,
}: StaggeredTextProps) => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [children]);

    return (
        <div className={className} key={key}>
            {Array.from(children).map((letter, index) => (
                <motion.span className={'inline-block'} key={index}
                    style={letter === ' ' ? { marginRight: space } : {}}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{ type: 'spring', stiffness: 70, delay: delay + index * delayBetween }}>
                    {letter}
                </motion.span>))}
        </div>
    );
};

export default StaggeredText;