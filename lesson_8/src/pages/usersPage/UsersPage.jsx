import Modal from '../../components/modal/Modal';

import React, { useEffect, useState } from 'react';

const URL = 'http://localhost:8000/users'

  

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
   
     const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    async function getDbjson () {
        const response = await fetch(URL)
        const data = await response.json()
        setUsers(data);
    }
   

async function createUser (e) {
        e.preventDefault()
        const newUser = {
            name,
            email,
            username
        }
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        if(response.status ===  201) {
            getDbjson()
            setName('');
            setEmail('');
            setUsername('');
        }
    }

    // function modalCreate () {
    //     alert("Пользователь создан")
    // }
   

async function deleteUser (id) {
    const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
    })
    if(response.status ===  200) {
        getDbjson()
        }
}

useEffect(()=> {
     getDbjson()
},[])


return (
    <> 
        <div>
            <form onSubmit={createUser}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
               <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
               <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" onClick={() => setShowModal(true)}>Create</button>
                {showModal && <Modal  style={{width:'500px', heigh:'500px', background:'red'}} onClose={handleModalClose}>Содержимое модального окна</Modal>}
  
            </form>
    
            <table>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>username</th>
                    <th>actions</th>
                </tr>
                {
            users.map((user) => (
            
                <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                    <button onClick={() => deleteUser(user.id) } >delete</button>
                </td>
            </tr>
         
                        )
                    )
       
                }
                
            </table>


            </div>
       
        </>
       
    );
}

export default UsersPage;





// КОД НАПИСАННЫЙ КАПИЛОТОМ 
// (РЕШИЛ ПРОБЛЕМУ С СОЗДАНИЕМ ПОЛЬЗОВАТЕЛЯ БЕЗ НАЖАТИЯ НА КНОПКУ И ИСПРАВИЛ ПРОБЛЕМУ С РАЗДЕЛЕНИЕМ ЗНАЧЕНИЯ ИНПУТА НА 3 РАЗНЫХ)



// import React, { useState, useEffect } from 'react';

// const URL = 'http://localhost:8000/users';

// function UsersPage() {
//     const [users, setUsers] = useState([]);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');

//     async function getDbjson() {
//         const response = await fetch(URL);
//         const data = await response.json();
//         setUsers(data);
//     }

//     async function createUser(e) {
//         e.preventDefault();
//         const newUser = {
//             name,
//             email,
//             username,
//         };
//         const response = await fetch(URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newUser),
//         });

//         if (response.status === 201) {
//             getDbjson();
//             setName('');
//             setEmail('');
//             setUsername('');
//         }
//     }

//     async function deleteUser(id) {
//         const response = await fetch(`${URL}/${id}`, {
//             method: 'DELETE',
//         });
//         if (response.status === 200) {
//             getDbjson();
//         }
//     }

//     useEffect(() => {
//         getDbjson();
//     }, []);

//     return (
//         <div>
//             <form onSubmit={createUser}>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <button type="submit">Create</button>
//             </form>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Username</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.username}</td>
//                             <td>
//                                 <button onClick={() => deleteUser(user.id)}>
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default UsersPage;
