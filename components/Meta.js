import Head from 'next/head'

const Meta = () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>Harrison McGuire</title>
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
)

export default Meta