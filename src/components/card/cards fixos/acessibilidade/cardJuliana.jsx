import '../../style.css'

function CardJuliana() {
    
    return (
        <div className='card'>
            
            <img className='userAvatar' src='https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/julianaalmeida.jpg' />
            <div className='profile'>
            <strong className='userName'>Juliana Almeida</strong>
            <small className='userBio'>UX/UI Designer Júnior</small></div>
            <div className='skills'>
            <div className='content'>
                <p>UX Research</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>UX Strategy</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>Lean Design</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>Acessibilidade</p><div className="skillbar4"/></div>
            <div className='button'>VER PERFIL</div>
            </div>
        </div>
    )
}

export default CardJuliana