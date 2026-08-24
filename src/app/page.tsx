import ProfileHeader from "@/components/ProfileHeader";
import LinksList from "@/components/LinksList";
import ThemeToggle from "@/components/ThemeToggle";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center gap-10 px-8 py-20">
      <ThemeToggle />
      <ProfileHeader {...profile} />
      <LinksList links={links} />
    </main>
  );
}
