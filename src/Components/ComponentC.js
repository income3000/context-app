
import { useContext } from 'react';
import { DataContext } from '../App';
export default function ComponentC() {
    const data = useContext(DataContext);
    return (
        <div>
            <h3>The user is: {data.userName}</h3>
            {data.loggedIn ?<h3>The user is:{data.userName}</h3>:""}
            {/* set up button to turn logged in to true */}
            <button onClick={()=> data.setLoggedIn(true)}>Log In</button>
        </div>
    )
}