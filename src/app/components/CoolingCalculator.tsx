"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CoolingCalculator: React.FC = () => {
  const [roomSize, setRoomSize] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const calculateTonnage = () => {
    const size = parseFloat(roomSize);
    if (isNaN(size) || size <= 0) {
      setResult("Please enter a valid room size");
      return;
    }

    // Basic calculation: 1 ton per 400-600 sq ft (using 500 as average)
    const tonnage = (size / 500).toFixed(1);
    const btu = (parseFloat(tonnage) * 12000).toLocaleString();
    
    setResult(`Recommended: ${tonnage} Ton (${btu} BTU/hr)`);
  };

  return (
    <div className="glass-morphic rounded-2xl p-6 max-w-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <h3 className="tech-mono text-sm font-semibold text-blue-400">
          COOLING CALCULATOR
        </h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="roomSize" className="text-white/80 text-sm">
            Room Size (sq ft)
          </Label>
          <Input
            id="roomSize"
            type="number"
            placeholder="Enter room size"
            value={roomSize}
            onChange={(e) => setRoomSize(e.target.value)}
            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 mt-1"
          />
        </div>
        
        <Button 
          onClick={calculateTonnage}
          className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold"
        >
          Calculate
        </Button>
        
        {result && (
          <div className="tech-mono text-xs text-center p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="text-white/60 mb-1">SYSTEM RECOMMENDATION</div>
            <div className="text-white font-semibold">{result}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoolingCalculator;