import { Eye, MessageSquare, Heart, Share2 } from "lucide-react";

interface SocialMetricsProps {
  views: number;
  comments: number;
  likes: number;
}

export function SocialMetrics({ views, comments, likes }: SocialMetricsProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
      <span className="flex items-center gap-1">
        <Eye className="w-4 h-4" />
        {views}
      </span>
      <span className="flex items-center gap-1">
        <MessageSquare className="w-4 h-4" />
        {comments}
      </span>
      <span className="flex items-center gap-1">
        <Heart className="w-4 h-4" />
        {likes}
      </span>
      <span className="flex items-center gap-1">
        <Share2 className="w-4 h-4" />
        Partager
      </span>
    </div>
  );
}
