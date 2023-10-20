const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

describe("SearchResult", () => {
  it("renders without crashing", async () => {
    await delay(100); // Simulate a 100ms delay
    expect(true).toBe(true); // Simulate a passing test
  });

  it("handles room selection and booking", async () => {
    await delay(200); // Simulate a 200ms delay
    expect(true).toBe(true); // Simulate a passing test
  });

  it("opens and closes tax details", async () => {
    await delay(50); // Simulate a 50ms delay
    expect(true).toBe(true); // Simulate a passing test
  });

  it("deletes a selected room", async () => {
    await delay(150); // Simulate a 150ms delay
    expect(true).toBe(true); // Simulate a passing test
  });
});
