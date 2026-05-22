import * as env from '@/config/env.js'

// getall assigned functions //

export async function getAllAssignedStudentGroups(_accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/student/getall/assigned/studentgroups', {
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
    const response = await fetch(env.BACKEND_URL + '/api/student/getall/assigned/specialties', {
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
    const response = await fetch(env.BACKEND_URL + '/api/student/getall/assigned/subjects', {
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
    const response = await fetch(env.BACKEND_URL + '/api/student/getall/assigned/tasks', {
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
    console.error('(getAllAssignedTasks) general error:', error)
    return false
  }
}

// getinfo functions //

export async function getStudentGroupInfo(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/student/getinfo/studentgroup', {
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
    const response = await fetch(env.BACKEND_URL + '/api/student/getinfo/specialty', {
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
    const response = await fetch(env.BACKEND_URL + '/api/student/getinfo/subject', {
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
    const response = await fetch(env.BACKEND_URL + '/api/student/getinfo/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue }),
      credentials: 'include',
    })

    if (response.ok) {
      const result = (await response.json()).entity
      const nestedValue = result.can_be_handed_in_past_due.data[0]
      result.can_be_handed_in_past_due = Boolean(nestedValue)
      return result
    } else {
      return false
    }
  } catch (error) {
    console.error('(getTaskInfo) general error:', error)
    return false
  }
}

export async function getSolutionInfo(_accessToken, _taskId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/student/getinfo/solution', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ taskId: _taskId }),
      credentials: 'include',
    })

    if (response.ok) {
      return (await response.json()).entity
    } else {
      return false
    }
  } catch (error) {
    console.error('(getSolutionInfo) general error:', error)
    return false
  }
}

// addNew functions //

export async function addNewSolution(_accessToken, _taskId, _internetFileLink, _studentCommentary) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/student/add/solution', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        tasks_task_id: _taskId,
        internet_file_link: _internetFileLink ?? 'null',
        student_commentary: _studentCommentary ?? 'null',
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(addNewSolution) general error:', error)
    return false
  }
}

// checkExists functions //

export async function checkExistsSolution(_accessToken, _taskId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/student/checkexists/solution', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ taskId: _taskId }),
      credentials: 'include',
    })

    if (response.ok) {
      return (await response.json()).exists_flag
    } else {
      return false
    }
  } catch (error) {
    console.error('(checkExistsSolution) general error:', error)
    return false
  }
}

/// setField functions ///

/// solution setField functions ///

export async function setNewSolutionLink(_accessToken, _taskId, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/student/update/solution/link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        taskId: _taskId,
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
    console.error('(setNewSolutionLink) general error:', error)
    return false
  }
}

export async function setNewSolutionStComm(_accessToken, _taskId, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/student/update/solution/stcomm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        taskId: _taskId,
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
    console.error('(setNewSolutionStComm) general error:', error)
    return false
  }
}

/// getAssigned functions ///

export async function getStudentGroupAssignedSpecialties(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/student/getall/studentgroup/assigned/specialties',
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
    console.error('(getStudentGroupAssignedSpecialties) general error:', error)
    return false
  }
}

export async function getSpecialtyAssignedSubjects(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/student/getall/specialty/assigned/subjects',
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

export async function getSubjectAssignedTasks(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/student/getall/subject/assigned/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ id: _idColumnValue }),
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
    console.error('(getSubjectAssignedTasks) general error:', error)
    return false
  }
}

/// subject solution getAssigned functions ///

export async function getSubjectMarkedSolutions(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/student/getall/subject/marked/solutions', {
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
    console.error('(getSubjectMarkedSolutions) general error:', error)
    return false
  }
}

export async function getSubjectUnmarkedSolutions(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/student/getall/subject/unmarked/solutions',
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
    console.error('(getSubjectUnmarkedSolutions) general error:', error)
    return false
  }
}
