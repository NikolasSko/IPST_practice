function indexOf(mainString: string, subString: string): number {

    if (!subString) return 0;

    const mainLength = mainString.length;
    const subLength = subString.length;

    for (let i = 0; i < mainLength - subLength + 1; i++) {
        let match = true;

        for (let j = 0; j < subLength; j++) {
            if (mainString[i + j] !== subString[j]) {
                match = false;
                break;
            }
        }

        if (match) return i;
    }

    return -1;
}



const mainString = "How are you?";
const subString = "you";

console.log(indexOf(mainString, subString));