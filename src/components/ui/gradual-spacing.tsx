import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export function GradualSpacing({
  text,
  duration = 0.4,
  delayMultiple = 0.03,
  framerProps = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap gap-x-[0.25em]", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {word.split("").map((char) => {
            const i = globalCharIndex++;
            return (
              <motion.span
                key={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={framerProps}
                transition={{ duration, delay: i * delayMultiple }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

export default GradualSpacing;
