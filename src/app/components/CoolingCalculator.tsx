"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CoolingCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    roomSize: "",
    roomType: "bedroom",
    insulation: "average",
    sunlight: "moderate"
  });
  const [result, setResult] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState(false);

  const roomTypes = [
    { value: "bedroom", label: "Bedroom", multiplier: 1.0 },
    { value: "living", label: "Living Room", multiplier: 1.2 },
    { value: "kitchen", label: "Kitchen", multiplier: 1.5 },
    { value: "office", label: "Office", multiplier: 1.1 },
    { value: "server", label: "Server Room", multiplier: 2.0 }
  ];

  const insulationLevels = [
    { value: "poor", label: "Poor", multiplier: 1.3 },
    { value: "average", label: "Average", multiplier: 1.0 },
    { value: "good", label: "Good", multiplier: 0.8 },
    { value: "excellent", label: "Excellent", multiplier: 0.7 }
  ];

  const sunlightLevels = [
    { value: "minimal", label: "Minimal", multiplier: 0.9 },
    { value: "moderate", label: "Moderate", multiplier: 1.0 },
    { value: "high", label: "High", multiplier: 1.2 },
    { value: "extreme", label: "Extreme", multiplier: 1.4 }
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (result) setResult(""); // Clear result when inputs change
  };

  const calculateTonnage = () => {
    const size = parseFloat(formData.roomSize);
    if (isNaN(size) || size <= 0) {
      setResult("Please enter a valid room size");
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay for better UX
    setTimeout(() => {
      // Get multipliers
      const roomMultiplier = roomTypes.find(r => r.value === formData.roomType)?.multiplier || 1.0;
      const insulationMultiplier = insulationLevels.find(i => i.value === formData.insulation)?.multiplier || 1.0;
      const sunlightMultiplier = sunlightLevels.find(s => s.value === formData.sunlight)?.multiplier || 1.0;

      // Base calculation: 1 ton per 400-600 sq ft (using 500 as base)
      const baseTonnage = size / 500;
      const adjustedTonnage = baseTonnage * roomMultiplier * insulationMultiplier * sunlightMultiplier;
      
      // Round to nearest 0.5 ton
      const finalTonnage = Math.round(adjustedTonnage * 2) / 2;
      const btu = (finalTonnage * 12000).toLocaleString();
      
      setResult(`${finalTonnage} Ton (${btu} BTU/hr)`);
      setIsCalculating(false);
    }, 1000);
  };

  return (
    <div className="glass-morphic rounded-2xl p-6 max-w-sm border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <h3 className="tech-mono text-sm font-semibold text-blue-400">
          COOLING CALCULATOR
        </h3>
      </div>
      
      <div className="space-y-4">
        {/* Room Size Input */}
        <div className="form-group">
          <div className="relative">
            <input
              type="number"
              className="form-input text-sm"
              placeholder=" "
              value={formData.roomSize}
              onChange={(e) => handleInputChange("roomSize", e.target.value)}
              required
            />
            <label className="form-label text-sm">Room Size (sq ft)</label>
          </div>
        </div>

        {/* Room Type Select */}
        <div className="form-group">
          <div className="relative">
            <select
              className="form-select text-sm"
              value={formData.roomType}
              onChange={(e) => handleInputChange("roomType", e.target.value)}
            >
              {roomTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <label className="form-label text-sm">Room Type</label>
            <div className="select-arrow">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Insulation Level */}
        <div className="form-group">
          <div className="relative">
            <select
              className="form-select text-sm"
              value={formData.insulation}
              onChange={(e) => handleInputChange("insulation", e.target.value)}
            >
              {insulationLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
            <label className="form-label text-sm">Insulation</label>
            <div className="select-arrow">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sunlight Exposure */}
        <div className="form-group">
          <div className="relative">
            <select
              className="form-select text-sm"
              value={formData.sunlight}
              onChange={(e) => handleInputChange("sunlight", e.target.value)}
            >
              {sunlightLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
            <label className="form-label text-sm">Sunlight Exposure</label>
            <div className="select-arrow">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        <button 
          onClick={calculateTonnage}
          disabled={isCalculating || !formData.roomSize}
          className="form-button w-full text-sm"
        >
          {isCalculating ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Calculating...
            </div>
          ) : (
            "Calculate Tonnage"
          )}
        </button>
        
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="tech-mono text-xs text-center p-4 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-lg border border-white/20"
            >
              <div className="text-white/60 mb-2">RECOMMENDED CAPACITY</div>
              <div className="text-white font-bold text-lg">{result}</div>
              <div className="text-white/50 text-xs mt-2">
                Based on room specifications
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CoolingCalculator;