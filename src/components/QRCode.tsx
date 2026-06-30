import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import type { DoctorData } from "../data/doctor";

type QRCodeSectionProps = {
  doctor: DoctorData;
};

export function QRCodeSection({ doctor }: QRCodeSectionProps) {
  const qrValue = doctor.cardUrl || window.location.href;

  return (
    <motion.section
      className="glass-panel rounded-lg p-5 text-center sm:p-7"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <p className="text-sm font-bold uppercase tracking-normal" style={{ color: doctor.colors.accent }}>
        Codigo QR
      </p>
      <h2 className="section-title mt-2">Comparte esta tarjeta</h2>
      <p className="section-subtitle mx-auto">Escanea el codigo para abrir la tarjeta digital en otro dispositivo.</p>
      <div className="mx-auto mt-6 w-fit rounded-lg bg-white p-5 shadow-soft">
        <QRCode
          bgColor="#ffffff"
          fgColor={doctor.colors.secondary}
          size={172}
          title={`QR de ${doctor.name}`}
          value={qrValue}
          viewBox="0 0 256 256"
        />
      </div>
      <p className="mx-auto mt-4 max-w-sm break-words text-xs font-semibold text-slate-500">{qrValue}</p>
    </motion.section>
  );
}
