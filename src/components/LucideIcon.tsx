import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className, size = 20 }: LucideIconProps) {
  // Dynamically resolve icon from the lucide-react package with fallback
  const IconComponent = (Icons as any)[name] || Icons.Sparkles;
  return <IconComponent className={className} size={size} />;
}
