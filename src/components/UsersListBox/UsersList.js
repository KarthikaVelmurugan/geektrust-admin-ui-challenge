import "./UsersList.style.css"
import editIcon from "../../assets/icons/edit-icon.svg"
import deleteIcon from "../../assets/icons/delete-icon.svg"
import { useState } from "react"
import EditUserWindow from "../EditUserWindow/EditUserWindow"
const UsersList = ({ usersData, selectAll, selectAllRef, selectOne, deleteUser, saveUser }) => {
    const [showEditWindow, setShowEditWindow] = useState(false);
    const [editUserData, setEditUserData] = useState({
        name: '',
        email: '',
        role: '',
        id: ''
    })
    // Navigate to Edit Window
    const navigateToEditWindow = (user) => {
        setShowEditWindow(!showEditWindow);
        setEditUserData({
            name: user.name,
            email: user.email,
            role: user.role,
            id: user.id
        })
    }
    return (
        <table>
            <thead className="header">
                <td><input type="checkbox" ref={selectAllRef} onChange={(e) => {
                    // Select All Users
                    selectAll(e)
                }}></input></td>
                <td>Name</td>
                <td>Email</td>
                <td>Role</td>
                <td style={{ textAlign: "center" }}>Action
                </td>
            </thead>
            <tbody className="body">
                {usersData && usersData.map((user) => {
                    return user.show ?

                        <tr>
                            {/* select user */}
                            <td>          <input
                                type="checkbox" data={`${user.selected}`}
                                onChange={() => { selectOne(user.id) }}
                                checked={user.selected}

                            ></input></td>

                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            {/* Edit User */}
                            <td className="action-icons">  <img src={editIcon} height={16} width={16} onClick={() => navigateToEditWindow(user)} />
                                {/* Delete User */}
                                <img src={deleteIcon} height={16} width={16} onClick={() => deleteUser(user.id)}></img>

                            </td>

                        </tr>

                        : ""
                }
                )}
                {editUserData && showEditWindow && <EditUserWindow user={editUserData} showModal={showEditWindow} setShowModal={setShowEditWindow} saveUser={saveUser} />}
            </tbody>

        </table>
    )
}
export default UsersList;