export const site = {
  name: "Miray Eslek",
  role: "Müzisyen & Sosyolog",
  tagline: "Müzisyen · Performans Sanatçısı · Araştırmacı",
  intro:
    "Klarinet, ses ve doğaçlama üzerinden müziği; sosyoloji ve yazı üzerinden şehri araştırır.",
  email: "mirayeslek@gmail.com",
  social: {
    instagram: "https://instagram.com/mirayeslek",
    facebook: "https://facebook.com/mirayeslek",
    linkedin: "https://linkedin.com/in/miray-eslek-198642201",
    ispo: "https://instagram.com/istanbulsoundpaintingorkestra",
    youtube: "https://www.youtube.com/watch?v=5pxOEkebV0w",
    dergipark: "https://dergipark.org.tr/tr/pub/@miray-eslek",
  },
  images: {
    poster: "/images/poster-cerkes-ridvan.jpg",
    portrait: "/images/portre-studyo.jpg",
    hero: "/images/hero-sahne.jpg",
    bioImage: "/images/sokak-performans.jpg",
    afife: "/images/afife-odul.jpg",
    afifeTeam: "/images/afife-ekip.jpg",
    soundpainting: "/images/soundpainting-atolyetez.jpg",
  },
};

export const highlight = {
  year: "2025",
  award: "Yılın En Başarılı Sahne Müziği",
  ceremony: "28. Yapı Kredi Afife Tiyatro Ödülleri",
  work: "Aşk Yolunda İstanbul'da Neler Olmuş? Çerkes Rıdvan'ın Dolabı",
  workShort: "Çerkes Rıdvan'ın Dolabı",
  festival: "İstanbul Tiyatro Festivali",
  description:
    "Müzik ekibiyle Türkiye'nin en prestijli tiyatro ödüllerinden birinde sahne müziği dalında ödüle layık görüldü.",
};

export const artistStatement = {
  summary:
    "Klarnet, vokal, doğaçlama ve araştırma pratikleri üzerinden sesin, müziğin ve toplumsal deneyimin kesişiminde çalışan multidisipliner sanatçı.",
  homeThoughts: [
    "Ses, benim için yalnızca duyulan bir yapı değil; içinde yaşadığımız dünyayı anlamanın yollarından biridir.",
    "Doğaçlama benim için yalnızca anlık üretim değil; karşılaşma, iletişim ve birlikte düşünme biçimidir.",
  ],
  homeIntro: [
    "Klarnet, vokal ve doğaçlama pratiklerini araştırma ile performans arasında taşır; ses, gürültü ve dinleme üzerine çalışır.",
    "Sahne müziği, kolektif doğaçlama ve soundpainting atölyeleri aracılığıyla müziğin toplumsal boyutunu araştırır.",
  ],
};

export const featuredWorks = [
  {
    title: "Tiyatro & Sahne",
    description: "Sahne müziği ve tiyatro projeleri.",
    image: "/images/poster-cerkes-ridvan.jpg",
    href: "/isler#tiyatro",
  },
  {
    title: "Soundpainting",
    description: "Kolektif doğaçlama ve canlı kompozisyon.",
    image: "/images/soundpainting-atolyetez.jpg",
    href: "/isler#soundpainting",
  },
  {
    title: "Performanslar",
    description: "Konser, duo ve sahne performansları.",
    image: "/images/hero-sahne.jpg",
    href: "/isler#performans",
  },
];

export type GundemItem = {
  label: string;
  title: string;
  detail: string;
  href?: string;
};

export const gundemItems: GundemItem[] = [
  {
    label: "Yaklaşan performans",
    title: "Yakında duyurulacak",
    detail: "Yeni konser ve sahne performansları",
    href: "/etkinlikler?tab=upcoming",
  },
  {
    label: "Yeni proje",
    title: "ÇAMUR",
    detail: "Fişekhane · İnteraktif performans",
    href: "/etkinlikler?tab=current",
  },
  {
    label: "Son yayın",
    title: "Sephardic Songs",
    detail: "Yüksek lisans tezi · İTÜ MİAM · 2023",
    href: "/arastirma",
  },
  {
    label: "Son atölye",
    title: "Soundpainting ve İhtimaller",
    detail: "Performans sanatları buluşması · 2025",
    href: "/etkinlikler?tab=past",
  },
];

export type MediaItem = {
  title: string;
  category: string;
  year: string;
  description?: string;
  href?: string;
  external?: string;
};

