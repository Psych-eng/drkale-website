/**
 * School Portal Configuration
 * 
 * This file maps access codes to SharePoint folder links.
 * Each school district receives a unique access code that redirects to their isolated SharePoint folder.
 * 
 * SECURITY NOTES:
 * - Access codes are case-insensitive (automatically converted to uppercase)
 * - Sequential numbering system maintains privacy (no district names in codes)
 * - Each SharePoint link is a unique "Anyone with the link" URL with edit permissions
 * - Only you (Dr. Kale) can see all folders in SharePoint
 * - Districts can only access their specific folder via their unique link
 * 
 * SEQUENTIAL NUMBERING SYSTEM:
 * - DISTRICT-2026-001 through DISTRICT-2026-009 (current active districts)
 * - Next available number: 010
 * - Keep a separate tracking document to map numbers to district names
 * 
 * HOW TO ADD A NEW DISTRICT:
 * 1. Create a new folder in SharePoint for the district
 * 2. Generate "Anyone with the link" sharing link (Can edit, expiration 1/3/2027)
 * 3. Use the next sequential number (e.g., DISTRICT-2026-010)
 * 4. Add the mapping below: "DISTRICT-2026-010": "https://sharepoint-link"
 * 5. Update your tracking document with the district name
 * 6. Provide the access code to the district
 */

export const schoolPortalConfig: Record<string, string> = {
  // Active Districts (Sequential Numbering)
  "DISTRICT-2026-001": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgDLZLNX4LlVS42l5xjGSz28AbWOWEi8KKnidmhWKCaF-bQ?e=cJ16ba", // Hampton
  "DISTRICT-2026-002": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgDiIh63SOeMRY6wHGmhunOgAcBtXVDInUbNglAvbM3nMS4?e=pgTB6X", // Avon
  "DISTRICT-2026-003": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgAClVoPfdvxT4I5Gc57UT9FAWVvUHoDHPbkQCk3-VymYzo?e=iU9y0F", // Bloomfield
  "DISTRICT-2026-004": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgDcUS0Fa6WNSY-peVa9c6b5AeBjjjZI2uWOw4t-XkKWsfs?e=JwFdXX", // Canton
  "DISTRICT-2026-005": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgBXPz70CWDqTLLqLHbMWTjlAcOqeVjWT1EHX3mBgSD3xu8?e=KLaRvm", // CREC
  "DISTRICT-2026-006": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgClAd7GPS4JSoVk7OB4UzWRAZbSnuegOUKeVwcWZXovWt4?e=ybbkJU", // Farmington
  "DISTRICT-2026-007": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgDnwZ3gCerGS7s-373xiDsWAVwE5s4MKhl4QRpoVE3TGmo?e=tkN70r", // Middletown
  "DISTRICT-2026-008": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgC40_4FhcbQQbTfF2BA4ZmNAUtU9xA4OYdcklpfu_VQxDM?e=uMDjQY", // Newington
  "DISTRICT-2026-009": "https://drkale.sharepoint.com/:f:/s/MilindKaleMDLLC/IgAvO2S08MD5QKyZiaS3AwbnAQNoGocwgZFArKXdJjd_vx8?e=CW4vd6", // South Windsor
  
  // Test/Demo Districts (for testing purposes)
  "TEST-SCHOOL-001": "https://drkale.sharepoint.com/sites/MilindKaleMDLLC/Shared%20Documents/School-Districts/Test-School-001",
  "TEST-SCHOOL-002": "https://drkale.sharepoint.com/sites/MilindKaleMDLLC/Shared%20Documents/School-Districts/Test-School-002",
};

/**
 * DISTRICT TRACKING REFERENCE:
 * (Keep this updated as you add new districts)
 * 
 * 001 - Hampton
 * 002 - Avon
 * 003 - Bloomfield
 * 004 - Canton
 * 005 - CREC
 * 006 - Farmington
 * 007 - Middletown
 * 008 - Newington
 * 009 - South Windsor
 * 010 - [Next district]
 * 
 * NEXT AVAILABLE NUMBER: 010
 */
