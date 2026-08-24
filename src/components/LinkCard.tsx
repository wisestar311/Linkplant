"use client";

import type { LinkItem } from "@/types/link";

export default function LinkCard({ id, title, url, emoji }: LinkItem) {
  function handleClick() {
    fetch(`/api/links/${id}/click`, { method: "POST" }).catch(() => {
      // 클릭 수 집계 실패는 사용자 이동을 막지 않는다
    });
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="glass-card block w-full rounded-2xl px-5 py-4 text-center font-medium tracking-tight"
    >
      <span className="mr-1.5">{emoji}</span>
      {title}
    </a>
  );
}