export const mediaSections = {
  video: [
    {
      title: "İstanbul Soundpainting Orkestra",
      category: "Kolektif doğaçlama",
      year: "2021",
      description: "Canlı kompozisyon ve doğaçlama üzerine performans kaydı.",
      external: "https://www.youtube.com/watch?v=5pxOEkebV0w",
    },
  ] as MediaItem[],
  photo: [] as MediaItem[],
  audio: [] as MediaItem[],
  press: [] as MediaItem[],
};

export const worksSections = [
  {
    id: "tiyatro",
    title: "Tiyatro & Sahne",
    description:
      "Tiyatro ve sahne projelerinde müzik tasarımı ve performans.",
    image: "/images/poster-cerkes-ridvan.jpg",
  },
  {
    id: "performans",
    title: "Performanslar",
    description: "Konser, duo ve sahne performansları.",
    image: "/images/hero-sahne.jpg",
  },
  {
    id: "soundpainting",
    title: "Soundpainting",
    description:
      "Kolektif doğaçlama, atölye ve canlı kompozisyon çalışmaları.",
    image: "/images/soundpainting-atolyetez.jpg",
  },
];

export const bio = {
  intro:
    "Miray Eslek, klarnet, vokal, doğaçlama ve araştırma pratikleri üzerinden sesin, müziğin ve toplumsal deneyimin kesişiminde çalışan multidisipliner bir sanatçıdır.",
  paragraphs: [
    "Klarinet ve ses onun için yalnızca enstrüman değil; dinlemenin, düşünmenin ve bir arada üretmenin yollarıdır. Konser, festival, duo performans ve sahne çalışmaları yürütmekte; müzik pratiğini performans ile araştırma arasında sürekli hareket eden bir alan olarak ele almaktadır.",
    "2009'dan bu yana İstanbul Klarnet Korosu'nun sanatçısıdır. Koronun konser ve projelerinde aktif olarak yer almakta; festivallere katılarak klarnetçi olarak sahne deneyimini sürdürmektedir.",
    "Doğaçlama onun için yalnızca anlık üretim değil; karşılaşma, iletişim ve birlikte düşünme biçimidir. 2012'den bu yana İstanbul Soundpainting Orkestrası'nın kurucu üyelerindendir. Soundpainting ve İhtimaller başlığı altındaki atölye buluşmalarıyla kolektif doğaçlama ve canlı kompozisyon pratiğini farklı mekân ve topluluklarla buluşturmaktadır.",
    "Mimar Sinan Güzel Sanatlar Üniversitesi'nde sosyoloji eğitimini tamamlamıştır. Müzik sosyolojisi, gürültü ve kent deneyimi üzerine akademik çalışmalarını İstanbul Teknik Üniversitesi MİAM'da sürdürmüş; Sefarad şarkılarının kültürel miras olarak incelendiği yüksek lisans teziyle mezun olmuştur. Arter'deki Sonified buluşmaları, Buluştur Beyoğlu konuşma dizisi ve Beyoğlu'nun sesleri üzerine yürüttüğü çalışmalar, araştırma ile sahne pratiği arasındaki geçişi beslemektedir.",
    "Ayşe Akarsu ile birlikte nuyOmusic çatısı altında çocuklardan yetişkinlere uzanan atölye ve performans çalışmaları yürütmektedir. Müzisyen Nihal ile kaydettiği This Fire, Hakan Kurşun'un önerisiyle başlayan Her Güne Bir Melodi serisi ve cml.act ile yürüttüğü ÇAMUR; beden, ses ve temasın aynı anda sahnelendiği işlerinden bazılarıdır.",
    "2025'te İstanbul Tiyatro Festivali'nde sahnelenen Çerkes Rıdvan'ın Dolabı'nın müzik ekibi, 28. Yapı Kredi Afife Tiyatro Ödülleri'nde Yılın En Başarılı Sahne Müziği ödülüne layık görülmüştür. Liverpool Biennial, Erasmus+ projeleri ve uluslararası işbirliklerinde müzisyen ve araştırmacı olarak yer almaya devam etmekte; konser, atölye ve yazı arasında süren bir pratikle çalışmalarını sürdürmektedir.",
  ],
};

export type EventItem = {
  date: string;
  month?: string;
  title: string;
  venue: string;
  role: string;
  category: "konser" | "atolye" | "tiyatro" | "panel";
  image?: string;
  description?: string;
};

const camurEvent = {
  date: "2026",
  month: "Haz",
  title: "ÇAMUR",
  venue: "Fişekhane · Büyükyalı",
  role: "Performans · müzik",
  category: "tiyatro" as const,
  image: "/images/camur-afis.jpg",
  description:
    "Bedenin taşıdığı hikâyeler, sesin görünmeyen katmanları ve temasın dönüştürücü gücüyle kurulan performatif bir alan.",
};

