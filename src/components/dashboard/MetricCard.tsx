import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  status?: "verified" | "pending" | "critical" | "neutral";
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  status = "neutral",
  className 
}: MetricCardProps) {
  const statusColors = {
    verified: "bg-verified/10 text-verified border-verified/20",
    pending: "bg-pending/10 text-pending border-pending/30",
    critical: "bg-critical/10 text-critical border-critical/20",
    neutral: "bg-secondary text-muted-foreground border-transparent",
  };

  const TrendIcon = trend?.value 
    ? trend.value > 0 ? TrendingUp : trend.value < 0 ? TrendingDown : Minus
    : null;

  return (
    <div className={cn("metric-card animate-fade-in", className)}>
      <div className="flex items-start justify-between">
        <div className={cn(
          "p-2 rounded-lg border",
          statusColors[status]
        )}>
          <Icon className="h-5 w-5" />
        </div>
        
        {trend && TrendIcon && (
          <div className={cn(
            "flex items-center gap-1 text-xs font-medium",
            trend.value > 0 ? "text-verified" : trend.value < 0 ? "text-critical" : "text-muted-foreground"
          )}>
            <TrendIcon className="h-3.5 w-3.5" />
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>

      <div className="mt-4">
        <p className="text-2xl font-semibold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{title}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground/70 mt-0.5">{subtitle}</p>
        )}
      </div>

      {trend && (
        <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
          {trend.label}
        </p>
      )}
    </div>
  );
}
