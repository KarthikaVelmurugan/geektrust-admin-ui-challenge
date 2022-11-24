import { useState } from "react";
import config from "../Constants";
import { processUsersResponse } from "../utilities/UserUtility";

// Fetching the API
const getUsers = (setUsers) => {
    fetch(config.API_URL).then((res) => res.json().then((data) => {
        setUsers(processUsersResponse(data));
    }))
}
export { getUsers }