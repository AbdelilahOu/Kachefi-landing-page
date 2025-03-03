import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Component() {
  return (
    <div className="w-full h-fit bg-white">
      <div className="w-full container space-y-16 h-full mx-auto px-4 py-14">
        <header className="text-center space-y-2">
          <p className="text-primary">Nous avons des blogs</p>
          <h1 className="text-3xl font-bold tracking-tight">
            Des blogs quotidiens pour vos soins
          </h1>
        </header>

        <div className="grid md:grid-cols-2 w-full gap-8">
          <article className="space-y-4 h-full justify-between">
            <h2 className="text-lg font-semibold">Article 1</h2>
            <div className="grid gap-6">
              <div className="relative w-full aspect-[3/2] h-80 overflow-hidden rounded-lg">
                <Image
                  src="/main-blog-post.jpg"
                  alt="Doctor consulting with patient"
                  className="object-cover object-top"
                  fill
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-red-500 text-muted-foreground">
                    Catégorie: Prévention du cancer
                  </p>
                  <p className="text-sm text-violet-500">
                    Publié le 15 septembre 2024
                  </p>
                  <h3 className="text-xl font-semibold">
                    Les premiers signes du cancer colorectal à ne pas ignorer
                  </h3>
                  <p className="text-muted-foreground">
                    Le dépistage précoce du cancer colorectal peut sauver des
                    vies. Apprenez à identifier les signes avant-coureurs pour
                    consulter rapidement un professionnel de santé.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  Voir Plus
                </Link>
              </div>
            </div>
          </article>

          <div className="space-y-4 h-fit">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Catégories de blog</h2>
              <Link href="#" className="text-sm text-primary hover:underline">
                Voir Plus
              </Link>
            </div>

            <div className="grid flex-1 grid-cols-[1fr_100px] grid-rows-2">
              <div className="grid h-fit gap-4 row-span-2">
                <div className="border rounded-md">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                      <Image
                        src="/blog-post-1.png"
                        alt="Medical professionals reviewing documents"
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="space-y-2 px-2 py-2">
                      <p className="text-sm text-muted-foreground">
                        Prévention du cancer
                      </p>
                      <h3 className="font-semibold">
                        Articles sur les stratégies de prévention et
                        l&aposimportance du dépistage précoce.
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        3 hours ago
                      </p>
                      <Link
                        href="#"
                        className="text-sm text-primary hover:underline"
                      >
                        Voir Plus
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                      <Image
                        src="/blog-post-1.png"
                        alt="Medical consultation"
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="space-y-2 px-2 py-2">
                      <p className="text-sm text-muted-foreground">
                        Innovations médicales
                      </p>
                      <h3 className="font-semibold">
                        Les dernières avancées technologiques et médicales dans
                        le dépistage et le traitement du cancer
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        4 hours ago
                      </p>
                      <Link
                        href="#"
                        className="text-sm text-primary hover:underline"
                      >
                        Voir Plus
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Button size="icon" className="rounded-full mx-auto bg-primary">
                <ArrowUp />
              </Button>
              <Button
                size="icon"
                className="rounded-full mx-auto self-end bg-gray-500"
              >
                <ArrowDown />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
