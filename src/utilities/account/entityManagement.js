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
