import { CalendarDays, MapPin, Phone } from 'lucide-react';
import { BookingForm } from '../components/BookingForm';

export function ReservePage() {
  return (
    <div className="page-panel reserve-page reveal">
      <section className="page-hero compact-page-hero">
        <p className="eyebrow">RESERVATIONS</p>
        <h1>
          Save your <em>table</em>
        </h1>
      </section>

      <section className="reserve-layout">
        <div className="reserve-copy-panel card-panel">
          <div className="section-kicker">YOUR TABLE AWAITS</div>
          <h2>Plan your next evening with us.</h2>
          <p>
            Whether it is an anniversary dinner, a long catch-up or a crisp evening under the city lights, we would love
            to host you.
          </p>

          <div className="contact-lines large-contact-lines">
            <span>
              <Phone size={16} /> +91 22 4012 8899
            </span>
            <span>
              <MapPin size={16} /> 14, Heritage Lane, Fort, Mumbai
            </span>
            <span>
              <CalendarDays size={16} /> Tue–Sun · 12pm–11:30pm
            </span>
          </div>
        </div>

        <BookingForm />
      </section>
    </div>
  );
}
