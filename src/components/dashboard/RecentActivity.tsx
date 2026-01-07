import { 
  FileCheck, 
  Upload, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  User,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityItem {
  id: string;
  type: "evidence_uploaded" | "control_approved" | "risk_identified" | "document_reviewed" | "snapshot_created";
  title: string;
  description: string;
  timestamp: string;
  user: string;
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "evidence_uploaded",
    title: "Evidence Uploaded",
    description: "Access control policy evidence for A.9.1.1",
    timestamp: "10 minutes ago",
    user: "Sarah Chen"
  },
  {
    id: "2",
    type: "control_approved",
    title: "Control Attestation",
    description: "A.8.2.3 - Information Classification approved",
    timestamp: "1 hour ago",
    user: "Michael Torres"
  },
  {
    id: "3",
    type: "risk_identified",
    title: "Risk Assessment Updated",
    description: "R-2024-012: Third-party vendor access risk",
    timestamp: "2 hours ago",
    user: "Emma Wilson"
  },
  {
    id: "4",
    type: "snapshot_created",
    title: "Audit Snapshot Created",
    description: "Q4 2024 Surveillance Audit snapshot frozen",
    timestamp: "3 hours ago",
    user: "System"
  },
  {
    id: "5",
    type: "document_reviewed",
    title: "Document Review Complete",
    description: "Incident Response Procedure v3.1 approved",
    timestamp: "5 hours ago",
    user: "David Park"
  },
];

const iconMap = {
  evidence_uploaded: Upload,
  control_approved: CheckCircle2,
  risk_identified: AlertTriangle,
  document_reviewed: FileCheck,
  snapshot_created: Shield,
};

const colorMap = {
  evidence_uploaded: "bg-info/10 text-info",
  control_approved: "bg-verified/10 text-verified",
  risk_identified: "bg-pending/10 text-pending",
  document_reviewed: "bg-primary/10 text-primary",
  snapshot_created: "bg-accent/10 text-accent",
};

export function RecentActivity() {
  return (
    <div className="bg-card rounded-lg border border-border p-5 shadow-card animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-foreground">Recent Activity</h3>
        <a href="/audit-trail" className="text-sm text-accent hover:text-accent/80 transition-colors">
          View all
        </a>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = iconMap[activity.type];
          
          return (
            <div 
              key={activity.id} 
              className="flex gap-3 animate-slide-in-left"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={cn(
                "shrink-0 p-2 rounded-lg h-fit",
                colorMap[activity.type]
              )}>
                <Icon className="h-4 w-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-3 w-3 text-muted-foreground/60" />
                  <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                  <span className="text-muted-foreground/40">•</span>
                  <User className="h-3 w-3 text-muted-foreground/60" />
                  <span className="text-xs text-muted-foreground">{activity.user}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
