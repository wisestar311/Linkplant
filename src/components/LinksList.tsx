"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/types/link";
import LinkCard from "@/components/LinkCard";

export default function LinksList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/links/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {
        // 클릭 수 조회 실패는 0회 표시를 유지한다
      });
  }, []);

  function handleClicked(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <div className="flex w-full flex-col gap-6">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          count={counts[link.id] ?? 0}
          onClicked={() => handleClicked(link.id)}
        />
      ))}
    </div>
  );
}
