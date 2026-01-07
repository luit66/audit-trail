import { 
  Shield, 
  Target, 
  AlertTriangle, 
  FileCheck, 
  FolderOpen, 
  Users, 
  Activity,
  Settings,
  LayoutDashboard,
  FileText,
  Download,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  badge?: string | number;
  children?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Target, label: "ISMS Scope", href: "/scope" },
  { 
    icon: Shield, 
    label: "Controls", 
    href: "/controls",
    badge: 114,
    children: [
      { label: "Control Library", href: "/controls" },
      { label: "Control Mapping", href: "/controls/mapping" },
    ]
  },
  { 
    icon: AlertTriangle, 
    label: "Risk Register", 
    href: "/risks",
    badge: 12,
    children: [
      { label: "Risk Assessment", href: "/risks" },
      { label: "Treatment Plans", href: "/risks/treatment" },
    ]
  },
  { icon: FileCheck, label: "Statement of Applicability", href: "/soa" },
  { 
    icon: FolderOpen, 
    label: "Evidence", 
    href: "/evidence",
    badge: 48,
  },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Activity, label: "Audit Trail", href: "/audit-trail" },
  { icon: Download, label: "Exports", href: "/exports" },
  { icon: Users, label: "Auditor Portal", href: "/auditor" },
];

interface SidebarProps {
  currentPath?: string;
}

export function Sidebar({ currentPath = "/" }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label) 
        : [...prev, label]
    );
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-sidebar-border">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary">
          <Shield className="h-5 w-5 text-sidebar-primary-foreground" />
        </div>
        <div>
          <h1 className="text-base font-semibold text-sidebar-foreground">GCC</h1>
          <p className="text-xs text-sidebar-muted">Compliance Copilot</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.href || 
              item.children?.some(c => currentPath === c.href);
            const isExpanded = expandedItems.includes(item.label);
            const hasChildren = item.children && item.children.length > 0;

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (hasChildren) {
                      e.preventDefault();
                      toggleExpanded(item.label);
                    }
                  }}
                  className={cn(
                    "nav-item group",
                    isActive && "active"
                  )}
                >
                  <Icon className="h-4.5 w-4.5 shrink-0" />
                  <span className="flex-1 text-sm">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-sidebar-accent px-2 py-0.5 rounded-full text-sidebar-foreground/80">
                      {item.badge}
                    </span>
                  )}
                  {hasChildren && (
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )} />
                  )}
                </a>
                
                {/* Children */}
                {hasChildren && isExpanded && (
                  <ul className="mt-1 ml-7 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          className={cn(
                            "block px-3 py-2 text-sm rounded-md text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
                            currentPath === child.href && "text-sidebar-primary bg-sidebar-accent"
                          )}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-3">
        <a
          href="/settings"
          className="nav-item"
        >
          <Settings className="h-4.5 w-4.5" />
          <span className="text-sm">Settings</span>
        </a>
        
        {/* Tenant Info */}
        <div className="mt-3 px-3 py-2 bg-sidebar-accent rounded-lg">
          <p className="text-xs text-sidebar-muted">Current Tenant</p>
          <p className="text-sm font-medium text-sidebar-foreground truncate">Acme Corporation</p>
        </div>
      </div>
    </aside>
  );
}
