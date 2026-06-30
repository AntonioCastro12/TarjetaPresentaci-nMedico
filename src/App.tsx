import { About } from "./components/About";
import { ContactButtons } from "./components/ContactButtons";
import { DoctorCard } from "./components/DoctorCard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { QRCodeSection } from "./components/QRCode";
import { Schedule } from "./components/Schedule";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { doctor } from "./data/doctor";

function App() {
  return (
    <div className="min-h-screen">
      <Header doctor={doctor} />
      <main className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 sm:px-6 lg:px-8" id="contenido">
        <ContactButtons doctor={doctor} />
        <DoctorCard doctor={doctor} />
        <About doctor={doctor} />
        <Services doctor={doctor} />
        <Schedule doctor={doctor} />
        <Map doctor={doctor} />
        <Testimonials doctor={doctor} />
        <QRCodeSection doctor={doctor} />
      </main>
      <Footer doctor={doctor} />
    </div>
  );
}

export default App;
