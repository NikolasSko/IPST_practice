export const calculateExpression = (expression: string): string => {
    try {
        const replaceX = expression.replace(/X/g, '*'); // Замена X на *
        const result = eval(replaceX).toString();
        return result;
    } catch {
        return 'Error';
    }
};