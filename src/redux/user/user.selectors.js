import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.user
)

export const selectIsUserAuthenticated = createSelector(
    [selectUser],
    user => user.isAuthenticated
)