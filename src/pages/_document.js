import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="font-noto bg-slate-400">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
