import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import '../style.css'
import { Link } from 'react-router-dom'
import CardMaria from '../../../components/card/cards fixos/figma/cardMaria'
import CardMiguel from '../../../components/card/cards fixos/figma/cardMiguel'
import CardNayane from '../../../components/card/cards fixos/figma/cardNayane'

function SearchFigma() {


  return (
    <>
      <Header />
      <main className='mainSearch'>
        <section className='top'>
          <Link to='/home'><div type='button' className='newSearch'>NOVA BUSCA</div></Link>
          <span>Figma</span>
        </section>
        <div className='cards'>
          <CardMaria />
          <CardMiguel />
          <CardNayane />
        </div>
      </main>
      <Footer />
    </>
  )
}
export default SearchFigma