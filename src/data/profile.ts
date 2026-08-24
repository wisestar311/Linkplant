import type { LinkItem, Profile } from "@/types/link";

export const profile: Profile = {
  name: "김현규",
  bio: "차박, 등산과 커피를 좋아하고 새로운 것을 추구하는 의사",
  avatarUrl: "/avatar.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/wisestar311" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/feed/" },
  { id: "blog", title: "Blog", url: "https://wisestar311.github.io/my-blog/" },
];
