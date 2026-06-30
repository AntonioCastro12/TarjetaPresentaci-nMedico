import type { DoctorData } from "../data/doctor";

export const shareDoctorCard = async (doctor: DoctorData) => {
  const shareData = {
    title: doctor.name,
    text: `${doctor.name} - ${doctor.specialty}`,
    url: doctor.cardUrl || window.location.href,
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return "shared";
  }

  await navigator.clipboard.writeText(shareData.url);
  return "copied";
};
