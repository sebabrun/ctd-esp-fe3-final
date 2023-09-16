import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


const Home = () => {
  const { state } = useContextGlobal()

  return (
    <main>
      <h1>Dental Clinic</h1>
      <div className='card-grid'>
        {state.data.map(dentist => <Card key={dentist.id} dentist={dentist}/>)}
      </div>
    </main>
  )
}

export default Home