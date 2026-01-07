import { Bell, Search, User, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search controls, evidence..." 
            className="w-64 pl-9 bg-secondary border-0 focus-visible:ring-1"
          />
        </div>

        {/* Actions */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-critical text-[10px] font-medium text-critical-foreground flex items-center justify-center">
            3
          </span>
        </Button>
        
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-4.5 w-4.5" />
        </Button>

        {/* User */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
        </Button>
      </div>
    </header>
  );
}
