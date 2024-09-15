import { Portfolio } from "@prisma/client";
import Title from "../title";
import ContactLinks from "./contact-links";
import Form from "./form";

interface ContactListProps {
  portfolio: Portfolio;
}

export default function ContactList({ portfolio }: ContactListProps) {
  return (
    <div id="contact" className="space-y-5">
      <Title>Contato</Title>

      <p className="text-sm text-foreground">
        Estou à disposição para conversar! Utilize o formulário para enviar um
        e-mail diretamente para mim, ou conecte-se através do WhatsApp, LinkedIn
        ou GitHub. Vamos conversar!
      </p>

      <ContactLinks portfolio={portfolio} />

      <Form />
    </div>
  );
}
