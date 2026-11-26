import type { Metadata } from 'next';
import Script from 'next/script';
import { DM_Sans, Sora } from 'next/font/google';
import './globals.css';
import './gallery.css';
import './contact.css';
import './icons.css';
import './soltex-theme.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '');
const ogImage = siteUrl ? `${siteUrl}/soltex-projeto-01.jpg` : undefined;
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: 'Soltex Energia Solar | Aurora CE',
  description: 'Energia solar para residências, empresas e propriedades rurais em Aurora e região. Projeto, instalação e homologação com a Soltex.',
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: '/' } } : {}),
  openGraph: {
    title: 'Soltex Energia Solar | Aurora CE',
    description: 'Projetos de energia solar em Aurora e região para residências, empresas e propriedades rurais.',
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(ogImage ? { images: [{ url: ogImage, alt: 'Sistema de energia solar instalado pela Soltex Energia Solar' }] } : {}),
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Soltex Energia Solar'
  },
  twitter: { card: 'summary_large_image', title: 'Soltex Energia Solar | Aurora CE', description: 'Projetos de energia solar em Aurora e região.', ...(ogImage ? { images: [ogImage] } : {}) },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' }
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Organization'],
      '@id': siteUrl ? `${siteUrl}/#organization` : undefined,
      name: 'Soltex Energia Solar',
      description: 'Empresa de energia solar e energia fotovoltaica em Aurora, Ceará, com atendimento regional.',
      ...(siteUrl ? { url: siteUrl } : {}),
      logo: siteUrl ? `${siteUrl}/soltex-logo.png` : '/soltex-logo.png',
      image: ogImage || '/soltex-projeto-01.jpg',
      telephone: '+55 88 9834-7697',
      areaServed: [{ '@type': 'City', name: 'Aurora', containedInPlace: { '@type': 'AdministrativeArea', name: 'Ceará' } }],
      knowsAbout: ['Energia solar', 'Energia fotovoltaica', 'Instalação de painéis solares', 'Homologação de sistemas fotovoltaicos'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua General Sampaio, 40',
        addressLocality: 'Aurora',
        addressRegion: 'CE',
        postalCode: '63360-000',
        addressCountry: 'BR'
      }
    },
    {
      '@type': 'WebSite',
      '@id': siteUrl ? `${siteUrl}/#website` : undefined,
      name: 'Soltex Energia Solar',
      ...(siteUrl ? { url: siteUrl } : {}),
      inLanguage: 'pt-BR',
      publisher: siteUrl ? { '@id': `${siteUrl}/#organization` } : { '@type': 'Organization', name: 'Soltex Energia Solar' }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        {children}
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');
`}
            </Script>
          </>
        ) : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
