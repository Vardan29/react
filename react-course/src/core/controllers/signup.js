import API from '../api'

export function signUpUser(user) {
    API.postAction(
        'users',
        user,
        (user) => {
            console.log(user)
        },
        (err) => {
            console.log(err);
        }
    );
}