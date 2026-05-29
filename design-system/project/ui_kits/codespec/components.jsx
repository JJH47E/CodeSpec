// CodeSpec UI kit — core components (buttons, inputs, select, card, menu, badges).
// Cosmetic recreations meant for prototyping; depends on Icon.jsx + components.css.
const { useState, useRef, useEffect } = React;

/* ---------- Button ---------- */
function Button({ variant = 'secondary', size, icon, loading, children, disabled, ...rest }) {
  const cls = ['btn', 'btn-' + variant, size && 'btn-' + size, !children && 'btn-icon']
    .filter(Boolean).join(' ');
  return (
    <button className={cls} disabled={disabled || loading} {...rest}>
      {loading
        ? <Spinner size={size === 'sm' ? 14 : 15} tone="current" className="ic" />
        : icon && <Icon name={icon} size={size === 'sm' ? 14 : 15} className="ic" />}
      {children}
    </button>
  );
}

/* ---------- Spinner ---------- */
function Spinner({ size = 16, tone = 'accent', className, style }) {
  const color = tone === 'current' ? 'inherit' : 'var(--accent-fg)';
  return (
    <svg className={'spinner' + (className ? ' ' + className : '')} width={size} height={size}
         viewBox="0 0 24 24" fill="none" style={{ color, ...style }}>
      <circle className="sp-track" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" />
      <circle className="sp-arc" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" strokeDasharray="15 60" />
    </svg>
  );
}

/* ---------- Field + Input ---------- */
function Field({ label, help, error, children }) {
  return (
    <label className="field">
      {label && <span className="field-label">{label}</span>}
      {children}
      {help && <span className={'field-help' + (error ? ' error' : '')}>{help}</span>}
    </label>
  );
}
function Input({ error, mono, ...rest }) {
  return <input className={'input' + (error ? ' error' : '') + (mono ? ' mono' : '')} {...rest} />;
}
function SearchInput({ ...rest }) {
  return (
    <div className="input-group">
      <Icon name="magnifier" size={15} className="lead-ic" />
      <input className="input" {...rest} />
    </div>
  );
}

