import { useState, useEffect, type ReactNode } from "react";

export function BelowFold({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);
  return visible ? <>{children}</> : null;
}
