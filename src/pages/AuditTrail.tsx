import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Activity, Search, Download, FileText, Upload, CheckCircle, Shield, Users } from "lucide-react";

const events = [
  { id: "EVT-1247", type: "EVIDENCE_REVIEWED", description: "Evidence EV-003 reviewed and attested", user: "John Smith", timestamp: "2026-01-07 14:32:15", hash: "9a8b7c..." },
  { id: "EVT-1246", type: "EVIDENCE_INGESTED", description: "New evidence uploaded: Firewall Config Export", user: "IT Ops", timestamp: "2026-01-07 14:28:03", hash: "8b9c0d..." },
  { id: "EVT-1245", type: "SOA_GENERATED", description: "SoA v2.1 generated from Scope v1.2", user: "System", timestamp: "2026-01-06 16:45:22", hash: "7c0d1e..." },
  { id: "EVT-1244", type: "DOC_APPROVED", description: "Access Control Procedure v2.1 approved", user: "CISO", timestamp: "2026-01-06 11:20:08", hash: "6d1e2f..." },
  { id: "EVT-1243", type: "RISK_UPDATED", description: "Risk R-002 treatment plan updated", user: "Security Team", timestamp: "2026-01-05 09:15:44", hash: "5e2f3g..." },
  { id: "EVT-1242", type: "SNAPSHOT_CREATED", description: "Audit snapshot Q4-2025 created", user: "Compliance", timestamp: "2026-01-04 17:00:00", hash: "4f3g4h..." },
  { id: "EVT-1241", type: "AUDITOR_DOWNLOADED", description: "Auditor downloaded Q4-2025 export bundle", user: "External Auditor", timestamp: "2026-01-04 15:30:12", hash: "3g4h5i..." },
];

const typeConfig = {
  EVIDENCE_REVIEWED: { icon: CheckCircle, color: "text-status-verified" },
  EVIDENCE_INGESTED: { icon: Upload, color: "text-blue-500" },
  SOA_GENERATED: { icon: FileText, color: "text-purple-500" },
  DOC_APPROVED: { icon: CheckCircle, color: "text-status-verified" },
  RISK_UPDATED: { icon: Shield, color: "text-orange-500" },
  SNAPSHOT_CREATED: { icon: Activity, color: "text-primary" },
  AUDITOR_DOWNLOADED: { icon: Users, color: "text-cyan-500" },
};

export default function AuditTrail() {
  return (
    <DashboardLayout currentPath="/audit-trail">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Audit Trail</h1>
            <p className="text-muted-foreground">Append-only event ledger with hash-chain integrity</p>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Event Log
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-sm text-muted-foreground">Total Events</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">47</div>
              <p className="text-sm text-muted-foreground">Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-status-verified">✓</div>
              <p className="text-sm text-muted-foreground">Chain Integrity</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">12</div>
              <p className="text-sm text-muted-foreground">Event Types</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search events by type, user, or description..." className="pl-10" />
        </div>

        {/* Event List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Events</CardTitle>
            <CardDescription>All events are immutable with cryptographic hash linking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {events.map((event) => {
                const config = typeConfig[event.type as keyof typeof typeConfig];
                const Icon = config?.icon || Activity;
                return (
                  <div
                    key={event.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-lg bg-muted flex items-center justify-center ${config?.color || ''}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{event.id}</code>
                          <p className="font-medium">{event.description}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          By: {event.user} • {event.timestamp}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="text-xs font-mono text-muted-foreground">{event.hash}</code>
                      <Badge variant="outline">{event.type}</Badge>
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
