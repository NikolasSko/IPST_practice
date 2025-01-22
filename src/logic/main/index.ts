import { handleStateChange } from './state';
import { EButtonUsage } from '../../common/enum';

const main = () => {
    return (state: EButtonUsage) => {
        handleStateChange(state);
    };
};

export { main };