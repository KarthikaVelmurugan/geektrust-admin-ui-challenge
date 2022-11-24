export const processUsersResponse = (users)=> {
    return users.map(user => {
        user.selected = false;
        user.show = true;
        return user;
    })
} 