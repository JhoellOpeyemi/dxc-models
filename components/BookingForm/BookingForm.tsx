import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {bookingSchema} from '@/app/api/bookings/route'

import FormBtn from "@/components/FormBtn/FormBtn";

import "./bookingForm.css";

export type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  closeBookingModal: () => void;
  modelName: string;
}

const BookingForm = ({ closeBookingModal, modelName }: BookingFormProps) => {
  const { register, handleSubmit } = useForm<BookingFormData>({
    defaultValues: { modelName: modelName },
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="booking-form-backdrop" />
      <section className="booking-form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <button
            aria-label="Close Booking Form"
            className="close-form-btn"
            onClick={closeBookingModal}
          >
            (X)
          </button>

          <div className="input-group-container">
            <div className="input-group">
              <label htmlFor="modelName" className="styled-input-label">
                Model
              </label>
              <input
                {...register("modelName")}
                type="text"
                id="modelName"
                className="styled-input"
                readOnly
              />
            </div>

            <div className="input-group">
              <label htmlFor="clientName" className="styled-input-label">
                Your Name
              </label>
              <input
                {...register("clientName")}
                type="text"
                id="clientName"
                className="styled-input"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="input-group-container">
            <div className="input-group">
              <label htmlFor="email" className="styled-input-label">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="styled-input"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="input-group">
              <label htmlFor="eventDate" className="styled-input-label">
                Event Date
              </label>
              <input
                {...register("eventDate")}
                type="date"
                id="eventDate"
                className="styled-input"
              />
            </div>
          </div>

          <div className="textarea-input-group">
            <label htmlFor="message" className="styled-input-label">
              Message
            </label>
            <textarea
              {...register("message")}
              id="message"
              className="styled-textarea"
              placeholder="Type your message here..."
            />
          </div>

          <FormBtn label="Send Booking Request" />
        </form>
      </section>
    </>
  );
};

export default BookingForm;
