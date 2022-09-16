import Card from "./Card"
import './App.css'; 
import User from "./User";
import {useEffect,useState} from "react"
import Paging from "./Paging"

function App() {
  
const [user, setUser  ] = useState([])
const [curretPages,setCurrantPage] = useState(2)
const [totalPages,setTotalPage] = useState(1)


useEffect(() =>{
  User(curretPages).then((result)=>{setUser(result.data) ;
    setCurrantPage(result.page);
    setTotalPage(result.total_page)
  
  })
},[])

  const profile = user.map((user)=>{
    return <Card user = {user} />
   
    
  })
  
  return (
    <div className="App">
      {profile}
      <Paging curretPages = {curretPages} totalPages={totalPages} setCurrantPage ={setCurrantPage} />
    </div>
  );
}

export default App;
