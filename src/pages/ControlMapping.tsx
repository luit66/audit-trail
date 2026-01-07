import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Link2, FileText } from "lucide-react";

const mappings = [
  {
    control: "A.5.1",
    controlName: "Policies for information security",
    requirements: ["ISO 27001 5.2", "SOC2 CC1.1"],
    evidence: 3,
  },
  {
    control: "A.8.2",
    controlName: "Privileged access rights",
    requirements: ["ISO 27001 9.2", "SOC2 CC6.1", "GDPR Art.32"],
    evidence: 5,
  },
  {
    control: "A.8.9",
    controlName: "Configuration management",
    requirements: ["ISO 27001 8.1", "SOC2 CC7.1"],
    evidence: 2,
  },
];

export default function ControlMapping() {
  return (
    <DashboardLayout currentPath="/controls/mapping">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Control Mapping</h1>
            <p className="text-muted-foreground">Map controls to requirements and evidence across frameworks</p>
          </div>
          <Button>
            <Link2 className="h-4 w-4 mr-2" />
            Create Mapping
          </Button>
        </div>

        {/* Mapping Cards */}
        <div className="space-y-4">
          {mappings.map((mapping) => (
            <Card key={mapping.control} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-4 flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{mapping.control}</code>
                        <h3 className="font-semibold">{mapping.controlName}</h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Requirements:</span>
                        <div className="flex gap-1">
                          {mapping.requirements.map((req) => (
                            <Badge key={req} variant="secondary">{req}</Badge>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{mapping.evidence} evidence objects</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state hint */}
        <Card className="border-dashed">
          <CardContent className="py-8 text-center">
            <Link2 className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
            <h3 className="font-medium mb-1">Multi-framework ready</h3>
            <p className="text-sm text-muted-foreground">
              Map the same evidence to multiple frameworks (ISO 27001, SOC 2, GDPR) without duplication
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
