# Google Sheets Backend Integration Guide

## Overview

This guide shows you how to set up Google Sheets as a backend for the registration form. All registration data will be stored in your Google Sheet.

---

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ New"** > **"Google Sheets"**
3. Name it: **`AWS SCD Tirupati 2026 - Registrations`**

---

## Step 2: Set Up Google Apps Script

1. In your new sheet, click **Extensions** > **Apps Script**

2. Delete any existing code in the editor

3. Open the file `backend/google-apps-script.gs` in this project

4. Copy the entire contents and paste it into the Apps Script editor

5. Click the **Save** button (💾)

---

## Step 3: Run Setup Script

1. In Apps Script, click the function dropdown and select **`setupSheet`**

2. Click **Run** (▶️)

3. When prompted, click **Review permissions**

4. Select your Google account

5. Click **Advanced** > **Go to AWS SCD Tirupati 2026 (unsafe)**

6. Click **Allow**

7. You should see "Sheet setup complete!" in the execution log

8. Go back to your Google Sheet — you'll see the headers are now set up

---

## Step 4: Deploy as Web App

1. In Apps Script, click **Deploy** > **New deployment**

2. Click the ⚙️ gear icon and select **Web app**

3. Configure:
   - **Description**: `AWS SCD Tirupati 2026 API`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`

4. Click **Deploy**

5. **Copy the Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

6. Click **Done**

---

## Step 5: Connect Frontend to Backend

1. Open `src/api/googleSheets.js`

2. Find this line:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
   ```

3. Replace with your copied URL:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx.../exec";
   ```

4. Save the file

---

## Step 6: Add Registration Form to Your Page

Open `src/App.jsx` and import the RegistrationForm component:

```javascript
import RegistrationForm from "./components/RegistrationForm";
```

Replace the placeholder registration section with:

```jsx
<Section id="registration" dark eyebrow="REGISTRATION" title="Save your seat.">
  <RegistrationForm />
</Section>
```

---

## Step 7: Test the Integration

1. Run the dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5173

3. Scroll to the Registration section

4. Fill out and submit the form

5. Check your Google Sheet — the data should appear!

---

## Troubleshooting

### Form submits but no data appears in sheet
- Make sure you ran the `setupSheet` function first
- Check the Apps Script logs (Extensions > Apps Script > Executions)

### "Failed to submit registration" error
- Verify the Web app URL is correct
- Make sure the deployment is set to "Anyone" access
- Try deploying again (Deploy > Manage deployments > Edit)

### CORS errors in browser
- Google Apps Script has CORS limitations
- The code uses `mode: "no-cors"` which works but doesn't return response data
- Registration will still work — data gets saved to the sheet

### Want to update the deployment
1. Go to Extensions > Apps Script
2. Click Deploy > Manage deployments
3. Click ✏️ Edit
4. Make changes and click Deploy

---

## Data Stored in Google Sheet

| Column | Field |
|--------|-------|
| A | Timestamp |
| B | Name |
| C | Email |
| D | Phone |
| E | College |
| F | Year of Study |
| G | AWS Experience |
| H | Dietary Requirements |
| I | T-Shirt Size |
| J | How did you hear about us? |
| K | Status |

---

## Security Notes

- For production, change `CORS_ORIGIN` in the Apps Script to your actual frontend URL
- The email duplicate check prevents multiple registrations
- Consider adding CAPTCHA for spam prevention
- Set up email notifications in Google Sheets (Tools > Notification rules)

---

## Optional: Add Email Confirmation

To send confirmation emails after registration, add this function to the Apps Script:

```javascript
function sendConfirmationEmail(email, name) {
  const subject = "Registration Confirmed — AWS SCD Tirupati 2026";
  const body = `
    Hi ${name},

    Thank you for registering for AWS Student Community Day — Tirupati 2026!

    We're excited to have you join us. Here's what to expect:
    - Date: December 12, 2026
    - Time: 9:00 AM - 5:00 PM
    - Venue: Tirupati, Andhra Pradesh

    We'll send you more details as the event approaches.

    Best regards,
    AWS Cloud Club Tirupati
  `;

  GmailApp.sendEmail(email, subject, body);
}
```

Then call it in `handleRegistration` after `sheet.appendRow(row)`:

```javascript
sendConfirmationEmail(data.email, data.name);
```

---

## Optional: View Registrations Without Opening Google Sheets

Add a function to view recent registrations in Apps Script:

```javascript
function doGet(e) {
  if (e.parameter.action === "getRegistrations") {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    const registrations = data.slice(1).map(row => ({
      name: row[1],
      email: row[2],
      college: row[4],
      timestamp: row[0]
    }));
    return jsonResponse({ success: true, registrations });
  }
  // ... existing code
}
```

---

You're all set! The backend is now connected to your Google Sheet.
