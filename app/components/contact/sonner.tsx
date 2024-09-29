"use client";

import { motion } from "framer-motion";

export default function Sonner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-10 right-10 rounded-xl border border-solid border-background bg-black px-5 py-2.5"
    >
      <p className="text-base font-semibold">Mensagem enviada!</p>
      <p className="text-sm text-foreground">
        Obrigado por enviar sua mensagem.
      </p>
    </motion.div>
  );
}
