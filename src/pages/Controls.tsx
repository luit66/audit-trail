import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Shield, Search, Filter, CheckCircle, Clock, XCircle } from "lucide-react";

const controls = [
  { id: "A.5.1", name: "Policies for information security", status: "implemented", owner: "John Smith", category: "Organizational" },
  { id: "A.5.2", name: "Information security roles and responsibilities", status: "implemented", owner: "John Smith", category: "Organizational" },
  { id: "A.5.3", name: "Segregation of duties", status: "partial", owner: "Jane Doe", category: "Organizational" },
  { id: "A.5.4", name: "Management responsibilities", status: "implemented", owner: "John Smith", category: "Organizational" },
  { id: "A.5.5", name: "Contact with authorities", status: "not-started", owner: "Unassigned", category: "Organizational" },
  { id: "A.6.1", name: "Screening", status: "implemented", owner: "HR Team", category: "People" },
  { id: "A.6.2", name: "Terms and conditions of employment", status: "implemented", owner: "HR Team", category: "People" },
  { id: "A.7.1", name: "Physical security perimeters", status: "partial", owner: "Facilities", category: "Physical" },
  { id: "A.8.1", name: "User endpoint devices", status: "implemented", owner: "IT Ops", category: "Technological" },
  { id: "A.8.2", name: "Privileged access rights", status: "implemented", owner: "IT Ops", category: "Technological" },
];

const statusConfig = {
  implemented: { label: "Implemented", color: "bg-status-verified text-white", icon: CheckCircle },
  partial: { label: "Partial", color: "bg-status-pending text-white", icon: Clock },
  "not-started": { label: "Not Started", color: "bg-status-critical text-white", icon: XCircle },
};

export default function Controls() {
  return (
    <DashboardLayout currentPath="/controls">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Control Library</h1>
            <p className="text-muted-foreground">ISO 27001:2022 Annex A aligned controls</p>
          </div>
          <Button>
            <Shield className="h-4 w-4 mr-2" />
            Add Custom Control
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-verified">87</div>
              <p className="text-sm text-muted-foreground">Implemented</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-pending">19</div>
              <p className="text-sm text-muted-foreground">Partial</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-critical">8</div>
              <p className="text-sm text-muted-foreground">Not Started</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">114</div>
              <p className="text-sm text-muted-foreground">Total Controls</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search controls..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Controls Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Controls</CardTitle>
            <CardDescription>Manage and track control implementation status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {controls.map((control) => {
                const status = statusConfig[control.status as keyof typeof statusConfig];
                const StatusIcon = status.icon;
                return (
                  <div
                    key={control.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{control.id}</code>
                      <div>
                        <p className="font-medium">{control.name}</p>
                        <p className="text-sm text-muted-foreground">Owner: {control.owner}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{control.category}</Badge>
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
