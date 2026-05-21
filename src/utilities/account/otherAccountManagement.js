import * as env from '@/config/env.js'

// utility functions //

// exported functions //

async function _getAllAccounts(_accessToken, _shortUserType, _idColumnName) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getall/' + _shortUserType, {
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
    const response = await fetch(env.BACKEND_URL + '/api/admin/getinfo/account/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue }),
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
    const response = await fetch(env.BACKEND_URL + '/api/admin/add/account/' + _shortUserType, {
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
    })

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
    const response = await fetch(env.BACKEND_URL + '/api/admin/delete/accounts/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id_selection: _idColumnValues }),
      credentials: 'include',
    })

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
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/pass/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue, newPassword: _newPassword }),
      credentials: 'include',
    })

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
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/email/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue, newEmail: _newEmail }),
      credentials: 'include',
    })

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
      env.BACKEND_URL + '/api/admin/update/firstname/' + _shortUserType,
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
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/lastname/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue, newLastName: _newLName }),
      credentials: 'include',
    })

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
      env.BACKEND_URL + '/api/admin/update/patronymicname/' + _shortUserType,
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

// getAssigned

async function _getAccountAssignedStudentGroups(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/account/assigned/studentgroups/' + _shortUserType,
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
      env.BACKEND_URL + '/api/admin/getinfo/account/assigned/specialties/' + _shortUserType,
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

async function _getAccountAssignedSubjects(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/account/assigned/subjects/' + _shortUserType,
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
    console.error('(_getAccountAssignedSubjects) general error:', error)
    return false
  }
}

async function _getAccountAssignedTasks(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/account/assigned/tasks/' + _shortUserType,
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
      let getAllResult = await response.json()
      if (typeof getAllResult.result.length === 'undefined') getAllResult.result = [getAllResult]
      getAllResult.result.forEach((entityRecord) => {
        let nestedValue = entityRecord.can_be_handed_in_past_due.data[0]
        entityRecord.can_be_handed_in_past_due = Boolean(nestedValue)
      })
      return getAllResult
    } else {
      return false
    }
  } catch (error) {
    console.error('(_getAccountAssignedTasks) general error:', error)
    return false
  }
}

/// student solution getAssigned ///

export async function getStudentMarkedSolutions(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getall/student/marked/solutions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(getStudentMarkedSolutions) general error:', error)
    return false
  }
}

export async function getStudentUnmarkedSolutions(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getall/student/unmarked/solutions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(getStudentUnmarkedSolutions) general error:', error)
    return false
  }
}

// getUnassigned

async function _getAccountUnassignedStudentGroups(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/account/unassigned/studentgroups/' + _shortUserType,
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
    console.error('(_getAccountUnassignedStudentGroups) general error:', error)
    return false
  }
}

async function _getAccountUnassignedSpecialties(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/account/unassigned/specialties/' + _shortUserType,
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
    console.error('(_getAccountUnassignedSpecialties) general error:', error)
    return false
  }
}

async function _getAccountUnassignedSubjects(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/account/unassigned/subjects/' + _shortUserType,
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
    console.error('(_getAccountUnassignedSubjects) general error:', error)
    return false
  }
}

async function _getAccountUnassignedTasks(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/account/unassigned/tasks/' + _shortUserType,
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
      let getAllResult = await response.json()
      if (typeof getAllResult.result.length === 'undefined') getAllResult.result = [getAllResult]
      getAllResult.result.forEach((entityRecord) => {
        let nestedValue = entityRecord.can_be_handed_in_past_due.data[0]
        entityRecord.can_be_handed_in_past_due = Boolean(nestedValue)
      })
      return getAllResult
    } else {
      return false
    }
  } catch (error) {
    console.error('(_getAccountUnassignedTasks) general error:', error)
    return false
  }
}

// unassign

async function _unassignAccountStudentGroupSelection(
  _accessToken,
  _shortUserType,
  _studentGroupIdColumnValues,
  _accountId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/unassign/studentgroups/' + _shortUserType,
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
      env.BACKEND_URL + '/api/admin/unassign/specialties/' + _shortUserType,
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

async function _unassignAccountSubjectSelection(
  _accessToken,
  _shortUserType,
  _subjectIdColumnValues,
  _accountId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/unassign/subjects/' + _shortUserType,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_accessToken}`,
        },
        body: JSON.stringify({
          subject_id_selection: _subjectIdColumnValues,
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
    console.error('(_unassignAccountSubjectSelection) general error:', error)
    return false
  }
}

async function _unassignAccountTaskSelection(
  _accessToken,
  _shortUserType,
  _taskIdColumnValues,
  _accountId,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/unassign/tasks/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        task_id_selection: _taskIdColumnValues,
        account_id: _accountId,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_unassignAccountTaskSelection) general error:', error)
    return false
  }
}

// assign

async function _assignAccountStudentGroupSelection(
  _accessToken,
  _shortUserType,
  _studentGroupIdColumnValues,
  _accountId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/assign/studentgroups/' + _shortUserType,
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
    console.error('(_assignAccountStudentGroupSelection) general error:', error)
    return false
  }
}

async function _assignAccountSpecialtySelection(
  _accessToken,
  _shortUserType,
  _specialtyIdColumnValues,
  _accountId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/assign/specialties/' + _shortUserType,
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
    console.error('(_assignAccountSpecialtySelection) general error:', error)
    return false
  }
}

async function _assignAccountSubjectSelection(
  _accessToken,
  _shortUserType,
  _subjectIdColumnValues,
  _accountId,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/assign/subjects/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        subject_id_selection: _subjectIdColumnValues,
        account_id: _accountId,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_assignAccountSubjectSelection) general error:', error)
    return false
  }
}

async function _assignAccountTaskSelection(
  _accessToken,
  _shortUserType,
  _taskIdColumnValues,
  _accountId,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/assign/tasks/' + _shortUserType, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        task_id_selection: _taskIdColumnValues,
        account_id: _accountId,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(_assignAccountTaskSelection) general error:', error)
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
export const getAccountAssignedSubjects = _getAccountAssignedSubjects
export const getAccountAssignedTasks = _getAccountAssignedTasks

export const getAccountUnassignedStudentGroups = _getAccountUnassignedStudentGroups
export const getAccountUnassignedSpecialties = _getAccountUnassignedSpecialties
export const getAccountUnassignedSubjects = _getAccountUnassignedSubjects
export const getAccountUnassignedTasks = _getAccountUnassignedTasks

export const unassignAccountStudentGroupSelection = _unassignAccountStudentGroupSelection
export const unassignAccountSpecialtySelection = _unassignAccountSpecialtySelection
export const unassignAccountSubjectSelection = _unassignAccountSubjectSelection
export const unassignAccountTaskSelection = _unassignAccountTaskSelection

export const assignAccountStudentGroupSelection = _assignAccountStudentGroupSelection
export const assignAccountSpecialtySelection = _assignAccountSpecialtySelection
export const assignAccountSubjectSelection = _assignAccountSubjectSelection
export const assignAccountTaskSelection = _assignAccountTaskSelection
