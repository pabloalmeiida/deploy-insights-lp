import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Lock, Loader2 } from 'lucide-react';

export const CheckoutForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+55', // Pré-populado com DDI do Brasil
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    sck: '',
    src: ''
  });

  // Load URL parameters into state on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    setFormData(prev => ({
      ...prev,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      sck: params.get('sck') || '',
      src: params.get('src') || ''
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // 1. Remove tudo que não for número
      let digits = value.replace(/\D/g, "");

      // 2. Garante o DDI 55
      // Se o usuário tentar apagar tudo, reseta para 55
      if (digits === "" || digits === "5") digits = "55";
      
      // Se por algum motivo o começo não for 55 (colar texto, etc), força o prefixo
      if (!digits.startsWith("55")) {
          digits = "55" + digits;
      }

      // 3. Limita o tamanho: 55 (2) + DDD (2) + 9 dígitos = 13 caracteres numéricos máx
      digits = digits.substring(0, 13);

      // 4. Aplica a formatação visual: +55 (DD) 9XXXX-XXXX
      let formatted = "+" + digits.substring(0, 2); // +55
      
      if (digits.length > 2) {
        formatted += " (" + digits.substring(2, 4); // +55 (DD
      }
      
      if (digits.length > 4) {
        formatted += ") " + digits.substring(4, 9); // +55 (DD) 9XXXX
      }
      
      if (digits.length > 9) {
        formatted += "-" + digits.substring(9, 13); // +55 (DD) 9XXXX-XXXX
      }

      setFormData(prev => ({ ...prev, [name]: formatted }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // --- Captura o momento do envio ---
    const now = new Date();
    
    // Cria o payload específico para o Webhook com os dados extras
    const webhookPayload = {
      ...formData,
      submitted_at: now.toISOString(), // Ex: "2023-10-27T10:00:00.000Z" (Padrão ISO)
      timestamp: now.getTime()         // Ex: 1698400800000 (Numérico/Unix)
    };
    // ----------------------------------

    // --- GTM DataLayer Push ---
    try {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        'event': 'custom_lead_submit',
        'user_data': {
          'name': formData.name,
          'email': formData.email,
          'phone': formData.phone
        },
        'leadName': formData.name,
        'leadEmail': formData.email,
        'leadPhone': formData.phone
      });
    } catch (err) {
      console.error("Erro ao enviar para DataLayer:", err);
    }
    // --------------------------

    try {
      // 1. Send data to Webhook (USANDO O NOVO PAYLOAD)
      await fetch('https://webhook.zenclick.com.br/webhook/deploy-ads-zenclick-pre-checkout-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload) // <--- Alterado aqui
      }).catch(err => console.error("Webhook error (might be CORS, ignoring):", err));
      
      // 2. Construct Hotmart URL
      const baseUrl = "https://pay.hotmart.com/U103642030H";
      const redirectParams = new URLSearchParams();
      
      // Add default Hotmart param
      redirectParams.append('checkoutMode', '10');
      
      // Append captured UTMs and tracking fields
      if (formData.utm_source) redirectParams.append('utm_source', formData.utm_source);
      if (formData.utm_medium) redirectParams.append('utm_medium', formData.utm_medium);
      if (formData.utm_campaign) redirectParams.append('utm_campaign', formData.utm_campaign);
      if (formData.utm_term) redirectParams.append('utm_term', formData.utm_term);
      if (formData.utm_content) redirectParams.append('utm_content', formData.utm_content);
      if (formData.sck) redirectParams.append('sck', formData.sck);
      if (formData.src) redirectParams.append('src', formData.src);
      
      // Pass user info to pre-fill Hotmart checkout if supported by Hotmart params
      redirectParams.append('name', formData.name);
      redirectParams.append('email', formData.email);
      
      // Handle Phone for Hotmart (expects 'phoneac' as DDD + Number, without country code for Brazil)
      let cleanPhone = formData.phone.replace(/\D/g, ''); // Remove formatação (ex: 5511999999999)
      
      // Se começar com 55 (Brasil) e tiver tamanho suficiente, remove o 55 para enviar só DDD+Número
      if (cleanPhone.startsWith('55') && cleanPhone.length > 10) {
        cleanPhone = cleanPhone.substring(2); 
      }
      
      redirectParams.append('phoneac', cleanPhone);
      
      const finalUrl = `${baseUrl}?${redirectParams.toString()}`;
      
      // 3. Redirect
      window.location.href = finalUrl;

    } catch (error) {
      console.error("Error submitting form", error);
      setLoading(false);
      alert("Ocorreu um erro ao processar. Por favor, tente novamente.");
    }
  };

  const inputClasses = "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all";
  const labelClasses = "block text-sm font-medium text-slate-300 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Visible Fields */}
      <div>
        <label htmlFor="name" className={labelClasses}>Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Digite seu nome"
          className={inputClasses}
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>Seu Melhor Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="exemplo@email.com"
          className={inputClasses}
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>WhatsApp / Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="+55 (DD) 99999-9999"
          className={inputClasses}
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      {/* Hidden Fields requested */}
      <input type="hidden" id="utm_source" name="utm_source" value={formData.utm_source} />
      <input type="hidden" id="utm_medium" name="utm_medium" value={formData.utm_medium} />
      <input type="hidden" id="utm_campaign" name="utm_campaign" value={formData.utm_campaign} />
      <input type="hidden" id="utm_term" name="utm_term" value={formData.utm_term} />
      <input type="hidden" id="utm_content" name="utm_content" value={formData.utm_content} />
      <input type="hidden" id="sck" name="sck" value={formData.sck} />
      <input type="hidden" id="src" name="src" value={formData.src} />

      <div className="pt-2">
        <Button fullWidth type="submit" disabled={loading} className="flex justify-center items-center gap-2">
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              Processando...
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              IR PARA PAGAMENTO SEGURO
            </>
          )}
        </Button>
      </div>
      
      <p className="text-center text-xs text-slate-500 mt-2">
        Seus dados estão seguros. Você será redirecionado para o checkout oficial.
      </p>
    </form>
  );
};