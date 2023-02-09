import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid'
 import multimonth from '@fullcalendar/multimonth';
 import listPlugin  from '@fullcalendar/list';


const CalendarComponent = React.memo(({listEvents,handleDateClick,handleEventClick}) => {
  return (
   <>
    
    <FullCalendar
      
      plugins={[ dayGridPlugin,interactionPlugin,timeGridPlugin,multimonth,listPlugin ] }
      headerToolbar={{
        left: 'prev,next today',
        center:'', 
        right: 'title'
      }}

      footerToolbar={{
        left:'',
        center:'dayGridMonth,timeGridWeek,timeGridDay,multiMonthYear,listWeek',
        right:''
      }}
      events={ listEvents.map((e)=>{
        return {id:e._id,title:e.title,start:e.startDate,end:e.finishDate}
      })  }

      timeZone={'UTC'} 
      initialView="dayGridMonth"
      weekends={true}
      nowIndicator={true}
      editable={true}
      selectable={true}
      height={600}
      select={handleDateClick}
      eventClick={handleEventClick}
      listDayFormat={true}
      
      

      


    />
   </>
  )
})

export default CalendarComponent