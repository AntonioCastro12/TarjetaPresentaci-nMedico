import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { DoctorData } from "../data/doctor";

type TestimonialsProps = {
  doctor: DoctorData;
};

export function Testimonials({ doctor }: TestimonialsProps) {
  return (
    <section id="opiniones">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-normal" style={{ color: doctor.colors.accent }}>
          Opiniones
        </p>
        <h2 className="section-title mt-2">Testimonios de pacientes</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {doctor.testimonials.map((testimonial, index) => (
          <motion.article
            className="rounded-lg border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur"
            initial={{ opacity: 0, y: 18 }}
            key={testimonial.name}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex gap-1" aria-label={`${testimonial.rating} de 5 estrellas`}>
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star
                  className="h-5 w-5"
                  fill={starIndex < testimonial.rating ? "#f5b301" : "none"}
                  key={starIndex}
                  strokeWidth={1.8}
                  style={{ color: starIndex < testimonial.rating ? "#f5b301" : "#cbd5e1" }}
                />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-6 text-slate-600">"{testimonial.text}"</blockquote>
            <p className="mt-4 text-sm font-bold text-slate-950">{testimonial.name}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
