import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import '../style.css'
import { Link } from 'react-router-dom'
import CardJoao from '../../../components/card/cards fixos/node/cardJoao'
import CardLuciana from '../../../components/card/cards fixos/node/cardLuciana'
import CardMario from '../../../components/card/cards fixos/node/cardMario'

function SearchNode() {


  return (
    <>
      <Header />
      <main className='mainSearch'>
        <section className='top'>
          <Link to='/home'><div type='button' className='newSearch'>NOVA BUSCA</div></Link>
          <span>Node</span>
        </section>
        <div className='cards'>
          <CardMario/>
          <CardJoao/>
          <CardLuciana />
        </div>
      </main>
      <Footer />
    </>
  )
}
export default SearchNode