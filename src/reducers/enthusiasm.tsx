// src/reducers/index.tsx
import { Reducer } from 'redux'
import { EnthusiasmAction } from "../actions/enthusiasm-actions";
import { IEnthusiasmState } from "../types/index";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants/enthusiasm-constants";

// Type-safe initialState!
const initialState: IEnthusiasmState = {
    languageName: "TypeScript + React + Redux",
    enthusiasmLevel: 1
};

const EnthusiasmReducer: Reducer<IEnthusiasmState> = (state = initialState, action: EnthusiasmAction) => {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
        return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
        return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
        };
    }
    return state;
};

export default EnthusiasmReducer;
