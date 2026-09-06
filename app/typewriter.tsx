"use client";

import { useEffect, useState } from "react";

const lines = [
  "Hello, I am",
  "Supreeth Chittaluri.",
  "I am a junior studying Computer Science at the University of Michigan."
];

const firstLineEnd = lines[0].length;
const secondLineEnd = firstLineEnd + lines[1].length;
const totalCharacters = secondLineEnd + lines[2].length;

function typedLine(text: string, start: number, visibleCharacters: number) {
  return text.slice(0, Math.max(0, Math.min(text.length, visibleCharacters - start)));
}

export default function TypedIntro() {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    const initialPreference = window.setTimeout(updatePreference, 0);
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      window.clearTimeout(initialPreference);
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    if (visibleCharacters >= totalCharacters) return;

    const isOpeningPause = visibleCharacters === 0;
    const isLinePause =
      visibleCharacters === firstLineEnd || visibleCharacters === secondLineEnd;
    const delay = isOpeningPause ? 420 : isLinePause ? 260 : 36;

    const nextCharacter = window.setTimeout(() => {
      setVisibleCharacters((current) => current + 1);
    }, delay);

    return () => window.clearTimeout(nextCharacter);
  }, [reduceMotion, visibleCharacters]);

  const displayedCharacters = reduceMotion ? totalCharacters : visibleCharacters;
  const activeLine =
    displayedCharacters <= firstLineEnd
      ? 0
      : displayedCharacters <= secondLineEnd
        ? 1
        : 2;
  const cursor = !reduceMotion ? <span className="typewriter-cursor" /> : null;

  return (
    <div className="flex min-h-[10rem] flex-col gap-4">
      <span className="sr-only">{lines.join(". ")}</span>
      <p className="min-h-4 font-mono text-xs uppercase tracking-[0.2em] text-accent" aria-hidden="true">
        {typedLine(lines[0], 0, displayedCharacters)}
        {activeLine === 0 ? cursor : null}
      </p>
      <h1 className="min-h-12 font-serif text-4xl font-bold sm:text-5xl" aria-hidden="true">
        {typedLine(lines[1], firstLineEnd, displayedCharacters)}
        {activeLine === 1 ? cursor : null}
      </h1>
      <p className="min-h-[3.5rem] max-w-xl text-base leading-relaxed opacity-70" aria-hidden="true">
        {typedLine(lines[2], secondLineEnd, displayedCharacters)}
        {activeLine === 2 ? cursor : null}
      </p>
    </div>
  );
}
