import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import { Icons } from "@/components/icons";
import type { SocialLink } from "@/features/profile/types/social-links";
import { cn } from "@/lib/utils";

export function SocialLinkItem({
  iconName,
  icon,
  title,
  description,
  href,
}: SocialLink) {
  const IconComponent =
    iconName && iconName in Icons ? Icons[iconName as keyof typeof Icons] : null;

  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 rounded-2xl p-4 pr-2 transition-colors select-none",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <div
        className={cn(
          "flex size-12 shrink-0 items-center justify-center text-foreground",
          "[&_svg]:size-12"
        )}
        aria-hidden
      >
        {IconComponent ? (
          <IconComponent />
        ) : icon ? (
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            quality={100}
            unoptimized
          />
        ) : null}
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
