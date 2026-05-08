import * as env from '@/config/env.js'

// exported functions

async function _getAccountInfo(_shortUserType, _accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/info/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({}),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_getAccountInfo) general error:', error)
    return false
  }
}
export const getAccountInfo = _getAccountInfo
