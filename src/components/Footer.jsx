import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { navLinks, profile } from "../data/cv";

const Footer = () => (
  <footer className="relative mt-24 border-t border-white/10 bg-ink-950">
    <div className="container-x grid gap-10 py-14 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-2 font-display text-xl font-bold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-500 text-sm text-ink-950">
            AQ
          </span>
          {profile.name}
        </div>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
          {profile.role} — quality-first mindset, sharp eye for detail, and a love for finding the bugs before users do.
        </p>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">Quick Links</h4>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-slate-400 transition hover:text-brand-400">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">Contact</h4>
        <ul className="space-y-3 text-sm text-slate-400">
          <li className="flex items-center gap-3"><FiMapPin className="text-brand-400" /> {profile.location}</li>
          <li><a href={profile.phoneHref} className="flex items-center gap-3 hover:text-brand-400"><FiPhone className="text-brand-400" /> {profile.phone}</a></li>
          <li><a href={`mailto:${profile.email}`} className="flex items-center gap-3 break-all hover:text-brand-400"><FiMail className="text-brand-400" /> {profile.email}</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-400"><FiLinkedin className="text-brand-400" /> LinkedIn</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/5">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 transition hover:text-brand-400"
        >
          Back to top <FiArrowUp />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
