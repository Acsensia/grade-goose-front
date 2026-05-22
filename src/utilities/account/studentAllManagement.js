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
