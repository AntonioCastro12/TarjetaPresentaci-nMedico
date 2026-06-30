import { motion } from "framer-motion";
import { CalendarClock, Clock3 } from "lucide-react";
import type { DoctorData } from "../data/doctor";

type ScheduleProps = {
  doctor: DoctorData;
};

export function Schedule({ doctor }: ScheduleProps) {
  const rows = [
    { label: "Lunes a Viernes", value: doctor.schedule.weekdays },
    { label: "Sabado", value: doctor.schedule.saturday },
    { label: "Domingo", value: doctor.schedule.sunday },
  ];

  return (
    <motion.section
      className="glass-panel rounded-lg p-5 sm:p-7"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg text-white" style={{ backgroundColor: doctor.colors.primary }}>
          <CalendarClock className="h-6 w-6" />
        </div>
        <div>
          <h2 className="section-title">Horarios de consulta</h2>
          <p className="section-subtitle">{doctor.schedule.notes}</p>
        </div>
      </div>

      <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-lg border border-white/80 bg-white/76">
        {rows.map((row) => (
          <div className="grid gap-2 p-4 sm:grid-cols-[10rem_1fr] sm:items-center" key={row.label}>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-950">
              <Clock3 className="h-4 w-4" style={{ color: doctor.colors.accent }} />
              {row.label}
            </div>
            <p className="text-sm leading-6 text-slate-600">{row.value}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
