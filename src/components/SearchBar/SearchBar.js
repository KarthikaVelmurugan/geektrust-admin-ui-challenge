import "./SearchBar.style.css"
const SearchBar = ({ users, setUsers, setPage }) => {

    // Search the user pages on the search key
    const searchUsers = (key) => {
        setPage(1)
        setUsers(users.map((user) => {
            if (user.name.toLowerCase().includes(key) || user.email.toLowerCase().includes(key) || user.role.toLowerCase().includes(key)) {
                console.log(user.name, "filered")
                user.show = true;
                return user;
            }
            user.show = false;
            return user;
        }))
    }
    return (
        // Search Bar
        <input className="search-bar" placeholder="Search by name, email and role" onChange={(e) => {
            searchUsers(e.target.value)
        }}>
        </input>
    )

}

export default SearchBar;