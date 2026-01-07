import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FolderOpen, Search, Upload, FileText, Image, FileCode, CheckCircle, Clock, AlertCircle } from "lucide-react";

const evidence = [
  { id: "EV-001", name: "Access Review Q4 2025", type: "report", control: "A.8.2", status: "reviewed", uploadedBy: "John Smith", date: "2025-12-15", hash: "a3f2c1..." },
  { id: "EV-002", name: "Security Awareness Training Completion", type: "document", control: "A.6.3", status: "reviewed", uploadedBy: "HR Team", date: "2025-12-20", hash: "b4e3d2..." },
  { id: "EV-003", name: "Firewall Configuration Export", type: "config", control: "A.8.20", status: "pending", uploadedBy: "IT Ops", date: "2026-01-05", hash: "c5f4e3..." },
  { id: "EV-004", name: "Incident Response Procedure v2", type: "document", control: "A.5.24", status: "reviewed", uploadedBy: "Security Team", date: "2025-11-30", hash: "d6g5f4..." },
  { id: "EV-005", name: "Penetration Test Report 2025", type: "report", control: "A.8.8", status: "reviewed", uploadedBy: "External", date: "2025-10-15", hash: "e7h6g5..." },
  { id: "EV-006", name: "Network Diagram Screenshot", type: "screenshot", control: "A.8.20", status: "needs-review", uploadedBy: "IT Ops", date: "2026-01-06", hash: "f8i7h6..." },
];

const typeIcons = {
  report: FileText,
  document: FileText,
  config: FileCode,
  screenshot: Image,
};

const statusConfig = {
  reviewed: { label: "Reviewed", color: "bg-status-verified text-white", icon: CheckCircle },
  pending: { label: "Pending", color: "bg-status-pending text-white", icon: Clock },
  "needs-review": { label: "Needs Review", color: "bg-status-critical text-white", icon: AlertCircle },
};

export default function Evidence() {
  return (
    <DashboardLayout currentPath="/evidence">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Evidence Library</h1>
            <p className="text-muted-foreground">Tamper-evident evidence objects with SHA-256 hashing</p>
          </div>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Evidence
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-verified">42</div>
              <p className="text-sm text-muted-foreground">Reviewed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-pending">4</div>
              <p className="text-sm text-muted-foreground">Pending Attestation</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-critical">2</div>
              <p className="text-sm text-muted-foreground">Needs Review</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">48</div>
              <p className="text-sm text-muted-foreground">Total Objects</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search evidence by name, control, or hash..." className="pl-10" />
        </div>

        {/* Evidence List */}
        <Card>
          <CardHeader>
            <CardTitle>All Evidence Objects</CardTitle>
            <CardDescription>Each object is hashed and version-controlled for audit integrity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {evidence.map((item) => {
                const TypeIcon = typeIcons[item.type as keyof typeof typeIcons] || FileText;
                const status = statusConfig[item.status as keyof typeof statusConfig];
                const StatusIcon = status.icon;
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                        <TypeIcon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{item.id}</code>
                          <p className="font-medium">{item.name}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Control: {item.control} • By: {item.uploadedBy} • {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="text-xs font-mono text-muted-foreground">{item.hash}</code>
                      <Badge className={status.color}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {status.label}
                      </Badge>
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
