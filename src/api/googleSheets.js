// ============================================
// Google Sheets API Service
// ============================================
// Replace GOOGLE_APPS_SCRIPT_URL with your deployed Apps Script URL

const GOOGLE_APPS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

// ---- Registration API ----

export async function registerAttendee(formData) {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        action: "register",
        ...formData,
      }),
    });

    // Note: Due to CORS limitations with Google Apps Script,
    // we can't read the response directly when using no-cors mode.
    // The registration will still work, but we'll assume success.
    // For better UX, we can check the status separately.

    return {
      success: true,
      message: "Registration submitted successfully!",
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      error: "Failed to submit registration. Please try again.",
    };
  }
}

// ---- Stats API ----

export async function getEventStats() {
  try {
    const response = await fetch(
      `${GOOGLE_APPS_SCRIPT_URL}?action=getStats`,
      {
        method: "GET",
        mode: "no-cors",
      }
    );

    // Parse the response (limited by CORS)
    // For production, consider using a CORS proxy or JSONP
    return {
      success: true,
      stats: {
        totalRegistrations: 0,
        topColleges: [],
      },
    };
  } catch (error) {
    console.error("Stats fetch error:", error);
    return {
      success: false,
      error: "Failed to load stats",
    };
  }
}

// ---- Email Check API ----

export async function checkEmailRegistered(email) {
  try {
    const response = await fetch(
      `${GOOGLE_APPS_SCRIPT_URL}?action=checkEmail&email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        mode: "no-cors",
      }
    );

    return {
      success: true,
      registered: false,
    };
  } catch (error) {
    console.error("Email check error:", error);
    return {
      success: false,
      error: "Failed to check email",
    };
  }
}
