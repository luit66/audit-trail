import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Search, Plus, TrendingDown, TrendingUp } from "lucide-react";

const risks = [
  { id: "R-001", name: "Unauthorized access to production systems", level: "high", likelihood: "Medium", impact: "High", owner: "IT Security", status: "treating" },
  { id: "R-002", name: "Data breach via phishing attack", level: "high", likelihood: "High", impact: "High", owner: "IT Security", status: "treating" },
  { id: "R-003", name: "Service outage due to infrastructure failure", level: "medium", likelihood: "Low", impact: "High", owner: "IT Ops", status: "accepted" },
  { id: "R-004", name: "Loss of key personnel knowledge", level: "medium", likelihood: "Medium", impact: "Medium", owner: "HR", status: "treating" },
  { id: "R-005", name: "Third-party vendor security incident", level: "medium", likelihood: "Medium", impact: "Medium", owner: "Procurement", status: "monitoring" },
  { id: "R-006", name: "Non-compliance with GDPR requirements", level: "low", likelihood: "Low", impact: "Medium", owner: "Legal", status: "accepted" },
];

const levelConfig = {
  high: { label: "High", color: "bg-status-critical text-white" },
  medium: { label: "Medium", color: "bg-status-pending text-white" },
  low: { label: "Low", color: "bg-status-verified text-white" },
};

const statusConfig = {
  treating: { label: "Treating", color: "border-blue-500 text-blue-500" },
  accepted: { label: "Accepted", color: "border-green-500 text-green-500" },
  monitoring: { label: "Monitoring", color: "border-yellow-500 text-yellow-500" },
};

export default function Risks() {
  return (
    <DashboardLayout currentPath="/risks">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Risk Register</h1>
            <p className="text-muted-foreground">Identify, assess, and track information security risks</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Risk
          </Button>
        </div>

        {/* Risk Matrix Summary */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-status-critical">2</div>
                  <p className="text-sm text-muted-foreground">High Risks</p>
                </div>
                <TrendingDown className="h-5 w-5 text-status-verified" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-status-pending">3</div>
                  <p className="text-sm text-muted-foreground">Medium Risks</p>
                </div>
                <TrendingUp className="h-5 w-5 text-status-pending" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-verified">1</div>
              <p className="text-sm text-muted-foreground">Low Risks</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">12</div>
              <p className="text-sm text-muted-foreground">Total Risks</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search risks..." className="pl-10" />
        </div>

        {/* Risk List */}
        <Card>
          <CardHeader>
            <CardTitle>All Risks</CardTitle>
            <CardDescription>Risk assessment based on likelihood × impact matrix</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {risks.map((risk) => {
                const level = levelConfig[risk.level as keyof typeof levelConfig];
                const status = statusConfig[risk.status as keyof typeof statusConfig];
                return (
                  <div
                    key={risk.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <AlertTriangle className={`h-5 w-5 ${risk.level === 'high' ? 'text-status-critical' : risk.level === 'medium' ? 'text-status-pending' : 'text-status-verified'}`} />
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{risk.id}</code>
                          <p className="font-medium">{risk.name}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Likelihood: {risk.likelihood} • Impact: {risk.impact} • Owner: {risk.owner}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={status.color}>{status.label}</Badge>
                      <Badge className={level.color}>{level.label}</Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
