import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";
import type { DoctorData } from "../data/doctor";

type ServicesProps = {
  doctor: DoctorData;
};

export function Services({ doctor }: ServicesProps) {
  return (
    <section id="servicios">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-normal" style={{ color: doctor.colors.accent }}>
          Servicios
        </p>
        <h2 className="section-title mt-2">Tratamientos y estudios</h2>
        <p className="section-subtitle">
          Servicios frecuentes que pueden personalizarse segun la especialidad y flujo de atencion del medico.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {doctor.services.map((service, index) => (
          <motion.article
            className="rounded-lg border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur"
            initial={{ opacity: 0, y: 18 }}
            key={service}
            transition={{ delay: index * 0.04, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div
              className="grid h-11 w-11 place-items-center rounded-lg text-white"
              style={{ backgroundColor: doctor.colors.primary }}
            >
              <Stethoscope className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-950">{service}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
