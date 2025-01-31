import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import points from './assets/icon-ellipsis.svg'
import DashboardData from './components/Desk data/DashboardData';
import MiniCard from './components/card';
import MainCard from './components/Main Card'


function App() {
  
  const [data, setData] = useState(0);

  function hundleChange(num) {
    setData(num)
  }
  
   const option = DashboardData.map((item, index) => {
    const {icon, title, timeframes} = item 
    return (
      <MiniCard key={index} icon={icon} title={title} 
       points={points} 
       hours={data === 0 ? timeframes.daily.current+'hrs'   : data === 1 ? timeframes.weekly.current+'hrs'  : timeframes.monthly.current+'hrs'  }
       info={data === 0 ? 'Daily ' + timeframes.daily.previous+'hrs'  : data === 1 ? 'Last Week ' + timeframes.weekly.previous+'hrs'  : 'Last Month ' + timeframes.monthly.previous+'hrs'  } />
    )
   })

  return (
    <div className='grid-container'> 
    <MainCard hundleChange={hundleChange} />
       {
        option
       }
    </div>
  )
}

export default App
