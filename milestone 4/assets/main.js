var app = new Vue({
  el: '#root',
  data: {
    contacts: [
      {
        name: 'Michele',
        avatar: '_1.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent',
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received',
          },
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2.jpg',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent',
          },
          {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
          },
          {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
          },
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3.jpg',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received',
          },
          {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
          },
          {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received',
          },
        ],
      },
      {
        name: 'Alessandro B.',
        avatar: '_4.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received',
          },
        ],
      },
      {
        name: 'Alessandro L.',
        avatar: '_5.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received',
          },
        ],
      },
      {
        name: 'Claudia',
        avatar: '_6.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received',
          },
          {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent',
          },
        ],
      },
      {
        name: 'Federico',
        avatar: '_7.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received',
          },
        ],
      },
      {
        name: 'Davide',
        avatar: '_8.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received',
          },
          {
            date: '10/01/2020 15:50:00',
            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
            status: 'sent',
          },
          {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received',
          },
        ],
      },
    ],
    currentUser: 0,
    text: '',
    search: '',
  },

  methods: {
    selectUser(index) {
      this.currentUser = index;
    },

    getLastHourContact(element) {
      let lastDate = element.messages[element.messages.length - 1].date;
      lastDate = lastDate.split(' ');
      console.log(lastDate)
      return lastDate[1].slice(0,5);
    },

    getLastHourMessage(element) {
      let date = element.date;
      date = date.split(' ');
      console.log(date)
      return date[1].slice(0,5);
    },

    addMessage() {
      let getMessage = this.contacts[this.currentUser].messages;

      const d = new Date();
      let time = d.toLocaleTimeString().slice(0,5);
      let date = d.toLocaleTimeString();

      let now = `${date} ${time}`;

      if (this.text == '') {
      } else {
        getMessage.push({
          date: now,
          message: this.text,
          status: 'sent',
        });

        setTimeout(this.PcMessage, 1500);
      }
    },

    lastAccess() {
      const d = new Date();
      let time = d.toLocaleTimeString();
      time = time.slice(0, 5);
      return time;
    },

    PcMessage() {
      let getMessage = this.contacts[this.currentUser].messages;

      const d = new Date();
      let time = d.toLocaleTimeString().slice(0,5);
      let date = d.toLocaleTimeString();

      let now = `${date} ${time}`;

      getMessage.push({
        date: now,
        message: 'Ok',
        status: 'received',
      });
    },

    elementDelete(element, index){
       this.contacts.splice(index, 1)
    },

    searchName() {
      this.contacts.forEach((element, index) => {
        if (element == this.search) {
          this.contacts[index].visible = true;
        } else {
          if (
            element.name.includes(this.search) ||
            element.name.toLowerCase().includes(this.search) ||
            element.name.toUpperCase().includes(this.search)
          ) {
            element.visible = true;
          } else {
            element.visible = false;
          }
        }
      });
    },
  },
});
