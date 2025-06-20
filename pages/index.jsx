// Pipe Forming App with Disclaimer Modal Overlay and Restored Styling
"use client";

import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

function IPDisclaimerModal() {
  const [open, setOpen] = useState(true);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/60 z-40" />
        <DialogPrimitive.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 text-white p-6 rounded-xl max-w-md w-full shadow-lg border border-red-500">
          <DialogPrimitive.Title asChild>
            <h2 className="text-xl font-bold mb-4">Intellectual Property Notice</h2>
          </DialogPrimitive.Title>
          <p className="text-sm leading-relaxed text-purple-100">
            This tool was independently created by Robert Benton to aid operations through automation and shared insight.
            It was built using public knowledge and team experience, without any proprietary company documentation.
            <br /><br />
            This is not an official ASWP application.
          </p>
          <DialogPrimitive.Close className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Close
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default function App() {
  const [pipeDiameter, setPipeDiameter] = useState(43.75);
  const [sheetWidth, setSheetWidth] = useState(59.449);
  const [wallThickness, setWallThickness] = useState(0.198);

  const helixAngle = 90 - (Math.asin(sheetWidth / (Math.PI * pipeDiameter)) * (180 / Math.PI));
  const holdDown = pipeDiameter * 25.4;
  const trager2 = 175 + (pipeDiameter - 43.75) * 5;
  const topRollGauge = pipeDiameter * 0.75;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 relative">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-300">Pipe Forming App</h1>

      <div className="grid gap-6 max-w-md mx-auto">
        {/* Pipe Diameter */}
        <div className="flex flex-col items-center">
          <label className="block mb-2 text-sm text-purple-200">Pipe Diameter (inches)</label>
          <div className="flex gap-2">
            <button onClick={() => setPipeDiameter(prev => parseFloat((prev - 1).toFixed(3)))} className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-3 rounded text-xl">–</button>
            <input type="text" inputMode="decimal" value={pipeDiameter} onChange={(e) => setPipeDiameter(parseFloat(e.target.value))} className="w-32 text-center bg-gray-800 border border-gray-700 rounded px-3 py-2 appearance-none" />
            <button onClick={() => setPipeDiameter(prev => parseFloat((prev + 1).toFixed(3)))} className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-3 rounded text-xl">+</button>
          </div>
        </div>

        {/* Sheet Width */}
        <div className="flex flex-col items-center">
          <label className="block mb-2 text-sm text-purple-200">Sheet Width (inches)</label>
          <div className="flex gap-2">
            <button onClick={() => setSheetWidth(prev => parseFloat((prev - 0.01).toFixed(3)))} className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-3 rounded text-xl">–</button>
            <input type="text" inputMode="decimal" value={sheetWidth} onChange={(e) => setSheetWidth(parseFloat(e.target.value))} className="w-32 text-center bg-gray-800 border border-gray-700 rounded px-3 py-2 appearance-none" />
            <button onClick={() => setSheetWidth(prev => parseFloat((prev + 0.01).toFixed(3)))} className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-3 rounded text-xl">+</button>
          </div>
        </div>

        {/* Wall Thickness */}
        <div className="flex flex-col items-center">
          <label className="block mb-2 text-sm text-purple-200">Wall Thickness (inches)</label>
          <div className="flex gap-2">
            <button onClick={() => setWallThickness(prev => parseFloat((prev - 0.001).toFixed(3)))} className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-3 rounded text-xl">–</button>
            <input type="text" inputMode="decimal" value={wallThickness} onChange={(e) => setWallThickness(parseFloat(e.target.value))} className="w-32 text-center bg-gray-800 border border-gray-700 rounded px-3 py-2 appearance-none" />
            <button onClick={() => setWallThickness(prev => parseFloat((prev + 0.001).toFixed(3)))} className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-3 rounded text-xl">+</button>
          </div>
        </div>

        {/* Outputs */}
        <div className="text-center mt-6">
          <label className="block mb-2 text-sm text-purple-200">Helix Angle (°)</label>
          <div className="p-3 bg-gray-700 rounded-lg font-mono text-lg">{helixAngle.toFixed(2)}°</div>
        </div>
        <div className="text-center">
          <label className="block mb-2 text-sm text-purple-200">Hold Down (mm)</label>
          <div className="p-3 bg-gray-700 rounded-lg font-mono text-lg">{holdDown.toFixed(2)} mm</div>
        </div>
        <div className="text-center">
          <label className="block mb-2 text-sm text-purple-200">Trager 2 (mm)</label>
          <div className="p-3 bg-gray-700 rounded-lg font-mono text-lg">{trager2.toFixed(1)} mm</div>
        </div>
        <div className="text-center">
          <label className="block mb-2 text-sm text-purple-200">Top Roll Gauge (mm)</label>
          <div className="p-3 bg-gray-700 rounded-lg font-mono text-lg">{topRollGauge.toFixed(2)} mm</div>
        </div>
      </div>

      <IPDisclaimerModal />
    </div>
  );
}