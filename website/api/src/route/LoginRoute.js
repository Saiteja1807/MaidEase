import {loginSuccessful} from '../controller/LoginController.js';

const loginModel = (app) => {

    app.route('/login/:email')
    .get(
        loginSuccessful
    );
}

export default loginModel;