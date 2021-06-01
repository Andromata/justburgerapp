import { combineReducers } from "redux";
import { reducerCheckbox } from "./reducerCheckbox";
import { reducerSection } from "./reducerSections"
export default combineReducers({
  reducerCheckbox: reducerCheckbox,
  reducerSection: reducerSection
});
