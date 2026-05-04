/**
 * Signature pad component.
 *
 * Two modes:
 *   - "draw" — HTML5 canvas; works with mouse, touch, and stylus.
 *   - "type" — input field, displayed in a script-like font.
 *
 * Emits the current signature via onChange:
 *   { type: "drawn",  value: <PNG data URL> }
 *   { type: "typed",  value: <typed name string> }
 *   { type: null }     when empty / cleared
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eraser, Pencil, Type } from "lucide-react";

export type SignatureValue =
  | { type: "drawn"; value: string }
  | { type: "typed"; value: string }
  | { type: null };

type Props = {
  onChange: (sig: SignatureValue) => void;
  /** Pre-fill typed name if the parent already typed their name elsewhere */
  defaultTypedName?: string;
};

export default function SignaturePad({ onChange, defaultTypedName = "" }: Props) {
  const [mode, setMode] = useState<"draw" | "type">("draw");
  const [typedValue, setTypedValue] = useState(defaultTypedName);
  const [hasDrawn, setHasDrawn] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  // Initialize the canvas at the right pixel ratio whenever it mounts or resizes
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      const cssWidth = rect.width;
      const cssHeight = 160;
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#0a1f3d";
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [mode]);

  // Drawing handlers
  const getPoint = (e: PointerEvent | React.PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startStroke = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);
    isDrawingRef.current = true;
    const pt = getPoint(e);
    lastPointRef.current = pt;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 1, 0, Math.PI * 2);
      ctx.fillStyle = "#0a1f3d";
      ctx.fill();
    }
  };

  const continueStroke = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pt = getPoint(e);
    const last = lastPointRef.current;
    if (last) {
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
    }
    lastPointRef.current = pt;
  };

  const endStroke = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    lastPointRef.current = null;
    const canvas = canvasRef.current;
    if (canvas && canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }

    setHasDrawn(true);
    if (canvasRef.current) {
      const dataUrl = canvasRef.current.toDataURL("image/png");
      onChange({ type: "drawn", value: dataUrl });
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    ctx.scale(dpr, dpr);
    setHasDrawn(false);
    onChange({ type: null });
  };

  const handleTypedChange = (val: string) => {
    setTypedValue(val);
    if (val.trim()) {
      onChange({ type: "typed", value: val.trim() });
    } else {
      onChange({ type: null });
    }
  };

  const switchMode = (newMode: "draw" | "type") => {
    if (newMode === mode) return;
    // Clear any previous signature when switching modes
    if (mode === "draw") {
      clearCanvas();
    } else {
      setTypedValue("");
      onChange({ type: null });
    }
    setMode(newMode);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant={mode === "draw" ? "default" : "outline"}
          size="sm"
          onClick={() => switchMode("draw")}
        >
          <Pencil className="h-4 w-4 mr-1.5" />
          Draw
        </Button>
        <Button
          type="button"
          variant={mode === "type" ? "default" : "outline"}
          size="sm"
          onClick={() => switchMode("type")}
        >
          <Type className="h-4 w-4 mr-1.5" />
          Type
        </Button>
        {mode === "draw" && hasDrawn && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearCanvas}
            className="ml-auto text-muted-foreground"
          >
            <Eraser className="h-4 w-4 mr-1.5" />
            Clear
          </Button>
        )}
      </div>

      {mode === "draw" ? (
        <div
          ref={containerRef}
          className="relative rounded-md border-2 border-amber-300 bg-amber-50/40"
        >
          <canvas
            ref={canvasRef}
            onPointerDown={startStroke}
            onPointerMove={continueStroke}
            onPointerUp={endStroke}
            onPointerLeave={endStroke}
            onPointerCancel={endStroke}
            className="block touch-none cursor-crosshair"
            style={{ touchAction: "none" }}
          />
          {!hasDrawn && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-muted-foreground/60 italic">
              Sign here using your mouse, finger, or stylus
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-1">
          <Input
            type="text"
            value={typedValue}
            onChange={(e) => handleTypedChange(e.target.value)}
            placeholder="Type your full name as your signature"
            className="h-14 border-2 border-amber-300 bg-amber-50/40 text-2xl italic"
            style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}
            autoComplete="off"
          />
          <p className="text-xs text-muted-foreground">
            Your typed name will be displayed in a signature-style font on the
            completed form.
          </p>
        </div>
      )}
    </div>
  );
}
