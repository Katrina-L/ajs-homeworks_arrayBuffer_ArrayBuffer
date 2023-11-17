import getBuffer from "../getBuffer";
import ArrayBufferConverter from "../ArrayBufferConverter";

test("Testing buffer load" , () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer());
    expect(converter.buffer).toEqual(getBuffer());
});

test("Testing converation", () => {
    const converter = new ArrayBufferConverter();
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    converter.load(getBuffer());
    
    expect(converter.toString()).toBe(data);
});

test("Testing convertaion with TextDecoder", () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer());
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(converter.toStringWithTextDecoder().localeCompare(data)).toBe(0);
});
