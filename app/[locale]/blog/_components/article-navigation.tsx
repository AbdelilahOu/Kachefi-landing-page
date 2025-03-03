import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ArticleNavigation() {
  return (
    <div className="flex justify-between mt-8">
      <Link href="#" className="text-purple-500 flex items-center">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </Link>
      <Link href="#" className="text-purple-500 flex items-center">
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
}
