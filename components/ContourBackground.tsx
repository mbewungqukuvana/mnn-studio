
"use client";

import { useEffect, useRef } from "react";

export default function ContourBackground() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const hero = grid.closest("section");
    if (!hero) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const finePointer = window.matchMedia(
      "(pointer: fine)"
    );

    if (reducedMotion.matches || !finePointer.matches) {
      return;
    }

    function handleMouseMove(event: MouseEvent) {
      const bounds = hero!.getBoundingClientRect();

      const x =
        (event.clientX - bounds.left) / bounds.width - 0.5;

      const y =
        (event.clientY - bounds.top) / bounds.height - 0.5;

      grid!.style.transform =
        `translate3d(${x * 24}px, ${y * 24}px, 0)`;
    }

    function resetGrid() {
      grid!.style.transform = "translate3d(0, 0, 0)";
    }

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", resetGrid);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", resetGrid);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        ref={gridRef}
        className="absolute -inset-10 transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(181,142,152,0.09) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(181,142,152,0.09) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "38px 38px",
        }}
      >
        {[
          { x: 12, y: 18 },
          { x: 30, y: 42 },
          { x: 72, y: 20 },
          { x: 86, y: 62 },
          { x: 58, y: 78 },
          { x: 20, y: 85 },
        ].map((point, index) => (
          <div
            key={index}
            className="absolute h-[4px] w-[4px] rounded-full bg-[#B58E98]/40"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
