/**
 * Generates a 1200×630 Open Graph / Twitter card for every Insights article,
 * into public/og/<slug>.jpg. Run with `npm run og` after adding or renaming
 * an article, and commit the output — the production build does not run this
 * (it needs native image libraries).
 *
 * Layout: deep-pine ground, brass hairline, category eyebrow, the title set in
 * Newsreader, and the firm's name in the footer. Text is rendered to paths by
 * satori (no font installation needed), then rasterised by sharp.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import sharp from 'sharp';
import { insights, AUTHOR } from '../src/data/insights.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'public', 'og');
const fontDir = path.join(__dirname, 'fonts');

const font = (file) => fs.readFileSync(path.join(fontDir, file));
const fonts = [
    { name: 'Newsreader', data: font('Newsreader-500.ttf'), weight: 500, style: 'normal' },
    { name: 'Newsreader', data: font('Newsreader-Italic-400.ttf'), weight: 400, style: 'italic' },
    { name: 'Lato', data: font('Lato-400.ttf'), weight: 400, style: 'normal' },
    { name: 'Lato', data: font('Lato-700.ttf'), weight: 700, style: 'normal' },
];

// Brand tokens (mirrors src/index.css).
const PINE = '#0B2F24';
const PINE_DEEP = '#071C16';
const CREAM = '#F4EFE6';
const BRASS = '#C6A15B';
const BRASS_LITE = '#E3C88A';

const logoPng = await sharp(path.join(root, 'public', 'logo.png'))
    .resize(88, 88)
    .png()
    .toBuffer();
const logoUri = `data:image/png;base64,${logoPng.toString('base64')}`;

const h = (type, style, children) => ({ type, props: { style, children } });

function card(article) {
    const titleSize = article.title.length > 70 ? 54 : article.title.length > 50 ? 60 : 68;
    return h(
        'div',
        {
            width: 1200,
            height: 630,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 72px 56px',
            backgroundColor: PINE,
            backgroundImage: `radial-gradient(circle at 88% 0%, rgba(198,161,91,0.22) 0%, rgba(198,161,91,0) 42%), linear-gradient(180deg, ${PINE} 0%, ${PINE_DEEP} 100%)`,
            color: CREAM,
            fontFamily: 'Lato',
        },
        [
            // Top: eyebrow
            h('div', { display: 'flex', alignItems: 'center', gap: 16 }, [
                h('div', { width: 36, height: 1, backgroundColor: BRASS }),
                h(
                    'div',
                    {
                        fontSize: 20,
                        fontWeight: 700,
                        letterSpacing: 5,
                        textTransform: 'uppercase',
                        color: BRASS_LITE,
                    },
                    article.category,
                ),
            ]),
            // Middle: title
            h(
                'div',
                {
                    display: 'flex',
                    fontFamily: 'Newsreader',
                    fontWeight: 500,
                    fontSize: titleSize,
                    lineHeight: 1.08,
                    letterSpacing: -1,
                    color: CREAM,
                    maxWidth: 1000,
                    marginTop: 24,
                    marginBottom: 24,
                },
                article.title,
            ),
            // Bottom: brand + author, over a brass hairline
            h(
                'div',
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 28,
                    borderTop: `1px solid rgba(198,161,91,0.45)`,
                },
                [
                    h('div', { display: 'flex', alignItems: 'center', gap: 20 }, [
                        {
                            type: 'img',
                            props: {
                                src: logoUri,
                                width: 56,
                                height: 56,
                                style: { borderRadius: 4 },
                            },
                        },
                        h('div', { display: 'flex', flexDirection: 'column', gap: 4 }, [
                            h(
                                'div',
                                {
                                    fontFamily: 'Newsreader',
                                    fontSize: 30,
                                    fontWeight: 500,
                                    color: CREAM,
                                },
                                'Sycamore Creek Consulting',
                            ),
                            h(
                                'div',
                                { fontSize: 18, color: 'rgba(244,239,230,0.7)' },
                                'Field notes on hiring scarce technical talent',
                            ),
                        ]),
                    ]),
                    h(
                        'div',
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: 4,
                        },
                        [
                            h('div', { fontSize: 20, fontWeight: 700, color: CREAM }, AUTHOR.name),
                            h(
                                'div',
                                { fontSize: 18, color: 'rgba(244,239,230,0.7)' },
                                `${article.readingTime} · sycamorecreekconsulting.com`,
                            ),
                        ],
                    ),
                ],
            ),
        ],
    );
}

fs.mkdirSync(outDir, { recursive: true });
for (const article of insights) {
    const svg = await satori(card(article), { width: 1200, height: 630, fonts });
    const out = path.join(outDir, `${article.slug}.jpg`);
    await sharp(Buffer.from(svg)).jpeg({ quality: 84, mozjpeg: true }).toFile(out);
    console.log(`  og card  ${article.slug}.jpg  ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
}
console.log(`\n✓ ${insights.length} cards → public/og/`);
