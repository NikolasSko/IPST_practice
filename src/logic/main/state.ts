import { print } from '../print';
import { EButtonUsage } from '../../common/enum';
import { calculateExpression } from './calculator';
import { isNumberButton, isOperatorButton } from './inputHandler';

let expression: string = '';

export const handleStateChange = (state: EButtonUsage) => {
    if (isNumberButton(state)) {
        expression += state;
        print(expression);
        return;
    }

    if (isOperatorButton(state) && /[0-9]$/.test(expression)) {
        expression += state === EButtonUsage.OPERATOR_MULTIPLY ? '*' : state;
        print(expression);
        return;
    }

    switch (state) {
        case EButtonUsage.OPERATOR_EQUAL:
            expression = calculateExpression(expression);
            print(expression);
            break;

        case EButtonUsage.OPERATOR_C:
            expression = expression.slice(0, -1);
            print(expression || '0');
            break;

        case EButtonUsage.OPERATOR_AC:
            expression = '';
            print('0');
            break;

        default:
            print('Error');
            break;
    }
};