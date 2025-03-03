import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getScopedI18n } from "@/locales/server";
import { Search } from "lucide-react";
import Image from "next/image";

export async function Services() {
  const commonScopedI18N = await getScopedI18n("common");
  const scopedI18N = await getScopedI18n("home-page.services");
  return (
    <section className="container relative m-auto flex h-[500px] flex-col gap-4 py-12 md:h-80 md:py-20 lg:h-[350px]">
      <div className="-top-12 absolute w-full rounded-xl bg-white px-8 py-10 shadow-xl">
        <div className="relative">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-gray-500" />
          <Input
            className="rounded-[6px] pl-10"
            placeholder={scopedI18N("search-input")}
          />
          <Button className="-translate-y-1/2 absolute top-1/2 right-0 rounded-[6px] bg-primary hover:bg-[#6D28D9]">
            <Search />
            {commonScopedI18N("search")}
          </Button>
        </div>
        <div className="mt-8">
          <h2 className="mb-6 text-center font-medium text-black">
            {scopedI18N("h2")}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {[
              { icon: "/services/doctors.svg", label: scopedI18N("labels.0") },
              {
                icon: "/services/laboratory.svg",
                label: scopedI18N("labels.1"),
              },
              { icon: "/services/hospital.svg", label: scopedI18N("labels.2") },
              { icon: "/services/meds.svg", label: scopedI18N("labels.3") },
              {
                icon: "/services/ambulance.svg",
                label: scopedI18N("labels.4"),
              },
            ].map((item) => (
              <ServiceCard
                key={item.label}
                Icon={item.icon}
                Label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface Props {
  Icon: string;
  Label: string;
}

function ServiceCard({ Icon, Label }: Props) {
  return (
    <Button
      variant="outline"
      className="flex h-fit flex-col gap-2 border-2 py-4 hover:border-[#E588A7] hover:bg-[#E588A71A] lg:h-44"
    >
      <Image
        src={Icon}
        width={60}
        height={60}
        className="size-10 md:size-fit"
        alt={`${Label} icon`}
      />
      <span className="text text-gray-700">{Label}</span>
    </Button>
  );
}
