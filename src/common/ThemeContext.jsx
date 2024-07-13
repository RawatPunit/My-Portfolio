import React,{createContext,useContext,useEffect,useState} from "react";

const ThemeContext = createContext();

export const useTheme = () =>useContext(ThemeContext);

//theme that has been stored in the lcoal storage insisde the browser
export const ThemeProvider = ({children}) => {
   const [theme,setTheme] = useState(
      () => localStorage.getItem('theme') || 'light'
   );

   //a way to ref in the body  to ref in the body to put that theme 
   useEffect(() =>{
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
   },[theme]);

   //toggle that theme
   toggleTheme = ()=> {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
   };

   // encapsulate the whole app isnde the theme component
   return (
      <ThemeContext.Provider value={{theme,toggleTheme}}>
         {children}
      </ThemeContext.Provider>
   );
}