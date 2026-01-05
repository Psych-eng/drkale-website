/**
 * School Portal Configuration
 * 
 * This file maps access codes to SharePoint folder links.
 * Each school district receives a unique access code that redirects to their isolated SharePoint folder.
 * 
 * SECURITY NOTES:
 * - Access codes are case-insensitive (automatically converted to uppercase)
 * - Random alphanumeric codes prevent predictable guessing
 * - Each code includes district name for easy identification by you (Dr. Kale)
 * - Random suffix makes it impossible to guess other districts' codes
 * - Each SharePoint link is a unique "Anyone with the link" URL with edit permissions
 * - Only you (Dr. Kale) can see all folders in SharePoint
 * - Districts can only access their specific folder via their unique link
 * 
 * ACCESS CODE FORMAT:
 * - Pattern: DISTRICTNAME-XXXX-2026
 * - Example: HAMPTON-F5PM-2026
 * - XXXX = 4 random characters (letters/numbers, excluding similar-looking chars)
 * - This format prevents accidental access to other districts even if mistyped
 * 
 * HOW TO ADD A NEW DISTRICT:
 * 1. Create a new folder in SharePoint for the district
 * 2. Generate "Anyone with the link" sharing link (Can edit, expiration 1/3/2027)
 * 3. Generate a random code: DISTRICTNAME-XXXX-2026 (use random generator)
 * 4. Add the mapping below: "DISTRICTNAME-XXXX-2026": "https://sharepoint-link"
 * 5. Update your tracking document with the access code
 * 6. Provide the access code to the district
 */

export const schoolPortalConfig: Record<string, string> = {
  // Active Districts (Secure Random Codes)
  "HAMPTON-F5PM-2026": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgDLZLNX4LlVS42l5xjGSz28AbWOWEi8KKnidmhWKCaF-bQ?e=cJ16ba", // Hampton
  "AVON-QSXK-2026": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgDiIh63SOeMRY6wHGmhunOgAcBtXVDInUbNglAvbM3nMS4?e=pgTB6X", // Avon
  "BLOOMFIELD-9UE3-2026": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgAClVoPfdvxT4I5Gc57UT9FAWVvUHoDHPbkQCk3-VymYzo?e=iU9y0F", // Bloomfield
  "CANTON-AN6L-2026": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgDcUS0Fa6WNSY-peVa9c6b5AeBjjjZI2uWOw4t-XkKWsfs?e=JwFdXX", // Canton
  "CREC-K7JH-2026": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgBXPz70CWDqTLLqLHbMWTjlAcOqeVjWT1EHX3mBgSD3xu8?e=KLaRvm", // CREC
  "FARMINGTON-GHFH-2026": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgClAd7GPS4JSoVk7OB4UzWRAZbSnuegOUKeVwcWZXovWt4?e=ybbkJU", // Farmington
  "SOUTHWINDSOR-ZUZN-2026": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgDnwZ3gCerGS7s-373xiDsWAVwE5s4MKhl4QRpoVE3TGmo?e=tkN70r", // South Windsor
  "NEWINGTON-J5JU-2026": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgC40_4FhcbQQbTfF2BA4ZmNAUtU9xA4OYdcklpfu_VQxDM?e=uMDjQY", // Newington
  "MIDDLETOWN-9EPJ-2026": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgAvO2S08MD5QKyZiaS3AwbnAQNoGocwgZFArKXdJjd_vx8?e=CW4vd6", // Middletown
  
  // Test/Demo Districts (for testing purposes)
  "TEST-SCHOOL-001": "https://drkale.sharepoint.com/sites/MilindKaleMDLLC/Shared%20Documents/School-Districts/Test-School-001",
  "TEST-SCHOOL-002": "https://drkale.sharepoint.com/sites/MilindKaleMDLLC/Shared%20Documents/School-Districts/Test-School-002",
};

/**
 * DISTRICT TRACKING REFERENCE:
 * (Keep this updated as you add new districts)
 * 
 * Hampton       - HAMPTON-F5PM-2026
 * Avon          - AVON-QSXK-2026
 * Bloomfield    - BLOOMFIELD-9UE3-2026
 * Canton        - CANTON-AN6L-2026
 * CREC          - CREC-K7JH-2026
 * Farmington    - FARMINGTON-GHFH-2026
 * South Windsor - SOUTHWINDSOR-ZUZN-2026
 * Newington     - NEWINGTON-J5JU-2026
 * Middletown    - MIDDLETOWN-9EPJ-2026
 * 
 * TOTAL ACTIVE DISTRICTS: 9
 * 
 * TO GENERATE NEW RANDOM CODE:
 * Use format: DISTRICTNAME-XXXX-2026
 * Where XXXX is 4 random characters from: ABCDEFGHJKLMNPQRSTUVWXYZ23456789
 * (Excludes: I, O, 0, 1 to avoid confusion)
 */
