function identicalLetters (string1:string, string2:string):string{
    const commonChars:string[] = [];
    const arr2 = string2.split('');

    for(const char of string1){
        if (arr2.includes(char) && !commonChars.includes(char)) {
            commonChars.push(char);
        }
    }

    return commonChars.join('');
}

const result = identicalLetters('Skobelev', 'NikitaS');
console.log(result);
