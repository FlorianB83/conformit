const comments = [
    {
        creationDate: '2016-04-22T06:23:00Z',
        author: 'Jean Valjean',
        content: 'Océane est arrivée il y a seulement 3 mois',
      },
      {
        creationDate: '2007-03-20T07:34:00Z',
        author: 'Océane Quessy',
        content: 'Je n\'étais pas formé à ca',
      },
      {
        creationDate: '2012-08-27T08:54:00Z',
        author: 'Martin Duranseau',
        content: 'Le marteau n\'était pas dans la malette',
      },
      {
        creationDate: '2009-04-22T01:12:00Z',
        author: 'Martin Duranseau',
        content: 'La procédure était très ancienne',
      },
      {
        creationDate: '2016-12-09T11:34:00Z',
        author: 'Adrien Lacharité',
        content: 'L\'alarme est défaillante',
      },
      {
        creationDate: '2018-01-21T06:59:00Z',
        author: 'Belisarda Mazuret',
        content: 'Le sol est abimé',
      },
      {
        creationDate: '2012-09-27T08:54:00Z',
        author: 'Alex Duranseau',
        content: 'Le marteau n\'était pas présent',
      },
      {
        creationDate: '2009-05-22T01:12:00Z',
        author: 'Lola Langin',
        content: 'Le sceau était brisé',
      },
      {
        creationDate: '2016-02-09T11:34:00Z',
        author: 'Zoé Lacharité',
        content: 'L\'alarme est trop forte',
      },
      {
        creationDate: '2018-03-21T06:59:00Z',
        author: 'Robert Mazuret',
        content: 'La machine est trop lourde',
      }
  ]

  export default {
    getComment (index) {
      if (typeof(index) !== "number") {
          throw "Invalid index";
      }
      if (index === 47) {
          return comments.slice(0,2);
      } else if (index === 81) {
          return comments.slice(2,9);
      }  else {
          return []
      }
  },
  removeComment(date){
   const result =  comments.filter(comment => comment.creationDate != date);
   return result;
  },


}