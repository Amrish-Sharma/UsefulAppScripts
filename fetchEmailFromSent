function getSentEmails() {
    const threads = GmailApp.search('in:sent', 0, 100); // Adjust range as needed
    let emailAddresses = new Set();
    
    threads.forEach(thread => {
        const messages = thread.getMessages();
        messages.forEach(message => {
            const recipients = message.getTo().split(",");
            recipients.forEach(email => emailAddresses.add(email.trim()));
        });
    });
    
    Logger.log(Array.from(emailAddresses).join(", "));
}
