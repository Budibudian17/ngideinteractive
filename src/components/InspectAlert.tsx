import { AlertTriangle } from "lucide-react";

interface InspectAlertProps {
  show: boolean;
  onClose: () => void;
}

export const InspectAlert = ({ show, onClose }: InspectAlertProps) => {
  if (!show) return null;

  const handleClose = () => {
    onClose();
    // Emit event to re-trigger scroll animations
    window.dispatchEvent(new CustomEvent('inspect-alert-closed'));
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
      onClick={handleClose}
    >
      <div className="bg-background border border-border px-8 py-6 max-w-md text-center" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-center gap-2 font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
          <AlertTriangle className="h-4 w-4" />
          Security Alert
        </div>
        <h3 className="mb-2 font-display text-xl font-bold uppercase text-foreground">
          Access Denied
        </h3>
        <p className="text-sm text-soft leading-relaxed">
          Inspector access is restricted. This content is protected.
        </p>
        <div className="mt-4 font-mono text-[8px] uppercase text-muted-foreground">
          NII // Security Protocol Active
        </div>
      </div>
    </div>
  );
};