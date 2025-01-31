import ProfilePhoto from './image-jeremy.png';

export default function MainCard({ hundleChange }) {
    return (
        <article className="dashboard--Main--container">
            <section id="Profile-row">
                <div className='profile-circle'>
                    <img src={ProfilePhoto} alt='' />
                </div>
                <h1 id='profile-title'> <span id='small'>Report for</span>
                    <strong>Jeremy Robson</strong> </h1>
            </section>
            <button aria-label='daily button' onClick={() => hundleChange(0)}>Daily</button>
            <button  aria-label='weekly button' onClick={() => hundleChange(1)}>Weekly</button>
            <button  aria-label='monthly button' onClick={() => hundleChange(2)}>Monthly</button>
        </article>
    )
}