import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileEdit,
  LayoutTemplate,
  Download,
  Eye,
  CheckCircle2,
  GripVertical,
  Save,
  ArrowRight,
  ChevronDown,
  Mail,
} from "lucide-react";
import GithubIcon from "../components/GithubIcon";

function LandingPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      q: "Bagaimana QuickCV menjamin CV saya lolos scan mesin ATS?",
      a: "Template ATS kami dirancang dengan struktur kolom tunggal (single-column) standar internasional, urutan heading baku, dan tipografi teks murni tanpa tabel rumit, ikon tersembunyi, atau grafik yang berpotensi membingungkan sistem ATS HRD.",
    },
    {
      q: "Apakah data pribadi saya diunggah ke server pihak ketiga?",
      a: "Sama sekali tidak. QuickCV berjalan murni di sisi peramban (client-side). Seluruh data CV Anda hanya tersimpan di memori lokal (localStorage) perangkat Anda sendiri, menjamin privasi karir dan kerahasiaan informasi kontak Anda 100%.",
    },
    {
      q: "Kapan saya harus menggunakan Template ATS vs Minimal/Modern?",
      a: "Gunakan Template ATS untuk melamar ke korporasi multinasional atau portal karir otomatis. Gunakan Template Minimal atau Modern untuk agensi kreatif, startup teknologi, posisi desain, atau saat mengirimkan CV langsung via email ke recruiter.",
    },
    {
      q: "Mengapa hasil ekspor berbentuk PDF murni dan bukan gambar?",
      a: "QuickCV memanfaatkan rendering vektor browser asli (@media print). Teks di dalam berkas PDF tetap berupa teks nyata yang dapat diseleksi, disorot, dicari dengan Ctrl+F, dan dibaca secara sempurna oleh mesin pemindai dokumen.",
    },
  ];

  return (
    <div className="landing-container">
      <header className="hero-section">
        <h1 className="hero-title">
          Buat CV Professional Anda <br />{" "}
          <span className="hero-highlight">Dalam Hitungan Menit</span>
        </h1>
        <p className="hero-subtitle">
          {" "}
          Isi data diri Anda, pilih template yang tersedia, dan unduh CV anda
          secara gratis tanpa perlu mendaftar.
        </p>
        <button className="hero-cta-btn" onClick={() => navigate("/builder")}>
          Build My CV Now <ArrowRight size={18} />
        </button>

        {/* Floating Hero Preview Card */}
        <div className="hero-preview-card">
          <div className="preview-card-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="preview-title">QuickCV Live Builder Preview</span>
          </div>
          <div className="preview-card-body">
            <div className="skeleton-header"></div>
            <div className="skeleton-line full"></div>
            <div className="skeleton-line medium"></div>
            <div className="skeleton-block"></div>
          </div>
        </div>
      </header>
      {/* 2. HOW IT WORKS SECTION */}
      <section className="how-it-works-section">
        <h2 className="section-title">3 Langkah Mudah Membuat CV</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon">
              <FileEdit size={28} />
            </div>
            <span className="step-number">Langkah 1</span>
            <h3>Isi Informasi</h3>
            <p>
              Lengkapi informasi diri, pengalaman kerja, pendidikan, dan
              keahlian Anda.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <LayoutTemplate size={28} />
            </div>
            <span className="step-number">Langkah 2</span>
            <h3>Pilih Template</h3>
            <p>
              Pilih dari template ATS-friendly, Modern, atau Minimal sesuai
              bidang pekerjaan Anda.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <Download size={28} />
            </div>
            <span className="step-number">Langkah 3</span>
            <h3>Unduh PDF</h3>
            <p>
              Cetak atau unduh CV Anda secara instan sebagai berkas PDF yang
              rapi dan profesional.
            </p>
          </div>
        </div>
      </section>
      {/* 3. FEATURES & TEMPLATES SHOWCASE */}
      <section className="features-section">
        <h2 className="section-title">Fitur Unggulan</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Eye size={26} />
            </div>
            <h3>Live Real-Time Preview</h3>
            <p>
              Lihat setiap perubahan data yang Anda ketik secara langsung pada
              dokumen CV.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <CheckCircle2 size={26} />
            </div>
            <h3>ATS-Friendly Formats</h3>
            <p>
              Format templat dirancang agar mudah dibaca oleh sistem penyeleksi
              CV (ATS).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <GripVertical size={26} />
            </div>
            <h3>Drag & Drop Reorder</h3>
            <p>
              Ubah urutan pengalaman dan pendidikan dengan mudah hanya dengan
              menggeser kotak.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Save size={26} />
            </div>
            <h3>Auto-Save Lokal</h3>
            <p>
              Data Anda tersimpan secara otomatis di peramban sehingga aman dari
              gangguan.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="faq-section">
        <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
        <p className="faq-subtitle">
          Jawaban teknis dan praktis seputar pembuatan CV profesional bersama QuickCV.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => setOpenFaq(isOpen ? null : index)}
              >
                <div className="faq-question">
                  <h3>{item.q}</h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="faq-chevron-wrapper"
                  >
                    <ChevronDown size={20} className="faq-chevron" />
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="faq-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.05, ease: "easeOut" },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15, ease: "easeIn" },
                        },
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <motion.p
                        className="faq-answer"
                        initial={{ y: -6, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -6, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {item.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. MINIMALIST CONTACT FOOTER */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a
              href="https://github.com/Vizzly-nM09"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=fadhlanlim@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="Hubungi via Gmail"
              aria-label="Gmail Contact"
            >
              <Mail size={18} />
              <span>Gmail</span>
            </a>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} QuickCV. Fast, Private & Free CV Builder.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default LandingPage;

