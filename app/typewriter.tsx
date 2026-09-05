"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ text }: { text: string }) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCharacters(text.length);
      return;
    }

    setVisibleCharacters(0);
    const start = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        setVisibleCharacters((current) => {
          if (current >= text.length) {
            window.clearInterval(interval);
            return current;
          }

          return current + 1;
        });
      }, 34);
    }, 500);

    return () => window.clearTimeout(start);
  }, [reduceMotion, text]);

  return (
    <p className="min-h-[3.5rem] max-w-xl text-lg leading-relaxed opacity-80">
      <span aria-hidden="true">
        {text.slice(0, visibleCharacters)}
        <span className="typewriter-cursor" />
      </span>
      <span className="sr-only">{text}</span>
    </p>
  );
}
