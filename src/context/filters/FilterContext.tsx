import { createContext } from 'react'


interface ContextProps {
   filterList: string[]

   addFilter: ( filer: string ) => void
   deleteFilter: ( filter: string ) => void
   clearFilters: () => void
}


export const FilterContext = createContext( {} as ContextProps )