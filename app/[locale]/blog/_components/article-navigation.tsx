import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function ArticleNavigation() {
  return (
    <div className="mt-8 flex justify-between">
      <Link href="#" className="flex items-center text-purple-500">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Previous
      </Link>
      <Link href="#" className="flex items-center text-purple-500">
        Next
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}
