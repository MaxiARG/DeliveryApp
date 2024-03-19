export default interface Usuario {
    id :            string,
    email:          string,
    name :          string,
    lastname :      string,
    phone:          string,
    image :         string,
    pass :          string, 
    session_token?: string;
}