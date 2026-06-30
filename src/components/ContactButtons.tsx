import { useState } from "react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Share2,
  Smartphone,
  Globe2,
} from "lucide-react";
import type { DoctorData } from "../data/doctor";
import { downloadVCF } from "../utils/generateVCF";
import { shareDoctorCard } from "../utils/share";

type ContactButtonsProps = {
  doctor: DoctorData;
};

type ActionLink = {
  label: string;
  helper: string;
  href?: string;
  icon: ComponentType<{ className?: string }>;
  onClick?: () => Promise<void> | void;
};

export function ContactButtons({ doctor }: ContactButtonsProps) {
  const [message, setMessage] = useState("");

  const actions: ActionLink[] = [
    {
      label: "Agendar por WhatsApp",
      helper: "Respuesta rapida",
      href: `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(`Hola, quiero agendar una cita con ${doctor.name}.`)}`,
      icon: Smartphone,
    },
    {
      label: "Llamar",
      helper: doctor.phone,
      href: `tel:${doctor.phone.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    {
      label: "Enviar correo",
      helper: doctor.email,
      href: `mailto:${doctor.email}`,
      icon: Mail,
    },
    {
      label: "Abrir ubicacion",
      helper: doctor.address.label,
      href: doctor.address.googleMapsUrl,
      icon: MapPin,
    },
    {
      label: "Visitar sitio web",
      helper: "Mas informacion",
      href: doctor.website,
      icon: Globe2,
    },
    {
      label: "Descargar contacto",
      helper: "Archivo .VCF",
      icon: Download,
      onClick: () => downloadVCF(doctor),
    },
    {
      label: "Compartir tarjeta",
      helper: "Web Share API",
      icon: Share2,
      onClick: async () => {
        const result = await shareDoctorCard(doctor);
        setMessage(result === "copied" ? "Enlace copiado al portapapeles." : "Tarjeta compartida.");
        window.setTimeout(() => setMessage(""), 3200);
      },
    },
  ];

  return (
    <section aria-labelledby="acciones-contacto">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-normal" style={{ color: doctor.colors.accent }}>
            Contacto directo
          </p>
          <h2 className="section-title mt-2" id="acciones-contacto">
            Agenda o guarda la tarjeta
          </h2>
        </div>
        <ExternalLink className="hidden h-6 w-6 text-slate-400 sm:block" aria-hidden="true" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          const content = (
            <>
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-lg text-white"
                style={{ backgroundColor: index === 0 ? doctor.colors.accent : doctor.colors.primary }}
                aria-hidden="true"
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-sm font-black text-slate-950">{action.label}</span>
                <span className="mt-0.5 block truncate text-xs font-semibold text-slate-500">{action.helper}</span>
              </span>
            </>
          );

          const className =
            "focus-ring flex min-h-20 items-center gap-4 rounded-lg border border-white/80 bg-white/82 p-4 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white";

          return action.href ? (
            <motion.a
              className={className}
              href={action.href}
              key={action.label}
              rel="noreferrer"
              target={action.href.startsWith("http") ? "_blank" : undefined}
              whileTap={{ scale: 0.98 }}
            >
              {content}
            </motion.a>
          ) : (
            <motion.button
              className={className}
              key={action.label}
              onClick={action.onClick}
              type="button"
              whileTap={{ scale: 0.98 }}
            >
              {content}
            </motion.button>
          );
        })}
      </div>

      <div aria-live="polite" className="mt-3 min-h-6 text-sm font-semibold text-slate-600">
        {message}
      </div>
    </section>
  );
}
