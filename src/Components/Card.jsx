import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentist }) => {

  const { name, username, id } = dentist
  const { state, dispatch } = useContextGlobal()
  const favs = state.favs
  const isFav = favs.find(fav => fav.id === id)
  
  const addFav = ()=>{
    dispatch({type: "addFav", payload: dentist})
  }
  const removeFav = ()=>{
    dispatch({type:"removeFav", payload: dentist})
  }

  return (
    <div className="card">
      <img src="/images/doctor.jpg" width={190} alt="" /> 
      <Link to={"/dentist/" + id}> <h3 className="dentist-name">{name}</h3> </Link>
      <p>{username}</p>
    
      {!isFav 
        ? <button className="favButton" onClick={addFav}> 🤩 Agregar a favoritos </button>
        : <button className="favButton" onClick={removeFav}> ❌ Quitar </button>
      }
      
  </div>
  );
};

export default Card;