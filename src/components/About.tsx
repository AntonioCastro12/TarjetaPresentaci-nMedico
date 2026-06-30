import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { DoctorData } from "../data/doctor";

type AboutProps = {
  doctor: DoctorData;
};

export function About({ doctor }: AboutProps) {
  return (
    <motion.section
      className="rounded-lg bg-white/72 p-5 shadow-soft backdrop-blur sm:p-7"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2 className="section-title">Atencion centrada en el paciente</h2>
      <p className="section-subtitle">
        Una experiencia de consulta clara, ordenada y cercana, con planes personalizados para prevencion,
        diagnostico y seguimiento.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {["Diagnostico preciso", "Trato humano", "Seguimiento continuo"].map((item) => (
          <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-4" key={item}>
            <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: doctor.colors.accent }} />
            <span className="text-sm font-bold text-slate-800">{item}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
