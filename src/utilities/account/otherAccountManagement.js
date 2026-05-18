import * as env from '@/config/env.js'

// utility functions //

// exported functions //

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

async function _getAccountInfo(_accessToken, _shortUserType, _idColumnValue) {
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

async function _deleteAccountSelection(_accessToken, _shortUserType, _idColumnValues) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/delete/accounts/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({ id_selection: _idColumnValues }),
        credentials: 'include',
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_deleteAccountSelection) general error:', error)
    return false
  }
}

// setters

async function _setNewAccountPassword(_accessToken, _shortUserType, _idColumnValue, _newPassword) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/update/pass/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({ id: _idColumnValue, newPassword: _newPassword }),
        credentials: 'include',
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_setNewAccountPassword) general error:', error)
    return false
  }
}

async function _setNewAccountEmail(_accessToken, _shortUserType, _idColumnValue, _newEmail) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/update/email/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({ id: _idColumnValue, newEmail: _newEmail }),
        credentials: 'include',
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_setNewAccountEmail) general error:', error)
    return false
  }
}

async function _setNewAccountFName(_accessToken, _shortUserType, _idColumnValue, _newFName) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/update/firstname/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({ id: _idColumnValue, newFirstName: _newFName }),
        credentials: 'include',
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_setNewAccountFName) general error:', error)
    return false
  }
}

async function _setNewAccountLName(_accessToken, _shortUserType, _idColumnValue, _newLName) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/update/lastname/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({ id: _idColumnValue, newLastName: _newLName }),
        credentials: 'include',
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_setNewAccountLName) general error:', error)
    return false
  }
}

async function _setNewAccountPName(_accessToken, _shortUserType, _idColumnValue, _newPName) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/update/patronymicname/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({ id: _idColumnValue, newPatronymicName: _newPName }),
        credentials: 'include',
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_setNewAccountPName) general error:', error)
    return false
  }
}

// assignation stuff

async function _getAccountAssignedStudentGroups(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL +
        '/api/account/admin/getinfo/account/assigned/studentgroups/' +
        _shortUserType,
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
    console.error('(_getAccountAssignedStudentGroups) general error:', error)
    return false
  }
}

async function _getAccountAssignedSpecialties(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/getinfo/account/assigned/specialties/' + _shortUserType,
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
    console.error('(_getAccountAssignedSpecialties) general error:', error)
    return false
  }
}

async function _unassignAccountStudentGroupSelection(
  _accessToken,
  _shortUserType,
  _studentGroupIdColumnValues,
  _accountId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/unassign/studentgroups/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({
          student_group_id_selection: _studentGroupIdColumnValues,
          account_id: _accountId,
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
    console.error('(_unassignAccountStudentGroupSelection) general error:', error)
    return false
  }
}

async function _unassignAccountSpecialtySelection(
  _accessToken,
  _shortUserType,
  _specialtyIdColumnValues,
  _accountId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/account/admin/unassign/specialties/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({
          specialty_id_selection: _specialtyIdColumnValues,
          account_id: _accountId,
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
    console.error('(_unassignAccountSpecialtySelection) general error:', error)
    return false
  }
}

//exports
export const getAllAccounts = _getAllAccounts
export const getAccountInfo = _getAccountInfo
export const addNewAccount = _addNewAccount
export const deleteAccountSelection = _deleteAccountSelection
export const setNewAccountPassword = _setNewAccountPassword
export const setNewAccountEmail = _setNewAccountEmail
export const setNewAccountFName = _setNewAccountFName
export const setNewAccountLName = _setNewAccountLName
export const setNewAccountPName = _setNewAccountPName
export const getAccountAssignedStudentGroups = _getAccountAssignedStudentGroups
export const getAccountAssignedSpecialties = _getAccountAssignedSpecialties
export const unassignAccountStudentGroupSelection = _unassignAccountStudentGroupSelection
export const unassignAccountSpecialtySelection = _unassignAccountSpecialtySelection
