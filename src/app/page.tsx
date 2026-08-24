import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center gap-10 px-8 py-20">
      <ThemeToggle />
      <ProfileHeader {...profile} />
      <div className="flex w-full flex-col gap-6">
        {links.map((link) => (
          <LinkCard key={link.id} {...link} />
        ))}
      </div>
    </main>
  );
}
