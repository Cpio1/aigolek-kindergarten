# «Айгөлек» балабақшасы — лендинг

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Motion · Lucide.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Vercel-ге қосымша баптаусыз жариялауға болады. Қаласаңыз `NEXT_PUBLIC_SITE_URL` (мысалы, `https://aigolek.kz`) орнатыңыз — OG-сілтемелер үшін.

## Фотолар — `public/images/`

Файлдар build кезінде автоматты түрде табылады (тек бар файлдар қолданылады, 404 болмайды).
Кеңейтімі кез келген: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`.

| Файл атауы | Қайда шығады |
|---|---|
| `logo.*` | Navbar, footer, favicon |
| `main-page.*` | Басты бөлім (Hero) |
| `main-page2.*` | «Біз туралы» |
| `group1.*`, `group2.*` | Топ карточкалары (міндетті емес) |
| `robotics.*`, `logoped.*` | Үйірме карточкалары (міндетті емес) |
| `food*.*` / `nutrition*.*` | Тамақтану бөлімі (міндетті емес) |
| қалғандары (`image1.jpg`, `image2.jpg`…) | Галерея (алғашқы 6 + «Тағы көрсету») |

Фото жоқ болса — әдемі уақытша иллюстрациялар көрсетіледі. Жаңа фото қосқаннан кейін `npm run build` қайта іске қосыңыз (Vercel-де — жай ғана push).

## Мәтіндер мен деректер

Барлық мәтін, байланыс, топ атаулары — `src/data/kindergarten.ts`.
2GIS: тексерілген ұйым ID-і жоқ, сондықтан мекенжай бойынша іздеу сілтемесі тұр. 2GIS-тен виджет сілтемесін алсаңыз, `map.embedUrl` өрісіне қойыңыз.

## Құрылым

- `src/components/desktop/*` — ≥1024px нұсқасы
- `src/components/mobile/*` — <1024px нұсқасы
- `src/components/shared/*` — ортақ (WhatsApp, галерея лайтбоксы, безендірулер, карта)
- `src/lib/images.ts` — фотоларды автоматты анықтау
