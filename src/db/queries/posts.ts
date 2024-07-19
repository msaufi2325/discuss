import type { Post } from '@prisma/client';
import { db } from '@/db';

type PostWithData = (
  Post & {
    topic: { slug: string };
    user: { name: string };
  }
);
