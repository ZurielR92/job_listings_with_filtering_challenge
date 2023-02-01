import { FilterState } from './';

type FilterActionTipe =
   | { type: 'Filter - Add Filter', payload: string[] }
   | { type: 'Filter - Delete Filter', payload: string[] }
   | { type: 'Filter - Clear Filters' }

export const filterReducer = (state: FilterState, action: FilterActionTipe): FilterState => {

   switch (action.type) {
      case 'Filter - Add Filter':
         return {
            ...state,
            filterList: action.payload
         }
      case 'Filter - Delete Filter':
         return {
            ...state,
            filterList: action.payload
         }
      case 'Filter - Clear Filters':
         return {
            ...state,
            filterList: []
         }

      default:
         return state
   }

}