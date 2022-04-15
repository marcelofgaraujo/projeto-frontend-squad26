import '../../style.css'

function CardJoao() {
    
    return (
        <div className='card'>
            
            <img className='userAvatar' src='https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/joaoaugusto.jpg'/>
            <div className='online'><p>ONLINE</p></div>
            <div className='profile'>
            <strong className='userName'>João Augusto</strong>
            <small className='userBio'>Analista de Dados Pleno</small></div>
            <div className='skills'>
            <div className='content'>
                <p>SQL</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>Node.js</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>Git</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>Python</p><div className="skillbar4"/></div>
            <div className='button'>VER PERFIL</div>
            </div>
        </div>
    )
}

export default CardJoao