/* ---------- Select / dropdown ---------- */
// groups: [{ label, options: [{ value, label, icon }] }]
function Select({ groups, value, onChange, icon }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const all = groups.flatMap(g => g.options);
  const current = all.find(o => o.value === value) || all[0];
  return (
    <div className="select-wrap" ref={ref}>
      <button className={'select' + (open ? ' open' : '')} onClick={() => setOpen(o => !o)}>
        <span className="lead">
          <Icon name={current.icon || icon || 'cpu'} size={16} className="ic" />
          {current.label}
        </span>
        <Icon name="caret-down" size={14} className="caret" />
      </button>
      {open && (
        <div className="popover" role="listbox">
          {groups.map((g, gi) => (
            <div key={gi}>
              {g.label && <div className="pop-group">{g.label}</div>}
              {g.options.map(o => (
                <div key={o.value}
                  className={'opt' + (o.value === value ? ' selected' : '')}
                  onClick={() => { onChange && onChange(o.value); setOpen(false); }}>
                  <Icon name={o.icon || 'cpu'} size={16} className="ic" />
                  {o.label}
                  {o.value === value && <Icon name="check" size={13} className="tick" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Card + RowItem ---------- */
function Card({ children, className = '', ...rest }) {
  return <div className={'card ' + className} {...rest}>{children}</div>;
}
function RowItem({ icon, iconTone, title, sub, selected, right, onClick }) {
  const toneStyle = iconTone === 'success'
    ? { background: 'var(--success-subtle)', color: 'var(--success-fg)' }
    : iconTone === 'warning'
    ? { background: 'var(--warning-subtle)', color: 'var(--warning-fg)' }
    : iconTone === 'muted'
    ? { background: 'var(--bg-subtle)', color: 'var(--fg-muted)' }
    : iconTone === 'archived'
    ? { background: 'var(--state-archived-bg)', color: 'var(--state-archived-fg)' }
    : undefined;
  return (
    <div className={'row-item' + (selected ? ' selected' : '')} onClick={onClick}>
      {icon && <div className="row-ic" style={toneStyle}><Icon name={icon} size={17} /></div>}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div className="row-title">{title}</div>
        {sub && <div className="row-sub">{sub}</div>}
      </div>
      {right}
    </div>
  );
}

/* ---------- Menu ---------- */
function Menu({ items }) {
  return (
    <div className="menu" role="menu">
      {items.map((it, i) => it.sep
        ? <div key={i} className="menu-sep" />
        : <div key={i} className={'menu-item' + (it.danger ? ' danger' : '')} onClick={it.onClick}>
            {it.icon && <Icon name={it.icon} size={16} className="ic" />}
            {it.label}
            {it.kbd && <span className="kbd">{it.kbd}</span>}
          </div>)}
    </div>
  );
}

/* ---------- Badge / Tag / Count ---------- */
const STATE_META = {
  draft:    { label: 'Draft', icon: 'pencil',       fg: 'var(--state-draft-fg)',    bg: 'var(--state-draft-bg)' },
  proposed: { label: 'Proposed', icon: 'pull-request', fg: 'var(--state-proposed-fg)', bg: 'var(--state-proposed-bg)' },
  partial:  { label: 'Partial', icon: 'progress',     fg: 'var(--state-partial-fg)',  bg: 'var(--state-partial-bg)' },
  applied:  { label: 'Applied', icon: 'check-circle', fg: 'var(--state-applied-fg)',  bg: 'var(--state-applied-bg)' },
  archived: { label: 'Archived', icon: 'archive',    fg: 'var(--state-archived-fg)', bg: 'var(--state-archived-bg)' },
};
const TONE_META = {
  success: { fg: 'var(--success-fg)', bg: 'var(--success-muted)' },
  warning: { fg: 'var(--warning-fg)', bg: 'var(--warning-muted)' },
  danger:  { fg: 'var(--danger-fg)',  bg: 'var(--danger-muted)' },
  accent:  { fg: 'var(--accent-fg)',  bg: 'var(--accent-muted)' },
  neutral: { fg: 'var(--fg-muted)',   bg: 'var(--bg-subtle)' },
};
function Badge({ state, tone, icon, children }) {
  if (state) {
    const m = STATE_META[state];
    return <span className="badge" style={{ color: m.fg, background: m.bg }}>
      <Icon name={m.icon} size={13} />{m.label}</span>;
  }
  const m = TONE_META[tone || 'neutral'];
  return <span className="badge" style={{ color: m.fg, background: m.bg }}>
    {icon && <Icon name={icon} size={13} />}{children}</span>;
}
function Tag({ icon, children }) {
  return <span className="tag">{icon && <Icon name={icon} size={12} />}{children}</span>;
}
function Count({ children }) { return <span className="count">{children}</span>; }

/* ---------- Toggle / Segmented / Checkbox ---------- */
function Toggle({ checked, onChange, label }) {
  return (
    <span className="toggle" onClick={() => onChange && onChange(!checked)}>
      <span className={'toggle-track' + (checked ? ' on' : '')}><span className="toggle-knob" /></span>
      {label && <span style={{ fontSize: 'var(--text-sm)' }}>{label}</span>}
    </span>
  );
}
function Segmented({ options, value, onChange }) {
  return (
    <div className="segmented">
      {options.map(o => (
        <button key={o.value} className={'segment' + (o.value === value ? ' active' : '')}
          onClick={() => onChange && onChange(o.value)}>
          {o.icon && <Icon name={o.icon} size={14} />}{o.label}
        </button>
      ))}
    </div>
  );
}
function Checkbox({ checked, onChange, label }) {
  return (
    <span className="checkbox" onClick={() => onChange && onChange(!checked)}>
      <span className={'checkbox-box' + (checked ? ' on' : '')}>
        {checked && <Icon name="check" size={12} />}
      </span>
      {label}
    </span>
  );
}

Object.assign(window, {
  Button, Spinner, Field, Input, SearchInput, Select, Card, RowItem, Menu,
  Badge, Tag, Count, Toggle, Segmented, Checkbox, STATE_META,
});
