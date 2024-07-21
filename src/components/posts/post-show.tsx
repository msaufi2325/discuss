import { notFound } from 'next/navigation';
import { db } from '@/db';

interface PostShowProps {
  postID: string;
}

export default async function PostShow({ postID }: PostShowProps) {
  const post = await db.post.findFirst({
    where: { id: postID }
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold my-2">{post.title}</h1>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
}
