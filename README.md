### **Steps to Implement:**

1. **Go to Google Apps Script:**
   - Visit [Google Apps Script](https://script.google.com/) and create a new project.

2. **Add the Script:**
   Copy and paste the following script:

   ```javascript
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
   ```

3. **Customize the Script:**
   - Replace the `emailData` array with your list of recipients (names and email addresses).
   - Update the `subjectTemplate` and `bodyTemplate` with your preferred email content.

4. **Run the Script:**
   - Click the ▶️ **Run** button (choose the `sendBulkEmails` function).
   - Grant permissions when prompted (it will ask for access to Gmail).

5. **Check Gmail:**
   - The emails will be sent from your Gmail account and can be viewed in the "Sent" folder.

---

### Features of the Script:
- **Personalization:** Automatically customizes the subject and body with the recipient's name.
- **Simple Structure:** Easy to modify for additional fields or dynamic content.
- **Effortless Execution:** No external tools or libraries are required.

---

### Notes:
- **Gmail Quota:** Free accounts can send up to 500 emails/day, while Workspace accounts can send 2000 emails/day.
- **Error Handling:** If needed, you can add error logging to handle cases where email sending fails.
