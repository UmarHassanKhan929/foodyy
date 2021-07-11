import React,{useEffect,useState} from "react"
import Recipe from "./Recipe";
import './App.css';

const Search = () => {

  const APP_ID = 
  const APP_KEY =

  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState('')
  const [query, setQuery] = useState(' ')

  const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  

  useEffect(()=>{
    getRecipes()
  },[query]);

  const getRecipes = async() =>{
    const res = await fetch(exampleRequest)
    const data = await res.json()
    console.log(data.hits)
    setRecipes(data.hits)
    //console.log(recipes)
  }

  const searchQuery = e => {
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="Search App" >
      <div className="container">
        <br />
      <form className="form-group row" onSubmit={getSearch}>
        
          <div className="col-8">
            <input type="text" className="form-control" value={search} onChange={searchQuery}  placeholder="Ingredient name for recipe"/>
          </div>
          <div className="col-2">
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </div>
        
        </form>
      {recipes.map(reci => (
        <Recipe 
          key={reci.recipe.label}
          title={reci.recipe.label} 
          calories={reci.recipe.calories} 
          image={reci.recipe.image}
          cautions={reci.recipe.cautions}
          dietlabels={reci.recipe.dietLabels}
          ingredients={reci.recipe.ingredients}
          url={reci.recipe.url}
          />
      ))
      }
      </div>
    </div>
  );
}

export default Search;
