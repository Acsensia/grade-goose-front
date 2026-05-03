import * as env from '@/config/env.js'

// utility functions

async function __getAccountInfo(_userType, _accessToken) {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/info/' + _userType, {
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
    console.error('(__getAccountInfo) general error:', error)
    return false
  }
}

// exported functions

async function _getAdminInfo(_accessToken) {
  try {
    return await __getAccountInfo('admin', _accessToken)
  } catch (error) {
    console.error('(_getAdminInfo) general error:', error)
    return false
  }
}

async function _getTeacherInfo(_accessToken) {
  try {
    return await __getAccountInfo('teacher', _accessToken)
  } catch (error) {
    console.error('(_getTeacherInfo) general error:', error)
    return false
  }
}

async function _getStudentInfo(_accessToken) {
  try {
    return await __getAccountInfo('student', _accessToken)
  } catch (error) {
    console.error('(_getStudentInfo) general error:', error)
    return false
  }
}

//exports
export const getAdminInfo = _getAdminInfo
export const getTeacherInfo = _getTeacherInfo
export const getStudentInfo = _getStudentInfo
