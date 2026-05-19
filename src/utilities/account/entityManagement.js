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

/// specialty setField functions ///

export async function setNewSpecialtyName(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/specialty/name', {
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
    console.error('(setNewSpecialtyName) general error:', error)
    return false
  }
}

export async function setNewSpecialtyAbbr(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/specialty/abbr', {
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
    console.error('(setNewSpecialtyAbbreviation) general error:', error)
    return false
  }
}

export async function setNewSpecialtyDesc(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/specialty/desc', {
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
    console.error('(setNewSpecialtyDesc) general error:', error)
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

/// task setField functions ///

export async function setNewTaskName(_accessToken, _idColumnValue, _newValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/task/name', {
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
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/task/instr', {
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
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/task/due', {
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
    const response = await fetch(env.BACKEND_URL + '/api/admin/update/task/enforcedue', {
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

/// getAssigned functions ///

/// student group getAssigned functions ///

export async function getStudentGroupAssignedAccounts(
  _accessToken,
  _shortUserType,
  _idColumnValue,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/studentgroup/assigned/accounts/' + _shortUserType,
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
    console.error('(getStudentGroupAssignedAccounts) general error:', error)
    return false
  }
}

export async function getStudentGroupAssignedSpecialties(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/studentgroup/assigned/specialties',
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

export async function getSpecialtyAssignedAccounts(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/specialty/assigned/accounts/' + _shortUserType,
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
    console.error('(getSpecialtyAssignedAccounts) general error:', error)
    return false
  }
}

export async function getSpecialtyAssignedStudentGroups(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/specialty/assigned/studentgroups',
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
    console.error('(getSpecialtyAssignedStudentGroups) general error:', error)
    return false
  }
}

export async function getSpecialtyAssignedSubjects(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/specialty/assigned/subjects',
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

export async function getSubjectAssignedAccounts(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/subject/assigned/accounts/' + _shortUserType,
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
    console.error('(getSubjectAssignedAccounts) general error:', error)
    return false
  }
}

export async function getSubjectAssignedSpecialties(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/subject/assigned/specialties',
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
    console.error('(getSubjectAssignedSpecialties) general error:', error)
    return false
  }
}

export async function getSubjectAssignedTasks(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getinfo/subject/assigned/tasks', {
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
    console.error('(getSubjectAssignedTasks) general error:', error)
    return false
  }
}

/// task getAssigned functions ///

export async function getTaskAssignedAccounts(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/task/assigned/accounts/' + _shortUserType,
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
    console.error('(getTaskAssignedAccounts) general error:', error)
    return false
  }
}

export async function getTaskAssignedSubjects(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getinfo/task/assigned/subjects', {
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
    console.error('(getTaskAssignedSubjects) general error:', error)
    return false
  }
}

/// unassign functions ///

/// student group unassign functions ///

export async function unassignStudentGroupAccountSelection(
  _accessToken,
  _shortUserType,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/unassign/studentgroup/accounts/' + _shortUserType,
      {
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
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(unassignStudentGroupAccountSelection) general error:', error)
    return false
  }
}

export async function unassignStudentGroupSpecialtySelection(
  _accessToken,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/unassign/studentgroup/specialties', {
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
    console.error('(unassignStudentGroupSpecialtySelection) general error:', error)
    return false
  }
}

/// specialty unassign functions ///

export async function unassignSpecialtyAccountSelection(
  _accessToken,
  _shortUserType,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/unassign/specialty/accounts/' + _shortUserType,
      {
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
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(unassignSpecialtyAccountSelection) general error:', error)
    return false
  }
}

export async function unassignSpecialtyStudentGroupSelection(
  _accessToken,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/unassign/specialty/studentgroups', {
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
    console.error('(unassignSpecialtyStudentGroupSelection) general error:', error)
    return false
  }
}

export async function unassignSpecialtySubjectSelection(
  _accessToken,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/unassign/specialty/subjects', {
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
    console.error('(unassignSpecialtySubjectSelection) general error:', error)
    return false
  }
}

/// subject unassign functions ///

export async function unassignSubjectAccountSelection(
  _accessToken,
  _shortUserType,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/unassign/subject/accounts/' + _shortUserType,
      {
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
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(unassignSubjectAccountSelection) general error:', error)
    return false
  }
}

export async function unassignSubjectSpecialtySelection(
  _accessToken,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/unassign/subject/specialties', {
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
    console.error('(unassignSubjectSpecialtySelection) general error:', error)
    return false
  }
}

export async function unassignSubjectTaskSelection(_accessToken, _childIdSelection, _parentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/unassign/subject/tasks', {
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

/// task unassign functions ///

export async function unassignTaskAccountSelection(
  _accessToken,
  _shortUserType,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/unassign/task/accounts/' + _shortUserType,
      {
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
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(unassignTaskAccountSelection) general error:', error)
    return false
  }
}

export async function unassignTaskSubjectSelection(_accessToken, _childIdSelection, _parentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/unassign/task/subjects', {
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
    console.error('(unassignTaskSubjectSelection) general error:', error)
    return false
  }
}

