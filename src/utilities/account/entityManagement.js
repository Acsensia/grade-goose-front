import * as env from '@/config/env.js'

// getinfo functions //

export async function getStudentGroupInfo(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getinfo/studentgroup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue }),
      credentials: 'include',
    })

    if (response.ok) {
      return (await response.json()).entity
    } else {
      return false
    }
  } catch (error) {
    console.error('(getStudentGroupInfo) general error:', error)
    return false
  }
}

export async function getSpecialtyInfo(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getinfo/specialty', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue }),
      credentials: 'include',
    })

    if (response.ok) {
      return (await response.json()).entity
    } else {
      return false
    }
  } catch (error) {
    console.error('(getSpecialtyInfo) general error:', error)
    return false
  }
}

export async function getSubjectInfo(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getinfo/subject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue }),
      credentials: 'include',
    })

    if (response.ok) {
      return (await response.json()).entity
    } else {
      return false
    }
  } catch (error) {
    console.error('(getSubjectInfo) general error:', error)
    return false
  }
}

export async function getTaskInfo(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getinfo/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue }),
      credentials: 'include',
    })

    if (response.ok) {
      return (await response.json()).entity
    } else {
      return false
    }
  } catch (error) {
    console.error('(getTaskInfo) general error:', error)
    return false
  }
}

// getall functions //

export async function getAllStudentGroups(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getall/studentgroups', {
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

export async function getAllSpecialties(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getall/specialties', {
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
    console.error('(getAllSpecialties) general error:', error)
    return false
  }
}

export async function getAllSubjects(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getall/subjects', {
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
    console.error('(getAllSubjects) general error:', error)
    return false
  }
}

export async function getAllTasks(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getall/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({}),
      credentials: 'include',
    })

    if (response.ok) {
      let getAllResult = await response.json()
      if (typeof getAllResult.result.length === 'undefined') getAllResult.result = [getAllResult]
      getAllResult.result.forEach((entityRecord) => {
        let nestedValue = entityRecord.can_be_handed_in_past_due.data[0]
        entityRecord.can_be_handed_in_past_due = nestedValue ? 'True' : 'False'
      })
      return getAllResult
    } else {
      return false
    }
  } catch (error) {
    console.error('(getAllTasks) general error:', error)
    return false
  }
}

// delete functions //

export async function deleteStudentGroupSelection(_accessToken, _idColumnValues) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/delete/studentgroups', {
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
    console.error('(deleteStudentGroupSelection) general error:', error)
    return false
  }
}

export async function deleteSpecialtySelection(_accessToken, _idColumnValues) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/delete/specialties', {
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
    console.error('(deleteSpecialtySelection) general error:', error)
    return false
  }
}

export async function deleteSubjectSelection(_accessToken, _idColumnValues) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/delete/subjects', {
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
    console.error('(deleteSubjectSelection) general error:', error)
    return false
  }
}

export async function deleteTaskSelection(_accessToken, _idColumnValues) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/delete/tasks', {
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
    console.error('(deleteTaskSelection) general error:', error)
    return false
  }
}

// addNew functions //

export async function addNewStudentGroup(_accessToken, _name, _description) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/add/studentgroup', {
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
    const response = await fetch(env.BACKEND_URL + '/api/admin/add/specialty', {
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
    const response = await fetch(env.BACKEND_URL + '/api/admin/add/subject', {
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
    const response = await fetch(env.BACKEND_URL + '/api/admin/add/task', {
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

/// setField functions ///

/// student group setField functions ///

export async function setNewStudentGroupName(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/studentgroup/name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        id: _idColumnValue,
        newValue: _newValue,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(setNewStudentGroupName) general error:', error)
    return false
  }
}

export async function setNewStudentGroupDesc(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/studentgroup/desc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        id: _idColumnValue,
        newValue: _newValue,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(setNewStudentGroupDesc) general error:', error)
    return false
  }
}

/// subject setField functions ///

export async function setNewSubjectName(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/subject/name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        id: _idColumnValue,
        newValue: _newValue,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(setNewSubjectName) general error:', error)
    return false
  }
}

export async function setNewSubjectDesc(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/subject/desc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        id: _idColumnValue,
        newValue: _newValue,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(setNewSubjectDesc) general error:', error)
    return false
  }
}
