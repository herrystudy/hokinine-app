 "use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgePercent,
  Banknote,
  CheckCircle2,
  ChevronRight,
  Download,
  Gamepad2,
  Globe2,
  Menu,
  MessageCircle,
  Smartphone,
  Sparkles,
  TicketPercent,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

const LOGO =
  "https://ik.imagekit.io/hokinine/icon.png?updatedAt=1788405610630";

const PLAYSTORE =
  "https://play.google.com/store/apps/details?id=com.appsolution.hokinine&hl=id";

const PRICELISTS = [
  ["PROMO", "https://webapp.hokinine.id/pricelist?kategori=promo"],
  ["REGULER", "https://webapp.hokinine.id/pricelist?kategori=reguler"],
  ["TRANSFER", "https://webapp.hokinine.id/pricelist?kategori=transfer"],
  ["TOKEN", "https://webapp.hokinine.id/pricelist?kategori=token"],
  ["WALLET", "https://webapp.hokinine.id/pricelist?kategori=wallet"],
  ["GAMES", "https://webapp.hokinine.id/pricelist?kategori=games"],
  ["MASA AKTIF", "https://webapp.hokinine.id/pricelist?kategori=masa%20aktif"],
  ["PPOB", "https://webapp.hokinine.id/pricelist?kategori=ppob"],
];

const PRODUCTS = [
  { icon: Smartphone, title: "Pulsa & Data", text: "Produk operator untuk kebutuhan harian pelanggan." },
  { icon: Zap, title: "Token PLN", text: "Isi ulang listrik prabayar dengan proses praktis." },
  { icon: Banknote, title: "PPOB", text: "Perluas layanan agen dengan berbagai pembayaran." },
  { icon: Gamepad2, title: "Game", text: "Top up game populer dari satu platform." },
  { icon: WalletCards, title: "E-Wallet", text: "Melayani isi saldo dompet digital pelanggan." },
  { icon: TicketPercent, title: "Promo", text: "Pantau pilihan produk promo dan harga menarik." },
];

