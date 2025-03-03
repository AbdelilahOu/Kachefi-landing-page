import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  Bell,
  Settings,
} from "lucide-react";

export async function Functionality() {
  const scopedI18N = await getScopedI18n("home-page.functionality");

  const features = [
    {
      icon: <ClipboardList className="h-6 w-6 text-primary" />,
      title: scopedI18N("content.0.title"),
      description: scopedI18N("content.0.description"),
      link: "#",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: scopedI18N("content.1.title"),
      description: scopedI18N("content.1.description"),
      link: "#",
    },
    {
      icon: <Bell className="h-6 w-6 text-primary" />,
      title: scopedI18N("content.2.title"),
      description: scopedI18N("content.2.description"),
      link: "#",
    },
  ];

  return (
    <div className="h-fit w-full bg-gradient-to-r from-violet-100 to-slate-50">
      <div className="container mx-auto h-full w-full px-4 py-14">
        <h2 className="mb-8 font-medium text-4xl text-primary">
          {scopedI18N("title")}
        </h2>

        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={
                  "flex w-full flex-none transform flex-col justify-between border-none bg-white p-6 transition-transform duration-300 md:w-1/3"
                }
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-medium text-2xl">{feature.title}</h3>
                  <p className="mb-4 text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <Button
                  variant="link"
                  className="w-fit p-0 text-start text-primary"
                >
                  {scopedI18N("button")}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-between pt-14">
          <Button size="icon" className="rounded-full bg-gray-500">
            <ArrowLeft />
          </Button>
          <div className="flex h-12 items-center justify-center gap-6">
            <div className="size-2 rounded-full bg-primary" />
            <div className="size-2 rounded-full bg-primary/60" />
            <div className="size-2 rounded-full bg-primary/60" />
          </div>
          <Button size="icon" className="rounded-full">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
