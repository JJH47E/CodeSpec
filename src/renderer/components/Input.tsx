import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { Icon } from './Icon'

interface FieldProps {
  label?: string
  help?: string
  error?: boolean
  children: ReactNode
}

export function Field({ label, help, error, children }: FieldProps) {
  return (
    <label className="field">
      {label && <span className="field-label">{label}</span>}
      {children}
      {help && <span className={'field-help' + (error ? ' error' : '')}>{help}</span>}
    </label>
  )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  mono?: boolean
}

export function Input({ error, mono, className = '', ...rest }: InputProps) {
  const cls = [
    'input',
    error ? 'error' : null,
    mono  ? 'mono'  : null,
    className || null,
  ].filter(Boolean).join(' ')
  return <input className={cls} {...rest} />
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  mono?: boolean
}

export function TextArea({ error, mono, className = '', ...rest }: TextAreaProps) {
  const cls = [
    'input',
    error ? 'error' : null,
    mono  ? 'mono'  : null,
    className || null,
  ].filter(Boolean).join(' ')
  return <textarea className={cls} {...rest} />
}

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ ...rest }: SearchInputProps) {
  return (
    <div className="input-group">
      <Icon name="magnifier" size={15} className="lead-ic" />
      <input className="input" {...rest} />
    </div>
  )
}
