import Data from '../components/data/data.json'
import Card from '../components/card/index'
import points from '../assets/icon-ellipsis.svg'
import { useState } from 'react'
import HeaderBoard from '../components/header'

const DashboardLayout = () => {

  const [selected, setSelected] = useState('daily');
  const [infoData, setInfoData] = useState('Daily');

  const selectedDate = (n) => {
    setSelected(n);
    n === 'daily' ? setInfoData('Daily')  : n === 'weekly' ? setInfoData('Last Week') : setInfoData('Month');
  }


  return (
    <div id="container">
        <div id='grid-container'> 
        <HeaderBoard selectedDate={selectedDate} selected={selected} />
        {Data.map((item, index) => (
        <Card key={index} icon={item.icon} title={item.title} id={item.id}
        points={points} 
        hours={item.timeframes[selected].current}
        info={item.timeframes[selected].previous}
        infoData={infoData}
       />))}
        </div>

        </div>
  )
}

export default DashboardLayout