export const events = {
  upcoming: [] as EventItem[],
  current: [camurEvent],
  past: [
    {
      date: "2025",
      title: "Çerkes Rıdvan'ın Dolabı",
      venue: "İstanbul Tiyatro Festivali · Bahçe Galata",
      role: "Sahne müziği · Afife ödülü",
      category: "tiyatro" as const,
      image: "/images/poster-cerkes-ridvan.jpg",
      description:
        "Gökçe Gürçay müzik direktörlüğündeki ekip, 28. Yapı Kredi Afife Tiyatro Ödülleri'nde Yılın En Başarılı Sahne Müziği ödülünü kazandı.",
    },
    {
      date: "2025",
      month: "Ağu",
      title: "Ayaküstü Konser",
      venue: "Müze Gazhane · İklim Müzesi önü",
      role: "Klarinet · Cem Mazlum ile duo",
      category: "konser" as const,
      image: "/images/ayakustu-konser.jpg",
      description:
        "1 klarnet 1 perküsyon formatında, doğaçlama ve melodinin buluştuğu açık hava konseri.",
    },
    {
      date: "2025",
      month: "Ağu",
      title: "Tico Band",
      venue: "Müze Gazhane",
      role: "Klarinet · loop station",
      category: "konser" as const,
      image: "/images/tico-poster.jpg",
      description:
        "Klarnet ve loop station ile klarnet–ud duo performansı; İklim Müzesi önünde gerçekleşen ilk konser.",
    },
    {
      date: "2025",
      title: "29. İstanbul Tiyatro Festivali",
      venue: "Zorlu PSM",
      role: "Klarinet · KeKeÇa & DANS+1",
      category: "tiyatro" as const,
      image: "/images/festival-kekeca.jpg",
      description:
        "Türkiye Down Sendromu Derneği DANS+1 ekibi ve KeKeÇa'nın beden perküsyonu performansına klarnet eşlik etti.",
    },
    {
      date: "2025",
      title: "MANG JAM",
      venue: "Mang School · Komünite Social",
      role: "Sahne performansı",
      category: "konser" as const,
      image: "/images/mang-jam.jpg",
      description:
        "Çeşitli sanatçılarla bir araya gelinen kolektif doğaçlama ve performans buluşması.",
    },
    {
      date: "2025",
      month: "Eki",
      title: "Soundpainting ve İhtimaller",
      venue: "Studioo.Flow · Beşiktaş",
      role: "Atölye yürütücüsü",
      category: "atolye" as const,
      image: "/images/soundpainting-ihtimaller-5.jpg",
      description:
        "Soundpainting işaret dili seviye 1, uygulamalar ve denemeler üzerine performans sanatları buluşması.",
    },
    {
      date: "2024",
      month: "Kas",
      title: "Beyoğlu'nda Ses ve Gürültüleri \"Şimdide Düşlemek\"",
      venue: "Tokatlıyan İş Hanı · Buluştur Beyoğlu",
      role: "Konuşmacı",
      category: "panel" as const,
      image: "/images/bulustur-beyoglu.jpg",
      description:
        "Açık Kapılar konuşma dizisi kapsamında Beyoğlu'nun sesleri ve gürültüleri üzerine sunum.",
    },
    {
      date: "2024",
      month: "Ağu",
      title: "Soundpainting ve İhtimaller 3",
      venue: "Çıplak Ayaklar Kumpanyası",
      role: "Atölye yürütücüsü",
      category: "atolye" as const,
      image: "/images/soundpainting-bahce.jpg",
    },
    {
      date: "2024",
      month: "Eki",
      title: "Soundpainting Buluşmaları",
      venue: "Atölye Tez · Üsküdar",
      role: "Atölye yürütücüsü · İSPO",
      category: "atolye" as const,
      image: "/images/soundpainting-atolyetez.jpg",
      description:
        "12 haftalık seri: müzik, hareket ve hikâyelerin buluştuğu doğaçlama odaklı atölye programı.",
    },
    {
      date: "2024",
      month: "May",
      title: "Sınırsız Sesler",
      venue: "Kot 1 Kolektif",
      role: "Soundpainting atölyesi · Nida Aras ile",
      category: "atolye" as const,
      image: "/images/soundpainting-cakstudyo.jpg",
      description:
        "Soundpainting nedir, çeşitli gruplarla nasıl çalışılır ve doğaçlama pratiğine nasıl entegre edilir sorularına odaklanan atölye.",
    },
    {
      date: "2024",
      month: "Mar",
      title: "Soundpainting ve İhtimaller",
      venue: "Kocaeli Üniversitesi GSF Müzik Bölümü",
      role: "Atölye yürütücüsü",
      category: "atolye" as const,
      image: "/images/soundpainting-kou.jpg",
      description:
        "Öğrencilerle kolektif doğaçlama, dinleme ve senkronize melodi geliştirme üzerine buluşma.",
    },
    {
      date: "2023",
      title: "Her Güne Bir Melodi",
      venue: "İTÜ MİAM",
      role: "100 günlük klarinet serisi",
      category: "konser" as const,
      image: "/images/portre-klarnet.jpg",
      description:
        "Hakan Kurşun'un önerisiyle başlayan, her gün bir melodi üreten 100 günlük kişisel proje.",
    },
    {
      date: "2023",
      title: "This Fire",
      venue: "İTÜ MİAM Stüdyoları",
      role: "Klarinet · Nihal ile canlı kayıt",
      category: "konser" as const,
      image: "/images/this-fire.jpg",
      description:
        "Nihal ile kaydedilen canlı performans; havada ilerleyen klarnet melodileri.",
    },
    {
      date: "2023",
      month: "Nis",
      title: "Atölye Kekik",
      venue: "Termal",
      role: "Klarinet performansı",
      category: "konser" as const,
      image: "/images/atolye-kekik.jpg",
    },
    {
      date: "2019",
      title: "GitarLive",
      venue: "İstanbul",
      role: "Klarinet & vokal",
      category: "konser" as const,
      image: "/images/gitarlive-tres.jpg",
    },
    {
      date: "2019",
      title: "SGKM Konseri",
      venue: "Koç Üniversitesi",
      role: "Performans",
      category: "konser" as const,
      image: "/images/ispo-sgkm.jpg",
    },
    {
      date: "2016",
      title: "İSPO Konseri",
      venue: "60m² Taksim",
      role: "Klarinet & vokal",
      category: "konser" as const,
    },
    {
      date: "2012",
      title: "EcoFest İstanbul",
      venue: "İstanbul",
      role: "İSPO performansı",
      category: "konser" as const,
    },
  ] satisfies EventItem[],
};

