import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Package, CheckCircle, FileText, Shield, Clock } from "lucide-react";

const snapshots = [
  { id: "SNAP-2025Q4", name: "Q4 2025 Audit Pack", created: "2026-01-04", status: "verified", size: "24.5 MB", manifest: "signed" },
  { id: "SNAP-2025Q3", name: "Q3 2025 Audit Pack", created: "2025-10-02", status: "verified", size: "22.1 MB", manifest: "signed" },
  { id: "SNAP-2025Q2", name: "Q2 2025 Audit Pack", created: "2025-07-01", status: "verified", size: "19.8 MB", manifest: "signed" },
];

const exportFormats = [
  { name: "Complete Audit Bundle", description: "ZIP with all artifacts, manifest, and verifier", icon: Package },
  { name: "SoA Export", description: "Statement of Applicability (PDF + JSON)", icon: FileText },
  { name: "Risk Register", description: "Risk assessment and treatment plans (CSV)", icon: Shield },
  { name: "Control Coverage Report", description: "Control implementation status (PDF)", icon: CheckCircle },
];

export default function Exports() {
  return (
    <DashboardLayout currentPath="/exports">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Exports & Snapshots</h1>
            <p className="text-muted-foreground">Deterministic, signed audit packs with offline verification</p>
          </div>
          <Button>
            <Package className="h-4 w-4 mr-2" />
            Create New Snapshot
          </Button>
        </div>

        {/* Quick Export Options */}
        <div className="grid grid-cols-2 gap-4">
          {exportFormats.map((format) => {
            const Icon = format.icon;
            return (
              <Card key={format.name} className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{format.name}</p>
                      <p className="text-sm text-muted-foreground">{format.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Snapshots */}
        <Card>
          <CardHeader>
            <CardTitle>Audit Snapshots</CardTitle>
            <CardDescription>Frozen point-in-time bundles with signed manifests for auditor delivery</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {snapshots.map((snapshot) => (
                <div
                  key={snapshot.id}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                      <Package className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{snapshot.id}</code>
                        <p className="font-medium">{snapshot.name}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Created: {snapshot.created} • Size: {snapshot.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-status-verified text-status-verified">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {snapshot.manifest}
                    </Badge>
                    <Badge className="bg-status-verified text-white">
                      {snapshot.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Offline Verifier */}
        <Card className="border-dashed">
          <CardContent className="py-8 text-center">
            <Shield className="h-8 w-8 mx-auto text-primary mb-3" />
            <h3 className="font-medium mb-1">Offline Verification</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Each export includes a verifier script that auditors can run locally to validate manifest signatures and artifact hashes
            </p>
            <code className="text-xs font-mono bg-muted px-3 py-2 rounded block max-w-md mx-auto">
              ./verify.sh manifest.json manifest.sig
            </code>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
