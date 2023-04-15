import { 
    IonButton,
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonIcon 
} from '@ionic/react'
import { logOut } from 'ionicons/icons'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Dashboard</IonCardTitle>
            </IonCardHeader>
            <div className='ion-margin-top' style={{ padding: '0 1rem 1rem' }}>
                <IonButton expand='full' color='secondary'>
                    <IonIcon icon={ logOut } slot='start'/>
                    <Link to='/' style={{ 
                        color: '#fff', 
                        textDecoration: 'none' 
                    }}>Voltar para Login</Link>
                </IonButton>
            </div>
        </IonCard>
    </>
  )
}
export default Dashboard