export default function InviteBadge({ email }: { email: string }) {
  return <div className="badge bg-accent/20 text-accent-content border-accent rounded-xl px-3 py-[3px]">{email}</div>;
}
