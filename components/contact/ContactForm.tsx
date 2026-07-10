import { useState, type FormEvent } from "react";
import { api } from "@/lib/api";

const serviceOptions = [
  "Network Rollout",
  "Managed Services",
  "Consultancy & Resourcing",
  "Back Office & NOC Management",
  "Radio Audit, Benchmark & Optimization",
  "Full Turnkey Site Build",
  "Power Supply & Maintenance",
  "Battery Supply & Installation",
  "Cybersecurity",
  "Revenue Assurance",
  "Professional Services",
  "Other",
];

const inputClasses =
  "w-full rounded-[3px] border border-[#DADCDE] bg-white px-3.5 py-[13px] font-body text-[14.5px] text-navy focus:border-cyan focus:outline-none";
const labelClasses = "mb-2 block font-heading text-xs uppercase tracking-[0.05em] text-text-body";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    setStatus("submitting");
    try {
      await api.post("/contact", {
        name: form.get("name"),
        company: form.get("company"),
        email: form.get("email"),
        phone: form.get("phone"),
        service: form.get("service"),
        message: form.get("message"),
      });
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="mt-7 flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">
            Full Name
          </label>
          <input className={inputClasses} type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div>
          <label className={labelClasses} htmlFor="company">
            Company
          </label>
          <input className={inputClasses} type="text" id="company" name="company" placeholder="Company name" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="email">
            Email
          </label>
          <input
            className={inputClasses}
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="phone">
            Phone
          </label>
          <input className={inputClasses} type="tel" id="phone" name="phone" placeholder="+965 ..." />
        </div>
      </div>
      <div>
        <label className={labelClasses} htmlFor="service">
          Service of Interest
        </label>
        <select className={inputClasses} id="service" name="service" defaultValue={serviceOptions[0]}>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClasses} htmlFor="message">
          Message
        </label>
        <textarea
          className={inputClasses}
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project or requirement"
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start rounded-[2px] bg-navy px-[34px] py-[15px] font-heading text-sm tracking-[0.05em] text-white transition-colors hover:bg-navy-dark disabled:opacity-60"
      >
        {status === "submitting" ? "SENDING..." : "SEND INQUIRY"}
      </button>
      {status === "success" && (
        <p className="text-sm text-cyan">Thanks — your inquiry has been sent. We&apos;ll be in touch shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red">Something went wrong sending your message. Please try again.</p>
      )}
    </form>
  );
}
