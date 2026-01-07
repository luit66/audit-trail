import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Building2, MapPin, Server, Plus, Edit, FileText } from "lucide-react";

const scopeItems = [
  { type: "Organization", name: "Acme Corporation", description: "Parent organization", icon: Building2 },
  { type: "Location", name: "Amsterdam HQ", description: "Herengracht 123, Amsterdam", icon: MapPin },
  { type: "Location", name: "Berlin Office", description: "Friedrichstraße 45, Berlin", icon: MapPin },
  { type: "System", name: "AWS Cloud Infrastructure", description: "Production workloads", icon: Server },
  { type: "System", name: "GitHub Enterprise", description: "Source code management", icon: Server },
  { type: "System", name: "Okta SSO", description: "Identity provider", icon: Server },
];

export default function Scope() {
  return (
    <DashboardLayout currentPath="/scope">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">ISMS Scope</h1>
            <p className="text-muted-foreground">Define your Information Security Management System boundary</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Export Scope
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>

        {/* Scope Version Info */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Scope Definition v1.2</CardTitle>
                  <CardDescription>Last updated: January 5, 2026</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Active</Badge>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This ISMS scope covers Acme Corporation's cloud-based software development and delivery operations, 
              including all personnel, processes, and systems involved in the design, development, deployment, 
              and maintenance of our SaaS products across EU locations.
            </p>
          </CardContent>
        </Card>

        {/* Scope Items */}
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Scope Items</h2>
          <div className="grid gap-3">
            {scopeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{item.type}</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Exclusions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Exclusions</CardTitle>
            <CardDescription>Items explicitly excluded from the ISMS scope</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Marketing website (static content, no customer data)</li>
              <li>• Third-party SaaS tools used for internal communication</li>
              <li>• Physical security of co-working spaces (delegated to landlord)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
