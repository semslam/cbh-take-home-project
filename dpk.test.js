const { deterministicPartitionKey } = require("./dpk");


const key ="c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862";
const largeText = `${key}${key}${key}`;
describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns given 'partition key' ", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:key});
    expect(trivialKey).toBe(key);
  });

  it("Returns the literal 'empty object' when given an key object input", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("{}");
  });

  it("Returns the hash of a given string value > 254 characters", () => {
    const trivialKey = deterministicPartitionKey(largeText);
    expect(trivialKey).toBe("a8dfe0e34a7f47b9d8c79e86b37dee9eff980c17ebedfe4536c8813114bf9b4e3721bd3773d8390d466472ed34a415ac3308de2074724652f7b1ec97f2a4f067");
  });

  it("Returns '0' when given an empty string input", () => {
    const trivialKey = deterministicPartitionKey("");
    expect(trivialKey).toBe("0");
  });
});
