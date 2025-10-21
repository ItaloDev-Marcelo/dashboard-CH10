

export default function Card({icon, title, points, hours, info, id, infoData}) {
    return (
        <article className={id}>
           <div className='back-image'>
              <img src={icon} alt='' />
           </div>
           <section className="information--area">
             <div className="row-item1">
              <h2 className="card--title">{title}</h2>
              <button className="points"><img src={points} alt=''/></button>
             </div>
             <div className="row-item1 down">
              <h3 className="card--hours">{hours}hrs</h3>
              <h4 className="card--add-info"> {infoData}-{info} hrs</h4>
             </div>
           </section>
        </article>
    )
}