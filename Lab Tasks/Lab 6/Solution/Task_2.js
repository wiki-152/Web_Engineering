class RegistrationLogForEvent 
{
    constructor(maxAllowedParticipants) 
    {
        this.maxAllowedParticipants = maxAllowedParticipants;
        this.participants = []; 
    }

    addParticipant(name, email, ticketType) 
    {
        if (this.checkAvailability()) 
        {
            const participant = { name, email, ticketType };
            
            this.participants.push(participant);

            console.log(`Participant ${name} is registered`);
        } 
        else 
        {
            console.log("Registration FULLLLLLLL");
        }
    }

    checkAvailability() 
    {
        return this.participants.length < this.maxAllowedParticipants;
    }

    listParticipants() 
    {
        if (this.participants.length === 0) 
        {
            console.log("No participants!!!!!!!!!!!!");
            return;
        }

        console.log("Registered Participants:");

        for (let i = 0; i < this.participants.length; i++) 
        {
            const participant = this.participants[i];
            console.log(`${i + 1}. ${participant.name} (${participant.email}) - ${participant.ticketType}`);
        }

        // For Each Loop
        // this.participants.forEach((participant, index) => {
        //     console.log(`${index + 1}. ${participant.name} (${participant.email}) - ${participant.ticketType}`);
        //  });
    }
}

const event = new RegistrationLogForEvent(5); 

event.addParticipant('Waqas', 'waqas@gmail.com', 'VIP');
event.addParticipant('Sami', 'sami@gmail.com', 'VIP');
event.addParticipant('Umer', 'umer@gmail.com', 'VIP');
event.addParticipant('Ali', 'ali@gmail.com', 'Standard');
event.addParticipant('Khan', 'khan@gmail.com', 'Standard'); 
event.addParticipant('Hashim', 'hashim@gmail.com', 'Standard');  // Will Not Be Registered

event.listParticipants(); 
