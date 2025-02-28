"use client"

import type React from "react"
import { useState } from "react"
import styles from "./Modal.module.scss"

interface QuoteModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function QuoteModal({ isOpen, setIsOpen }: QuoteModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const phoneNumber = "11986427140" 

    const message = `Olá, meu nome é ${name}. Meu email é ${email} e meu telefone é ${phone}. Gostaria de um orçamento gratuito.`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")

    setIsOpen(false)
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.quoteModal}>
        <button onClick={() => setIsOpen(false)} className={styles.modalClose} aria-label="Close modal">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2>PEÇA AGORA UM <br /> <span>ORÇAMENTO</span> <br /> GRÁTIS</h2>
          </div>

          <form onSubmit={handleSubmit} className={styles.modalForm}>
            <input
              type="text"
              placeholder="Nome completo"
              required
              className={styles.formInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className={styles.formInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Telefone"
              required
              className={styles.formInput}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" className={styles.submitButton}>
              RECEBER ORÇAMENTO GRÁTIS
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
