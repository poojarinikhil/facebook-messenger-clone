import React from 'react'
import  './message.css'
import { Card, Typography,CardContent} from '@mui/material'
function Message(props) {
  return (
      <Card className='message'>
        <CardContent>
        <Typography
          color = "black"
          variant = "h5"
          component = "h2">
          {props.username}:{props.text}
        </Typography>
        </CardContent>
      </Card>
        // <h2>{props.username}:{props.text}</h2>
  )
}

export default Message