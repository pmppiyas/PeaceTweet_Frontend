const posts = [
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    header: 'Getting Started with Next.js 14',
    content:
      "Next.js 14 introduced some amazing features like Server Actions and partial pre-rendering. It's a game changer for Full Stack developers.",
    createdAt: new Date('2024-03-01T10:00:00Z'),
    updatedAt: new Date('2024-03-01T10:00:00Z'),
    userId: 'user-uuid-1',
  },
  {
    id: 'a2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7',
    header: 'Why I love Prisma ORM',
    content:
      'Prisma makes database management so much easier with its type-safe client. No more worrying about SQL syntax errors!',
    createdAt: new Date('2024-03-02T12:30:00Z'),
    updatedAt: new Date('2024-03-02T12:30:00Z'),
    userId: 'user-uuid-2',
  },
  {
    id: 'c7d8e9f0-1a2b-3c4d-5e6f-7g8h9i0j1k2l',
    header: null,
    content:
      'Just finished building the authentication flow with JWT and Zod validation. Feeling productive! 🚀',
    createdAt: new Date('2024-03-03T15:45:00Z'),
    updatedAt: new Date('2024-03-03T15:45:00Z'),
    userId: 'user-uuid-1',
  },
  {
    id: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
    header: 'Backend Architecture Tips',
    content:
      'When building large scale apps, always follow a modular structure. It keeps your controllers clean and services reusable.',
    createdAt: new Date('2024-03-04T09:15:00Z'),
    updatedAt: new Date('2024-03-04T09:15:00Z'),
    userId: 'user-uuid-3',
  },
  {
    id: 'e1f2g3h4-i5j6-k7l8-m9n0-o1p2q3r4s5t6',
    header: 'PostgreSQL vs MongoDB',
    content:
      'For my social media project, I chose PostgreSQL because of its relational capabilities and ACID compliance. Prisma makes the transition smooth.',
    createdAt: new Date('2024-03-05T11:00:00Z'),
    updatedAt: new Date('2024-03-05T11:00:00Z'),
    userId: 'user-uuid-4',
  },
  {
    id: 'f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1',
    header: 'The Power of TypeScript',
    content:
      "TypeScript catches so many bugs during development. I can't imagine going back to plain JavaScript now.",
    createdAt: new Date('2024-03-06T14:20:00Z'),
    updatedAt: new Date('2024-03-06T14:20:00Z'),
    userId: 'user-uuid-2',
  },
  {
    id: 'g2h3i4j5-k6l7-m8n9-o0p1-q2r3s4t5u6v7',
    header: null,
    content:
      'Anyone here working on Ride-Sharing apps? Looking for some tips on real-time driver tracking.',
    createdAt: new Date('2024-03-07T16:50:00Z'),
    updatedAt: new Date('2024-03-07T16:50:00Z'),
    userId: 'user-uuid-5',
  },
  {
    id: 'h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3',
    header: 'Tailwind CSS is Awesome',
    content:
      'Utility-first CSS is so much faster for building responsive UIs. My social media feed looks great on mobile!',
    createdAt: new Date('2024-03-08T08:30:00Z'),
    updatedAt: new Date('2024-03-08T08:30:00Z'),
    userId: 'user-uuid-1',
  },
  {
    id: 'i4j5k6l7-m8n9-o0p1-q2r3-s4t5u6v7w8x9',
    header: 'Learning NestJS',
    content:
      'Starting my journey with NestJS today. The dependency injection and modular system feel very professional.',
    createdAt: new Date('2024-03-09T13:10:00Z'),
    updatedAt: new Date('2024-03-09T13:10:00Z'),
    userId: 'user-uuid-3',
  },
  {
    id: 'j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y5',
    header: 'Zod for Validation',
    content:
      'Using Zod with Prisma and Next.js ensures that no bad data reaches my database. Strongly recommend it!',
    createdAt: new Date('2024-03-10T19:00:00Z'),
    updatedAt: new Date('2024-03-10T19:00:00Z'),
    userId: 'user-uuid-4',
  },
];

export const Assets = {
  posts,
};
