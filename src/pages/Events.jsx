import React from 'react'
import { Box  } from '@mui/system';
import { Button, Grid, Paper, Typography } from '@mui/material';
import Header from '../components/Header';
import axios from  'axios';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { blue, blueGrey } from '@mui/material/colors';
import { Modal } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
const Events = () => {


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  
  const [allEvents,SetAllEvents]=useState([]);


     //Function to fetch all data
     
     useEffect(()=>{
      const allData=async()=>{
        try {
          const res=await axios.get('https://calendar-app-server-frankfurt-server.onrender.com/api/events')
          console.log(res.data);
          SetAllEvents(res.data)
  
        } catch (error) {
          
        }
      }
      allData()
     },[])



     const handleClickDelete= async(id)=>{
      try{
        const res=axios.delete(`https://calendar-app-server-frankfurt-server.onrender.com/api/event/${id}`)
        const newListItem=allEvents.filter(item=>item._id !== id)
        SetAllEvents(newListItem);
        setOpen(false)

      }
      catch(error){
        console.log(error)
      }
  
  
      
     }

     //MODALS

     const [open, setOpen] =React.useState('false');
     const handleOpen = (id) => {
       setOpen(id);
     };
     const handleClose = () => {
       setOpen('');
     };


     

  return (
    <Box sx={{m:'auto'}}>
      <Header title={'Events'} subtitle={'List of all events'}/>     
      <Grid container spacing={3} >
        {allEvents.map((event)=>(

          
          <Grid item xs={12} md={6} >
           


            <Paper elevation={10}  sx={{p:1}}>
              
              <Typography  color={blue[500]} variant='h3'textAlign={'center'} marginY={2} fontSize={25} sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1rem'}}> {event.title}<EventAvailableIcon color='primary'/></Typography>
              <Typography variant='subtitle1' textAlign={'center'} marginY={2}>{format(new Date( event.startDate), 'MM eeee, yyyy h:mm bbbb OOOO')}</Typography>
                <Button sx={{width:'100%'}} variant="outlined" color='warning' onClick={()=>handleOpen(event._id)}>Borrar{event.title}</Button>
                <Modal
                key={event._id}
                hideBackdrop
                open={open === event._id ? true : false}
                onClose={handleClose}
                aria-labelledby={event._id+'by'}
                aria-describedby={event._id}
              >
                <Box sx={{...style,  width: 500 }}>
                  <h2 id={event._id+'by'}>Adevertencia para: {event.title}</h2>
                  <p id={event._id}>
                    ¿Estas seguro de borrar este evento?
                  </p>
                  <Button  color='warning' onClick={()=>handleClickDelete(event._id)}>Sí, borrar</Button>
                  <Button onClick={handleClose}>No salir</Button>
                </Box>
              </Modal>

              

              
             
              
              
            </Paper>

          </Grid>
        ))}

        
      </Grid>    

    </Box>
  )
}


export default Events