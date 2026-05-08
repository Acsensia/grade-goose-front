import * as env from '@/config/env.js'

// exported functions

async function _changeAccountPassword(_shortUserType, _accessToken, oldPassword, newPassword) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/change/pass/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ oldPassword: oldPassword, newPassword: newPassword }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_changeAccountPassword) general error:', error)
    return false
  }
}
export const changeAccountPassword = _changeAccountPassword
