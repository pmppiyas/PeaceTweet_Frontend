import { Button } from '@/components/ui/button';
import Link from 'next/link';

const REQUESTS = [
  { id: '1', name: 'Arif Ahmed', mutual: 12, avatar: 'A' },
  { id: '2', name: 'Sumaiya Khan', mutual: 5, avatar: 'S' },
];

const FriendRequestBox = () => {
  return (
    <div className="w-full bg-card text-card-foreground  rounded-xl shadow-sm p-4 space-y-4">
      <div className="flex justify-between items-center px-1">
        <h2 className="text-lg font-bold tracking-tight">Friend Requests</h2>
        <Link
          href="/friends/requests"
          className="text-xs font-medium text-primary hover:underline"
        >
          See All
        </Link>
      </div>

      <div className="space-y-4">
        {REQUESTS.map((request) => (
          <div key={request.id} className="flex gap-3">
            {/* Avatar */}
            <div className="h-12 w-12 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-muted-foreground shrink-0">
              {request.avatar}
            </div>

            {/* Info & Buttons */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-none">
                  {request.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {request.mutual} mutual friends
                </span>
              </div>

              <div className="flex gap-2">
                <Button className="h-8 flex-1 text-xs font-semibold" size="sm">
                  Confirm
                </Button>
                <Button
                  variant="secondary"
                  className="h-8 flex-1 text-xs font-semibold"
                  size="sm"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendRequestBox;
