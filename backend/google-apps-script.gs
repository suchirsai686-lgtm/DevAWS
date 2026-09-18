// ============================================
// Google Apps Script Backend for AWS SCD Tirupati 2026
// ============================================
// INSTRUCTIONS:
// 1. Create a new Google Sheet named "AWS SCD Tirupati 2026 - Registrations"
// 2. Go to Extensions > Apps Script
// 3. Delete any existing code and paste this entire script
// 4. Click "Deploy" > "New deployment"
// 5. Select "Web app" and set "Who has access" to "Anyone"
// 6. Copy the deployment URL and update FRONTEND_URL in index.html

// ---- CONFIGURATION ----
const SHEET_NAME = "Registrations";
const CORS_ORIGIN = "*"; // Change to your deployed frontend URL for production

// ---- SETUP: Run this once to create the sheet structure ----
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // Set headers
  const headers = [
    "Timestamp",
    "Name",
    "Email",
    "Phone",
    "College",
    "Year of Study",
    "AWS Experience",
    "Dietary Requirements",
    "T-Shirt Size",
    "How did you hear about us?",
    "Status"
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  sheet.setFrozenRows(1);

  // Auto-resize columns
  for (let i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }

  Logger.log("Sheet setup complete!");
}

// ---- MAIN: Handle POST requests (Registration) ----
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;

    if (action === "register") {
      return handleRegistration(data);
    } else if (action === "getStats") {
      return handleGetStats();
    } else {
      return jsonResponse({ success: false, error: "Unknown action" }, 400);
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.message }, 500);
  }
}

// ---- MAIN: Handle GET requests ----
function doGet(e) {
  try {
    const action = e.parameter.action;

    if (action === "getStats") {
      return handleGetStats();
    } else if (action === "checkEmail") {
      return handleCheckEmail(e.parameter.email);
    } else {
      return jsonResponse({ success: true, message: "AWS SCD Tirupati 2026 API is running" });
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.message }, 500);
  }
}

// ---- HANDLERS ----

function handleRegistration(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  // Validate required fields
  if (!data.name || !data.email) {
    return jsonResponse({ success: false, error: "Name and email are required" }, 400);
  }

  // Check for duplicate email
  const existingData = sheet.getDataRange().getValues();
  for (let i = 1; i < existingData.length; i++) {
    if (existingData[i][2].toLowerCase() === data.email.toLowerCase()) {
      return jsonResponse({ success: false, error: "This email is already registered" }, 409);
    }
  }

  // Add registration
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const row = [
    timestamp,
    data.name || "",
    data.email || "",
    data.phone || "",
    data.college || "",
    data.yearOfStudy || "",
    data.awsExperience || "Beginner",
    data.dietaryRequirements || "None",
    data.tshirtSize || "M",
    data.heardFrom || "",
    "Confirmed"
  ];

  sheet.appendRow(row);

  return jsonResponse({
    success: true,
    message: "Registration successful!",
    registrationId: sheet.getLastRow()
  });
}

function handleGetStats() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const lastRow = sheet.getLastRow();
  const totalRegistrations = Math.max(0, lastRow - 1); // Subtract header row

  // Get college breakdown
  const data = sheet.getDataRange().getValues();
  const colleges = {};
  for (let i = 1; i < data.length; i++) {
    const college = data[i][4] || "Unknown";
    colleges[college] = (colleges[college] || 0) + 1;
  }

  return jsonResponse({
    success: true,
    stats: {
      totalRegistrations,
      topColleges: Object.entries(colleges)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
    }
  });
}

function handleCheckEmail(email) {
  if (!email) {
    return jsonResponse({ success: false, error: "Email parameter required" }, 400);
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][2].toLowerCase() === email.toLowerCase()) {
      return jsonResponse({
        success: true,
        registered: true,
        status: data[i][10]
      });
    }
  }

  return jsonResponse({ success: true, registered: false });
}

// ---- UTILITY ----

function jsonResponse(data, statusCode = 200) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
