import React from 'react';
import { TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

export const MetricsVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-emerald-400 rounded-2xl blur opacity-30 animate-pulse"></div>
        <div className="relative glass-card rounded-xl p-5 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Daily Report Insight</h4>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                    <span className="text-[10px] text-brand-400 font-mono">IA ACTIVE</span>
                </div>
            </div>
            
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-green-900/30 text-green-400">
                            <TrendingUp size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">Campanha Vencedora</div>
                            <div className="text-sm font-bold text-white">Scale_LAL_1%</div>
                        </div>
                    </div>
                    <span className="text-xs text-green-400 font-medium">ROAS 5.2</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-red-900/30 text-red-400">
                            <AlertTriangle size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">Atenção Necessária</div>
                            <div className="text-sm font-bold text-white">CPA Alto em Cold_Traffic</div>
                        </div>
                    </div>
                    <span className="text-xs text-red-400 font-medium">+45% CPA</span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                     <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-yellow-900/30 text-yellow-400">
                            <Lightbulb size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">Sugestão da IA</div>
                            <div className="text-sm font-bold text-white">Pausar Criativo #04</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};