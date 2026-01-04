/**
 * School Portal Configuration
 * 
 * This file maps access codes to SharePoint folder links.
 * Each school district receives a unique access code that redirects to their isolated SharePoint folder.
 * 
 * SECURITY NOTES:
 * - Access codes are case-insensitive (automatically converted to uppercase)
 * - No district names are stored here to maintain privacy
 * - Each SharePoint link should be a password-protected anonymous upload/download link
 * - Only you (Dr. Kale) can see all folders in SharePoint
 * - Districts can only access their specific folder via their unique link
 * 
 * HOW TO ADD A NEW DISTRICT:
 * 1. Create a new folder in SharePoint for the district
 * 2. Generate a password-protected anonymous link for that folder
 * 3. Create a unique access code (e.g., "DISTRICT-2024-ABC123")
 * 4. Add the mapping below: "ACCESS-CODE": "https://sharepoint-link"
 * 5. Provide the access code and SharePoint password to the district
 * 
 * EXAMPLE FORMAT:
 * "TEST-SCHOOL-001": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/xxxxxxxx",
 * "TEST-SCHOOL-002": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/yyyyyyyy",
 */

export const schoolPortalConfig: Record<string, string> = {
  // Test/Demo Districts
  "TEST-SCHOOL-001": "https://drkale.sharepoint.com/sites/MilindKaleMDLLC/Shared%20Documents/School-Districts/Test-School-001",
  "TEST-SCHOOL-002": "https://drkale.sharepoint.com/sites/MilindKaleMDLLC/Shared%20Documents/School-Districts/Test-School-002",
  
  // Add your real district access codes below:
  // "DISTRICT-2024-ABC123": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/...",
  // "GLASTONBURY-2024-XYZ": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/...",
};

/**
 * INSTRUCTIONS FOR UPDATING:
 * 
 * 1. After creating a new district folder in SharePoint, get the shareable link
 * 2. Add a new line in the format: "ACCESS-CODE": "SHAREPOINT-LINK",
 * 3. Save this file
 * 4. Commit and push to GitHub (or deploy via Cloudflare Pages)
 * 5. Provide the access code and SharePoint password to the district
 * 
 * The access code can be anything you want, but I recommend a format like:
 * - "DISTRICT-2024-ABC123" (district name + year + random code)
 * - "CREC-EVAL-2024-001" (organization + purpose + year + number)
 * - Keep it professional and easy to communicate over phone/email
 */
