import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import Script from 'next/script';  // Import the Script component

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>
                {/* Add the chat widget script here */}
                <Script
                    id="puzzle-loader"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function (a, b) {
                            var loader = a.createElement('script');
                            loader.type = 'text/javascript';
                            loader.src = 'https://app-cdn.puzzel.com/public/js/pzl_loader.js';
                            loader.setAttribute('id', 'pzlModuleLoader');
                            loader.setAttribute('data-customer-id', b);
                            a.body.append(loader);
                        })(document, '90125');`,
                    }}
                    onError={(e) => {
                        console.error('Error loading Puzzel script:', e);
                    }}
                />
            </body>
        </html>
    );
}
