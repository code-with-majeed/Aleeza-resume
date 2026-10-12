import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend } from "react-icons/fi";
import Reveal from "./Reveal";
import { profile } from "../data/cv";

const items = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: FiMapPin, label: "Location", value: profile.location },
  { icon: FiLinkedin, label: "LinkedIn", value: "Connect with me", href: profile.linkedin },
];

const field =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-brand-400 focus:bg-white/10";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="container-x py-12">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.08}>
              <a
                href={it.href}
                target={it.label === "LinkedIn" ? "_blank" : undefined}
                rel="noreferrer"
                className={`glass flex items-center gap-4 p-5 transition hover:border-brand-400/40 ${it.href ? "hover:-translate-y-1" : "pointer-events-none"}`}
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-xl text-brand-400">
                  <it.icon />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-slate-500">{it.label}</p>
                  <p className="break-words font-medium text-white">{it.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="lg:col-span-3">
          <form onSubmit={onSubmit} className="glass space-y-5 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-white">Send me a message</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <input required name="name" value={form.name} onChange={onChange} placeholder="Your name" className={field} />
              <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Your email" className={field} />
            </div>
            <textarea required rows={6} name="message" value={form.message} onChange={onChange} placeholder="How can I help your team?" className={field} />
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send message <FiSend />
            </button>
            {sent && <p className="text-sm text-brand-400">Opening your email app…</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
