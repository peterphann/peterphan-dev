import { partLabel } from "@/data/contents";

/** Opens a part's page: its name centered between two rules. */
export default function PartDivider({ id }: { id: string }) {
  return (
    <div className="flex items-center gap-6 pt-16 pb-4 xl:max-w-[620px]">
      <span
        aria-hidden="true"
        className="flex-1 origin-right animate-rule-left border-t border-rule motion-reduce:animate-none"
      />
      <h1 className="font-serif text-[17px] font-normal">{partLabel(id)}</h1>
      <span
        aria-hidden="true"
        className="flex-1 origin-left animate-rule-right border-t border-rule motion-reduce:animate-none"
      />
    </div>
  );
}
