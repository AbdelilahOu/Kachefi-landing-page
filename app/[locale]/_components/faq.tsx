import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";

export async function FAQ() {
  const scopedI18N = await getScopedI18n("home-page.faq");
  const locale = await getCurrentLocale();

  return (
    <div className="md:p-6 p-3 bg-[#F5F5F5] overflow-hidden">
      <div className="md:grid flex flex-col gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {Array(10)
          .fill(0)
          .map((_, index) => {
            const question = `content.${index}.question`;
            const answer = `content.${index}.answer`;
            return (
              <div
                key={index}
                className={cn(
                  "w-full h-full relative",
                  index + 1 == 10 ? "lg:col-span-3 md:col-span-2" : ""
                )}
              >
                <Card
                  className={cn(
                    "border-none shadow-none absolute bg-white rounded-none transform",
                    index + 1 == 9 ? "" : "hidden",
                    locale !== "ar"
                      ? "-rotate-6 translate-x-2 md:-rotate-12 md:translate-x-20"
                      : "rotate-6 -translate-x-2 md:rotate-12 md:-translate-x-20"
                  )}
                >
                  <CardHeader className="flex flex-col items-start gap-4 pb-2">
                    <div
                      className={cn(
                        "flex justify-between w-full",
                        locale !== "ar" ? "pr-24" : "pl-24"
                      )}
                    >
                      <div className="flex size-10 items-center text-semibold justify-center rounded-full bg-[#8B5CF6] text-white">
                        {index + 1}
                      </div>
                      <svg
                        width="42"
                        height="44"
                        viewBox="0 0 42 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 2.23535V10.5672V2.23535Z" fill="#B196F3" />
                        <path
                          d="M22 2.23535V10.5672"
                          stroke="black"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 20.9819L40 25.1479L34 29.3138L40 35.5627L34 41.8116L28 35.5627L24 41.8116L20 20.9819Z"
                          fill="#B196F3"
                          stroke="black"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M36.1422 8.33643L30.4854 14.2279L36.1422 8.33643Z"
                          fill="#B196F3"
                        />
                        <path
                          d="M36.1422 8.33643L30.4854 14.2279"
                          stroke="black"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.85742 37.7938L13.5143 31.9023L7.85742 37.7938Z"
                          fill="#B196F3"
                        />
                        <path
                          d="M7.85742 37.7938L13.5143 31.9023"
                          stroke="black"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M2 23.0649H10H2Z" fill="#B196F3" />
                        <path
                          d="M2 23.0649H10"
                          stroke="black"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.85742 8.33643L13.5143 14.2279L7.85742 8.33643Z"
                          fill="#B196F3"
                        />
                        <path
                          d="M7.85742 8.33643L13.5143 14.2279"
                          stroke="black"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-base font-semibold leading-tight">
                      {
                        //@ts-ignore
                        scopedI18N(question)
                      }
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black">
                      {
                        //@ts-ignore
                        scopedI18N(answer)
                      }
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-none bg-transparent">
                  <CardHeader className="flex flex-col items-start gap-4 pb-2">
                    <div className="flex size-10 items-center text-semibold justify-center rounded-full bg-[#8B5CF6] text-white">
                      {index + 1}
                    </div>
                    <CardTitle className="text-base font-semibold leading-tight">
                      {
                        //@ts-ignore
                        scopedI18N(question)
                      }
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black">
                      {
                        //@ts-ignore
                        scopedI18N(answer)
                      }
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
      <div className="mt-8 text-start flex-col gap-4 sm:gap-0 flex sm:flex-row items-center justify-between bg-white max-w-7xl mx-auto md:p-6 p-4">
        <div className="max-w-lg">
          <p className="font-semibold text-violet-400 mb-2">
            {scopedI18N("more-questions.title")}
          </p>
          <p className="font-semibold text-violet-400">
            {scopedI18N("more-questions.description")}
          </p>
        </div>
        <Button className="text-nowrap w-full sm:w-fit rounded-[6px] hover:bg-[#7C3AED] transition-colors">
          {scopedI18N("more-questions.button")}
        </Button>
      </div>
    </div>
  );
}
