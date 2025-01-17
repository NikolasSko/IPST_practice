function cashCounting(sum: number): { [key: number]: number } {
    const banknotes = [100, 50, 10, 5, 2, 1];

    const result: { [denomination: number]: number } = {};

    if (sum <= 0) {
        throw new Error('Сумма должна быть больше нуля');
    }

    for (const note of banknotes) {
        const remainingCash:number = Math.floor(sum / note);
        if (remainingCash > 0) {
            result[note] = remainingCash;
            sum -= remainingCash * note;
        }
    }

    return result;
}

const cash = 123;
console.log(cashCounting(cash));