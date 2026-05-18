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

async function _changeAccountPassword(_shortUserType, _accessToken, _oldPassword, _newPassword) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/change/pass/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ oldPassword: _oldPassword, newPassword: _newPassword }),
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

async function _changeAccountEmail(_shortUserType, _accessToken, _oldEmail, _newEmail) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/change/email/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ oldEmail: _oldEmail, newEmail: _newEmail }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_changeAccountEmail) general error:', error)
    return false
  }
}

async function _changeAccountFName(_shortUserType, _accessToken, _newFName) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/change/firstname/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({ newFirstName: _newFName }),
        credentials: 'include',
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_changeAccountFName) general error:', error)
    return false
  }
}

async function _changeAccountLName(_shortUserType, _accessToken, _newLName) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/change/lastname/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({ newLastName: _newLName }),
        credentials: 'include',
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_changeAccountLName) general error:', error)
    return false
  }
}

async function _changeAccountPName(_shortUserType, _accessToken, _newPName) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/change/patronymicname/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({ newPatronymicName: _newPName }),
        credentials: 'include',
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_changeAccountPName) general error:', error)
    return false
  }
}

//exports
export const getAccountInfo = _getAccountInfo
export const changeAccountPassword = _changeAccountPassword
export const changeAccountEmail = _changeAccountEmail
export const changeAccountFName = _changeAccountFName
export const changeAccountLName = _changeAccountLName
export const changeAccountPName = _changeAccountPName
