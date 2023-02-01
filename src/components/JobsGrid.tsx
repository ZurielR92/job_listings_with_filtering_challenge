import { FC, ReactNode } from 'react'

//Importacion de estilos
import styles from './JobsGrid.module.scss'

//Propiedades que recibe el componente
interface Props {
    children: ReactNode
}


export const JobsGrid:FC<Props> = ({ children }) => {
    return (
        <div className={ styles.jobsgrid }>

            {
                children
            }

        </div>
    )

}