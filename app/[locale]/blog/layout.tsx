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

        <div className="grid grid-cols-1 lg:grid-cols-5 px-4 py-8">
          {/* Social Media Sidebar - moved to top on small screens */}
          <aside className="w-full px-2 flex justify-center lg:mt-0">
            <ul className="flex lg:flex-col gap-4 bg-white shadow-md h-fit p-4">
              <Link
                href="#"
                className="text-black inline-flex gap-2 py-0.5 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                600
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-black inline-flex gap-2 py-0.5 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                600
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-black inline-flex gap-2 py-0.5 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                600
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-black inline-flex gap-2 py-0.5 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
                600
                <span className="sr-only">YouTube</span>
              </Link>
            </ul>
          </aside>
          {/* Main Content */}
          <div className="lg:col-span-3 lg:col-start-2">
            <header className="bg-white border-b">
              <div className="container space-y-4 mx-auto lg:px-4 py-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {t("welcome-title")}
                </h1>
                <p className="p-2 border-l-2 border-black">
                  {t("welcome-text")}
                </p>
              </div>
            </header>

            <article className="px-2 py-4">{children}</article>

            {/* Comments Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">
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
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold">Jean Dupont</h3>
                      <p className="text-gray-600 mt-1">{t("comment-text")}</p>
                    </div>
                    <div className="flex gap-4 mt-2 text-sm text-gray-500">
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
                <h3 className="text-lg font-semibold mb-4">
                  {t("add-comment")}
                </h3>
                <Textarea
                  placeholder={t("comment-placeholder")}
                  className="min-h-[120px] mb-4"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  <Input placeholder={t("name-placeholder")} />
                  <Input placeholder={t("email-placeholder")} />
                </div>
                <Button className="hover:bg-purple-700 text-white">
                  {t("post-comment")}
                </Button>
              </form>
            </div>
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
