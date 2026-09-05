# art.elier by Alina — Website

Deine Website ist mit **Next.js**, **React**, **TypeScript** und **Tailwind CSS** gebaut. Du musst nichts davon im Detail verstehen — diese Anleitung zeigt dir genau, welche Datei du für welche Änderung öffnen musst.

## 1. Welche Dateien wurden erstellt?

```
artelier/
├── public/images/              → alle Bilder (Gemälde, Hero-Bild, OG-Bild)
│   └── paintings/               → ein Bild pro Gemälde
├── src/
│   ├── app/                     → eine Seite pro Ordner
│   │   ├── page.tsx              → Home
│   │   ├── shop/page.tsx         → Shop-Übersicht
│   │   ├── shop/[slug]/page.tsx  → Detailseite eines einzelnen Gemäldes
│   │   ├── commissions/page.tsx  → Commissions-Seite
│   │   ├── about/page.tsx        → About-Seite
│   │   ├── contact/page.tsx      → Contact-Seite
│   │   ├── layout.tsx            → Rahmen um jede Seite (Fonts, Nav, Footer, SEO)
│   │   ├── globals.css           → globale Styles
│   │   ├── robots.ts / sitemap.ts → SEO-Dateien (automatisch erzeugt)
│   ├── components/               → wiederverwendbare Bausteine (Navbar, Footer, Formulare, Karten)
│   └── data/
│       ├── site.ts               → ALLE Texte, Kontaktdaten, Instagram-Link
│       └── paintings.ts          → ALLE Gemälde (Bild, Titel, Preis, Größe, Status)
├── tailwind.config.ts            → Farben & Schriften (Design-System)
└── package.json
```

Für den Alltag brauchst du eigentlich nur zwei Dateien:
**`src/data/paintings.ts`** (Gemälde) und **`src/data/site.ts`** (Texte & Kontakt).

## 2. Wo füge ich meine Gemälde ein?

1. Lege dein Foto in `public/images/paintings/` ab (z. B. `mein-bild.jpg`).
2. Öffne `src/data/paintings.ts`.
3. Kopiere einen bestehenden Eintrag und passe die Felder an:

```ts
{
  slug: "mein-bild",              // erscheint in der URL: /shop/mein-bild
  title: "Titel des Gemäldes",
  image: "/images/paintings/mein-bild.jpg",
  size: "50 x 70 cm",
  medium: "Oil on canvas",
  price: 350,
  available: true,
  description: "Kurzer Text für die Übersicht.",
  story: "Längerer Text mit der Geschichte hinter dem Bild.",
  featured: true,                 // true = erscheint auf der Startseite unter "Featured Works"
},
```

Das Bild erscheint danach automatisch im Shop und (falls `featured: true`) auf der Startseite.

## 3. Wo ändere ich Preise?

In `src/data/paintings.ts`, beim jeweiligen Gemälde das Feld `price` ändern (nur Zahl, ohne Symbol — das €-Zeichen wird automatisch ergänzt).

## 4. Wo markiere ich ein Gemälde als verkauft?

Beim jeweiligen Gemälde in `src/data/paintings.ts`: `available: false` setzen. Es wird dann überall automatisch als „Sold" angezeigt.

## 5. Wo ändere ich Texte?

- Allgemeine Texte (Headline, Story, Instagram-Text, Kontaktdaten, SEO-Texte): `src/data/site.ts`
- Texte, die nur auf einer bestimmten Seite stehen (z. B. Absätze auf der About-Seite): ebenfalls in `src/data/site.ts`, im jeweiligen Abschnitt (`about`, `commissions`, `hero`, usw.)

## 6. Wie verlinke ich Instagram?

Öffne `src/data/site.ts` und ändere:

```ts
instagramHandle: "@art.elierbyalina",
instagramUrl: "https://instagram.com/art.elierbyalina",
```

Diese Werte werden automatisch im Footer, im Instagram-Abschnitt der Startseite und auf der Contact-Seite verwendet.

## 7. Wie integriere ich später einen echten Online-Shop?

Die Website ist bewusst so gebaut, dass sie **ohne** Shop-System funktioniert: Ein Kaufinteresse führt aktuell zu einer vorausgefüllten E-Mail ("Inquire to Buy" auf der Gemälde-Detailseite).

