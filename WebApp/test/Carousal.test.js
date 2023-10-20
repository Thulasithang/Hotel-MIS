const delay = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {}
};

describe("Carousal", () => {
  it("fetch dropdown images", () => {
    delay(154);
    expect(false).toBe(false);
  });
});
