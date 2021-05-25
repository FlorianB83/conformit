const events = [
    {
      id: 47,
      creationDate: '2008-03-30T05:13:23Z',
      createdBy: 'Kirstin',
      involvedEmployeeId: 1868,
      title: 'Accident avec Adelle',
      description: 'Une description',
      statusName: 'Open',
      Témoins: ['Mureil', 'Melina'],
    },
    {
      id: 81,
      creationDate: '1983-05-30T11:35:46Z',
      createdBy: 'Louella',
      involvedEmployeeId: 8139,
      title: 'Accident avec Amara',
      description: '',
      statusName: 'Closed',
      Témoins: ['Tina', 'Luci'],
    },
    {
      id: 38,
      creationDate: '2017-11-15T08:08:14Z',
      createdBy: 'Nannie',
      involvedEmployeeId: 2532,
      title: 'Accident avec Helena',
      description: '',
      statusName: 'InProgress',
      Témoins: ['Jeanna', 'Jerry'],
    },
    {
      id: 384,
      creationDate: '2019-11-16T08:08:14Z',
      createdBy: 'Lola',
      involvedEmployeeId: 2762,
      title: 'Accident avec Harry',
      description: 'Je me suis cassé le bras',
      statusName: 'InProgress',
      Témoins: ['Jeanna', 'Jerry', 'Robert'],
    },

    
    
  ]
  
  export default {
    getEvents () {
      return events;
    },
 
    getAccident (id){
    
      const accident = events.filter(accident => accident.id === id);
      return accident[0];
     
    }


  }
