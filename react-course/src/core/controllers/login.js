import API from '../api'

export function logInUser(successCb) {
    API.getAction(
        'users',
        successCb,
        (err) => {
            console.log(err);
        }
    );
}