import { createSlice } from "@reduxjs/toolkit";

const registrSlice = createSlice({
    name: 'register',
    initialState: {
        info: []
    },
    reducers: {
        addPass: (state, action) => {
            const userExists = state.info.some(user => 
                user.username === action.payload.username &&
                user.password === action.payload.password
            );
            if (userExists) {
                alert("Такой пользователь существует");
            } else {
                state.info.push(action.payload);
                alert("Успешно");
            }
        }
    }
}); 
    export const { addPass } = registrSlice.actions

    export default registrSlice.reducer;





    // if (action.payload.password === action.payload.confirmPassword) {
    //     return { password: action.payload.password, confirmPassword: action.payload.confirmPassword };
    // } else {
    //     console.error('Passwords do not match');
    //     return state;
    // }

    

    //     return async function(dispatch) {
    //         try {
    //             const options = {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-type": "application/json"
    //                 },
    //                 body: JSON.stringify(password)
    //             };
    //             const response = await fetch("https://jsonplaceholder.typicode.com/password", options);
    //             if (password.password && password.confirmPassword && password.password === password.confirmPassword) {
    //                 alert("Password Saved");
    //             } else {
    //                 alert("Passwords do not match or fields are empty");
    //             }
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     };
    // }

    // export const newPost = createAsyncThunk(
    //     'newPost',
    //     async function (params, { dispatch }) {
    //         try {
    //             dispatch(preloaderOn());
    //             const options = {
    //                 method: "POST",
    //                 headers: {
    //                     'Content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(params)
    //             };
    //             const response = await fetch('https://fakestoreapi.com/users', options); // https://jsonplaceholder.typicode.com/posts
    //             const data = await response.json();
    //             return data;
    //         } catch (e) {
    //             alert(e);
    //         } finally {
    //             dispatch(preloaderOff());
    //         }
    //     }
    // );

