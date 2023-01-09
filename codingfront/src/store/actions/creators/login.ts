import axios from "../../../api";

export const login = (email: string, password: string) => {
    return (dispatch: any) => {
        axios.post('/auth/login', {email, password})
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
}