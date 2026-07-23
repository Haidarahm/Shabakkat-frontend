import { useState, type FormEvent } from "react";
import type { Opening } from "@/data/openings";

const inputClasses =
  "w-full rounded-lg border border-[#DADCDE] bg-white px-3.5 py-[13px] font-body text-[14.5px] text-navy transition-colors placeholder:text-text-muted/70 focus:border-cyan focus:outline-none";
const labelClasses = "mb-2 block font-heading text-xs uppercase tracking-[0.05em] text-text-body";

type Status = "idle" | "submitting" | "success" | "error";

interface ApplicationFormProps {
  opening?: Opening | null;
}

export default function ApplicationForm({ opening }: ApplicationFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const cv = form.get("cv");
    if (!(cv instanceof File) || cv.size === 0) {
      setStatus("error");
      setErrorMessage("Please attach your CV (PDF, DOC, or DOCX).");
      return;
    }
    if (cv.size > 5 * 1024 * 1024) {
      setStatus("error");
      setErrorMessage("CV must be 5 MB or smaller.");
      return;
    }

    if (opening?.id != null) {
      form.set("opening_id", String(opening.id));
    } else {
      form.delete("opening_id");
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/openings/apply", {
        method: "POST",
        body: form,
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setErrorMessage(data?.error || "Something went wrong submitting your application. Please try again.");
        return;
      }

      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong submitting your application. Please try again.");
    }
  }

  return (
    <form
      className="relative mx-auto mt-9 flex w-full max-w-[560px] flex-col gap-5 text-left"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {/* Honeypot — hidden from real users, bots tend to fill every field they find */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {opening && (
        <div className="rounded-xl border border-border bg-bg-muted px-5 py-4 text-center">
          <div className="font-heading text-xs uppercase tracking-[0.06em] text-text-muted">Applying for</div>
          <div className="mt-1.5 font-heading text-[16px] text-navy">{opening.title}</div>
          <div className="mt-1.5 text-[13px] text-text-muted">
            {opening.department} · {opening.location} · {opening.type}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">
            Full Name
          </label>
          <input
            className={inputClasses}
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            maxLength={200}
            required
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">
            Email
          </label>
          <input
            className={inputClasses}
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            maxLength={200}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="phone">
            Phone
          </label>
          <input
            className={inputClasses}
            type="tel"
            id="phone"
            name="phone"
            placeholder="+965 ..."
            maxLength={60}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="linkedin">
            LinkedIn
          </label>
          <input
            className={inputClasses}
            type="url"
            id="linkedin"
            name="linkedin"
            placeholder="https://linkedin.com/in/..."
            maxLength={500}
          />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="portfolio">
          Portfolio / Website
        </label>
        <input
          className={inputClasses}
          type="url"
          id="portfolio"
          name="portfolio"
          placeholder="https://..."
          maxLength={500}
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="cover_letter">
          Cover letter / Message
        </label>
        <textarea
          className={`${inputClasses} min-h-[140px] resize-y`}
          id="cover_letter"
          name="cover_letter"
          rows={5}
          placeholder="Tell us briefly why you're a great fit"
          maxLength={5000}
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="cv">
          CV / Resume
        </label>
        <input
          className="w-full rounded-lg border border-dashed border-[#DADCDE] bg-bg-muted/40 px-3.5 py-4 font-body text-[14.5px] text-navy file:mr-4 file:rounded-md file:border-0 file:bg-cyan/10 file:px-3 file:py-1.5 file:font-heading file:text-xs file:tracking-[0.04em] file:text-cyan focus:border-cyan focus:outline-none"
          type="file"
          id="cv"
          name="cv"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          required
        />
        <p className="mt-2 text-center text-[12.5px] text-text-muted">PDF, DOC, or DOCX — max 5 MB.</p>
      </div>

      <div className="mt-1 flex flex-col items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-md bg-cyan px-[34px] py-[15px] font-heading text-sm tracking-[0.05em] text-white transition-colors hover:bg-red disabled:opacity-60 sm:w-auto sm:min-w-[240px]"
        >
          {status === "submitting" ? "SUBMITTING..." : "SUBMIT APPLICATION"}
        </button>

        {status === "success" && (
          <p className="max-w-[40ch] text-center text-sm text-cyan">
            Thank you — your application has been received. Our team will review it and be in touch if there&apos;s a
            match.
          </p>
        )}
        {status === "error" && <p className="max-w-[40ch] text-center text-sm text-red">{errorMessage}</p>}
      </div>
    </form>
  );
}
