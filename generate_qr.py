#!/usr/bin/env python3
"""Generate QR PNGs for each stop in clues.js (reads baseUrl + stop numbers)."""
from pathlib import Path
import re
import qrcode

root = Path(__file__).resolve().parent
text = (root / "clues.js").read_text(encoding="utf-8")
base = re.search(r'baseUrl:\s*"([^"]+)"', text).group(1).rstrip("/") + "/"
nums = [int(n) for n in re.findall(r"\bn:\s*(\d+)", text)]
out = root / "qr"
out.mkdir(exist_ok=True)

for n in nums:
    url = f"{base}?s={n}"
    img = qrcode.make(url, box_size=12, border=2)
    path = out / f"stop-{n}.png"
    img.save(path)
    print(f"{path.name}  {url}")
