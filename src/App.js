import { useEffect, useRef, useState } from "react";
import PaginationBox from "./components/PaginationWindow/PaginationBox";
import SearchBar from "./components/SearchBar/SearchBar";
import UsersList from "./components/UsersListBox/UsersList";
import { getUsers } from "./services/UsersList.service";
import "./App.css"
import config from "./Constants";
import CustomAlert from "./components/ToastWindow/CustomAlert";
function App() {
  const [users, setUsers] = useState([])
  const [update, setUpdate] = useState(false);
  const [page, setPage] = useState(1)
  const selectAllRef = useRef(null)
  // Initializing the alert state object with message and type as null
  const [alert, setalert] = useState({
    active: false,
    type: null,
    message: null,
  });
  useEffect(() => {
    // Fetching the users list
    getUsers(setUsers);

  }, [])

  //select all
  const selectAll = (e) => {
    const userIds = users.filter((user) => user.show).slice(index, index + config.page_limit).map((user) => user.id)
    let tempUsers = users.map((user) => {
      if (userIds.includes(user.id)) {

        user.selected = e.target.checked
        return user;
      }
      return user;

    })
    setUsers(tempUsers);
    setUpdate(!update);

  }

  //select one
  const selectOne = (id) => {
    const tempUsers = users;
    const index = tempUsers.findIndex((user) => user.id === id);
    tempUsers[index].selected = !tempUsers[index].selected;
    setUsers(tempUsers);
    setUpdate((prevState) => !prevState);

  }

 //Delete Selected
  const deleteSelected = () => {
    setUsers((users) => users.filter((user) => !user.selected));
    selectAllRef.current.checked = false;
    setalert({
      active: true,
      type: "success",
      message:
        "The selected user records are Deleted Successfully!",
    });

  }

  // delete user
  const deleteUser = (id) => {
    let tempUsers = users.filter((user) => user.id !== id);
    setUsers(tempUsers);
    setUpdate((prevState) => !prevState);
    setalert({
      active: true,
      type: "success",
      message:
        "The respective user record is Deleted Successfully!",
    });

  }
  // save user 
  const saveUser = (name, email, role, id) => {
    const tempUsers = users;
    const index = tempUsers.findIndex((user) => user.id === id);
    tempUsers[index].name = name;
    tempUsers[index].email = email;
    tempUsers[index].role = role;
    setUsers(tempUsers);
    setUpdate((prevState) => !prevState)
    setalert({
      active: true,
      type: "success",
      message:
        "The  user records are saved Successfully!",
    });
  }



  const index = (page - 1) * config.page_limit;
  return (
    <div>
      {/* Search Box */}
      <SearchBar users={users} setUsers={setUsers} setPage={setPage} />
      {/* Uers Listing Screen */}
      <UsersList usersData={users.filter((user) => {
        return user.show
      }).slice(index, index + config.page_limit)} selectAll={selectAll} selectAllRef={selectAllRef} selectOne={selectOne} deleteUser={deleteUser} saveUser={saveUser} />
      {/* Pagination Box */}
      <PaginationBox page={page} setPage={setPage} totalRecords={users.length} deleteSelected={deleteSelected}  />
      {alert && alert.active === true && (
        <CustomAlert alert={alert} setAlert={setalert}></CustomAlert>
      )}
    </div>
  );
}

export default App;
