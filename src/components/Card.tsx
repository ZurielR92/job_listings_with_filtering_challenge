import { FC } from 'react'
import { useFilters } from '../hooks/useFilters'
import { iJob } from '../utils/types'

//Importacion de estilos
import styles from './Card.module.scss'
import { Tag } from './Tag'

//Propiedades que recibe el componente
interface Props {
    job: iJob
}


export const Card:FC<Props> = ({ job }) => {

    const { addFilter } = useFilters()

    return (
        <div className={ styles.card }>
            <img src={ job.logo } alt="" />
                <div className={ styles.hub }>

                    <div className={ styles.s1 }>
                        <strong>
                            { job.company }
                        </strong>
                        <span onClick={ () => addFilter( 'New' ) } className={`${ styles.new } ${ job.new && styles.active }`}>New</span>
                        <span onClick={ () => addFilter( 'Featured' ) } className={`${ styles.featured } ${ job.featured && styles.active }`}>Featured</span>
                    </div>
                    <span onClick={ () => addFilter( job.position ) } className={ styles.position }>
                        { job.position }
                    </span>
                    <div className={ styles.others }>
                        <span>{ job.postedAt }</span>
                        <span className={ styles.filter } onClick={ () => addFilter( job.contract ) }>{ job.contract }</span>
                        <span className={ styles.filter } onClick={ () => addFilter( job.location ) } >{ job.location }</span>
                    </div>
                    <div className={ styles.divider }></div>
                </div>
                <div className={ styles.tags }>
                    <Tag onClick={ () => addFilter( job.role ) } title={ job.role }/>
                    <Tag onClick={ () => addFilter( job.level ) } title={ job.level }/>
                    {
                        job.languages.map( lang => {
                            return (
                                <Tag onClick={ () => addFilter( lang ) } key={ lang } title={ lang }/>
                            )
                        } )
                    }
                    {
                        job.tools.map( tool => {
                            return (
                                <Tag onClick={ () => addFilter( tool ) } key={ tool } title={ tool }/>
                            )
                        } )
                    }
                </div>
        </div>
    )

}