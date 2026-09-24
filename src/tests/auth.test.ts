import { describe, expect, test } from "vitest";
import { getAPIKey } from "./src/api/auth.js";

const headers = {
  authorization: "ApiKey test",
};

describe("headers", () => {
  test("headers is defined", () => {
    expect(headers).toBeDefined();
  });

  test("getApiKey", () => {
    const result = getAPIKey(headers);
    expect(result).toBe("test");
  });
});
