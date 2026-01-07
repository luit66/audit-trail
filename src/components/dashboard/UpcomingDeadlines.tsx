import { Calendar, AlertCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Deadline {
  id: string;
  title: string;
  dueDate: string;
  daysLeft: number;
  type: "review" | "audit" | "attestation" | "expiry";
  assignee: string;
}

const deadlines: Deadline[] = [
  {
    id: "1",
    title: "Q4 Surveillance Audit",
    dueDate: "Jan 15, 2026",
    daysLeft: 8,
    type: "audit",
    assignee: "Compliance Team"
  },
  {
    id: "2",
    title: "Information Security Policy Review",
    dueDate: "Jan 20, 2026",
    daysLeft: 13,
    type: "review",
    assignee: "Sarah Chen"
  },
  {
    id: "3",
    title: "Access Control Evidence Attestation",
    dueDate: "Jan 12, 2026",
    daysLeft: 5,
    type: "attestation",
    assignee: "Michael Torres"
  },
  {
    id: "4",
    title: "Vendor Security Assessment Expiry",
    dueDate: "Jan 25, 2026",
    daysLeft: 18,
    type: "expiry",
    assignee: "Emma Wilson"
  },
];

const typeColors = {
  review: "bg-info/10 text-info border-info/20",
  audit: "bg-critical/10 text-critical border-critical/20",
  attestation: "bg-pending/10 text-pending border-pending/30",
  expiry: "bg-muted text-muted-foreground border-border",
};

const typeLabels = {
  review: "Review",
  audit: "Audit",
  attestation: "Attestation",
  expiry: "Expiry",
};

export function UpcomingDeadlines() {
  return (
    <div className="bg-card rounded-lg border border-border p-5 shadow-card animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-foreground">Upcoming Deadlines</h3>
        <Calendar className="h-4.5 w-4.5 text-muted-foreground" />
      </div>

      <div className="space-y-3">
        {deadlines.map((deadline) => (
          <div 
            key={deadline.id}
            className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/20 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {deadline.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Assigned to: {deadline.assignee}
                </p>
              </div>
              <Badge 
                variant="outline" 
                className={cn("shrink-0 text-xs", typeColors[deadline.type])}
              >
                {typeLabels[deadline.type]}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-border">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {deadline.dueDate}
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-medium",
                deadline.daysLeft <= 7 ? "text-critical" : 
                deadline.daysLeft <= 14 ? "text-pending" : "text-muted-foreground"
              )}>
                {deadline.daysLeft <= 7 && <AlertCircle className="h-3 w-3" />}
                {deadline.daysLeft} days left
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
