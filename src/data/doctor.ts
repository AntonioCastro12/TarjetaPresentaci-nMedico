export type SocialNetwork = "facebook" | "instagram" | "linkedin" | "youtube";

export type DoctorData = {
  name: string;
  photo: string;
  specialty: string;
  professionalLicense: string;
  specialtyLicense?: string;
  experienceYears: number;
  clinics: string[];
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  address: {
    label: string;
    street: string;
    googleMapsUrl: string;
    embedUrl: string;
  };
  bio: string;
  education: string[];
  certifications: string[];
  specialties: string[];
  services: string[];
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
    notes: string;
  };
  social: Record<SocialNetwork, string>;
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
  privacyUrl: string;
  cardUrl: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
};

export const doctor: DoctorData = {
  name: "Dr. Alejandro Rivera Montes",
  photo:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85",
  specialty: "Cardiologia Clinica e Intervencionista",
  professionalLicense: "Ced. Prof. 12345678",
  specialtyLicense: "Ced. Esp. 87654321",
  experienceYears: 14,
  clinics: ["Hospital Medica Norte", "Clinica Cardiovascular Reforma"],
  phone: "+52 462 123 4567",
  whatsapp: "525512345678",
  email: "contacto@gmail.com.com",
  website: "https://dralejandrorivera.com",
  address: {
    label: "Consultorio 604, Torre Medica Reforma",
    street: "Av. Paseo de la Reforma 123,Irapuato, 36558",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Paseo+de+la+Reforma+123+CDMX",
    embedUrl:
      "https://www.google.com/maps?q=Av.%20Paseo%20de%20la%20Reforma%20123%20CDMX&output=embed",
  },
  bio:
    "Medico especialista en prevencion, diagnostico y tratamiento integral de enfermedades cardiovasculares. Su enfoque combina tecnologia avanzada, trato humano y seguimiento cercano para que cada paciente tome decisiones informadas sobre su salud.",
  education: [
    "Medico Cirujano - Universidad Nacional Autonoma de Mexico",
    "Especialidad en Cardiologia - Instituto Nacional de Cardiologia",
    "Alta Especialidad en Hemodinamia y Cardiologia Intervencionista",
  ],
  certifications: [
    "Consejo Mexicano de Cardiologia",
    "Soporte Vital Cardiovascular Avanzado",
    "Miembro de la Sociedad Mexicana de Cardiologia",
  ],
  specialties: [
    "Evaluacion cardiovascular preventiva",
    "Hipertension arterial",
    "Arritmias y palpitaciones",
    "Cardiopatia isquemica",
  ],
  services: [
    "Consulta cardiologica integral",
    "Electrocardiograma",
    "Ecocardiograma",
    "Prueba de esfuerzo",
    "Holter de ritmo y presion",
    "Valoracion preoperatoria",
  ],
  schedule: {
    weekdays: "Lunes a Viernes: 9:00 a.m. - 7:00 p.m.",
    saturday: "Sabado: 9:00 a.m. - 2:00 p.m.",
    sunday: "Domingo: Urgencias con cita previa",
    notes: "Horarios sujetos a disponibilidad hospitalaria. Confirma tu cita por WhatsApp.",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
  testimonials: [
    {
      name: "Mariana G.",
      text: "El doctor explico mi diagnostico con mucha claridad y el seguimiento fue excelente.",
      rating: 5,
    },
    {
      name: "Roberto L.",
      text: "Consulta puntual, trato humano y estudios realizados en el mismo dia.",
      rating: 5,
    },
    {
      name: "Patricia M.",
      text: "Me ayudo a controlar mi presion con un plan realista y muy bien explicado.",
      rating: 5,
    },
  ],
  privacyUrl: "#privacidad",
  cardUrl: "https://dralejandrorivera.com/tarjeta",
  colors: {
    primary: "#0f68a8",
    secondary: "#0b3558",
    accent: "#1aa980",
  },
};
