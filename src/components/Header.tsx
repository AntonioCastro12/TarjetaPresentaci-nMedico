import { motion } from "framer-motion";
import { CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import type { DoctorData } from "../data/doctor";

type HeaderProps = {
  doctor: DoctorData;
};

const navItems = [
  { href: "#informacion", label: "Informacion" },
  { href: "#servicios", label: "Servicios" },
  { href: "#ubicacion", label: "Ubicacion" },
  { href: "#opiniones", label: "Opiniones" },
];

export function Header({ doctor }: HeaderProps) {
  return (
    <header className="relative overflow-hidden px-4 pb-10 pt-5 sm:px-6 lg:px-8">
      <a
        href="#contenido"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Saltar al contenido
      </a>

      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-lg border border-white/70 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-xl"
        aria-label="Navegacion principal"
      >
        <a href="#" className="focus-ring flex items-center gap-2 rounded-md text-sm font-bold text-slate-900">
          <span
            className="grid h-9 w-9 place-items-center rounded-lg text-white"
            style={{ backgroundColor: doctor.colors.primary }}
            aria-hidden="true"
          >
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">{doctor.name}</span>
          <span className="sm:hidden">Dr.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-md px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="focus-ring inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5"
          href={`https://wa.me/${doctor.whatsapp}`}
          rel="noreferrer"
          target="_blank"
          style={{ backgroundColor: doctor.colors.accent }}
        >
          <CalendarDays className="h-4 w-4" />
          Cita
        </a>
      </nav>

      <div className="mx-auto grid max-w-6xl gap-7 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-14">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p
            className="mb-4 inline-flex rounded-lg border bg-white/75 px-4 py-2 text-sm font-bold shadow-soft backdrop-blur"
            style={{ borderColor: `${doctor.colors.accent}33`, color: doctor.colors.primary }}
          >
            Atencion medica especializada
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            {doctor.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-slate-700 sm:text-xl">
            {doctor.specialty}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <span className="rounded-lg bg-white/80 px-4 py-2 shadow-soft">{doctor.professionalLicense}</span>
            {doctor.specialtyLicense ? (
              <span className="rounded-lg bg-white/80 px-4 py-2 shadow-soft">{doctor.specialtyLicense}</span>
            ) : null}
            <span className="rounded-lg bg-white/80 px-4 py-2 shadow-soft">
              {doctor.experienceYears}+ años de experiencia
            </span>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel rounded-lg p-4 sm:p-5"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-lg bg-slate-100">
            <img
              alt={`Fotografia profesional de ${doctor.name}`}
              className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[4/5]"
              src={doctor.photo}
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg bg-white/82 p-4 shadow-soft backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: doctor.colors.accent }} />
                <div>
                  <p className="text-sm font-bold text-slate-950">{doctor.address.label}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">{doctor.address.street}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
