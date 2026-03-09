import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";

/** Colorful brand icons (no color param = default brand colors from Simple Icons). */
function getTechIconSrc(tech: (typeof TECH_STACK)[number]) {
  const slug = tech.iconSlug;
  if (slug) {
    return `${SIMPLE_ICONS_CDN}/${slug}`;
  }
  return "";
}

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.filter((tech) => tech.iconSlug).map((tech) => {
            const src = getTechIconSrc(tech);
            if (!src) return null;
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    <Image
                      src={src}
                      alt={`${tech.title} icon`}
                      width={32}
                      height={32}
                      unoptimized
                    />
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
