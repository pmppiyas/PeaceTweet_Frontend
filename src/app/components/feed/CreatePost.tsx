/* eslint-disable jsx-a11y/alt-text */
'use client';

import { Image, Smile, HeartPulse, BookHeart, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CreatePost() {
  return (
    <div className="w-full max-w-3xl mx-auto ">
      <div className="bg-background  border rounded-xl p-4 shadow-sm mx-4">
        {/* Top: Avatar + Input */}
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-400 shrink-0" />

          {/* Textarea */}
          <Link href="/create_post" className="flex-1">
            <div className="flex-1 min-h-15 max-h-40 bg-accent rounded-lg p-3 hover:bg-gray-200 transition-colors cursor-pointer flex items-center">
              <h3 className="text-sm opacity-75 text-gray-600">
                Write something for help another!
              </h3>
            </div>
          </Link>
        </div>

        {/* Bottom: Actions */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2 ">
            <Button
              variant={'outline'}
              type="button"
              className="p-2 rounded-full hover:bg-accent transition"
            >
              <Image size={20} />
            </Button>
            <Button
              variant={'outline'}
              type="button"
              className="p-2 rounded-full hover:bg-accent transition"
            >
              <Smile size={20} />
            </Button>

            <Link href={'/create_post/?ref=hadis'}>
              <Button variant={'outline'} className="flex items-center gap-2">
                <BookHeart size={16} />
                Hadis
              </Button>
            </Link>
            <Link href={'/create_post/?ref=blood_request'}>
              <Button variant={'outline'} className="flex items-center gap-2">
                <HeartPulse size={16} />
                Blood Request
              </Button>
            </Link>
            <Link href={'/create_post/?ref=news'}>
              <Button variant={'outline'} className="flex items-center gap-2">
                <Newspaper size={16} />
                News
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
