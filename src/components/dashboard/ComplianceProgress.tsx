import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ComplianceItem {
  label: string;
  value: number;
  total: number;
  status: "verified" | "pending" | "critical";
}

const items: ComplianceItem[] = [
  { label: "Controls Implemented", value: 98, total: 114, status: "verified" },
  { label: "Evidence Collected", value: 42, total: 48, status: "verified" },
  { label: "Risks Assessed", value: 12, total: 12, status: "verified" },
  { label: "Documents Approved", value: 18, total: 24, status: "pending" },
  { label: "Findings Resolved", value: 3, total: 7, status: "critical" },
];

export function ComplianceProgress() {
  return (
    <div className="bg-card rounded-lg border border-border p-5 shadow-card animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-foreground">ISO 27001 Readiness</h3>
        <span className="text-sm text-muted-foreground">Last updated: 2 hours ago</span>
      </div>

      <div className="space-y-4">
        {items.map((item) => {
          const percentage = Math.round((item.value / item.total) * 100);
          
          return (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">{item.label}</span>
                <span className="text-sm font-medium text-foreground">
                  {item.value}/{item.total}
                  <span className="text-muted-foreground ml-2">({percentage}%)</span>
                </span>
              </div>
              <div className="relative">
                <Progress 
                  value={percentage} 
                  className={cn(
                    "h-2",
                    item.status === "verified" && "[&>div]:bg-verified",
                    item.status === "pending" && "[&>div]:bg-pending",
                    item.status === "critical" && "[&>div]:bg-critical"
                  )}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="font-medium text-foreground">Overall Readiness</span>
          <span className="text-2xl font-bold text-verified">87%</span>
        </div>
      </div>
    </div>
  );
}
