import { FC, ReactNode, useReducer } from 'react'
import { FilterContext, filterReducer } from './'

interface Props {
    children: ReactNode
}

export interface FilterState {
   filterList: string[]
}

const FILTER_INITIAL_STATE: FilterState = {
   filterList: [],
}

export const FilterProvider:FC<Props> = ( { children } ) => {

   const [state, dispatch] = useReducer(filterReducer, FILTER_INITIAL_STATE)

   const addFilter = ( filter: string ) => {
    if( state.filterList.includes( filter ) ) return;
    dispatch({ type:'Filter - Add Filter', payload: [ ...state.filterList, filter ] })
   }

   const deleteFilter = ( filter: string ) => {
    const newList = state.filterList.filter( f => f !== filter )
    dispatch({ type:'Filter - Delete Filter', payload: newList })
   }

   const clearFilters = () => {
    dispatch({ type: 'Filter - Clear Filters' });
   }

   return (
      <FilterContext.Provider value={{
         ...state,

         //Methods
         addFilter,
         deleteFilter,
         clearFilters

      }}>
         { children }
      </FilterContext.Provider>
   )
}