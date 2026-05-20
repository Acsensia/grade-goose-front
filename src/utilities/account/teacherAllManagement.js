import * as env from '@/config/env.js'

// getall functions //

export async function getAllTasks(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/tasks', {
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
        entityRecord.can_be_handed_in_past_due = Boolean(nestedValue)
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

// getall assigned functions //

export async function getAllAssignedStudentGroups(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/assigned/studentgroups', {
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
    console.error('(getAllAssignedStudentGroups) general error:', error)
    return false
  }
}

export async function getAllAssignedSpecialties(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/assigned/specialties', {
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
    console.error('(getAllAssignedSpecialties) general error:', error)
    return false
  }
}

export async function getAllAssignedSubjects(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/assigned/subjects', {
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
    console.error('(getAllAssignedSubjects) general error:', error)
    return false
  }
}

export async function getAllAssignedTasks(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/assigned/tasks', {
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
    console.error('(getAllAssignedTasks) general error:', error)
    return false
  }
}

// getinfo functions //

export async function getStudentInfo(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getinfo/student', {
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
    console.error('(getStudentInfo) general error:', error)
    return false
  }
}

export async function getStudentGroupInfo(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getinfo/studentgroup', {
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
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getinfo/specialty', {
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
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getinfo/subject', {
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
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getinfo/task', {
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

// delete functions //

export async function deleteTaskSelection(_accessToken, _idColumnValues) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/delete/tasks', {
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

export async function addNewTask(
  _accessToken,
  _name,
  _instructions,
  _timeDue,
  _canBeHandedInPastDue,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/add/task', {
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

/// getAssigned functions ///

/// specialty getAssigned functions ///

export async function getSpecialtyAssignedStudents(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/teacher/getall/specialty/assigned/students',
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
    console.error('(getSpecialtyAssignedStudents) general error:', error)
    return false
  }
}

export async function getSpecialtyAssignedSubjects(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/teacher/getall/specialty/assigned/subjects',
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
    console.error('(getSpecialtyAssignedSubjects) general error:', error)
    return false
  }
}
