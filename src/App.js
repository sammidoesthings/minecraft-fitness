import './App.css';

// Required Pages
import { LandingPage } from './components/landing';
import { LoginPage } from './components/login';
import { CreateAccount } from './components/createaccount';
import { InstructorDashboard } from './components/instdash';
import { ClientDashboard } from './components/clientdash';

// Extra Flavor Pages
import { CourseCatalog } from './components/coursecatalog';
import { MeetOurInstructors } from './components/meetourinst';

// Card Imports

import { ClassCard } from './components/cards/classcard';

function App() {
  return (
    <div className="App">
      I am the app container! I begin here.
      <LandingPage/>
      <LoginPage/>
      <CreateAccount/>
      <InstructorDashboard/>
      <ClientDashboard/>
      <CourseCatalog/>
      <MeetOurInstructors/>

      <ClassCard/>

      I am the app container! I end here.
    </div>
  );
}

export default App;
