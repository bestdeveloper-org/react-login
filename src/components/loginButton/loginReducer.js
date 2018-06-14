import { login } from "./loginActions";
import { logout} from "./loginActions";

const initialState =  {
    isLoggedIn: false
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case login: {
            return {
                isLoggedIn: true
            }
        }
        case logout: {
            return {
                isLoggedIn: false
            }
        }
        default: {
            return state;
        }
    }
}

export default loginReducer;
