import constants from 'core/types';

const initialState = {
  stagedAsset: null,
  assetHash  : ''
};

export function assetReducer(state = initialState, action) {
  switch (action.type) {

  case constants.ADD_ASSET:
    return Object.assign({}, state, {
      stagedAsset: action.asset[0]
    });

  case constants.CREATE_ASSET_HASH:
    return Object.assign({}, state, {
      assetHash: action.hash
    });
    
  default:
    return state;
  }
}