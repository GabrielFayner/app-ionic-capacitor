import { Outlet } from 'react-router-dom';
import './App.css';

import '@ionic/react/css/core.css'

import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import { IonHeader, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';

import './theme/variables.css'

setupIonicReact()

function App() {
  return (
    <>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>New APP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Outlet />
    </>
  )
}

export default App;
