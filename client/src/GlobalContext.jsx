import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {

  // useState for all variables
  const [auth, setAuth] = useState({loggedIn:false})
  const [tidbits, setTidbits] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [concerts, setConcerts] = useState([]);
  const [movies, setMovies] = useState([]);

  // useEffect to run methods upon load
  useEffect(() => {
    void checkAuth()
    void loadTidbits()
    void loadMovies()
  }, []);

  // methods, could be for on load, or just called from elsewhere

  const checkAuth = async () => {
    setIsLoading(true)
    const response = await fetch("/rest/login")
      console.log('loading auth')
    const result = await response.json()
    console.log('auth state: ', result)
    setAuth(result)
    setIsLoading(false)
  }

  const submitLogin = async (email, password) => {
    setIsLoading(true)
    const response = await fetch("/rest/login", {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
    })
    const result = await response.json()
    console.log(result)
    setIsLoading(false)
    void checkAuth()
  }

  const createAccount = async (email, password) => {
    setIsLoading(true);
    const response = await fetch("/rest/users", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const result = await response.json();
    console.log(result);
    setIsLoading(false);
    void checkAuth();
  };
  const deleteAccount = async(email) => {
    setIsLoading(true);
    const response = await fetch("rest/users", {
      method: "delete",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const result = await response.json();
    console.log(result)
    setIsLoading(false)
    void checkAuth();
  }

  const logout= async () => {
    setIsLoading(true)
    const response = await fetch("/rest/login", {
        method: "delete"
    })
    const result = await response.json()
    console.log(result)
    setIsLoading(false)
    setAuth({loggedIn:false})
  }

  const loadTidbits = async () => {
    setIsLoading(true)
    const response = await fetch("/rest/tidbits")
    const result = await response.json()
    console.log(result)
    setTidbits(result)
    setIsLoading(false)
  }

  const loadConcerts = async () => {
    setIsLoading(true)
    const response = await fetch("/rest/concerts")
    const result = await response.json()
    setConcerts(result)
    setIsLoading(false)
  }

  const loadMovies = async () => {
    setIsLoading(true)
    const response = await fetch("rest/movies")
    const result = await response.json()
    console.log(result)
    setMovies(result)
    setIsLoading(false)
  }



  return (
    <GlobalContext.Provider
      value={{
        auth,
        tidbits,
        isLoading,
        submitLogin,
        logout,
        createAccount,
        concerts,
        deleteAccount,
        movies
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
