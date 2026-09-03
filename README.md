# Hoki Nine Landing Page

Landing page mobile-first untuk Hoki Nine, dibuat dengan Next.js dan siap dideploy ke Vercel.

## Fitur
- Fintech-style modern UI
- Mobile-first
- Hero + preview Hoki Nine Mobile
- Highlight harga reseller
- Pricelist iframe dengan 8 kategori
- Produk Pulsa/Data, PLN, PPOB, Game, E-Wallet
- CTA download Google Play
- Tombol WhatsApp
- Ringan, tanpa image asset besar
- Siap deploy ke Vercel

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## WhatsApp
Karena nomor WhatsApp belum diberikan, tombol WhatsApp saat ini membuka WhatsApp dengan pesan siap kirim dan membiarkan pengguna memilih kontak.

Jika ingin tombol menuju nomor agen/customer service tertentu, ubah:

```ts
const whatsappUrl = `https://wa.me/?text=${whatsappText}`;
```

menjadi:

```ts
const whatsappUrl = `https://wa.me/628XXXXXXXXXX?text=${whatsappText}`;
```

Ganti `628XXXXXXXXXX` dengan nomor WhatsApp resmi Hoki Nine.

## Pricelist iframe
URL iframe sudah diisi sesuai URL yang diberikan. Jika domain `webapp.hokinine.id` mengirim header yang melarang iframe (misalnya `X-Frame-Options` atau CSP `frame-ancestors`), browser akan menolak menampilkannya. Dalam kondisi tersebut, gunakan link langsung ke halaman pricelist atau sesuaikan header di server sumber.

## Deploy Vercel
1. Push project ke GitHub/GitLab/Bitbucket.
2. Import repository di Vercel.
3. Framework akan terdeteksi sebagai Next.js.
4. Jalankan deploy.

## Vercel deployment

This is a **Next.js** project. In Vercel, set **Framework Preset = Next.js** and leave
**Output Directory** empty/default. Do not set it to `public`.

A `vercel.json` with `"framework": "nextjs"` is included.