/// assign functions ///

/// student group assign functions ///

export async function assignStudentGroupAccountSelection(
  _accessToken,
  _shortUserType,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/assign/studentgroup/accounts/' + _shortUserType,
      {
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
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(assignStudentGroupAccountSelection) general error:', error)
    return false
  }
}

export async function assignStudentGroupSpecialtySelection(
  _accessToken,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/assign/studentgroup/specialties', {
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
    console.error('(assignStudentGroupSpecialtySelection) general error:', error)
    return false
  }
}

/// specialty assign functions ///

export async function assignSpecialtyAccountSelection(
  _accessToken,
  _shortUserType,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/assign/specialty/accounts/' + _shortUserType,
      {
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
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(assignSpecialtyAccountSelection) general error:', error)
    return false
  }
}

export async function assignSpecialtyStudentGroupSelection(
  _accessToken,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/assign/specialty/studentgroups', {
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
    console.error('(assignSpecialtyStudentGroupSelection) general error:', error)
    return false
  }
}

export async function assignSpecialtySubjectSelection(_accessToken, _childIdSelection, _parentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/assign/specialty/subjects', {
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
    console.error('(assignSpecialtySubjectSelection) general error:', error)
    return false
  }
}

/// subject assign functions ///

export async function assignSubjectAccountSelection(
  _accessToken,
  _shortUserType,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/assign/subject/accounts/' + _shortUserType,
      {
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
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(assignSubjectAccountSelection) general error:', error)
    return false
  }
}

export async function assignSubjectSpecialtySelection(_accessToken, _childIdSelection, _parentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/assign/subject/specialties', {
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
    console.error('(assignSubjectSpecialtySelection) general error:', error)
    return false
  }
}

export async function assignSubjectTaskSelection(_accessToken, _childIdSelection, _parentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/assign/subject/tasks', {
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

/// task assign functions ///

export async function assignTaskAccountSelection(
  _accessToken,
  _shortUserType,
  _childIdSelection,
  _parentId,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/assign/task/accounts/' + _shortUserType,
      {
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
      },
    )

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('(assignTaskAccountSelection) general error:', error)
    return false
  }
}

export async function assignTaskSubjectSelection(_accessToken, _childIdSelection, _parentId) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/assign/task/subjects', {
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
    console.error('(assignTaskSubjectSelection) general error:', error)
    return false
  }
}

/// getUnassigned functions ///

/// student group getUnassigned functions ///

export async function getStudentGroupUnassignedAccounts(
  _accessToken,
  _shortUserType,
  _idColumnValue,
) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/studentgroup/unassigned/accounts/' + _shortUserType,
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
    console.error('(getStudentGroupUnassignedAccounts) general error:', error)
    return false
  }
}

export async function getStudentGroupUnassignedSpecialties(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/studentgroup/unassigned/specialties',
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
    console.error('(getStudentGroupUnassignedSpecialties) general error:', error)
    return false
  }
}

/// specialty getUnassigned functions ///

export async function getSpecialtyUnassignedAccounts(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/specialty/unassigned/accounts/' + _shortUserType,
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
    console.error('(getSpecialtyUnassignedAccounts) general error:', error)
    return false
  }
}

export async function getSpecialtyUnassignedStudentGroups(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/specialty/unassigned/studentgroups',
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
    console.error('(getSpecialtyUnassignedStudentGroups) general error:', error)
    return false
  }
}

export async function getSpecialtyUnassignedSubjects(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/specialty/unassigned/subjects',
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
    console.error('(getSpecialtyUnassignedSubjects) general error:', error)
    return false
  }
}

/// subject getUnassigned functions ///

export async function getSubjectUnassignedAccounts(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/subject/unassigned/accounts/' + _shortUserType,
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
    console.error('(getSubjectUnassignedAccounts) general error:', error)
    return false
  }
}

export async function getSubjectUnassignedSpecialties(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/subject/unassigned/specialties',
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
    console.error('(getSubjectUnassignedSpecialties) general error:', error)
    return false
  }
}

export async function getSubjectUnassignedTasks(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getinfo/subject/unassigned/tasks', {
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
    console.error('(getSubjectUnassignedTasks) general error:', error)
    return false
  }
}

/// task getUnassigned functions ///

export async function getTaskUnassignedAccounts(_accessToken, _shortUserType, _idColumnValue) {
  try {
    const response = await fetch(
      env.BACKEND_URL + '/api/admin/getinfo/task/unassigned/accounts/' + _shortUserType,
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
    console.error('(getTaskUnassignedAccounts) general error:', error)
    return false
  }
}

export async function getTaskUnassignedSubjects(_accessToken, _idColumnValue) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/admin/getinfo/task/unassigned/subjects', {
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
    console.error('(getTaskUnassignedSubjects) general error:', error)
    return false
  }
}
