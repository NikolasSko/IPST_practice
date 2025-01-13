function runLengthEncoding(string: string): string {
    let result:string = '';
    let i:number = 0;
    while (i < string.length) {
        let count:number = 1;
        while (i + 1 < string.length && string[i] === string[i + 1]) {
            i++;
            count++;
        }
        result += `${string[i]}${count}`;
        i++;
    }
    return result;
}

function runLengthDecoding(string: string): string {
    let result:string = '';
    for (let i:number = 0; i < string.length; i += 2) {
        const symbol:string = string[i];
        const repeatCount:number = Number(string[i + 1]);
        result += symbol.repeat(repeatCount);
    }
    return result;
}

const string = "Follow";
console.log(`Исходная строка: ${string}`);
const encoding:string = runLengthEncoding(string);
console.log(`Закодированная строка: ${runLengthEncoding(string)}`);
const decoding:string = runLengthDecoding(encoding);
console.log(`Декодированная строка: ${decoding}`);