export const publications = [
  {
    year: "2023",
    title:
      "Sephardic Songs: An Investigation of Music as a Cultural, Emotional, and Nostalgic Heritage",
    type: "Yüksek Lisans Tezi",
    venue: "İTÜ MİAM",
  },
  {
    year: "2019",
    title: "Sesin Yolculuğunda Gürültünün Yeri ve Toplumsallığı",
    type: "Yüksek Lisans Tezi",
    venue: "MSGSÜ",
  },
  {
    year: "2018",
    title: "20. yy Postmodern Müzik Anlayışından 21. yy Gürültü Kavramına",
    type: "Bildiri",
    venue: "VIII. Uluslararası H.A.S. Sempozyumu",
  },
  {
    year: "2017",
    title:
      "Patrick Süskind'in Kontrabas Tiyatro Metninde Müzik, Gürültü ve Toplumsal Cinsiyet Çalışmaları",
    type: "Akademik Makale",
    venue: "Online Journal of Music Sciences",
    link: "https://dergipark.org.tr/tr/pub/@miray-eslek",
  },
];

export const talks = [
  {
    year: "2024",
    title: "Beyoğlu'nda Ses ve Gürültüleri \"Şimdide Düşlemek\"",
    venue: "Buluştur Beyoğlu · Tokatlıyan İş Hanı",
    type: "Konuşma",
  },
  {
    year: "2023",
    title: "Sonified",
    venue: "Arter İstanbul",
    type: "Buluşma & performans",
  },
  {
    year: "2019",
    title: "Sesin Yolculuğunda Gürültünün Yeri ve Toplumsallığı",
    venue: "MSGSÜ Müzikoloji Bölümü",
    type: "Konuşma",
  },
  {
    year: "—",
    title: "The İstanbul Encyclopedia and Music: The City, Noises and Possibilities",
    venue: "MSGSÜ — VCD107",
    type: "Ders & Atölye",
  },
  {
    year: "2017",
    title: "Dünya Radyo Günü Projesi",
    venue: "UNESCO",
    type: "Proje",
  },
];

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/biyografi", label: "Biyografi" },
  { href: "/isler", label: "Çalışmalar" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/arastirma", label: "Araştırma" },
  { href: "/medya", label: "Medya" },
  { href: "/iletisim", label: "İletişim" },
];
