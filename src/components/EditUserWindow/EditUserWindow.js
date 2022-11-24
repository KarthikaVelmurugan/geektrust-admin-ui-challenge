import { useEffect, useRef } from "react";
import "./EditUserWindow.style.css"
const EditUserWindow = ({ user, showModal, setShowModal, saveUser }) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null)

    //Close event
    function closeModal(e) {
        e.stopPropagation()
        setShowModal(!showModal)
    }
    return (
        <div className="modal">

            <div className="modal-content">

                <span className="close" onClick={closeModal}>&times;</span>

                {/* User name input Box */}
                <div className="form">
                    <div>
                        <label>User Name</label>
                        <input
                            type="text"
                            ref={nameRef}
                            name="name"
                            defaultValue={user.name}
                            onChange={(e) => {
                                user.name = e.target.value
                            }}
                        ></input>
                    </div>

                    {/* User Email Input Box */}
                    <div>
                        <label>User Email</label>
                        <input
                            type="text"
                            ref={emailRef}
                            name="email"
                            defaultValue={user.email}
                            onChange={(e) => {
                                user.email = e.target.value
                            }}
                        ></input>
                    </div>

                    {/* User Role Drop down box */}
                    <div>
                        <label for="role">User Role</label>

                        <select name="role" id="role" onChange={(e) => user.role = e.target.value}>
                            <option value="member">member</option>
                            <option value="admin">admin</option>

                        </select>
                    </div>

                    {/* save button */}
                    <button className="save-btn" onClick={(e) => { saveUser(user.name, user.email, user.role, user.id); closeModal(e) }}>save</button>

                </div>
            </div>
        </div>
    )

}

export default EditUserWindow;