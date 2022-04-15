import '../../style.css'

function CardMiguel() {
    
    return (
        <div className='card'>
            
            <img className='userAvatar' src='https://jxlgurzscxuwmhhtszfm.supabase.co/storage/v1/object/public/hackathon-s03/perfil/miguelassis.jpg'/>
            <div className='profile'>
            <strong className='userName'>Miguel Assis</strong>
            <small className='userBio'>Product Designer</small></div>
            <div className='skills'>
            <div className='content'>
                <p>UX Writing</p><div className="skillbar1"/></div>
            <div className='content'>
                <p>Adobe XD</p><div className="skillbar2"/></div>
            <div className='content'>
                <p>Figma</p><div className="skillbar3"/></div>
            <div className='content'>
                <p>Kanban</p><div className="skillbar4"/></div>
            <div className='button'>VER PERFIL</div>
            </div>
        </div>
    )
}

export default CardMiguel