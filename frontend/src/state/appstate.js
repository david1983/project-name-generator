import {observable} from "mobx"

class AppState {
   @observable name = 'Just press the button below to generate a random name';
}

export default new AppState()