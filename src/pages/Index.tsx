import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ComplianceProgress } from "@/components/dashboard/ComplianceProgress";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingDeadlines } from "@/components/dashboard/UpcomingDeadlines";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ControlCoverage } from "@/components/dashboard/ControlCoverage";
import { 
  Shield, 
  FileCheck, 
  AlertTriangle, 
  FolderOpen,
  Clock,
  CheckCircle2
} from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout 
      title="Compliance Dashboard" 
      subtitle="ISO 27001 Audit Readiness Overview"
      currentPath="/"
    >
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Controls Implemented"
          value="98/114"
          subtitle="ISO 27001 Annex A"
          icon={Shield}
          status="verified"
          trend={{ value: 8, label: "vs last month" }}
        />
        <MetricCard
          title="Evidence Objects"
          value="48"
          subtitle="Attested and ready"
          icon={FileCheck}
          status="verified"
          trend={{ value: 12, label: "new this week" }}
        />
        <MetricCard
          title="Open Risks"
          value="12"
          subtitle="3 high, 5 medium, 4 low"
          icon={AlertTriangle}
          status="pending"
          trend={{ value: -2, label: "resolved this month" }}
        />
        <MetricCard
          title="Documents"
          value="24"
          subtitle="18 approved, 6 pending"
          icon={FolderOpen}
          status="neutral"
        />
      </div>

      {/* Status Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-verified/5 border border-verified/20 rounded-lg p-4 flex items-center gap-4 animate-fade-in">
          <div className="p-3 bg-verified/10 rounded-lg">
            <CheckCircle2 className="h-6 w-6 text-verified" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Last Audit Snapshot</p>
            <p className="text-xs text-muted-foreground">Q3 2025 • Verified ✓</p>
          </div>
        </div>
        
        <div className="bg-pending/5 border border-pending/20 rounded-lg p-4 flex items-center gap-4 animate-fade-in">
          <div className="p-3 bg-pending/10 rounded-lg">
            <Clock className="h-6 w-6 text-pending" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Next Audit</p>
            <p className="text-xs text-muted-foreground">Q4 2025 Surveillance • 8 days</p>
          </div>
        </div>
        
        <div className="bg-secondary border border-border rounded-lg p-4 flex items-center gap-4 animate-fade-in">
          <div className="p-3 bg-muted rounded-lg">
            <Shield className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Certification Status</p>
            <p className="text-xs text-muted-foreground">ISO 27001:2022 • Valid until Dec 2026</p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <ComplianceProgress />
          <QuickActions />
          <RecentActivity />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ControlCoverage />
          <UpcomingDeadlines />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
