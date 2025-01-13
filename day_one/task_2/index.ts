function longestWord(string:string):string{
    const words = string.split(' ');

    let longest = '';
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord('1234 12  12345 12345678 123456'))
