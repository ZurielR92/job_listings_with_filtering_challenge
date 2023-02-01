import { FC } from 'react'
import { useFilters } from '../hooks/useFilters'

//Importacion de estilos
import styles from './FiltersContainer.module.scss'
import { Tag } from './Tag'

//Propiedades que recibe el componente
interface Props {
}


export const FilterContainer:FC<Props> = () => {

    const { filterList, clearFilters } = useFilters();

    return (
        <div className={ `${styles.filterscontainer} ${ filterList.length > 0 && styles.active }` }>
            <div className={ styles.tags }>
                {
                filterList.map( filter => <Tag key={ filter } title={ filter } del/> )
                }
            </div>
            <div className={ styles.clear }>
                <Tag onClick={ () => clearFilters() } title='Clear' />
            </div>
        </div>
    )

}