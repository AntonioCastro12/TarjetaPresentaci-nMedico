import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import type { ComponentType } from "react";
import type { DoctorData, SocialNetwork } from "../data/doctor";

type FooterProps = {
  doctor: DoctorData;
};

const socialIcons: Record<SocialNetwork, ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function Footer({ doctor }: FooterProps) {
  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8" id="privacidad">
      <div className="mx-auto max-w-6xl rounded-lg border border-white/70 bg-white/72 p-5 shadow-soft backdrop-blur sm:p-7">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-lg font-black text-slate-950">{doctor.name}</p>
            <p className="mt-1 text-sm font-semibold text-slate-600">{doctor.specialty}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
              <a className="focus-ring inline-flex items-center gap-2 rounded-md" href={`tel:${doctor.phone.replace(/\s+/g, "")}`}>
                <Phone className="h-4 w-4" />
                {doctor.phone}
              </a>
              <a className="focus-ring inline-flex items-center gap-2 rounded-md" href={`mailto:${doctor.email}`}>
                <Mail className="h-4 w-4" />
                {doctor.email}
              </a>
            </div>
          </div>

          <div className="flex gap-2">
            {Object.entries(doctor.social).map(([network, url]) => {
              const Icon = socialIcons[network as SocialNetwork];

              return (
                <a
                  aria-label={`Abrir ${network}`}
                  className="focus-ring grid h-11 w-11 place-items-center rounded-lg bg-slate-100 text-slate-700 transition hover:bg-white hover:text-slate-950"
                  href={url}
                  key={network}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
          <p>© {new Date().getFullYear()} {doctor.name}. Derechos reservados.</p>
          <p>
            La informacion de esta tarjeta es de caracter informativo y no sustituye una valoracion medica.
            Aviso de privacidad disponible en <a className="font-bold underline" href={doctor.privacyUrl}>este enlace</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
