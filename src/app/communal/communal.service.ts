export class CommunalService {
    constructor(){}

    getCommunals(){
        return [
            { 
              title: 'Cold Water',
              tax: 35.40,
              last: 0,
              current: 0,
              spent: 0
            },
            { 
              title: 'Hot Water',
              tax: 180.55,
              last: 0,
              current: 0,
              spent: 0
            },
            { 
              title: 'Day Electricity',
              tax: 6.19,
              last: 0,
              current: 0,
              spent: 0
            },
            { 
              title: 'Night Electricity',
              tax: 1.79,
              last: 0,
              current: 0,
              spent: 0
            }
          ]
    }
}