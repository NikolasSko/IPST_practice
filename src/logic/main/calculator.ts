export const calculateExpression = (expression: string): string => {
    try {
        const replaceX = expression.replace(/X/g, '*');
        const result = eval(replaceX).toString();
        return result;
    } catch {
        return 'Error';
    }
};