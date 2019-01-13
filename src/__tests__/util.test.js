import { qsGen } from "../util";

describe("util", () => {
  it("gets proper querystring", () => {
    const expected = { a: "1", b: "2" };
    const res = qsGen(["a=1", "b=2"]);
    expect(res).toEqual(expected);
  });

  it("gets properly decode", () => {
    const expected = { color: "#ff00ff" };
    const dc1 = encodeURIComponent(expected.color);
    expect(dc1).not.toEqual(expected.color);
    const res = qsGen([`color=${dc1}`]);
    expect(res).toEqual(expected);
  });
});
