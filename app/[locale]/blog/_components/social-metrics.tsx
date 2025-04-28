import { Eye, Heart, MessageSquare, Share2 } from "lucide-react";

interface SocialMetricsProps {
  views: number;
  comments: number;
  likes: number;
}

export function SocialMetrics({ views, comments, likes }: SocialMetricsProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
      <span className="flex items-center gap-1">
        <Eye className="h-4 w-4" />
        {views}
      </span>
      <span className="flex items-center gap-1">
        <MessageSquare className="h-4 w-4" />
        {comments}
      </span>
      <span className="flex items-center gap-1">
        <Heart className="h-4 w-4" />
        {likes}
      </span>
      <span className="flex items-center gap-1">
        <Share2 className="h-4 w-4" />
        Partager
      </span>
    </div>
  );
}
