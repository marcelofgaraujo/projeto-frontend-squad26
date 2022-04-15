import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import '../style.css'
import { Link } from 'react-router-dom'
import CardAlice from '../../../components/card/cards fixos/acessibilidade/cardAlice'
import CardBianca from '../../../components/card/cards fixos/acessibilidade/cardBianca'
import CardJuliana from '../../../components/card/cards fixos/acessibilidade/cardJuliana'

function SearchAcessibilidade() {


  return (
    <>
      <Header />
      <main className='mainSearch'>
        <section className='top'>
          <Link to='/home'><div type='button' className='newSearch'>NOVA BUSCA</div></Link>
          <span>Acessibilidade</span>
        </section>
        <div className='cards'>
          <CardBianca/>
          <CardJuliana/>
          <CardAlice />
        </div>
      </main>
      <Footer />
    </>
  )
}
export default SearchAcessibilidade