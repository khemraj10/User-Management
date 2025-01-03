import axios from "axios";

export const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (!res.status === 200) throw new Error("Failed to fetch users");
    return res;
}
