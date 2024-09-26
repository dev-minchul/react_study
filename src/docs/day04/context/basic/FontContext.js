import { createContext, useState } from "react";

export const FontSizeContext = createContext({
  state : { fontSize : ""},
  action : { setFontSize : () => {}}
})

const FontSizeProvider = ({children}) => {

  const[fontSize, setFontSize] = useState("3rem");
  const value = {
    state : {fontSize},
    action : { setFontSize }
  }


return(
    <FontSizeContext.Provider value={value}>
      {children}
    </FontSizeContext.Provider>
  )
}

const FontSizeConsumer = FontSizeContext.Consumer;

export {FontSizeProvider, FontSizeConsumer}