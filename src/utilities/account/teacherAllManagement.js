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

/// setField functions ///

/// task setField functions ///

export async function setNewTaskName(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/update/task/name', {
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
    console.error('(setNewTaskName) general error:', error)
    return false
  }
}

export async function setNewTaskInstr(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/update/task/instr', {
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
    console.error('(setNewTaskInstr) general error:', error)
    return false
  }
}

export async function setNewTaskDue(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/update/task/due', {
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
    console.error('(setNewTaskDue) general error:', error)
    return false
  }
}

export async function setNewTaskEnforceDue(_accessToken, _idColumnValue, _newBoolValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/update/task/enforcedue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        id: _idColumnValue,
        newBoolValue: _newBoolValue,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(setNewTaskEnforceDue) general error:', error)
    return false
  }
}

/// solution setField functions ///

export async function setNewSolutionMark(_accessToken, _taskId, _studentId, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/update/solution/mark', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        taskId: _taskId,
        studentId: _studentId,
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
    console.error('(setNewSolutionMark) general error:', error)
    return false
  }
}

export async function setNewSolutionTeComm(_accessToken, _taskId, _studentId, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/update/solution/tecomm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        taskId: _taskId,
        studentId: _studentId,
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
    console.error('(setNewSolutionTeComm) general error:', error)
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

export async function getSolutionInfo(_accessToken, _taskId, _studentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getinfo/solution', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({ taskId: _taskId, studentId: _studentId }),
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

/// student getAssigned functions ///

export async function getStudentAssignedTasks(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/student/assigned/tasks', {
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
    console.error('(getStudentAssignedTasks) general error:', error)
    return false
  }
}

/// student group getAssigned functions ///

export async function getStudentGroupAssignedStudents(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/teacher/getall/studentgroup/assigned/students',
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
    console.error('(getStudentGroupAssignedStudents) general error:', error)
    return false
  }
}

export async function getStudentGroupAssignedSpecialties(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/teacher/getall/studentgroup/assigned/specialties',
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

/// subject getAssigned functions ///

export async function getSubjectAssignedStudents(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/teacher/getall/subject/assigned/students',
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
    console.error('(getSubjectAssignedStudents) general error:', error)
    return false
  }
}

export async function getSubjectAssignedTasks(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/subject/assigned/tasks', {
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
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/subject/marked/solutions', {
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
      env.BACKEND_URL + '/api/teacher/getall/subject/unmarked/solutions',
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

/// student solution getAssigned functions ///

export async function getStudentMarkedSolutions(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/student/marked/solutions', {
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
    const response = await fetch(
      env.BACKEND_URL + '/api/teacher/getall/student/unmarked/solutions',
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
    console.error('(getStudentUnmarkedSolutions) general error:', error)
    return false
  }
}

/// unassign functions ///

/// student unassign functions ///

export async function unassignStudentTaskSelection(_accessToken, _childIdSelection, _parentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/unassign/student/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        task_id_selection: _childIdSelection,
        account_id: _parentId,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(unassignSubjectTaskSelection) general error:', error)
    return false
  }
}

/// subject unassign functions ///

export async function unassignSubjectTaskSelection(_accessToken, _childIdSelection, _parentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/unassign/subject/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        child_id_selection: _childIdSelection,
        parent_id: _parentId,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(unassignSubjectTaskSelection) general error:', error)
    return false
  }
}

/// getUnassigned functions ///

/// student getUnassigned functions ///

export async function getStudentUnassignedTasks(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/student/unassigned/tasks', {
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
    console.error('(getStudentUnassignedTasks) general error:', error)
    return false
  }
}

/// subject getUnassigned functions ///

export async function getSubjectUnassignedTasks(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/getall/subject/unassigned/tasks', {
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
    console.error('(getSubjectUnassignedTasks) general error:', error)
    return false
  }
}

/// assign functions ///

/// student assign functions ///

export async function assignStudentTaskSelection(_accessToken, _childIdSelection, _parentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/assign/student/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        task_id_selection: _childIdSelection,
        account_id: _parentId,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(assignStudentTaskSelection) general error:', error)
    return false
  }
}

/// subject assign functions ///

export async function assignSubjectTaskSelection(_accessToken, _childIdSelection, _parentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/teacher/assign/subject/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_accessToken}`,
      },
      body: JSON.stringify({
        child_id_selection: _childIdSelection,
        parent_id: _parentId,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(assignSubjectTaskSelection) general error:', error)
    return false
  }
}
