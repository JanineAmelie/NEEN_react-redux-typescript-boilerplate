import Hello from '../components/Hello';
import * as actions from '../actions/enthusiasm-actions';
import { IEnthusiasmState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

// state, ownProps
export function mapStateToProps(state: { EnthusiasmReducer: IEnthusiasmState }) {
      const { enthusiasmLevel, languageName } = state.EnthusiasmReducer;
      return { enthusiasmLevel, name: languageName };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
