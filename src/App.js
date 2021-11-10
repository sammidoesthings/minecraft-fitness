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

// Browser Imports
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Routes>

        <Route 
          exact path="/"
          element={<LandingPage/>}
        />

        <Route 
          path="/login"
          element={<LoginPage/>}
        />

        <Route 
          path="/createaccount"
          element={<CreateAccount/>}
        />

        <Route 
          path="/instdash"
          element={<InstructorDashboard/>}
        />

        <Route 
          path="/clientdash"
          element={<ClientDashboard/>}
        />

        <Route 
          path="/coursecatalog"
          element={<CourseCatalog/>}
        />

        <Route 
          path="/meetourinst"
          element={<MeetOurInstructors/>}
        />

      </Routes>
    </div>
  );
}

export default App;
