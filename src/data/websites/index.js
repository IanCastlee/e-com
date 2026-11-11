/**
 * Modular Website Directory for e-yhan Digital Solutions
 * 
 * Organized across 9 dedicated category data files:
 * 1. Personal Portfolio (personalPortfolio.js)
 * 2. Business (business.js)
 * 3. Resort & Hotel (resortHotel.js)
 * 4. Government & Community (governmentCommunity.js)
 * 5. School & Portal (schoolPortal.js)
 * 6. Real Estate (realEstate.js)
 * 7. Tourism & Eco-tourism (tourismEcotourism.js)
 * 8. Events & Invitations (eventsInvitations.js)
 * 9. Others / Custom (othersCustom.js)
 */

import { personalPortfolioWebsites } from './personalPortfolio';
import { businessWebsites } from './business';
import { resortHotelWebsites } from './resortHotel';
import { governmentCommunityWebsites } from './governmentCommunity';
import { schoolPortalWebsites } from './schoolPortal';
import { realEstateWebsites } from './realEstate';
import { tourismEcotourismWebsites } from './tourismEcotourism';
import { eventsInvitationsWebsites } from './eventsInvitations';
import { othersCustomWebsites } from './othersCustom';

// Export individual category collections
export {
  personalPortfolioWebsites,
  businessWebsites,
  resortHotelWebsites,
  governmentCommunityWebsites,
  schoolPortalWebsites,
  realEstateWebsites,
  tourismEcotourismWebsites,
  eventsInvitationsWebsites,
  othersCustomWebsites,
};

// Master compiled websites array
export const websites = [
  ...personalPortfolioWebsites,
  ...businessWebsites,
  ...resortHotelWebsites,
  ...governmentCommunityWebsites,
  ...schoolPortalWebsites,
  ...realEstateWebsites,
  ...tourismEcotourismWebsites,
  ...eventsInvitationsWebsites,
  ...othersCustomWebsites,
];

export default websites;
