import CreatePost from '@/app/components/feed/CreatePost';
import FeedPage from '@/app/components/feed/FeedPage';
import { Assets } from '@/assets';

const page = () => {
  const posts = Assets.posts;

  return (
    <>
      <CreatePost />
      <FeedPage posts={posts} />
    </>
  );
};

export default page;
