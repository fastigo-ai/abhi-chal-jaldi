import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function TypingEffect({
  text,
  duration = 25,
  delay = 200,
  className,
  cursorClassName,
  showCursor = true,
  highlightWords = ["Door2fy"],
  highlightClassName = "text-[#028dcd] font-bold",
}: TypingEffectProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (!isInView) {
      setDisplayedLength(0);
      return;
    }

    setDisplayedLength(0);

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedLength((prev) => {
          if (prev < text.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, duration);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView, text, duration, delay]);

  const currentText = text.slice(0, displayedLength);

  const renderHighlightedContent = () => {
    if (!highlightWords || highlightWords.length === 0) {
      return currentText;
    }

    const regex = new RegExp(
      `(${highlightWords.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
      "gi"
    );
    const parts = currentText.split(regex);

    return parts.map((part, index) => {
      const isMatch = highlightWords.some(
        (w) => w.toLowerCase() === part.toLowerCase()
      );
      if (isMatch) {
        return (
          <span key={index} className={highlightClassName}>
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {renderHighlightedContent()}
      {showCursor && (
        <span
          className={cn(
            "inline-block w-[2px] h-[1em] align-middle bg-[#028dcd] ml-0.5 animate-pulse",
            cursorClassName
          )}
        />
      )}
    </span>
  );
}

export default TypingEffect;
