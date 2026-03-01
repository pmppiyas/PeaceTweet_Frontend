import { IPost } from '@/app/interface/post.interface';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-xl mb-4 shadow-sm max-w-2xl mx-auto overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center space-x-3">
          {/* Avatar Base Color */}
          <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-semibold text-sm border border-border">
            {post.userId.slice(-1).toUpperCase()}
          </div>
          <div className="space-y-0.5">
            <p className="font-medium text-sm leading-none">
              User {post.userId.slice(0, 8)}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-accent">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-4 space-y-2">
        {post.header && (
          <h3 className="font-semibold text-base tracking-tight leading-tight">
            {post.header}
          </h3>
        )}
        <p className="text-sm text-muted-foreground leading-normal">
          {post.content}
        </p>
      </div>

      {/* Engagement Actions */}
      <div className="px-2 py-1.5 border-t border-border bg-muted/30 flex items-center justify-between">
        <div className="flex space-x-1">
          <Button
            variant={'outline'}
            className="flex items-center space-x-2 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all"
          >
            <Heart size={18} />
            <span className="text-xs font-medium">Like</span>
          </Button>
          <Button
            variant={'outline'}
            className="flex items-center space-x-2 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all"
          >
            <MessageCircle size={18} />
            <span className="text-xs font-medium">Comment</span>
          </Button>
        </div>
        <Button
          variant={'outline'}
          className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all"
        >
          <Share2 size={18} />
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
