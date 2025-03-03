import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BlogNavigation } from "./_components/blog-navigation";
import { BlogSidebar } from "./_components/side-section";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getScopedI18n } from "@/locales/server";

export default async function WithNavigationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = await getScopedI18n("blog-layout");
  return (
    <main className="mx-auto">
      <div className="space-y-8">
        <BlogNavigation />

        <div className="grid grid-cols-1 px-4 py-8 lg:grid-cols-5">
          {/* Social Media Sidebar - moved to top on small screens */}
          <aside className="flex w-full justify-center px-2 lg:mt-0">
            <ul className="flex h-fit gap-4 bg-white p-4 shadow-md lg:flex-col">
              <Link
                href="#"
                className="inline-flex gap-2 py-0.5 text-black hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                600
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="inline-flex gap-2 py-0.5 text-black hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                600
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="inline-flex gap-2 py-0.5 text-black hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                600
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="inline-flex gap-2 py-0.5 text-black hover:text-white"
              >
                <Youtube className="h-5 w-5" />
                600
                <span className="sr-only">YouTube</span>
              </Link>
            </ul>
          </aside>
          {/* Main Content */}
          <div className="lg:col-span-3 lg:col-start-2">
            <header className="border-b bg-white">
              <div className="container mx-auto space-y-4 py-6 lg:px-4">
                <h1 className="font-semibold text-2xl text-gray-800">
                  {t("welcome-title")}
                </h1>
                <p className="border-black border-l-2 p-2">
                  {t("welcome-text")}
                </p>
              </div>
            </header>

            <article className="px-2 py-4">{children}</article>

            {/* Comments Section */}
            <div className="mt-12">
              <h2 className="mb-6 font-semibold text-2xl">
                {t("comment-title")}
              </h2>

              <div className="space-y-6">
                {/* Comment */}
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h3 className="font-semibold">Jean Dupont</h3>
                      <p className="mt-1 text-gray-600">{t("comment-text")}</p>
                    </div>
                    <div className="mt-2 flex gap-4 text-gray-500 text-sm">
                      <button className="hover:text-gray-700">
                        {t("reply")}
                      </button>
                      <span>Il y a 2 heures</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <form className="mt-8 space-y-3">
                <h3 className="mb-4 font-semibold text-lg">
                  {t("add-comment")}
                </h3>
                <Textarea
                  placeholder={t("comment-placeholder")}
                  className="mb-4 min-h-[120px]"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                  <Input placeholder={t("name-placeholder")} />
                  <Input placeholder={t("email-placeholder")} />
                </div>
                <Button className="text-white hover:bg-purple-700">
                  {t("post-comment")}
                </Button>
              </form>
            </div>
          </div>
          {/* Sidebar */}
          <div className="mt-8 lg:col-span-1 lg:mt-0">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
