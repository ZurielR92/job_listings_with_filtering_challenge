import { useState, useEffect } from 'react'
import data from './data.json';
import styles from './App.module.scss';
import { Card } from './components/Card';
import { JobsGrid } from './components/JobsGrid';
import { FilterContainer } from './components/FiltersContainer';
import { useFilters } from './hooks/useFilters';

function App() {

  const [ jobs, setJobs ] = useState( data )
  const { filterList } = useFilters()

  useEffect( () => {
    if( filterList.length === 0 ) {
      setJobs( data );
    } else {
      const newList = data.filter( ( job ) => {
        const tags = [ ...job.tools, ...job.languages, job.level, job.role, job.contract, job.location, job.position, job.new ? 'New':null, job.featured?'Featured':null ]
        return filterList.every( filter => tags.includes( filter ) )
      } )
      setJobs( newList )
    }
  }, [filterList] )

  return (
    <main className={ styles.app }>
      
      <FilterContainer/>

      <JobsGrid>
        {
          jobs.map( ( job ) => {
            return (
              <Card key={job.id}  job={ job }/>
            )
          } )
        }
      </JobsGrid>
    </main>
  );
}

export default App;
