import Head from 'next/head'

const Meta = () =>
    <div>
        <Head>
            <title>Harrison McGuire</title>
            <meta name="description" content="Hi, I'm Harrison McGuire and this is my personal website. I love web development and game development" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="apple-touch-icon" sizes="180x180" href='static/favicons/apple-touch-icon.png' />
            <link rel="icon" type="image/png" sizes="32x32" href='static/favicons/favicon-32x32.png' />
            <link rel="icon" type="image/png" sizes="16x16" href='static/favicons/favicon-16x16.png' />
            <link rel="manifest" href='static/favicons/manifest.json' />
            <link rel="mask-icon" href='static/favicons/safari-pinned-tab.svg' color="#5bbad5" />
            <meta name="theme-color" content="#00bcd4" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-73742203-1"></script>
            <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-73742203-1');`}} />
        </Head>
        <style jsx global>{`
            *,
            *::before,
            *::after {
                box-sizing: border-box;
            }
            html {
                font-family: sans-serif;
                line-height: 1.15;
                font-size: 10px;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                -ms-overflow-style: scrollbar;
                -webkit-tap-highlight-color: transparent;
            }

            @-ms-viewport {
                width: device-width;
            }

            article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {
                display: block;
            }

            body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #212529;
                text-align: left;
                background-color: #fff;
            }

            [tabindex="-1"]:focus {
                outline: 0 !important;
            }
            
            hr {
                box-sizing: content-box;
                height: 0;
                overflow: visible;
            }
            
            h1, h2, h3, h4, h5, h6 {
                margin-top: 0;
                margin-bottom: 0.5rem;
            }
            
            p {
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            abbr[title],
            abbr[data-original-title] {
                text-decoration: underline;
                -webkit-text-decoration: underline dotted;
                text-decoration: underline dotted;
                cursor: help;
                border-bottom: 0;
            }
        `}</style>
    </div>

export default Meta