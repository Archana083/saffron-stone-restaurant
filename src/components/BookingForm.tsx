import { CalendarDays } from 'lucide-react';
import { useState } from 'react';

type BookingFormValues = {
  name: string;
  phone: string;
  date: string;
  guests: string;
  notes: string;
};

const initialValues: BookingFormValues = {
  name: '',
  phone: '',
  date: '',
  guests: '2 guests',
  notes: '',
};

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
      </label>

      <label>
        Phone
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+91"
        />
      </label>

      <div className="form-row">
        <label>
          Date
          <input name="date" type="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          Guests
          <select name="guests" value={formData.guests} onChange={handleChange}>
            <option value="2 guests">2 guests</option>
            <option value="3 guests">3 guests</option>
            <option value="4 guests">4 guests</option>
            <option value="5 guests">5 guests</option>
            <option value="6+ guests">6+ guests</option>
          </select>
        </label>
      </div>

      <label>
        Anything we should know?
        <textarea
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Birthday, anniversary, dietary notes..."
        />
      </label>

      <button className="primary" type="submit">
        Request reservation <CalendarDays size={17} />
      </button>

      {submitted ? (
        <small className="success-note">
          Thanks, {formData.name || 'friend'}! Your reservation request has been received.
        </small>
      ) : (
        <small>Reservation requests are confirmed by our team.</small>
      )}
    </form>
  );
}
