import React, { useState } from "react";

const EmergencyContacts = () => {
  const [contacts, setContacts] = useState([
    { phone: 112 },
    { phone: "+233 55 843 9868" },
    { phone: "233 50 949 7700" }
  ]);
  return (
    <div className="emergency-contacts  ui tall stacked segment  amber accent-4">
      <h4 className="ui horizontal divider header black-text white">
        Emergency Contacts
      </h4>
      <React.Fragment>
        {contacts.map((contact, index) => {
          return (
            <p key={index}>
              <a
                href={`tel:${contact.phone}`}
                style={{ color: "#000", textDecoration: "underline" }}
              >
                {contact.phone}
              </a>
            </p>
          );
        })}
      </React.Fragment>
    </div>
  );
};

export default EmergencyContacts;
