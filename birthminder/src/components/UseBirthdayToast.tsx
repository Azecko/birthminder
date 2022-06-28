import { useState } from "react";
import { IonButton, IonToast } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
function UseBirthdayToast() {
    const allBirthdays = {...localStorage}
    const [showToast1, setShowToast1] = useState(true);
    var birthdaysList:any = [];
    Object.keys(allBirthdays).map(function(key) {
        const birthday = JSON.parse(allBirthdays[key])
        const birthdayDate = new Date(birthday.date)
        const today = new Date();

        if(birthdayDate.toDateString() === today.toDateString()) {
            birthdaysList.push(birthday.name)
        }
    });
    if(birthdaysList.length == 0) {
      return;
    }
    return (
        <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message={birthdaysList + ' have their birthday today!'}
        duration={5000}
        color="danger"
        position="bottom"
        buttons={[
          {
            icon: closeOutline,
            role: 'cancel',
          }
        ]}
      />
    )
  }
  
  export default UseBirthdayToast;
  