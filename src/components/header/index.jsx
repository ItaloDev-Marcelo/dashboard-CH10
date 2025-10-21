import ProfilePhoto from '../../assets/image-jeremy.png';

export default function HeaderBoard({selectedDate, selected}) {
    return (
        <header className="Controll">
            <section id="Profile-row">
                <div className='profile-circle'>
                    <img src={ProfilePhoto} alt='' />
                </div>
                <h1 id='profile-title'> <span id='small'>Report for</span> <br />
                    <strong>Jeremy Robson</strong> </h1>
            </section>
            <div className="row">
            <button  aria-label='daily button' className={selected === 'daily' ? 'daily-btn active' : 'daily-btn'} onClick={() => selectedDate('daily')}>Daily</button>
            <button  aria-label='weekly button' className={selected === 'weekly' ? 'weekly-btn active': 'weekly-btn '} onClick={() => selectedDate('weekly')}>Weekly</button>
            <button  aria-label='monthly button' className={selected === 'monthly'  ? 'monthly-btn active': 'monthly-btn'} onClick={() => selectedDate('monthly')}>Monthly</button>
            </div>
        </header>
    )
}