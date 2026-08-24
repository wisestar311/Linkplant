import type { Profile } from "@/types/link";

export default function ProfileHeader({ name, bio, avatarUrl }: Profile) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="avatar-frame relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-white/70 bg-[var(--card)] text-2xl font-semibold dark:border-white/10">
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
      <div className="space-y-1.5">
        <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
        <p className="text-sm text-[var(--muted-foreground)]">{bio}</p>
      </div>
    </div>
  );
}
