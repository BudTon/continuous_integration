import {httpGet} from './http';
export default function loadUser(id) {
    const data = httpGet(`http://server:8080/esers/${id}`);
    return JSON.parse(data);
}
