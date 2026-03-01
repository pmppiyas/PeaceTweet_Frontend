import { Button } from '@/components/ui/button';
import { Droplet, MapPin, Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const BLOOD_REQUESTS = [
  {
    id: '1',
    group: 'O+',
    location: 'DMCH, Dhaka',
    urgent: true,
    time: '2h ago',
  },
  {
    id: '2',
    group: 'A-',
    location: 'Square Hospital',
    urgent: false,
    time: '5h ago',
  },
];

const BloodRequestBox = () => {
  return (
    <div className="w-full bg-card text-card-foreground border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-border bg-destructive/5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Droplet size={18} className="text-destructive fill-destructive" />
          <h2 className="text-sm font-bold uppercase tracking-tight text-destructive">
            Emergency Blood
          </h2>
        </div>
        <Link
          href="/blood-requests"
          className="text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors flex items-center"
        >
          VIEW ALL <ChevronRight size={12} />
        </Link>
      </div>

      <div className="divide-y divide-border overflow-y-auto custom-scrollbar">
        {BLOOD_REQUESTS.map((req) => (
          <div
            key={req.id}
            className="p-4 hover:bg-accent/50 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div
                className={`h-12 w-12 rounded-full flex flex-col items-center justify-center shrink-0 border-2 ${
                  req.urgent
                    ? 'border-destructive bg-destructive text-white'
                    : 'border-border bg-muted text-foreground'
                }`}
              >
                <span className="text-sm font-black leading-none">
                  {req.group}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="text-xs font-bold truncate">
                    Required at {req.location.split(',')[0]}
                  </p>
                  {req.urgent && (
                    <span className="flex h-2 w-2 rounded-full bg-destructive animate-ping" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-1">
                  <MapPin size={10} />
                  <span className="truncate">{req.location}</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {req.time}
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              <Button
                size="sm"
                className="h-7 flex-1 text-[11px] font-bold bg-destructive hover:bg-destructive/90"
              >
                <Phone size={12} className="mr-1" /> Call Now
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-7 flex-1 text-[11px] font-bold border-destructive/20 text-destructive hover:bg-destructive/5"
              >
                Donate
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-muted/20 border-t border-border">
        <Button
          variant="ghost"
          className="w-full h-8 text-xs font-semibold text-muted-foreground hover:text-destructive"
        >
          Post a Blood Request
        </Button>
      </div>
    </div>
  );
};

export default BloodRequestBox;
