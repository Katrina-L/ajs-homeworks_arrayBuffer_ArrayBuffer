export default class ArrayBufferConverter {
    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        let result = "";
        const buffer16View = new Uint16Array(this.buffer);
        
        for (let i = 0; i < buffer16View.length; i++) {
            result += String.fromCharCode(buffer16View[i]);
        }
        return result;
    }

    //  ------------------  TextDecoder  ------------------
    toStringWithTextDecoder() {
        const decoder = new TextDecoder();
        return decoder.decode(this.buffer);
    }
}
