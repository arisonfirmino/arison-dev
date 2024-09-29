"use client";

import { useState } from "react";
import { Portfolio } from "@prisma/client";
import Title from "../title";
import ContactLinks from "./contact-links";
import Form from "./form";
import Sonner from "./sonner";
import { motion } from "framer-motion";

interface ContactListProps {
  portfolio: Portfolio;
}

export default function ContactList({ portfolio }: ContactListProps) {
  const [showSonner, setShowSonner] = useState(false);

  return (
    <div id="contact" className="space-y-5">
      <Title>Contato</Title>

      <motion.p
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-foreground"
      >
        Estou à disposição para conversar! Utilize o formulário para enviar um
        e-mail diretamente para mim, ou conecte-se através do WhatsApp, LinkedIn
        ou GitHub. Vamos conversar!
      </motion.p>

      <ContactLinks portfolio={portfolio} />

      <Form setShowSonner={setShowSonner} />

      {showSonner && <Sonner />}
    </div>
  );
}
