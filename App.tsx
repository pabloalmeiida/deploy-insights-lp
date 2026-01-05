import React, { useState } from 'react';
import { 
  Zap, 
  Layers, 
  Cpu, 
  Settings, 
  CheckCircle2, 
  XCircle, 
  BarChart3, 
  ShieldCheck,
  Terminal,
  Linkedin,
  Activity,
  ArrowRight,
  Brain,
  FileText,
  MessageSquare,
  Server,
  LineChart,
  Search,
  Database,
  Lightbulb,
  AlertTriangle,
  Code2
} from 'lucide-react';
import { Section } from './components/ui/Section';
import { Button } from './components/ui/Button';
import { AutomationVisual } from './components/visuals/AutomationVisual';
import { MetricsVisual } from './components/visuals/MetricsVisual';
import { Modal } from './components/ui/Modal';
import { CheckoutForm } from './components/forms/CheckoutForm';

export default function App() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState("https://pay.hotmart.com/H103640886H?checkoutMode=10"); // Default to Full
  
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCheckout = (url: string) => {
    setCheckoutUrl(url);
    setIsCheckoutModalOpen(true);
  };

  const FULL_SETUP_LINK = "https://pay.hotmart.com/H103640886H?checkoutMode=10";
  const TEMPLATE_ONLY_LINK = "https://pay.hotmart.com/S103657013P?checkoutMode=10";

  return (
    <div className="min-h-screen font-sans selection:bg-brand-500/30 selection:text-brand-100">
      
      {/* Modal de Checkout */}
      <Modal 
        isOpen={isCheckoutModalOpen} 
        onClose={() => setIsCheckoutModalOpen(false)}
        title="Finalizar Inscrição"
      >
        <CheckoutForm productUrl={checkoutUrl} />
      </Modal>

      {/* Navigation / Header */}
      <nav className="fixed w-full z-50 glass-card border-b border-white/5 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(22,163,74,0.5)]">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Deploy <span className="text-brand-400">Insights</span></span>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" className="px-4 py-2 text-xs h-10 border-brand-500/50 text-white hover:bg-brand-600/20" onClick={scrollToPrice} withIcon={false}>
                ACESSAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (Light/Grid) */}
      <Section className="pt-32 lg:pt-48 grid-bg relative">
        {/* Abstract background element */}
        <div className="absolute top-40 left-[-100px] w-96 h-96 bg-brand-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-300 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>Análise por IA &bull; Decisões em Tempo Real</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Pare de montar relatórios. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-200">Receba decisões prontas</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
              O Deploy Insights não é um dashboard genérico. É uma automação de <strong>Engenharia de Dados</strong> que coleta, processa e entrega análises estratégicas do seu tráfego via IA. Foque na estratégia, não na planilha.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button onClick={scrollToPrice} className="w-full sm:w-auto shadow-brand-500/40">
                QUERO INTELIGÊNCIA DE DADOS
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-slate-400 bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 backdrop-blur-sm w-fit">
              <div className="flex items-center gap-2">
                <Server size={16} className="text-brand-500" />
                <span>Inclui Setup de <strong>VPS + Docker + n8n</strong></span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
             <AutomationVisual />
             {/* Floating Badge */}
             <div className="absolute top-10 right-0 lg:-right-10 animate-float-delayed glass-card p-3 rounded-lg border-l-4 border-brand-500 shadow-2xl hidden sm:block">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-brand-500/20 rounded-md text-brand-400">
                      <Lightbulb size={20} />
                   </div>
                   <div>
                      <div className="text-[10px] text-slate-400 uppercase">Insight Gerado</div>
                      <div className="font-bold text-white text-sm">Otimização Sugerida</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section (Darker) */}
      <Section darker id="benefits">
        <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Além do Dashboard Comum</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A maioria dos relatórios só mostra o passado. O Deploy Insights usa IA para te mostrar onde está o lucro.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 space-y-6">
             {/* Visual Break Component */}
             <div className="glass-card p-6 rounded-2xl border border-brand-500/20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <LineChart className="text-brand-500" />
                   Análise de Performance
                </h3>
                <p className="text-slate-400 text-sm mb-6">Métricas consolidadas e interpretadas automaticamente pela IA.</p>
                <div className="flex justify-center">
                   <MetricsVisual />
                </div>
             </div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Análise via IA",
                desc: "O sistema lê seus dados e diz em linguagem simples: o que está funcionando, o que pausar e onde escalar."
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Envio Multi-Canal",
                desc: "Receba o resumo do dia no seu WhatsApp, Slack ou E-mail. A informação chega onde você está."
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Setup Completo",
                desc: "Eu não te entrego um login. Eu configuro VPS, Docker Swarm, Portainer e n8n na sua infraestrutura."
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "Granularidade Total",
                desc: "Dados consolidados de Campanhas, Conjuntos e Anúncios com histórico de variações ao longo do tempo."
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Sem Custo de Ferramenta",
                desc: "Fuja das mensalidades de Supermetrics ou Dashboards caros. A estrutura é sua, o código é seu."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Decisão Rápida",
                desc: "Elimine o desgaste cognitivo de olhar para colunas infinitas. Tenha clareza imediata para agir."
              }
            ].map((benefit, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:border-brand-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-brand-400 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-lg group-hover:shadow-brand-500/25">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="secondary" onClick={scrollToPrice}>
            QUERO DADOS ESTRATÉGICOS
          </Button>
        </div>
      </Section>

      {/* Technical Delivery Section (Light/Default) - Contrast against Benefits */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Não é só uma planilha. É Infraestrutura.</h2>
          <p className="text-slate-400">Implementação profissional de Engenharia de Dados.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
           <div className="glass-card p-6 rounded-xl border-t-2 border-brand-500">
              <div className="text-brand-400 mb-4"><Server size={32} /></div>
              <h3 className="text-lg font-bold text-white mb-2">Servidor VPS</h3>
              <p className="text-slate-400 text-sm">Configuração segura e otimizada do seu próprio servidor virtual para rodar as automações 24/7.</p>
           </div>
           <div className="glass-card p-6 rounded-xl border-t-2 border-brand-500">
              <div className="text-brand-400 mb-4"><Layers size={32} /></div>
              <h3 className="text-lg font-bold text-white mb-2">Docker Swarm + Portainer</h3>
              <p className="text-slate-400 text-sm">Orquestração de containers profissional para garantir estabilidade e facilidade de gestão.</p>
           </div>
           <div className="glass-card p-6 rounded-xl border-t-2 border-brand-500">
              <div className="text-brand-400 mb-4"><Cpu size={32} /></div>
              <h3 className="text-lg font-bold text-white mb-2">n8n Self-Hosted</h3>
              <p className="text-slate-400 text-sm">A ferramenta de workflow mais poderosa do mundo, instalada sem limites de execução.</p>
           </div>
        </div>
      </Section>

      {/* Comparison Section (Darker) - Contrast against Tech Delivery */}
      <Section darker>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Positive Side */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-colors rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
               <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-sm">
                 <CheckCircle2 size={18} />
               </span>
               Perfeito para quem:
             </h3>
             <ul className="space-y-4">
               {[
                 "Gerencia múltiplas contas e precisa de visão unificada",
                 "Quer escalar clientes sem aumentar equipe",
                 "Precisa reportar resultados de forma profissional",
                 "Quer decisões baseadas em dados, não em 'achismo'"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-slate-300">
                   <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
          </div>

          {/* Negative Side */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 relative opacity-60 hover:opacity-100 transition-opacity">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
               <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm">
                 <XCircle size={18} />
               </span>
               Não é para você se:
             </h3>
             <ul className="space-y-4">
               {[
                 "Está satisfeito com relatórios manuais e lentos",
                 "Não vê valor em análise de dados para escala",
                 "Prefere ferramentas caras com mensalidade",
                 "Não tem interesse em profissionalizar a gestão"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-slate-400">
                   <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" onClick={scrollToPrice}>
            QUERO VERIFICAR DISPONIBILIDADE
          </Button>
        </div>
      </Section>

      {/* Pricing Section (Light/Default) - Contrast against Comparison */}
      <Section id="pricing" className="py-24 relative overflow-hidden">
         {/* Background glow for pricing - Green */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
           
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Invista na Inteligência do seu Negócio</h2>
             <p className="text-slate-400">Escolha o nível de implementação ideal para o seu momento.</p>
           </div>

           {/* Price Anchoring Cards */}
           <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto justify-center">
              
              {/* Card 1: Analista de Dados */}
              <div className="glass-card p-6 rounded-xl border border-red-900/30 bg-red-950/10 hover:border-red-500/50 hover:bg-red-900/20 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-red-900/20">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-red-900/20 rounded text-red-500">
                     <BarChart3 size={24} />
                   </div>
                   <h3 className="font-bold text-slate-300">Analista de Dados / B.I.</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-400 mb-6">
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Salário CLT + Encargos</li>
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Curva de aprendizado</li>
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Custo Mensal Recorrente</li>
                </ul>
                <div className="border-t border-red-900/20 pt-4">
                   <div className="text-xs text-red-400 font-medium uppercase">Custo Médio</div>
                   <div className="text-xl font-bold text-white">R$ 3.500 <span className="text-sm font-normal text-slate-500">/mês</span></div>
                </div>
              </div>

              {/* Card 2: Ferramentas SaaS */}
              <div className="glass-card p-6 rounded-xl border border-red-900/30 bg-red-950/10 hover:border-red-500/50 hover:bg-red-900/20 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-red-900/20">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-red-900/20 rounded text-red-500">
                     <Layers size={24} />
                   </div>
                   <h3 className="font-bold text-slate-300">SaaS de Relatórios</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-400 mb-6">
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Mensalidade em Dólar</li>
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Limite de Contas/Connectors</li>
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Sem Análise por IA Personalizada</li>
                </ul>
                <div className="border-t border-red-900/20 pt-4">
                   <div className="text-xs text-red-400 font-medium uppercase">Custo Médio</div>
                   <div className="text-xl font-bold text-white">R$ 497 <span className="text-sm font-normal text-slate-500">/mês</span></div>
                </div>
              </div>

           </div>
           
           {/* Pricing Offers Grid */}
           <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
             
             {/* OFFER 1: Template Only (Disadvantageous) */}
             <div className="relative flex flex-col h-full bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-slate-500 transition-colors duration-300">
                <div className="text-xs font-mono text-slate-500 mb-4">&lt;&gt; APENAS O TEMPLATE</div>
                <h3 className="text-2xl font-bold text-white mb-2">Faça Você Mesmo</h3>
                <p className="text-slate-400 text-sm mb-6">Ideal apenas para programadores experientes que já possuem infraestrutura.</p>
                
                <div className="mb-6">
                   <div className="text-3xl font-bold text-white">R$ 97,00 <span className="text-sm font-normal text-slate-500">à vista</span></div>
                   <div className="text-slate-500 text-sm">ou 12x de R$ 10,03</div>
                </div>

                <div className="bg-brand-900/10 border border-brand-500/30 rounded-lg p-3 mb-6 flex gap-3 items-start">
                  <AlertTriangle className="text-brand-500 shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-brand-200">
                    <strong className="text-brand-400 block mb-1">Atenção:</strong>
                    Requer conhecimento técnico avançado em Docker, Linux, Redes e APIs.
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                   <div className="flex items-start gap-3 text-slate-500 text-sm">
                     <Server size={14} className="mt-1 shrink-0" />
                     <span>Setup Manual de VPS & Portainer</span>
                   </div>
                   <div className="flex items-start gap-3 text-slate-500 text-sm">
                     <Settings size={14} className="mt-1 shrink-0" />
                     <span>Instalação manual do n8n (Self-hosted)</span>
                   </div>
                   <div className="flex items-start gap-3 text-slate-500 text-sm">
                     <Terminal size={14} className="mt-1 shrink-0" />
                     <span>Clonar Repo, Criar Imagem Docker & Deploy</span>
                   </div>
                   <div className="flex items-start gap-3 text-slate-500 text-sm">
                     <Code2 size={14} className="mt-1 shrink-0" />
                     <span>Ajustar Webhooks e Código para Multi-tenancy</span>
                   </div>
                </div>

                <Button variant="outline" fullWidth onClick={() => openCheckout(TEMPLATE_ONLY_LINK)} className="mt-auto border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-white">
                  COMPRAR SÓ O TEMPLATE
                </Button>
             </div>

             {/* OFFER 2: Full Setup (Recommended) */}
             <div className="relative flex flex-col h-full bg-slate-950 border-2 border-brand-500 rounded-2xl p-8 shadow-[0_0_40px_-10px_rgba(22,163,74,0.3)]">
                {/* Badge */}
                <div className="absolute -top-4 right-8 bg-brand-500 text-black font-bold text-xs px-3 py-1 rounded shadow-lg uppercase tracking-wider">
                  Recomendado
                </div>

                <div className="text-xs font-mono text-brand-400 mb-4 flex items-center gap-2">
                   <Zap size={14} /> SOLUÇÃO COMPLETA
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Instalação + Vitalício</h3>
                <p className="text-slate-400 text-sm mb-6">Eu entro no seu servidor e deixo tudo rodando. Você só usa.</p>
                
                <div className="mb-6">
                   <div className="flex items-baseline gap-2">
                     <span className="text-slate-400">12x de</span>
                     <span className="text-5xl font-extrabold text-white tracking-tight">206,54</span>
                   </div>
                   <div className="text-slate-500 text-sm mt-1">ou R$ 1.497,00 à vista</div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                   {[
                     "Instalação Completa do n8n & Docker",
                     "Automação de Relatórios IA",
                     "Integração WhatsApp/Slack/Email",
                     "Acesso Vitalício ao Código Fonte",
                     "Zero Mensalidades",
                     "Bônus: Aula de Operação + Suporte"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-slate-200">
                       <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                       <span className="font-medium text-sm">{item}</span>
                     </div>
                   ))}
                </div>

                <Button fullWidth onClick={() => openCheckout(FULL_SETUP_LINK)} className="mt-auto py-4 text-base bg-gradient-to-r from-brand-600 to-emerald-500 hover:to-brand-500 shadow-brand-500/25">
                  GARANTIR MINHA IMPLEMENTAÇÃO
                </Button>
                
                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-slate-800">
                   <div className="flex items-center gap-2 text-[10px] text-slate-500">
                      <ShieldCheck size={12} className="text-brand-500" />
                      Compra Segura
                   </div>
                   <div className="flex items-center gap-2 text-[10px] text-slate-500">
                      <CheckCircle2 size={12} className="text-brand-500" />
                      Garantia de 7 Dias
                   </div>
                </div>
             </div>

           </div>
         </div>
      </Section>

      {/* Bio Section (Darker) - Contrast against Pricing */}
      <Section darker>
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-600/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="relative shrink-0">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl bg-slate-800 border-4 border-slate-700 shrink-0 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                  <img 
                    src="https://i.ibb.co/6J8ZB6vT/file.jpg" 
                    alt="Pablo Almeida"
                    loading="lazy"
                    width="224"
                    height="224" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-600 text-white p-3 rounded-xl border-4 border-slate-900 shadow-xl">
                  <Terminal size={24} />
                </div>
             </div>
             
             <div className="flex-1 text-left w-full">
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Quem vai implementar?</h2>
               <div className="text-brand-400 font-bold uppercase tracking-wide text-sm mb-6">Pablo Almeida &bull; Automation Engineer</div>
               <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                 Sou Automation Engineer especialista em Inteligência de Dados. Desenvolvi o Deploy Insights para eliminar o trabalho braçal de reporting e dar aos gestores o que eles realmente precisam: <strong>direcionamento estratégico</strong>.
                 <br /><br />
                 Minha missão é garantir que você tenha uma infraestrutura de dados profissional, rodando 100% sob seu controle.
               </p>
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-start">
                 <Button variant="outline" onClick={scrollToPrice} withIcon={false}>
                   QUERO TE CONTRATAR
                 </Button>
                 <a href="https://www.linkedin.com/in/opabloalmeida" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2">
                   <Linkedin className="w-5 h-5 text-brand-500" />
                   <span>/opabloalmeida</span>
                 </a>
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* FAQ (Light/Default) - Contrast against Bio */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "O que preciso para rodar?", a: "Apenas uma VPS (servidor virtual) simples. O custo médio é de R$ 40 a R$ 60 mensais. Eu configuro tudo para você." },
              { q: "Quais plataformas integra?", a: "Nativamente Meta Ads e Google Ads. Os dados são processados e podem ser enviados para Slack, WhatsApp, E-mail ou Planilhas." },
              { q: "É um curso ou serviço?", a: "É um serviço de implementação 'Done-For-You'. Eu entro, instalo, configuro e te entrego rodando. Você também recebe uma aula de como operar." },
              { q: "A IA realmente analisa os dados?", a: "Sim. A automação processa as métricas e usa LLMs (como GPT) para gerar insights textuais sobre o que está performando e sugerir ações." },
              { q: "Tenho acesso ao código?", a: "100%. O n8n é instalado no SEU servidor. Você tem controle total e vitalício sobre a automação." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer group">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                  <span className="text-brand-500 group-hover:scale-110 transition-transform">?</span>
                  {item.q}
                </h3>
                <p className="text-slate-400 pl-6 border-l-2 border-slate-800 group-hover:border-brand-500/30 ml-1 transition-colors">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button onClick={scrollToPrice}>QUERO AUTOMATIZAR MEUS RELATÓRIOS</Button>
          </div>
        </div>
      </Section>

      {/* Footer (Darkest) */}
      <footer className="py-8 bg-slate-950 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} Deploy Insights. Todos os direitos reservados.</p>
        <p className="text-xs mt-2 text-slate-700">Não afiliado ao Meta ou Google.</p>
      </footer>
    </div>
  );
}
