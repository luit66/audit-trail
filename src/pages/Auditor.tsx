import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Download, MessageSquare, Eye, Clock, CheckCircle, Package } from "lucide-react";

const requests = [
  { id: "REQ-012", subject: "Additional access review evidence for A.8.2", status: "pending", from: "External Auditor", date: "2026-01-06", control: "A.8.2" },
  { id: "REQ-011", subject: "Clarification on risk R-003 acceptance", status: "responded", from: "External Auditor", date: "2026-01-05", control: "R-003" },
  { id: "REQ-010", subject: "Network segmentation documentation", status: "responded", from: "External Auditor", date: "2026-01-04", control: "A.8.22" },
];

const auditorActivity = [
  { action: "Downloaded Q4-2025 export bundle", user: "External Auditor", time: "2 hours ago" },
  { action: "Viewed SoA v2.1", user: "External Auditor", time: "3 hours ago" },
  { action: "Created request REQ-012", user: "External Auditor", time: "5 hours ago" },
  { action: "Viewed Control A.8.2 evidence", user: "External Auditor", time: "Yesterday" },
];

const statusConfig = {
  pending: { label: "Pending", color: "bg-status-pending text-white", icon: Clock },
  responded: { label: "Responded", color: "bg-status-verified text-white", icon: CheckCircle },
};

export default function Auditor() {
  return (
    <DashboardLayout currentPath="/auditor">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Auditor Portal</h1>
            <p className="text-muted-foreground">Read-only access for external auditors with request workflow</p>
          </div>
          <Button>
            <Users className="h-4 w-4 mr-2" />
            Invite Auditor
          </Button>
        </div>

        {/* Portal Stats */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">2</div>
              <p className="text-sm text-muted-foreground">Active Auditors</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-pending">1</div>
              <p className="text-sm text-muted-foreground">Open Requests</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-muted-foreground">Shared Snapshots</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">12</div>
              <p className="text-sm text-muted-foreground">Downloads This Month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Auditor Requests
              </CardTitle>
              <CardDescription>Information requests from external auditors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {requests.map((req) => {
                  const status = statusConfig[req.status as keyof typeof statusConfig];
                  const StatusIcon = status.icon;
                  return (
                    <div key={req.id} className="p-3 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{req.id}</code>
                          <Badge variant="outline">{req.control}</Badge>
                        </div>
                        <Badge className={status.color}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {status.label}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium mb-1">{req.subject}</p>
                      <p className="text-xs text-muted-foreground">From: {req.from} • {req.date}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Auditor Activity
              </CardTitle>
              <CardDescription>Recent portal usage by auditors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {auditorActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.user} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Shared Snapshots */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Shared with Auditors
            </CardTitle>
            <CardDescription>Snapshots currently accessible to external auditors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 rounded-lg border">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Q4 2025 Audit Pack (SNAP-2025Q4)</p>
                  <p className="text-sm text-muted-foreground">Shared on Jan 4, 2026 • Expires: Feb 4, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-status-verified text-status-verified">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
                <Button variant="outline" size="sm">Manage Access</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
