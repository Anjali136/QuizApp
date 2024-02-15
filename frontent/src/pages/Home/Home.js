import { Navbar } from "../../components/Navbar/Navbar";
import axios from "axios"
import "./Home.css"
import { Fragment, useEffect,useState } from "react";
import { QuizCard } from "../../components/QuizCard/QuizCard";
export const Home=()=>{
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        (async()=>{
            try{
                const {data:{data}}=await axios.get("http://localhost:3000/categories");
                setCategories(data);
                console.log(data);
            }catch(err){
                console.log(err);
            }
        })()
    },[])
    return(
<div>
    <Fragment>
    <Navbar route="home"/>
    <main className="main">
        {
            categories.map(categorie=><QuizCard quizcategorie={categorie} key={categorie.id}/>)
        }
    </main>
    </Fragment>
</div>
    )
}