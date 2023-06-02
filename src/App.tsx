import { useEffect, useState } from "react";
import {Users} from './interface'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

function App() {
  const [users, setUsers] = useState <Users[] | null>(null);


const createUser = async () => {
  const response = await axios.put('https://fakestoreapi.com/products/7', {
    title: "test product",
    price: "13.5",
    description :"lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic"
  })
  console.log("Fake postis responce", response)
}


  useEffect(() => {
         const requestUser = async () => {
          const response = await axiosInstance.get("/users")
          const data = await response.data

        console.log(data)
          setUsers(data);
         }
         requestUser();
  }, []);
   

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <ul> {users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>

      <button onClick={createUser}>Make post request</button>
    </div>
  );
}

export default App;
