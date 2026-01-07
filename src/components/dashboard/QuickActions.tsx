import { 
  Upload, 
  FileCheck, 
  Download, 
  Plus, 
  AlertTriangle,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickAction {
  icon: React.ElementType;
  label: string;
  description: string;
  variant: "default" | "outline";
  href: string;
}

const actions: QuickAction[] = [
  {
    icon: Upload,
    label: "Upload Evidence",
    description: "Add new evidence objects",
    variant: "default",
    href: "/evidence/upload"
  },
  {
    icon: FileCheck,
    label: "Generate SoA",
    description: "Create Statement of Applicability",
    variant: "outline",
    href: "/soa/generate"
  },
  {
    icon: Download,
    label: "Export Audit Pack",
    description: "Create snapshot bundle",
    variant: "outline",
    href: "/exports/create"
  },
  {
    icon: Plus,
    label: "New Risk",
    description: "Add to risk register",
    variant: "outline",
    href: "/risks/new"
  },
  {
    icon: AlertTriangle,
    label: "Log Finding",
    description: "Record non-conformity",
    variant: "outline",
    href: "/findings/new"
  },
  {
    icon: Eye,
    label: "Auditor View",
    description: "Preview as auditor",
    variant: "outline",
    href: "/auditor/preview"
  },
];

export function QuickActions() {
  return (
    <div className="bg-card rounded-lg border border-border p-5 shadow-card animate-fade-in">
      <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          
          return (
            <a
              key={action.label}
              href={action.href}
              className="group"
            >
              <Button
                variant={action.variant}
                className="w-full h-auto flex-col gap-2 py-4 px-3 hover:border-primary/30"
              >
                <Icon className="h-5 w-5" />
                <div className="text-center">
                  <p className="text-xs font-medium">{action.label}</p>
                  <p className="text-[10px] text-muted-foreground group-hover:text-muted-foreground/80 mt-0.5 hidden sm:block">
                    {action.description}
                  </p>
                </div>
              </Button>
            </a>
          );
        })}
      </div>
    </div>
  );
}
