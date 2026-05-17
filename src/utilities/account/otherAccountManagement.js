import * as env from '@/config/env.js'

// utility functions

// exported functions

async function _getAllAccounts(_accessToken, _shortUserType, _idColumnName) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/admin/getall/' + _shortUserType, {
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
    console.error('(_getAllAccounts) general error:', error)
    return false
  }
}

async function _getAccountInfo(_accessToken, _shortUserType, _idColumnName, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/getinfo/account/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({ id: _idColumnValue }),
        credentials: 'include',
      },
    )

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

async function _addNewAccount(
  _accessToken,
  _shortUserType,
  _email,
  _password,
  _firstName,
  _lastName,
  _PatronymicName,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/add/account/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({
          email: _email,
          password: _password,
          first_name: _firstName,
          last_name: _lastName,
          patronymic_name: _PatronymicName,
        }),
        credentials: 'include',
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_addNewAccount) general error:', error)
    return false
  }
}

//exports
export const getAllAccounts = _getAllAccounts
export const getAccountInfo = _getAccountInfo
export const addNewAccount = _addNewAccount
