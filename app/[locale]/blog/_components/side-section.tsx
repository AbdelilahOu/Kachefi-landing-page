import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const popularTopics = [
  { name: "Healthcare", href: "#" },
  { name: "Dépistage", href: "#" },
  { name: "cancer", href: "#" },
  { name: "cancer du sein", href: "#" },
  { name: "cancer de prostate", href: "#" },
];

const featuredArticles = [
  {
    category: "Prévention du cancer",
    categoryColor: "bg-red-700 py-1 text-white w-fit",
    title:
      "L&aposimportance du dépistage précoce dans la lutte contre le cancer du sein",
    href: "#",
  },
  {
    category: "Innovations médicales",
    categoryColor: "bg-green-700 py-1 text-white w-fit",
    title:
      "Comment l&aposintelligence artificielle améliore le dépistage du cancer colorectal",
    href: "#",
  },
  {
    category: "Témoignages de patients",
    categoryColor: "bg-gray-700 py-1 text-white w-fit",
    title:
      "Mon parcours vers la guérison : Témoignage d&aposune survivante du cancer de l&aposovaire",
    href: "#",
  },
];

const imageArticles = [
  {
    title: "Prévention du cancer",
    image: "/articles/featured-article.png",
    href: "#",
  },
  {
    title: "Témoignages de patients",
    image: "/articles/featured-article.png",
    href: "#",
  },
];

export function BlogSidebar() {
  return (
    <aside className="w-full space-y-8 px-4 sm:px-2">
      {/* Popular Topics */}
      <div>
        <h2 className="mb-4 font-semibold text-lg">Sujets populaires :</h2>
        <div className="flex flex-wrap gap-2">
          {popularTopics.map((topic) => (
            <Link key={topic.name} href={topic.href}>
              <Badge variant="secondary" className="hover:bg-secondary/80">
                {topic.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <div className="space-y-6">
        {featuredArticles.map((article, index) => (
          <div key={index} className="grid gap-2">
            <Badge variant="secondary" className={article.categoryColor}>
              {article.category}
            </Badge>
            <Link href={article.href}>
              <h3 className="font-semibold leading-snug hover:text-primary">
                {article.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      {/* Image Articles */}
      <div className="space-y-4">
        {imageArticles.map((article, index) => (
          <Link key={index} href={article.href} className="block">
            <span className="text-gray-500 text-sm">Article {index + 1}</span>
            <Card className="group relative mt-2 overflow-hidden rounded-sm">
              <Image
                src={article.image}
                alt={article.title}
                width={200}
                height={200}
                className="h-[200px] w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 font-semibold">
                <h3 className="px-2 text-center font-medium text-white">
                  {article.title}
                </h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </aside>
  );
}
