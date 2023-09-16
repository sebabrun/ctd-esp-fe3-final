import { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
  theme: localStorage.getItem('theme') || "light",
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

const ContextGlobal = createContext(undefined)

const reducer = (state, action) => {
  switch (action.type){
      case 'light':
        localStorage.setItem('theme', action.payload)
        return {...state, theme: action.payload}
      
      case 'dark':
        localStorage.setItem('theme', action.payload)
        return  {...state, theme: action.payload}
    
      case 'data':
        const data = {...state, data: action.payload}
        return data
      
      case 'addFav':
        localStorage.setItem('favs', JSON.stringify([...state.favs, action.payload]))
        return {...state, favs: [...state.favs, action.payload]}
      
      case 'removeFav':
        const newList = state.favs.filter(d => d.id !== action.payload.id)
        localStorage.setItem('favs', JSON.stringify(newList))
        return {...state, favs: newList}
      
      case 'removeAllFavs':
        localStorage.setItem('favs', '[]')
        return {...state, favs: []}
      
      default:
        throw new Error('Action type error')
  }
}

const Context = ({ children }) => {
  
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const getList = async() =>{
    try {
      const res = await fetch(url)
      if(res.ok){
        const data = await res.json()
        dispatch({type: 'data', payload: data})
      }else{
        dispatch({type: 'data', payload: res})
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() =>{
    const favsStorage = localStorage.getItem('favs') || "[]"
    localStorage.setItem('favs', favsStorage)
    getList()
  },[])
  
  
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal)