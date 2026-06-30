import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";
import type { DoctorData } from "../data/doctor";

type MapProps = {
  doctor: DoctorData;
};

export function Map({ doctor }: MapProps) {
  return (
    <section id="ubicacion">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <motion.div
          className="glass-panel rounded-lg p-5 sm:p-7"
          initial={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="grid h-12 w-12 place-items-center rounded-lg text-white" style={{ backgroundColor: doctor.colors.primary }}>
            <MapPinned className="h-6 w-6" />
          </div>
          <p className="mt-5 text-sm font-bold uppercase tracking-normal" style={{ color: doctor.colors.accent }}>
            Ubicacion
          </p>
          <h2 className="section-title mt-2">Consultorio</h2>
          <p className="mt-4 text-base font-bold text-slate-900">{doctor.address.label}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{doctor.address.street}</p>
          <a
            className="focus-ring mt-6 inline-flex rounded-lg px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5"
            href={doctor.address.googleMapsUrl}
            rel="noreferrer"
            target="_blank"
            style={{ backgroundColor: doctor.colors.accent }}
          >
            Abrir en Google Maps
          </a>
        </motion.div>

        <motion.div
          className="min-h-[20rem] overflow-hidden rounded-lg border border-white/70 bg-white shadow-soft"
          initial={{ opacity: 0, x: 18 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <iframe
            className="h-full min-h-[20rem] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={doctor.address.embedUrl}
            title={`Mapa de ${doctor.address.label}`}
          />
        </motion.div>
      </div>
    </section>
  );
}
