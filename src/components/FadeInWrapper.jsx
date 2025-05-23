"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, duration = 0, className }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, duration);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of element is visible
            }
        );

        const currentElement = elementRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [duration]);

    return (
        <>
            <div
                ref={elementRef}
                className={clsx(
                    "transition-all duration-700 ease-out",
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8",
                    className
                )}
            >
                {children}
            </div>
        </>
    );
}