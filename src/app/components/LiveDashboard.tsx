"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SystemMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: "optimal" | "warning" | "critical";
  trend: "up" | "down" | "stable";
}

const LiveDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetric[]>([
    { id: "temp", name: "Avg Temperature", value: 22.5, unit: "°C", status: "optimal", trend: "stable" },
    { id: "humidity", name: "Humidity Level", value: 45, unit: "%", status: "optimal", trend: "down" },
    { id: "pressure", name: "System Pressure", value: 4.2, unit: "bar", status: "optimal", trend: "up" },
    { id: "efficiency", name: "Energy Efficiency", value: 94.2, unit: "%", status: "optimal", trend: "up" },
    { id: "airflow", name: "Airflow Rate", value: 850, unit: "CFM", status: "optimal", trend: "stable" },
    { id: "power", name: "Power Consumption", value: 12.8, unit: "kW", status: "warning", trend: "up" }
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate real-time data updates
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.value + (Math.random() - 0.5) * 0.2
      })));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal": return "text-green-400";
      case "warning": return "text-yellow-400";
      case "critical": return "text-red-400";
      default: return "text-white";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "optimal": return "bg-green-400/10 border-green-400/20";
      case "warning": return "bg-yellow-400/10 border-yellow-400/20";
      case "critical": return "bg-red-400/10 border-red-400/20";
      default: return "bg-white/5 border-white/10";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return (
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        );
      case "down":
        return (
          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        );
    }
  };

  return (
    <div className="glass-morphic rounded-2xl p-6 border border-white/10">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <h3 className="text-xl font-bold text-white">System Control Center</h3>
          <div className="tech-mono text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
            LIVE
          </div>
        </div>
        <div className="tech-mono text-sm text-white/60">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg border ${getStatusBg(metric.status)}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="tech-mono text-xs text-white/60">{metric.name}</div>
              {getTrendIcon(metric.trend)}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">
                {metric.value.toFixed(1)}
              </span>
              <span className="tech-mono text-sm text-white/60">{metric.unit}</span>
            </div>
            <div className={`tech-mono text-xs mt-1 ${getStatusColor(metric.status)}`}>
              {metric.status.toUpperCase()}
            </div>
          </motion.div>
        ))}
      </div>

      {/* System Alerts */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h8v-2H4v2zM4 11h10V9H4v2z" />
          </svg>
          <span className="tech-mono text-sm text-blue-400 font-semibold">SYSTEM ALERTS</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="flex-1">
              <div className="tech-mono text-xs text-yellow-400">MAINTENANCE DUE</div>
              <div className="text-white/80 text-sm">Filter replacement scheduled for Zone B</div>
            </div>
            <div className="tech-mono text-xs text-white/60">2 days</div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-green-400/10 border border-green-400/20 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="flex-1">
              <div className="tech-mono text-xs text-green-400">OPTIMIZATION</div>
              <div className="text-white/80 text-sm">Energy efficiency improved by 3.2%</div>
            </div>
            <div className="tech-mono text-xs text-white/60">1 hour ago</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex gap-3">
          <button className="flex-1 tech-mono text-xs bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400 py-2 px-4 rounded-lg transition-colors">
            ADJUST TEMP
          </button>
          <button className="flex-1 tech-mono text-xs bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/30 text-orange-400 py-2 px-4 rounded-lg transition-colors">
            SCHEDULE MAINT
          </button>
          <button className="flex-1 tech-mono text-xs bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 text-green-400 py-2 px-4 rounded-lg transition-colors">
            VIEW REPORTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveDashboard;