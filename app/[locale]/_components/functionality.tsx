import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
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
      icon: <ClipboardList className="w-6 h-6 text-primary" />,
      title: scopedI18N("content.0.title"),
      description: scopedI18N("content.0.description"),
      link: "#",
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: scopedI18N("content.1.title"),
      description: scopedI18N("content.1.description"),
      link: "#",
    },
    {
      icon: <Bell className="w-6 h-6 text-primary" />,
      title: scopedI18N("content.2.title"),
      description: scopedI18N("content.2.description"),
      link: "#",
    },
  ];

  return (
    <div className="w-full h-fit bg-gradient-to-r from-violet-100 to-slate-50">
      <div className="w-full container h-full mx-auto px-4 py-14">
        <h2 className="text-4xl font-medium text-primary mb-8">
          {scopedI18N("title")}
        </h2>

        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`flex-none flex flex-col justify-between w-full md:w-1/3 p-6 bg-white transition-transform duration-300 border-none transform`}
              >
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                </div>
                <Button
                  variant="link"
                  className="text-primary p-0 text-start w-fit"
                >
                  {scopedI18N("button")}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="w-full flex pt-14 justify-between">
          <Button size="icon" className="rounded-full bg-gray-500">
            <ArrowLeft />
          </Button>
          <div className="flex items-center justify-center gap-6 h-12">
            <div className="size-2 rounded-full bg-primary"></div>
            <div className="size-2 rounded-full bg-primary/60"></div>
            <div className="size-2 rounded-full bg-primary/60"></div>
          </div>
          <Button size="icon" className="rounded-full">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
