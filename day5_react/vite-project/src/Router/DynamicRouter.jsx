import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicRouter = () => {
    // console.log(useParams());
    const {slug} = useParams();
  return (
    <div>
      DaymanicRouter = {slug}
    </div>
  )
}

export default DynamicRouter
