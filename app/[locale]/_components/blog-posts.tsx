import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Component() {
  return (
    <div className="h-fit w-full bg-white">
      <div className="container mx-auto h-full w-full space-y-16 px-4 py-14">
        <header className="space-y-2 text-center">
          <p className="text-primary">Nous avons des blogs</p>
          <h1 className="font-bold text-3xl tracking-tight">
            Des blogs quotidiens pour vos soins
          </h1>
        </header>

        <div className="grid w-full gap-8 md:grid-cols-2">
          <article className="h-full justify-between space-y-4">
            <h2 className="font-semibold text-lg">Article 1</h2>
            <div className="grid gap-6">
              <div className="relative aspect-[3/2] h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src="/main-blog-post.jpg"
                  alt="Doctor consulting with patient"
                  className="object-cover object-top"
                  fill
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-red-500 text-sm">
                    Catégorie: Prévention du cancer
                  </p>
                  <p className="text-sm text-violet-500">
                    Publié le 15 septembre 2024
                  </p>
                  <h3 className="font-semibold text-xl">
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
                  className="inline-flex items-center text-primary text-sm hover:underline"
                >
                  Voir Plus
                </Link>
              </div>
            </div>
          </article>

          <div className="h-fit space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg">Catégories de blog</h2>
              <Link href="#" className="text-primary text-sm hover:underline">
                Voir Plus
              </Link>
            </div>

            <div className="grid flex-1 grid-cols-[1fr_100px] grid-rows-2">
              <div className="row-span-2 grid h-fit gap-4">
                <div className="rounded-md border">
                  <div className="grid items-center gap-4 md:grid-cols-2">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                      <Image
                        src="/blog-post-1.png"
                        alt="Medical professionals reviewing documents"
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="space-y-2 px-2 py-2">
                      <p className="text-muted-foreground text-sm">
                        Prévention du cancer
                      </p>
                      <h3 className="font-semibold">
                        Articles sur les stratégies de prévention et
                        l&aposimportance du dépistage précoce.
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        3 hours ago
                      </p>
                      <Link
                        href="#"
                        className="text-primary text-sm hover:underline"
                      >
                        Voir Plus
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="grid items-center gap-4 md:grid-cols-2">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                      <Image
                        src="/blog-post-1.png"
                        alt="Medical consultation"
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="space-y-2 px-2 py-2">
                      <p className="text-muted-foreground text-sm">
                        Innovations médicales
                      </p>
                      <h3 className="font-semibold">
                        Les dernières avancées technologiques et médicales dans
                        le dépistage et le traitement du cancer
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        4 hours ago
                      </p>
                      <Link
                        href="#"
                        className="text-primary text-sm hover:underline"
                      >
                        Voir Plus
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Button size="icon" className="mx-auto rounded-full bg-primary">
                <ArrowUp />
              </Button>
              <Button
                size="icon"
                className="mx-auto self-end rounded-full bg-gray-500"
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
