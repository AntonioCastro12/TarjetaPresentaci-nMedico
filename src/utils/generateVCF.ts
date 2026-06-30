import type { DoctorData } from "../data/doctor";

const cleanPhone = (phone: string) => phone.replace(/[^\d+]/g, "");

export const generateVCF = (doctor: DoctorData) => {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${doctor.name}`,
    `ORG:${doctor.clinics.join("; ")}`,
    `TITLE:${doctor.specialty}`,
    `TEL;TYPE=CELL:${cleanPhone(doctor.phone)}`,
    `TEL;TYPE=WORK:${cleanPhone(doctor.whatsapp)}`,
    `EMAIL:${doctor.email}`,
    `URL:${doctor.website}`,
    `ADR;TYPE=WORK:;;${doctor.address.street}`,
    `NOTE:${doctor.professionalLicense}${doctor.specialtyLicense ? ` / ${doctor.specialtyLicense}` : ""}`,
    "END:VCARD",
  ];

  return lines.join("\n");
};

export const downloadVCF = (doctor: DoctorData) => {
  const blob = new Blob([generateVCF(doctor)], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${doctor.name.toLowerCase().replace(/\s+/g, "-")}.vcf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};
