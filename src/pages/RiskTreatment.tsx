import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Clock, ArrowRight } from "lucide-react";

const treatmentPlans = [
  {
    riskId: "R-001",
    riskName: "Unauthorized access to production systems",
    treatment: "Mitigate",
    controls: ["A.8.2", "A.8.5", "A.8.15"],
    status: "in-progress",
    owner: "IT Security",
    dueDate: "2026-02-15",
  },
  {
    riskId: "R-002",
    riskName: "Data breach via phishing attack",
    treatment: "Mitigate",
    controls: ["A.6.3", "A.8.7"],
    status: "in-progress",
    owner: "IT Security",
    dueDate: "2026-01-31",
  },
  {
    riskId: "R-003",
    riskName: "Service outage due to infrastructure failure",
    treatment: "Accept",
    controls: [],
    status: "approved",
    owner: "IT Ops",
    dueDate: "-",
  },
  {
    riskId: "R-004",
    riskName: "Loss of key personnel knowledge",
    treatment: "Mitigate",
    controls: ["A.6.5"],
    status: "pending-approval",
    owner: "HR",
    dueDate: "2026-03-01",
  },
];

const statusConfig = {
  "in-progress": { label: "In Progress", color: "bg-blue-500 text-white", icon: Clock },
  "approved": { label: "Approved", color: "bg-status-verified text-white", icon: CheckCircle },
  "pending-approval": { label: "Pending Approval", color: "bg-status-pending text-white", icon: Clock },
};

export default function RiskTreatment() {
  return (
    <DashboardLayout currentPath="/risks/treatment">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Treatment Plans</h1>
            <p className="text-muted-foreground">Define and track risk treatment strategies and control implementations</p>
          </div>
          <Button>
            <Shield className="h-4 w-4 mr-2" />
            New Treatment Plan
          </Button>
        </div>

        {/* Treatment Summary */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-muted-foreground">Mitigate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">1</div>
              <p className="text-sm text-muted-foreground">Accept</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">0</div>
              <p className="text-sm text-muted-foreground">Transfer</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">0</div>
              <p className="text-sm text-muted-foreground">Avoid</p>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Plans */}
        <Card>
          <CardHeader>
            <CardTitle>All Treatment Plans</CardTitle>
            <CardDescription>Traceable treatment decisions with control linkages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {treatmentPlans.map((plan) => {
                const status = statusConfig[plan.status as keyof typeof statusConfig];
                const StatusIcon = status.icon;
                return (
                  <div
                    key={plan.riskId}
                    className="p-4 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{plan.riskId}</code>
                          <p className="font-medium">{plan.riskName}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Owner: {plan.owner} • Due: {plan.dueDate}</p>
                      </div>
                      <Badge className={status.color}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {status.label}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <Badge variant="outline">{plan.treatment}</Badge>
                      {plan.controls.length > 0 && (
                        <>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          <div className="flex gap-1">
                            {plan.controls.map((control) => (
                              <code key={control} className="text-xs font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                                {control}
                              </code>
                            ))}
                          </div>
                        </>
                      )}
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
