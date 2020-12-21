import { createSelector } from '@reduxjs/toolkit'

export const getAds = createSelector(
  state => state.ads.data,
  ads => ads
);

export const getGoldAds = createSelector(
  getAds,
  ads => ads.filter(ad => ad.status === 'gold').reverse()
);

export const getSilverAds = createSelector(
  getAds,
  ads => ads.filter(ad => ad.status === 'silver').reverse()
);

export const getCommonAds = createSelector(
  getAds,
  ads => ads.filter(ad => ad.status === 'common').reverse()
);