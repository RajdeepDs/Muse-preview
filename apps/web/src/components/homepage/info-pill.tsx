import * as Icons from "@muse/ui/icons";

export default function InfoPill(): JSX.Element {
  return (
    <div className="bg-greyLight/20 border-greyLight/50 group flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full border px-2 py-[2px]">
      <h1 className="text-grey text-sm transition-colors duration-150 ease-in group-hover:text-white">
        Introducing Muse
      </h1>
      <Icons.ChevronRight className="mr-1 h-4 w-4 transition-all duration-150 ease-in group-hover:ml-1 group-hover:mr-0" />
    </div>
  );
}
