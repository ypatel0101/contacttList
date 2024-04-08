import { useState } from 'react'
import './App.css'
import ContactList from '/Users/yashpatel/Desktop/coursework/block26contactlist/contactList/src/components/ContactList.jsx'
import SelectedContact from '/Users/yashpatel/Desktop/coursework/block26contactlist/contactList/src/components/SelectedContact.jsx'


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

