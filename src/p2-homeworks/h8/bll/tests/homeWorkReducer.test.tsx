import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    expect(newState[0].name).toBe('Кот')
    expect(newState[3].name).toBe('Виктор')
    expect(newState[5].name).toBe('Александр')
    expect(newState.length).toBe(6)
    console.log(newState)
})

test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    expect(newState).not.toBe(initialState)
    expect(newState[0].name).toBe('Александр')
    expect(newState[3].name).toBe('Дмитрий')
    expect(newState[4].name).toBe('Коля')
    expect(newState.length).toBe(6)
})

test('check age more 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: '18'})

    expect(newState).not.toBe(initialState)
    expect(newState.length).toBe(4)
    expect(newState.every(e => e._id === 1 || 3 || 4 || 5)).toBeTruthy()
})
