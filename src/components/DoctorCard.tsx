import { motion } from "framer-motion";
import { Award, Building2, GraduationCap, HeartPulse } from "lucide-react";
import type { DoctorData } from "../data/doctor";

type DoctorCardProps = {
  doctor: DoctorData;
};

const itemClass = "rounded-lg border border-white/70 bg-white/70 p-4 shadow-soft";

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel rounded-lg p-5 sm:p-7 lg:p-8"
      id="informacion"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-normal" style={{ color: doctor.colors.accent }}>
            Perfil medico
          </p>
          <h2 className="section-title mt-2">Informacion profesional</h2>
          <p className="section-subtitle">{doctor.bio}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className={itemClass}>
            <Building2 className="h-6 w-6" style={{ color: doctor.colors.primary }} />
            <h3 className="mt-3 text-base font-bold text-slate-950">Hospitales y clinicas</h3>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
              {doctor.clinics.map((clinic) => (
                <li key={clinic}>{clinic}</li>
              ))}
            </ul>
          </article>

          <article className={itemClass}>
            <GraduationCap className="h-6 w-6" style={{ color: doctor.colors.primary }} />
            <h3 className="mt-3 text-base font-bold text-slate-950">Formacion academica</h3>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
              {doctor.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className={itemClass}>
            <Award className="h-6 w-6" style={{ color: doctor.colors.primary }} />
            <h3 className="mt-3 text-base font-bold text-slate-950">Certificaciones</h3>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
              {doctor.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className={itemClass}>
            <HeartPulse className="h-6 w-6" style={{ color: doctor.colors.primary }} />
            <h3 className="mt-3 text-base font-bold text-slate-950">Especialidades</h3>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
              {doctor.specialties.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </motion.section>
  );
}
