import type { Profile } from "@/types/link";

export default function ProfileHeader({ name, bio, avatarUrl }: Profile) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border border-[var(--card-border)] bg-[var(--card)] text-2xl font-semibold">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt={`${name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{name.slice(0, 1)}</span>
        )}
      </div>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm text-[var(--foreground)] opacity-70">{bio}</p>
    </div>
  );
}
