function sendBulkEmails() {
    // Email data: Add your recipients here
    const emailData = [
        { name: "John Doe", email: "john.doe@example.com" },
        { name: "Jane Smith", email: "jane.smith@example.com" },
        { name: "Sam Wilson", email: "sam.wilson@example.com" }
    ];

    // Email subject template
    const subjectTemplate = "Hello, {name}!";

    // Email body template
    const bodyTemplate = `
    Dear {name},

    I hope this email finds you well. This is a personalized email tailored just for you.

    Feel free to reply if you have any questions.

    Best regards,
    [Your Name]
    `;

    // Loop through each recipient and send an email
    emailData.forEach(entry => {
        const customizedSubject = subjectTemplate.replace("{name}", entry.name);
        const customizedBody = bodyTemplate.replace("{name}", entry.name);

        GmailApp.sendEmail(entry.email, customizedSubject, customizedBody);
    });

    Logger.log("Emails sent successfully!");
}
