import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getScopedI18n } from "@/locales/server";
import { Search } from "lucide-react";
import Image from "next/image";

export async function Services() {
  const commonScopedI18N = await getScopedI18n("common");
  const scopedI18N = await getScopedI18n("home-page.services");
  return (
    <section className="container relative m-auto md:h-80 h-[500px] lg:h-[350px] flex flex-col gap-4 py-12 md:py-20">
      <div className="rounded-xl absolute w-full -top-12 bg-white py-10 px-8 shadow-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            className="pl-10 rounded-[6px]"
            placeholder={scopedI18N("search-input")}
          />
          <Button className="absolute rounded-[6px] right-0 top-1/2 -translate-y-1/2 bg-primary hover:bg-[#6D28D9]">
            <Search />
            {commonScopedI18N("search")}
          </Button>
        </div>
        <div className="mt-8">
          <h2 className="text-center font-medium text-black mb-6">
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
      className="flex flex-col h-fit lg:h-44 gap-2 hover:bg-[#E588A71A] hover:border-[#E588A7] border-2 py-4"
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
