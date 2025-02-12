import { useState } from 'react'

import  './Components/Alphanumeric.jsx'
import  './Components/To_Do_List.jsx'
import './Components/Color_Picker.jsx'
import './Components/DayNight.jsx'
import './Components/Pagination.jsx'
import './Components/ContentFinder.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugiat itaque quidem quibusdam quisquam. Iusto necessitatibus ipsam tempora asperiores provident nostrum dolorem cum voluptatibus ducimus voluptate esse fugit, perspiciatis nam officiis ratione fuga enim molestiae repellendus voluptas sint accusantium blanditiis placeat velit. Laudantium recusandae autem omnis, illum in ab. Odit!</p>
    </>
  )
}

export default App
