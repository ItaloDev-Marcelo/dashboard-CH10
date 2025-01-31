

export default function MiniCard({icon, title, points, hours, info}) {
    return (
        <article className="Mini--Card--item">
           <div className='back-image'>
              <img src={icon} alt='zero' />
           </div>
           <section className="information--area">
             <div className="row-item1">
              <h2 className="card--title">{title}</h2>
              <button className="points"><img src={points} alt=''/></button>
             </div>
             <div className="row-item1">
              <h3 className="card--hours">{hours}</h3>
              <h4 className="card--add-info">{info}</h4>
             </div>
           </section>
        </article>
    )
}