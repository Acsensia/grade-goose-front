import * as env from '@/config/env.js'

// utility functions

// exported functions

async function _getAllAccounts(_accessToken, _filterArray, _shortUserType, _idColumnName) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/admin/getall/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ filterArray: _filterArray }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_getAllTeacherAccounts) general error:', error)
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
export const addNewAccount = _addNewAccount
