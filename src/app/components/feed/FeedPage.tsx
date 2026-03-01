import PostCard from '@/app/components/feed/PostCard';
import { IPost } from '@/app/interface/post.interface';
const FeedPage = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-2xl mx-auto px-4">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default FeedPage;
