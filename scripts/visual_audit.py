"""Capture every slide in Windows Chrome, launched from WSL2 via PowerShell."""

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
import json
import sys

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "artifacts" / "visual-audit"
VIEWPORTS = {
    "desktop": {"width": 1440, "height": 900},
    "mobile": {"width": 390, "height": 844},
}
VARIANTS = {
    "en-light": ("en", "light"),
    "nl-dark": ("nl", "dark"),
}


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    handler = partial(QuietHandler, directory=str(ROOT))
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    Thread(target=server.serve_forever, daemon=True).start()
    address = f"http://127.0.0.1:{server.server_port}/"
    results = []
    issues = []

    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(channel="chrome", headless=True)
            for variant, (lang, color) in VARIANTS.items():
                for mode, viewport in VIEWPORTS.items():
                    context = browser.new_context(viewport=viewport, device_scale_factor=1)
                    page = context.new_page()
                    page_errors = []
                    page.on("pageerror", lambda error: page_errors.append(str(error)))
                    page.goto(address, wait_until="domcontentloaded")
                    page.wait_for_timeout(500)
                    if lang != "en":
                        page.locator(f'[data-lang="{lang}"]').click()
                    if color != "light":
                        page.locator(f'[data-mode="{color}"]').click()
                    slide_ids = page.locator(".deck-nav [data-slide-link]").evaluate_all(
                        "links => links.map(link => link.dataset.slideLink)"
                    )
                    for number, slide_id in enumerate(slide_ids, 1):
                        page.evaluate("id => { location.hash = id; scrollTo(0, 0); }", slide_id)
                        page.wait_for_timeout(180)
                        item = page.evaluate(
                            """id => ({
                              visible: !document.getElementById(id).hidden,
                              bodyWidth: document.body.scrollWidth,
                              viewportWidth: innerWidth,
                              sectionWidth: document.getElementById(id).getBoundingClientRect().width,
                              canvasWidth: document.getElementById(id).querySelector('.evidence-canvas')?.getBoundingClientRect().width ?? null,
                              language: document.documentElement.lang,
                              color: document.documentElement.dataset.mode,
                              title: document.title
                            })""",
                            slide_id,
                        )
                        item.update(mode=mode, variant=variant, slide=slide_id)
                        results.append(item)
                        page.screenshot(path=str(OUTPUT / f"{variant}-{mode}-{number:02d}-{slide_id}.png"))
                        if (not item["visible"] or item["bodyWidth"] > item["viewportWidth"] + 2
                                or (item["canvasWidth"] is not None and item["canvasWidth"] < item["sectionWidth"] * 0.95)
                                or item["language"] != lang or item["color"] != color):
                            issues.append(item)
                    page.evaluate("location.hash = 'geo'")
                    page.locator("#arabia-regions").evaluate("slide => slide.select(1)")
                    page.locator(".geo-inscription-photo img").wait_for(state="visible")
                    page.wait_for_timeout(180)
                    page.screenshot(path=str(OUTPUT / f"{variant}-{mode}-09-geo-south.png"), full_page=True)
                    if not page.locator(".geo-inscription-photo img").evaluate("img => img.complete && img.naturalWidth > 0"):
                        issues.append({"variant": variant, "mode": mode, "slide": "geo", "stage": "south", "issue": "inscription image did not load"})
                    if page.evaluate("document.body.scrollWidth > innerWidth + 2"):
                        issues.append({"variant": variant, "mode": mode, "slide": "geo", "stage": "south", "issue": "horizontal overflow"})
                    page.evaluate("location.hash = 'sources'")
                    page.locator("#source-inventory").evaluate("slide => slide.select(6)")
                    page.wait_for_timeout(180)
                    page.screenshot(path=str(OUTPUT / f"{variant}-{mode}-03-sources-nistarot.png"), full_page=True)
                    if page.evaluate("document.body.scrollWidth > innerWidth + 2"):
                        issues.append({"variant": variant, "mode": mode, "slide": "sources", "stage": "Nistarot", "issue": "horizontal overflow"})
                    if not page.locator(".source-reading-text blockquote").is_visible():
                        issues.append({"variant": variant, "mode": mode, "slide": "sources", "stage": "Nistarot", "issue": "reading passage missing"})
                    page.locator("#source-inventory").evaluate("slide => slide.select(8)")
                    page.wait_for_timeout(180)
                    page.screenshot(path=str(OUTPUT / f"{variant}-{mode}-03-sources-sebeos.png"), full_page=True)
                    if page.evaluate("document.body.scrollWidth > innerWidth + 2"):
                        issues.append({"variant": variant, "mode": mode, "slide": "sources", "stage": "Sebeos", "issue": "horizontal overflow"})
                    if not page.locator(".source-reading-text blockquote").is_visible():
                        issues.append({"variant": variant, "mode": mode, "slide": "sources", "stage": "Sebeos", "issue": "reading passage missing"})
                    page.evaluate("location.hash = 'yemen'")
                    page.locator("#fighting-yemen-contrast").evaluate("slide => slide.select(2)")
                    page.wait_for_timeout(180)
                    page.screenshot(path=str(OUTPUT / f"{variant}-{mode}-05-yemen-final.png"), full_page=True)
                    if page.evaluate("document.body.scrollWidth > innerWidth + 2"):
                        issues.append({"variant": variant, "mode": mode, "slide": "yemen", "stage": 2, "issue": "horizontal overflow"})
                    page.evaluate("location.hash = 'jizya'")
                    page.locator("#jizya-jarajima-contrast").evaluate("slide => slide.select(2)")
                    page.wait_for_timeout(180)
                    page.screenshot(path=str(OUTPUT / f"{variant}-{mode}-21-jizya-final.png"), full_page=True)
                    if page.evaluate("document.body.scrollWidth > innerWidth + 2"):
                        issues.append({"variant": variant, "mode": mode, "slide": "jizya", "stage": 2, "issue": "horizontal overflow"})
                    page.evaluate("location.hash = 'variants'")
                    page.locator("#pact-variants").evaluate("slide => slide.select(1)")
                    page.wait_for_timeout(180)
                    page.screenshot(path=str(OUTPUT / f"{variant}-{mode}-22-variants-selected.png"), full_page=True)
                    if page.evaluate("document.body.scrollWidth > innerWidth + 2"):
                        issues.append({"variant": variant, "mode": mode, "slide": "variants", "issue": "horizontal overflow"})
                    page.evaluate("location.hash = 'khaybar'")
                    page.locator('[data-settlement-stage="2"]').click()
                    page.keyboard.press("ArrowRight")
                    if page.evaluate("location.hash") != "#jizya":
                        issues.append({"variant": variant, "mode": mode, "navigation": "Khaybar → jizya failed"})
                    page.locator("#jizya-jarajima-contrast").evaluate("slide => slide.select(2)")
                    page.keyboard.press("ArrowRight")
                    if page.evaluate("location.hash") != "#variants":
                        issues.append({"variant": variant, "mode": mode, "navigation": "Jizya → variants failed"})
                    page.locator("#pact-variants").evaluate("slide => slide.select(5)")
                    page.keyboard.press("ArrowRight")
                    if page.evaluate("location.hash") != "#reading":
                        issues.append({"variant": variant, "mode": mode, "navigation": "Variants → reading failed"})
                    page.keyboard.press("ArrowLeft")
                    if page.evaluate("location.hash") != "#variants":
                        issues.append({"variant": variant, "mode": mode, "navigation": "Reading → variants failed"})
                    issues.extend({"variant": variant, "mode": mode, "pageError": error} for error in page_errors)
                    context.close()
            browser.close()
    finally:
        server.shutdown()
        server.server_close()

    (OUTPUT / "metrics.json").write_text(json.dumps(results, indent=2), encoding="utf-8")
    print(f"Captured {len(results)} slide views in {OUTPUT}")
    for issue in issues:
        print("ISSUE", issue)
    return 1 if issues else 0


if __name__ == "__main__":
    sys.exit(main())
