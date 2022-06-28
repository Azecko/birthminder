import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonDatetime, IonInput, IonItem, IonAlert, IonLabel } from '@ionic/react';
import { format, parseISO } from 'date-fns';
import { useState } from 'react';
import registerBirthday from '../components/registerBirthday';
import deleteBirthday from '../components/deleteBirthday';
import isBirthday from '../components/isBirthday';
import UseBirthdayToast from '../components/UseBirthdayToast';

const Insert: React.FC = () => {
  const [selectedDate, setSelectedDate]:any = useState<String>();
  const [selectedName, setSelectedName]:any = useState<String>();
  const [showAlert, setShowAlert] = useState(false);

  const allBirthdays = {...localStorage}

  const formatDate = (value:string) => {
    return format(parseISO(value), 'MM/dd/yyyy');
  };

  const alert = (header:string, subHeader:string, message:string) => {
    return (
      <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='my-custom-class'
          header={header}
          subHeader={subHeader}
          message={message}
          buttons={['OK']}
        />
    )
  };



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Birthminder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {alert('Alert', '', 'Please enter a valid name and a valid date.')}
        {UseBirthdayToast()}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', marginTop: '1vh', gap: '20px'}}>
          <IonItem color="light">
            <IonLabel>Enter a name</IonLabel>
            <IonInput placeholder="Alexandre" pattern='date' color="dark" onIonChange={e => setSelectedName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonLabel>Date of the birthday</IonLabel>
          <IonDatetime presentation="date" onIonChange={e => setSelectedDate(formatDate(e.detail.value!))}></IonDatetime>
          <IonButton color="primary" onClick={e => registerBirthday(selectedDate, selectedName) || setShowAlert(true)}>Insert</IonButton>
          {
            Object.keys(allBirthdays).length > 1 ? (
              <table style={{width: '30%', border: '1px solid white', textAlign: 'center'}}>
                <tr>
                  <th style={{border: '1px solid white'}}>Name</th>
                  <th style={{border: '1px solid white'}}>Date (month/day/year)</th>
                  <th style={{border: '1px solid white'}}>Birthday today</th>
                  <th style={{border: '1px solid white'}}>Delete</th>
                </tr>
                {
                  Object.keys(allBirthdays).map(function(key) {
                    const birthday = JSON.parse(allBirthdays[key])
                    const birthdayDate = new Date(birthday.date)     
                    if(!key.startsWith('birthday_')) {
                      return;
                    }      
                    return (
                      <tr>
                        <td>{birthday.name}</td>
                        <td>{birthday.date}</td>
                        {
                          isBirthday(birthdayDate) ? <td>Yes</td> : <td>No</td>
                        }
                        <td><IonButton size="small" color="danger" onClick={e=> deleteBirthday(birthday.index)}>Delete</IonButton></td>
                      </tr>
                    )
                  })
                }
              </table>
            ) : ''
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Insert;
