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
      className="block w-full rounded-xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-3.5 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
    >
      <span className="mr-1.5">{emoji}</span>
      {title}
    </a>
  );
}
