import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {/* <Link
        to="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Customers
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Products
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Settings
      </Link> */}
    </nav>
  );
}
