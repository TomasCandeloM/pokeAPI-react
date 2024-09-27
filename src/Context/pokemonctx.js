import { createContext, useContext, useReducer} from "react";
import { initialState, pokemonReducer } from "./pokemonReducer";

const PokemonContext = createContext(null);
const PokemonDispatchContext = createContext(null);

export function usePokemonContext() {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
}

export function usePokemonDispatch() {
    const context = useContext(PokemonDispatchContext);
    if (!context) {
        throw new Error("usePokemonDispatch must be used within a PokemonProvider");
    }
    return context;
    }

export function PokemonProvider({ children }) {
    const [state, dispatch] = useReducer(pokemonReducer, initialState);
    return (
        <PokemonContext.Provider value={state}>
            <PokemonDispatchContext.Provider value={dispatch}>
                {children}
            </PokemonDispatchContext.Provider>
        </PokemonContext.Provider>
    );
}