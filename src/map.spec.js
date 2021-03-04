const map = require("./map");
const cube = require("./cube");

describe("Map", () => {
  it("map([], cube) is []", () => {
    expect(map([], cube)).toEqual([]);
  });

  it("map([1,2,3],cube is [1,8,27]", () => {
    expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
  });
});
