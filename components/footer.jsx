import Link from 'next/link';
import Script from 'next/script';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm">
                <Link
                    href="https://docs.netlify.com/frameworks/next-js/overview/"
                    className="underline transition decoration-dashed text-primary underline-offset-8 hover:opacity-80"
                >
                    Next.js on Netlify
                </Link>
            </p>
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
            />
        </footer>
    );
}
