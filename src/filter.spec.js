const filter = require("./filter");

describe("Filter", () => {
  it("filter([], x=>true) is []", () => {
    expect(filter([], (x) => true)).toEqual([]);
  });
});
