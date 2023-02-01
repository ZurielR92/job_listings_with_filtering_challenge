import { FC, ReactNode } from 'react'
import { useFilters } from '../hooks/useFilters'

//Importacion de estilos
import styles from './Tag.module.scss'

//Propiedades que recibe el componente
interface Props {
    onClick?: () => void
    del?: boolean
    onDelete?: (  ) => void
    children?: ReactNode
    title?: string
}


export const Tag:FC<Props> = ({ title = '', onClick, onDelete, children, del }) => {

    const { addFilter, deleteFilter } = useFilters();


    return (
        <div onClick={ onClick ? () => onClick() : () => addFilter( title ) }  className={`${ styles.tag } ${ del && styles.del }`}>
            { title }
            {
                del ? (
                    <div onClick={ () => deleteFilter( title ) }>x</div>
                ) : null
            }
        </div>
    )

}