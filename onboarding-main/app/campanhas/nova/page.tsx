'use client';

import { useState } from 'react';

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function IconGrid() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function IconFlag() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

function IconLogOut() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconUpload() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconSearchSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NovaCampanhaPage() {
  const [instructionsOpen, setInstructionsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'instrucoes' | 'exemplo'>('instrucoes');

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'var(--font-sans, system-ui, sans-serif)', background: 'var(--background)' }}>

      {/* ── Sidebar ── */}
      <aside style={{
        width: 190,
        minWidth: 190,
        background: 'var(--surface-dark)',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 0',
        gap: 0,
      }}>
        {/* Logo */}
        <div style={{ padding: '0 16px 24px' }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: 'var(--emerald-600)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 18,
          }}>
            F
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '0 8px' }}>
          <p style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--navy-600)',
            padding: '0 8px',
            marginBottom: 8,
            textTransform: 'uppercase',
          }}>
            Principal
          </p>

          {[
            { label: 'Painel', icon: <IconGrid />, active: false },
            { label: 'Empresas', icon: <IconBuilding />, active: false },
            { label: 'Campanhas', icon: <IconFlag />, active: true },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '9px 10px',
                borderRadius: 8,
                marginBottom: 2,
                cursor: 'pointer',
                background: item.active ? 'var(--navy-800)' : 'transparent',
                color: item.active ? '#fff' : 'var(--navy-500)',
                fontSize: 14,
                fontWeight: item.active ? 500 : 400,
                transition: 'background var(--duration-fast)',
              }}
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </nav>

        {/* Bottom actions */}
        <div style={{ padding: '0 8px' }}>
          {[
            { label: 'Sair', icon: <IconLogOut /> },
            { label: 'Recolher', icon: <IconChevronLeft /> },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '9px 10px',
                borderRadius: 8,
                cursor: 'pointer',
                color: 'var(--navy-500)',
                fontSize: 14,
                marginBottom: 2,
              }}
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </aside>

      {/* ── Main ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Top header bar */}
        <header style={{
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          padding: '12px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 56,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
              Nova Campanha
            </h1>
            <span style={{
              fontSize: 11,
              fontWeight: 500,
              padding: '2px 10px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-secondary)',
              letterSpacing: '0.02em',
            }}>
              Rascunho
            </span>
          </div>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 14,
            color: 'var(--text-secondary)',
            fontWeight: 500,
          }}>
            Salvar e sair
          </button>
        </header>

        {/* Content area */}
        <main style={{
          flex: 1,
          overflow: 'auto',
          background: 'var(--surface-subtle)',
          padding: '32px',
        }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>

            {/* Breadcrumb */}
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 24,
              fontSize: 13,
              color: 'var(--text-muted)',
            }}>
              <span style={{ cursor: 'pointer' }}>Campanhas</span>
              <IconChevronRight />
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Nova Campanha</span>
            </nav>

            {/* Stepper */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 36,
            }}>
              {/* Step 1 */}
              <StepItem number={1} label="PARTICIPANTES" active />
              {/* Line */}
              <div style={{ flex: 1, height: 1, background: 'var(--border-strong)', margin: '0 4px' }} />
              {/* Step 2 */}
              <StepItem number={2} label="DURAÇÃO" active={false} />
              {/* Line */}
              <div style={{ flex: 1, height: 1, background: 'var(--border-strong)', margin: '0 4px' }} />
              {/* Step 3 */}
              <StepItem number={3} label="REVISÃO" active={false} />
            </div>

            {/* Section title */}
            <h2 style={{
              fontSize: 22,
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: '0 0 20px',
            }}>
              Enviar base de participantes
            </h2>

            {/* Instructions banner */}
            {instructionsOpen && (
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '20px 24px',
                marginBottom: 24,
                position: 'relative',
              }}>
                <button
                  onClick={() => setInstructionsOpen(false)}
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                  }}
                >
                  FECHAR <IconX />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ color: 'var(--info)' }}><IconInfo /></span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>
                    Instruções da Etapa
                  </span>
                </div>

                <p style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 600, marginBottom: 8 }}>
                  Nesta etapa, você envia o arquivo que define:
                </p>
                <ul style={{ margin: '0 0 16px', paddingLeft: 20, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <li>quem poderá responder à campanha</li>
                  <li>como os colaboradores serão organizados nos resultados por grupo</li>
                </ul>

                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '16px 0' }} />

                <p style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 700, marginBottom: 8 }}>
                  Regras do Arquivo
                </p>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <li>O arquivo deve estar no formato .CSV.</li>
                  <li>A primeira linha deve ser idêntica ao exemplo disponível abaixo.</li>
                  <li>Grupos com menos de 5 trabalhadores serão sinalizados para reagrupamento, garantindo anonimato (NR-1 e LGPD).</li>
                </ul>
              </div>
            )}

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <TabButton
                icon={<IconInfo />}
                label="Instruções"
                active={activeTab === 'instrucoes'}
                onClick={() => setActiveTab('instrucoes')}
              />
              <TabButton
                icon={<IconSearchSmall />}
                label="Exemplo"
                active={activeTab === 'exemplo'}
                onClick={() => setActiveTab('exemplo')}
              />
            </div>

            {/* Cards row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

              {/* Upload card */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                borderTop: '3px solid var(--navy-700)',
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px', color: 'var(--text-primary)' }}>
                  Upload da Base
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 20px' }}>
                  Selecione o arquivo CSV dos trabalhadores da empresa
                </p>

                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
                  Arquivo da Base
                </label>

                <div style={{
                  border: '2px dashed var(--border-strong)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '40px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  cursor: 'pointer',
                  background: 'var(--surface-subtle)',
                }}>
                  <span style={{ color: 'var(--text-muted)' }}><IconUpload /></span>
                  <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', margin: 0, textAlign: 'center' }}>
                    Arraste e solte ou clique para selecionar
                  </p>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0, textAlign: 'center' }}>
                    Clique aqui para simular o envio da base
                  </p>
                </div>
              </div>

              {/* Validation card */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px', color: 'var(--text-primary)' }}>
                  Leitura e Validação
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 20px' }}>
                  Status do processamento dos dados
                </p>

                {/* Empty state */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 20px',
                  gap: 12,
                }}>
                  <span style={{ color: 'var(--border-strong)' }}><IconSearch /></span>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: 0 }}>
                    Envie o arquivo para leitura
                  </p>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function StepItem({ number, label, active }: { number: number; label: string; active: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        border: `2px solid ${active ? 'var(--navy-700)' : 'var(--border-strong)'}`,
        background: active ? 'var(--navy-700)' : 'transparent',
        color: active ? '#fff' : 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: 14,
        flexShrink: 0,
      }}>
        {number}
      </div>
      <span style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.1em',
        color: active ? 'var(--text-primary)' : 'var(--text-muted)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
    </div>
  );
}

function TabButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 16px',
        borderRadius: 'var(--radius-sm)',
        border: `1px solid ${active ? 'var(--navy-700)' : 'var(--border)'}`,
        background: active ? 'var(--navy-100)' : 'var(--surface)',
        color: active ? 'var(--navy-700)' : 'var(--text-secondary)',
        fontSize: 13,
        fontWeight: 500,
        cursor: 'pointer',
      }}
    >
      {icon}
      {label}
    </button>
  );
}
