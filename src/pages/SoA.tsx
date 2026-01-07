import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Download, RefreshCw, CheckCircle, XCircle, Clock } from "lucide-react";

const soaItems = [
  { id: "A.5.1", name: "Policies for information security", included: true, implemented: true, justification: "Required for ISMS governance" },
  { id: "A.5.2", name: "Information security roles", included: true, implemented: true, justification: "Defines accountability" },
  { id: "A.5.3", name: "Segregation of duties", included: true, implemented: "partial", justification: "Critical for access control" },
  { id: "A.5.7", name: "Threat intelligence", included: false, implemented: false, justification: "Not applicable - outsourced to MDR provider" },
  { id: "A.6.1", name: "Screening", included: true, implemented: true, justification: "Required for personnel security" },
  { id: "A.7.1", name: "Physical security perimeters", included: true, implemented: "partial", justification: "Cloud-first, limited physical scope" },
  { id: "A.8.1", name: "User endpoint devices", included: true, implemented: true, justification: "BYOD and company devices in scope" },
  { id: "A.8.2", name: "Privileged access rights", included: true, implemented: true, justification: "Critical control for access management" },
];

export default function SoA() {
  return (
    <DashboardLayout currentPath="/soa">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Statement of Applicability</h1>
            <p className="text-muted-foreground">ISO 27001:2022 control applicability and implementation status</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Regenerate
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export SoA
            </Button>
          </div>
        </div>

        {/* SoA Version */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>SoA v2.1</CardTitle>
                  <CardDescription>Generated: January 6, 2026 • Based on Scope v1.2</CardDescription>
                </div>
              </div>
              <Badge variant="secondary">114 Controls</Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-verified">93</div>
              <p className="text-sm text-muted-foreground">Included & Implemented</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-pending">12</div>
              <p className="text-sm text-muted-foreground">Partially Implemented</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-muted-foreground">9</div>
              <p className="text-sm text-muted-foreground">Excluded</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">114</div>
              <p className="text-sm text-muted-foreground">Total Annex A Controls</p>
            </CardContent>
          </Card>
        </div>

        {/* SoA Table */}
        <Card>
          <CardHeader>
            <CardTitle>Control Applicability</CardTitle>
            <CardDescription>Review and justify control inclusion/exclusion decisions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {soaItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded w-16">{item.id}</code>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.justification}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.included ? (
                      <Badge variant="outline" className="border-status-verified text-status-verified">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Included
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
                        <XCircle className="h-3 w-3 mr-1" />
                        Excluded
                      </Badge>
                    )}
                    {item.included && (
                      item.implemented === true ? (
                        <Badge className="bg-status-verified text-white">Implemented</Badge>
                      ) : item.implemented === "partial" ? (
                        <Badge className="bg-status-pending text-white">
                          <Clock className="h-3 w-3 mr-1" />
                          Partial
                        </Badge>
                      ) : null
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
