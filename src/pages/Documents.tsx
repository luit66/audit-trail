import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, Search, Plus, CheckCircle, Clock, AlertTriangle, ExternalLink } from "lucide-react";

const documents = [
  { id: "DOC-001", name: "Information Security Policy", version: "v3.2", status: "approved", owner: "CISO", reviewDate: "2026-06-15", type: "policy" },
  { id: "DOC-002", name: "Access Control Procedure", version: "v2.1", status: "approved", owner: "IT Security", reviewDate: "2026-03-20", type: "procedure" },
  { id: "DOC-003", name: "Incident Response Plan", version: "v1.8", status: "review-due", owner: "Security Team", reviewDate: "2026-01-10", type: "plan" },
  { id: "DOC-004", name: "Risk Assessment Methodology", version: "v2.0", status: "approved", owner: "Compliance", reviewDate: "2026-08-01", type: "procedure" },
  { id: "DOC-005", name: "Business Continuity Plan", version: "v1.5", status: "draft", owner: "Operations", reviewDate: "-", type: "plan" },
  { id: "DOC-006", name: "Data Classification Guidelines", version: "v1.3", status: "approved", owner: "IT Security", reviewDate: "2026-04-30", type: "guideline" },
];

const statusConfig = {
  approved: { label: "Approved", color: "bg-status-verified text-white", icon: CheckCircle },
  draft: { label: "Draft", color: "bg-muted text-muted-foreground", icon: Clock },
  "review-due": { label: "Review Due", color: "bg-status-pending text-white", icon: AlertTriangle },
};

const typeColors = {
  policy: "border-blue-500 text-blue-500",
  procedure: "border-green-500 text-green-500",
  plan: "border-purple-500 text-purple-500",
  guideline: "border-orange-500 text-orange-500",
};

export default function Documents() {
  return (
    <DashboardLayout currentPath="/documents">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Document Repository</h1>
            <p className="text-muted-foreground">Controlled documentation with versioning and approval workflows</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              Add External Link
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-verified">18</div>
              <p className="text-sm text-muted-foreground">Approved</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-pending">3</div>
              <p className="text-sm text-muted-foreground">Review Due</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-muted-foreground">2</div>
              <p className="text-sm text-muted-foreground">Drafts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">23</div>
              <p className="text-sm text-muted-foreground">Total Documents</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search documents..." className="pl-10" />
        </div>

        {/* Document List */}
        <Card>
          <CardHeader>
            <CardTitle>All Documents</CardTitle>
            <CardDescription>Version-controlled with owner, approval, and review cycle tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {documents.map((doc) => {
                const status = statusConfig[doc.status as keyof typeof statusConfig];
                const StatusIcon = status.icon;
                const typeColor = typeColors[doc.type as keyof typeof typeColors];
                return (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{doc.name}</p>
                          <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{doc.version}</code>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Owner: {doc.owner} • Review: {doc.reviewDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={typeColor}>{doc.type}</Badge>
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
