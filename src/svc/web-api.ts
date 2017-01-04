import { apiDataClient  } from './data-client'
import { IContact } from '../interfaces/IContact'

let latency = 200;
let id = 0;

function getId(){
  return ++id;
}

export class WebAPI extends apiDataClient{
  isRequesting = false;
  contacts = [];
  
  constructor(){
    super();
  }

  getContactList(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        this.isRequesting = true;
        let results = this.fetch('data/contacts.json')
          .then(response => {
            return response.json()
              .then(json => {
                let list = JSON.parse(JSON.stringify(json));
                this.contacts = list.map(x => {
                  return <IContact>{
                    id: getId(),
                    firstName: x.firstName,
                    lastName: x.lastName,
                    email: x.email,
                    phoneNumber: x.phoneNumber
                  }
                });

                return this.contacts;
              })
          })
        resolve(results);

        this.isRequesting = false;
      }, latency);
    })
  }

  getContactDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = this.contacts.filter(x => x.id == id)[0];

        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveContact(contact){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(contact));
        let found = this.contacts.filter(x => x.id == contact.id)[0];

        if(found){
          let index = this.contacts.indexOf(found);
          this.contacts[index] = instance;
        }else{
          instance.id = getId();
          this.contacts.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}
