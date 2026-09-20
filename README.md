# Treasure hunt for her

Phone-scannable QR codes. Each code opens one page of the hunt.

Live URL after Pages is on:

https://seithreaper.github.io/for-her/

## First-time setup (once)

1. Repo Settings → Pages → Source: **GitHub Actions**
2. Wait for the Actions run to finish (green).
3. Open the URL above on your phone to confirm the cover page loads.

## How you run the hunt

1. Edit `clues.js` — names, clue text, final letter.
2. Drop photos / audio into `media/` and put the filenames in `clues.js`.
3. Commit and push. The site updates in about a minute.
4. Open `print.html` and print the cards. Hide them in order. Hand her card 1.

Do not print the master list from `print.html` on the same sheets she will find.

## QR URL format

`https://seithreaper.github.io/for-her/?s=1`  
`?s=2` … last number is the letter.

Optional: set `finalUnlock` in `clues.js` to a word she must type before the letter opens.

## File map

| File | What it is |
|---|---|
| `clues.js` | All text you change |
| `index.html` | The page her phone opens |
| `print.html` | Printable cards + your key |
| `media/` | Your photos and audio |
