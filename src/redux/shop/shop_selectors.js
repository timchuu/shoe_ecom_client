import { createSelector } from 'reselect'


const selectShop = state => state.shop

export const selectShopProducts = createSelector(
    [selectShop],
    shop => shop.shopItems
)

export const selectShopBrands = createSelector(
    [selectShop],
    shop => shop.brands
)

export const selectShopIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)




