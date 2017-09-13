import {observable} from "mobx"

class AppState {
   @observable name = '';
}

export default new AppState()