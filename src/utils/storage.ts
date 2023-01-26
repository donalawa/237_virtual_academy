import jwtDecode from 'jwt-decode';

const key = "authToken";

const storeToken  =  (authToken: string) => {
    try {
        localStorage.setItem(key, authToken);
    } catch (error) {
        console.log("Error storing auth token", error)
    }
}

const getToken = () => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.log("Error getting the auth token", error)
    }
}

const getUser = () => {
    const token: any =  getToken();
    return token ? jwtDecode(token) : null;
}

const isTeacher = () => {
    const token: any =  getToken();
    let user:any = jwtDecode(token);
    console.log('USER IN ISCHECK',  user)
    return user?.role == 'teacher' ? true : false;
}

const isStudent = () => {
    const token: any =  getToken();
    let user:any = jwtDecode(token);
    console.log('USER IN ISCHECK',  user)
    return user?.role == 'student' ? true : false;
}

const removeToken = async ()=> {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log("Error removing auth token", error);
    }
}

export { getUser, getToken, removeToken, storeToken, isTeacher, isStudent }