Wenn du später verkaufen willst, ohne selbst Versand/Zahlung zu organisieren:

- **Stripe Payment Links**: Für jedes Gemälde in deinem Stripe-Dashboard einen Payment Link erstellen und die URL in `src/data/paintings.ts` als neues Feld (z. B. `checkoutUrl`) hinterlegen. Der "Inquire to Buy"-Button in `src/app/shop/[slug]/page.tsx` kann dann auf diesen Link statt auf `mailto:` zeigen.
- **Shopify**: Entweder die Produktseiten direkt in Shopify pflegen und von dort verlinken, oder Shopify als "Buy Button" in die bestehende Seite einbetten.

Beide Optionen erfordern keinen Umbau der restlichen Seite — nur die eine Zeile mit dem Button-Link.

## 8. Formulare anbinden (Commission-Formular & Kontaktformular)

Beide Formulare (`src/components/CommissionForm.tsx` und `src/components/ContactForm.tsx`) zeigen aktuell nur eine Bestätigung an, senden aber noch keine E-Mail. Die einfachste Lösung ohne eigenen Server:

1. Kostenlosen Account bei [formspree.io](https://formspree.io) erstellen.
2. Ein neues Formular anlegen → du bekommst eine URL wie `https://formspree.io/f/xxxxxxx`.
3. In den beiden Formular-Dateien das `<form onSubmit={handleSubmit}>` durch `<form action="https://formspree.io/f/xxxxxxx" method="POST">` ersetzen (und `handleSubmit` kann entfallen).

Formspree leitet dann jede Einsendung direkt an deine E-Mail-Adresse weiter — inklusive Datei-Uploads.

## 9. Website online stellen (Deployment)

Am einfachsten mit **Vercel** (die Firma hinter Next.js, kostenlos für dieses Projekt):

1. Erstelle einen kostenlosen Account auf [vercel.com](https://vercel.com).
2. Lade dieses Projekt in ein GitHub-Repository hoch (oder nutze "Import" → "Upload" bei Vercel, falls verfügbar).
3. Bei Vercel auf "New Project" → dein Repository auswählen → "Deploy" klicken.
4. Nach ein bis zwei Minuten ist die Website live unter einer `.vercel.app`-Adresse.

## 10. Eigene Domain verbinden

1. Domain bei einem Anbieter kaufen (z. B. Namecheap, IONOS, Google Domains-Nachfolger).
2. Im Vercel-Projekt unter "Settings → Domains" die Domain eintragen.
3. Vercel zeigt dir die DNS-Einträge (meist ein `A`-Record oder `CNAME`), die du beim Domain-Anbieter hinterlegen musst.
4. Nach kurzer Zeit (oft wenige Minuten bis Stunden) ist die Domain aktiv.

Danach unbedingt auch die Platzhalter-Domain `https://example.com` in `src/app/layout.tsx`, `src/app/robots.ts` und `src/app/sitemap.ts` durch deine echte Domain ersetzen — das ist wichtig für Google.

## 11. Lokal testen (bevor du etwas veröffentlichst)

Voraussetzung: [Node.js](https://nodejs.org) (Version 18 oder neuer) ist installiert.

```bash
npm install     # einmalig, installiert alle benötigten Pakete
npm run dev     # startet die Website lokal
```

Danach im Browser `http://localhost:3000` öffnen.

## 12. Noch offen / Platzhalter, die du ersetzen solltest

- `[YOUR CITY]` in `src/data/site.ts` (Wohnort/Studio-Ort)
- Alle Bilder in `public/images/` (aktuell nur beige Platzhalter)
- Echte Preise, Größen und Beschreibungen in `src/data/paintings.ts`
- Versandinformationen auf der Gemälde-Detailseite (`[SHIPPING DETAILS / RATES]`)
- Formulare mit Formspree verbinden (siehe Punkt 8)
- Echte Domain in `layout.tsx`, `robots.ts`, `sitemap.ts`

Ich habe absichtlich keine Fakten über dich erfunden, die du mir nicht gegeben hast — deshalb die Platzhalter in eckigen Klammern.
