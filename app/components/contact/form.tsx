"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AsteriskIcon } from "lucide-react";
import Input from "./input";
import SendButton from "./send-button";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const schema = yup.object({
  name: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(3, "Este campo precisa ter pelo menos 3 caracteres."),
  email: yup
    .string()
    .required("Este campo é obrigatório.")
    .email("Insira um email válido."),
  message: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(3, "Este campo precisa ter pelo menos 3 caracteres."),
});

interface FormProps {
  setShowSonner: (value: boolean) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Form({ setShowSonner }: FormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    const formData = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    setIsLoading(true);

    try {
      emailjs.send(serviceId, templateId, formData, publicKey);
    } finally {
      setIsLoading(false);
      reset();
      setShowSonner(true);
      setTimeout(() => {
        setShowSonner(false);
      }, 5000);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 150 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="flex flex-col gap-5 md:flex-row">
        <Input
          label="Nome completo"
          placeholder="Digite seu nome completo"
          register={{ ...register("name") }}
          errors={errors.name}
        />
        <Input
          label="Email"
          placeholder="Insira seu endereço de email"
          register={{ ...register("email") }}
          errors={errors.email}
        />
      </div>

      <div className="flex w-full flex-col">
        <label className="flex gap-1 uppercase">
          Mensagem
          <AsteriskIcon size={12} className="text-red-600" />
        </label>
        <textarea
          rows={3}
          placeholder="Escreva sua mensagem aqui"
          {...register("message")}
          className={`resize-none border-b border-solid bg-transparent p-2.5 outline-none focus:border-opacity-100 ${errors.message ? "border-red-600" : "border-black border-opacity-50 dark:border-white dark:border-opacity-10"}`}
        ></textarea>

        {errors.message && (
          <p className="m-1.5 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <SendButton isLoading={isLoading} />
    </motion.form>
  );
}