const BENEFITS = [
  "Satu aplikasi untuk banyak kebutuhan transaksi",
  "Harga reseller dapat dipantau langsung",
  "Dirancang untuk aktivitas agen dari HP",
  "Produk digital lengkap dalam satu ekosistem",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [priceTab, setPriceTab] = useState(0);

  const whatsappText = encodeURIComponent(
    "Halo Hoki Nine, saya ingin mendapatkan informasi untuk menjadi agen."
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappText}`;

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#home" className="brand" aria-label="Hoki Nine">
            <img src={LOGO} alt="Hoki Nine" />
            <span>Hoki Nine</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#produk" onClick={() => setMenuOpen(false)}>Produk</a>
            <a href="#harga" onClick={() => setMenuOpen(false)}>Harga Reseller</a>
            <a href="#keunggulan" onClick={() => setMenuOpen(false)}>Keunggulan</a>
            <a href="#download" onClick={() => setMenuOpen(false)}>Download</a>
            <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp
            </a>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-glow one" />
        <div className="hero-glow two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> Partner transaksi digital untuk agen</div>
            <h1>
              Satu aplikasi.
              <br />
              <span>Lebih banyak transaksi.</span>
            </h1>
            <p className="hero-lead">
              Hoki Nine membantu agen menjual pulsa, data, PLN, PPOB, game,
              e-wallet dan produk digital lainnya dengan pengalaman yang cepat
              dan praktis dari HP.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href={PLAYSTORE} target="_blank" rel="noreferrer">
                <Download size={19} /> Download Hoki Nine Mobile
              </a>
              <a className="btn secondary" href="#harga">
                Lihat harga reseller <ArrowRight size={18} />
              </a>
            </div>

            <div className="hero-proof">
              <div><CheckCircle2 size={17} /> Mobile-first</div>
              <div><CheckCircle2 size={17} /> Banyak kategori</div>
              <div><CheckCircle2 size={17} /> Cocok untuk agen</div>
            </div>
          </div>

          <div className="phone-stage" aria-label="Preview aplikasi Hoki Nine Mobile">
            <div className="float-card top-card">
              <BadgePercent size={19} />
              <div><strong>Harga reseller</strong><small>Praktis dipantau</small></div>
            </div>

            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="app-top">
                  <img src={LOGO} alt="" />
                  <div><b>Hoki Nine</b><span>Selamat datang, Agen</span></div>
                </div>
                <div className="balance">
                  <span>Saldo Anda</span>
                  <strong>Rp 2.500.000</strong>
                  <div className="balance-pill">Aktif • Siap transaksi</div>
                </div>
                <div className="mini-title">Layanan Favorit</div>
                <div className="mini-grid">
                  {PRODUCTS.slice(0, 4).map(({ icon: Icon, title }) => (
                    <div className="mini-service" key={title}>
                      <span><Icon size={18} /></span><b>{title}</b>
                    </div>
                  ))}
                </div>
                <div className="mini-title">Transaksi Terbaru</div>
                <div className="transaction">
                  <div className="tx-icon"><Zap size={17} /></div>
                  <div><b>Token PLN</b><span>Berhasil • 10.00 WIB</span></div>
                  <strong>Rp 100.000</strong>
                </div>
                <div className="transaction">
                  <div className="tx-icon"><Smartphone size={17} /></div>
                  <div><b>Paket Data</b><span>Berhasil • 09.42 WIB</span></div>
                  <strong>Rp 25.000</strong>
                </div>
              </div>
            </div>

            <div className="float-card bottom-card">
              <div className="status-dot" />
              <div><strong>Transaksi lebih praktis</strong><small>Kelola dari genggaman</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ticker">
        <div className="container ticker-inner">
          <span><Globe2 size={17} /> PRODUK DIGITAL LENGKAP</span>
          <i /> <span>PULSA</span><i /><span>DATA</span><i /><span>PLN</span><i />
          <span>PPOB</span><i /><span>GAME</span><i /><span>E-WALLET</span>
        </div>
      </section>

      <section id="produk" className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">SEMUA DALAM SATU PLATFORM</div>
              <h2>Produk yang bisa dijual agen</h2>
            </div>
            <p>Bangun layanan digital yang lebih lengkap untuk pelanggan tanpa perlu berpindah-pindah platform.</p>
          </div>

          <div className="product-grid">
            {PRODUCTS.map(({ icon: Icon, title, text }) => (
              <article className="product-card" key={title}>
                <div className="icon-box"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#harga">Lihat produk <ChevronRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="harga" className="price-section section">
        <div className="container">
          <div className="section-head light">
            <div>
              <div className="section-kicker">TRANSPARANSI HARGA</div>
              <h2>Harga reseller, langsung lihat.</h2>
            </div>
            <p>Pilih kategori untuk melihat daftar harga terbaru dari Hoki Nine.</p>
          </div>

          <div className="price-shell">
            <div className="price-tabs">
              {PRICELISTS.map(([name], index) => (
                <button
                  key={name}
                  className={priceTab === index ? "active" : ""}
                  onClick={() => setPriceTab(index)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="iframe-wrap">
              <iframe
                key={PRICELISTS[priceTab][1]}
                src={PRICELISTS[priceTab][1]}
                title={`Pricelist ${PRICELISTS[priceTab][0]}`}
                loading="lazy"
              />
            </div>
          </div>
          <p className="iframe-note">Jika daftar harga tidak tampil, situs tujuan kemungkinan membatasi embedding iframe. Gunakan tombol kategori di atas untuk membuka sumber harga secara langsung.</p>
        </div>
      </section>

      <section id="keunggulan" className="section">
        <div className="container advantage-grid">
          <div className="mock-dashboard">
            <div className="dashboard-head">
              <div className="dash-brand"><img src={LOGO} alt="" /><b>Hoki Nine Mobile</b></div>
              <span className="live"><span /> ONLINE</span>
            </div>
            <div className="dash-card">
              <span>Total Transaksi</span>
              <strong>Rp 8.750.000</strong>
              <small>↑ aktivitas agen hari ini</small>
            </div>
            <div className="dash-row">
              <div><small>Produk</small><b>128+</b></div>
              <div><small>Layanan</small><b>24/7*</b></div>
              <div><small>Platform</small><b>Mobile</b></div>
            </div>
            <div className="dash-list">
              {["Pulsa & Data", "Token PLN", "PPOB", "Game & E-Wallet"].map((item, i) => (
                <div key={item}><span className="list-icon">{i + 1}</span><b>{item}</b><ChevronRight size={16} /></div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-kicker">KENAPA HOKI NINE?</div>
            <h2>Dirancang untuk ritme kerja agen.</h2>
            <p className="section-desc">
              Tampilan ringkas, fokus pada transaksi, dan nyaman digunakan dari perangkat mobile.
            </p>
            <div className="benefit-list">
              {BENEFITS.map((item) => (
                <div className="benefit" key={item}>
                  <CheckCircle2 size={21} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a className="text-link" href={PLAYSTORE} target="_blank" rel="noreferrer">
              Coba Hoki Nine Mobile <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="download" className="download-section">
        <div className="container download-card">
          <div>
            <div className="section-kicker">MULAI SEKARANG</div>
            <h2>Siap tambah peluang transaksi?</h2>
            <p>Download Hoki Nine Mobile dan mulai kelola kebutuhan transaksi digital dari HP.</p>
          </div>
          <div className="download-actions">
            <a className="btn white" href={PLAYSTORE} target="_blank" rel="noreferrer">
              <Download size={19} /> Download di Google Play
            </a>
            <a className="btn outline-white" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={19} /> Tanya via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container agent-grid">
          <div>
            <div className="section-kicker">JADI AGEN</div>
            <h2>Satu langkah untuk mulai membangun bisnis digital.</h2>
          </div>
          <div>
            <p className="section-desc">
              Cocok untuk konter, toko, reseller, komunitas, maupun siapa pun yang ingin menyediakan layanan transaksi digital.
            </p>
            <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={19} /> Hubungi Hoki Nine
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="brand footer-brand"><img src={LOGO} alt="Hoki Nine" /><span>Hoki Nine</span></div>
          <div>© {new Date().getFullYear()} Hoki Nine. Semua hak dilindungi.</div>
          <a href="#home">Kembali ke atas ↑</a>
        </div>
      </footer>

      <a className="floating-wa" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <MessageCircle size={24} />
      </a>
    </main>
  );
}
