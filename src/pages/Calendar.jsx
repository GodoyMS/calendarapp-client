import React from 'react'
import FullCalendar from '@fullcalendar/react';

import { Box } from '@mui/material';
import axios from 'axios';
import { useState, useEffect,useMemo } from 'react';
import CalendarComponent from '../components/Calendar/CalendarComponent';
import Header from '../components/Header';
const Calendar=()=> {

  const[listEvents,setListEvents]=useState([]);
  

 
     //Function to fetch all data
     useEffect(()=>{
      const allData=async()=>{
        try {
          const res=await axios.get('http://localhost:5000/api/events')
          console.log(res.data);
          setListEvents( res.data)
  
        } catch (error) {
          
        }
      }
      allData()
     },[])




  const handleDateClick = async(info) => {
    console.log(info);

    const title = prompt("Please enter a new title for your event");
    const calendarApi = info.view.calendar;
    calendarApi.unselect();
    console.log(info)
    try {
      const response=await axios.post('http://localhost:5000/api/event',{title:title, startDate:info.startStr, finishDate:info.endStr})
      console.log(response);
      setListEvents(prev=>[...prev,response .data])


    } catch (err) {
      console.log(err)
      
    }


    /*
    if (title) {
      calendarApi.addEvent({
        id: `${info.dateStr}-${title}`,
        title,
        start: info.startStr,
        end: info.endStr,
        allDay: info.allDay,
      });
    }
    */
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };


 

  
  return(
    <Box sx={{my:5}}>
      <Header title={"Calendar"}  />


      <CalendarComponent listEvents={listEvents} handleDateClick={handleDateClick} handleEventClick={handleEventClick}/>


    

    
   
    </Box>
  )

}

export default Calendar


