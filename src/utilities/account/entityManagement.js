import * as env from '@/config/env.js'

// student groups //

export async function getAllStudentGroups(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/admin/getall/studentgroups', {
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
    console.error('(getAllStudentGroups) general error:', error)
    return false
  }
}

export async function deleteStudentGroupSelection(_accessToken, _idColumnValues) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/admin/delete/studentgroups', {
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

export async function addNewStudentGroup(_accessToken, _name, _description) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/admin/add/studentgroup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        name: _name,
        description: _description,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(addNewStudentGroup) general error:', error)
    return false
  }
}

export async function addNewSpecialty(_accessToken, _name, _abbreviation, _description) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/admin/add/specialty', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        name: _name,
        abbreviation: _abbreviation,
        description: _description,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(addNewSpecialty) general error:', error)
    return false
  }
}

export async function addNewSubject(_accessToken, _name, _description) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/admin/add/subject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        name: _name,
        description: _description,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(addNewSubject) general error:', error)
    return false
  }
}

export async function addNewTask(
  _accessToken,
  _name,
  _instructions,
  _timeDue,
  _canBeHandedInPastDue,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/admin/add/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        name: _name,
        instructions: _instructions,
        time_due: _timeDue,
        can_be_handed_in_past_due: _canBeHandedInPastDue,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(addNewTask) general error:', error)
    return false
  }
}
