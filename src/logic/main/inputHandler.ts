import { EButtonUsage } from '../../common/enum';

export const isNumberButton = (state: EButtonUsage): boolean => {
    return [
        EButtonUsage.BUTTON_0,
        EButtonUsage.BUTTON_1,
        EButtonUsage.BUTTON_2,
        EButtonUsage.BUTTON_3,
        EButtonUsage.BUTTON_4,
        EButtonUsage.BUTTON_5,
        EButtonUsage.BUTTON_6,
        EButtonUsage.BUTTON_7,
        EButtonUsage.BUTTON_8,
        EButtonUsage.BUTTON_9
    ].includes(state);
};

export const isOperatorButton = (state: EButtonUsage): boolean => {
    return [
        EButtonUsage.OPERATOR_ADD,
        EButtonUsage.OPERATOR_SUBTRACT,
        EButtonUsage.OPERATOR_MULTIPLY,
        EButtonUsage.OPERATOR_DIVIDE,
        EButtonUsage.OPERATOR_DECIMAL
    ].includes(state);
};