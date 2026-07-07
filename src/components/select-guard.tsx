
import { useEffect } from "react";

// App-like behavior: Cmd/Ctrl+A selects text only inside the focused field or
// editable region, not the whole page (which otherwise sweeps a selection over
// everything, including form inputs and their placeholders).
export function SelectGuard() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === "a" || e.key === "A")) {
        const el = document.activeElement as HTMLElement | null;
        const editable =
          !!el &&
          (el.tagName === "INPUT" ||
            el.tagName === "TEXTAREA" ||
            el.isContentEditable);
        if (!editable) e.preventDefault();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return null;
}
