import logo from './logo.svg';
import './App.css';
import AccountCreateForm from './components/AccountCreateForm';
import Token from './components/Token';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';

function App() {
  const msalInstance = new PublicClientApplication({
    auth:
    {
      clientId: "82a7531e-1ee4-4073-b64c-81d9d11e6bf0",
      redirectUri: "https://car-account-creator-front.azurewebsites.net", 
      authority: "https://login.microsoftonline.com/1440b6da-86d7-42c3-b09a-d06191de2220"
    }});

  return (
    <MsalProvider instance={msalInstance}>
      <div className="App">
        <header className="App-header">
          <AccountCreateForm />
          <Token />
        </header>
      </div>
    </MsalProvider>
  );
}

export default App;
