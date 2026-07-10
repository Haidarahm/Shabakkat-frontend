export default function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2.5 font-heading text-[13px] tracking-[0.14em] text-cyan">
      <div className="h-[3px] w-[26px] bg-red" />
      {children}
    </div>
  );
}
