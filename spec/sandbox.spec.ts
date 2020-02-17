import assert from "assert";
import { browser, by, element } from "protractor";

describe("Sandbox", () => {
  beforeAll(() => {
    browser.get("https://e2e-boilerplates.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    assert.strictEqual(title, "Sandbox");
    assert.strictEqual(await header.getText(), "Sandbox");
  });
});
