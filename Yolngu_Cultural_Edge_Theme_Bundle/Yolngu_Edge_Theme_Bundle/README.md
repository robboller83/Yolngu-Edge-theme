# Yolŋu Cultural Edge Theme Bundle

An unpacked Microsoft Edge theme and optional New Tab companion extension. The bundle uses a consistent deep-teal, ochre, cream, and coastal palette, with a 30-day rotation of Yolŋu Matha words.

> **Cultural note:** The visual material is a contemporary, Yolŋu-inspired theme design. It is not presented as a source of cultural authority or as a substitute for learning from Yolŋu people and community-approved sources. Please seek appropriate permission before using or redistributing cultural material beyond its intended personal use.

## What is included

| Package | Purpose |
| --- | --- |
| `Yolngu_Cultural_Theme` | Changes Edge's browser chrome: its frame, tabs, toolbar, colours, icons, and static New Tab background. |
| `Yolngu_Daily_Words` | Optional MV3 extension that replaces Edge's New Tab page with a daily word, meaning, and matching artwork. |

Install the theme on its own for Edge chrome and its static background, or load both packages for the daily New Tab experience.

## Daily Words function

The Daily Words extension uses `chrome_url_overrides` to serve `newtab.html` whenever a new tab opens. Its external script, `newtab.js`, performs four tasks:

1. Calculates the current day of the year and maps it into a repeating 30-day cycle.
2. Selects one of the 30 word/meaning pairs and displays it with the current date.
3. Loads the matching `day-01-yolngu-art.jpg` through `day-30-yolngu-art.jpg` artwork file.
4. Sends typed searches to Bing.

The script is deliberately external rather than embedded in the HTML. Manifest V3 blocks inline scripts under its Content Security Policy; using `newtab.js` prevents the CSP error that stopped the New Tab page from loading.

## Artwork

The backgrounds combine the original family-and-Country composition with a non-functional search-bar area removed. In its place is an irregular teal tidal-connection band, using cream and ochre pathways and dot accents that echo the rest of the design. The same treatment was generated for each daily background so the cycling New Tab artwork remains consistent.

The original daily images are retained alongside the updated `*-yolngu-art.jpg` versions. The extension uses the updated images. `theme_ntp_background_yolngu_art.jpg` is the corresponding static background used by the main theme.

## Install in Microsoft Edge

1. Download or clone this repository.
2. Open `edge://extensions`.
3. Enable **Developer mode**.
4. Select **Load unpacked**, then choose `Yolngu_Cultural_Theme`.
5. To enable the daily New Tab page, select **Load unpacked** again and choose `Yolngu_Daily_Words`.
6. When updating files, use **Reload** for both items on `edge://extensions` before opening a new tab.

## Project layout

```text
Yolngu_Edge_Theme_Bundle/
├── Yolngu_Cultural_Theme/       # Edge theme package
│   ├── manifest.json
│   └── images/
└── Yolngu_Daily_Words/          # Optional New Tab extension
    ├── manifest.json
    ├── newtab.html
    ├── newtab.js
    └── images/
```

## Development notes

- Both packages are Manifest V3-compatible.
- The two folders are separate unpacked packages and should be loaded individually; do not select the parent bundle folder in Edge.
- The Daily Words extension is version 1.0.2 and the main theme is version 1.0.1.
