import React from 'react'
import { FetchUsersPropsTypes, Name, User } from '../types'

export const isKidsRange = ({ Min, Max }: FetchUsersPropsTypes) => {
    return (
        (Min >= 0 && Min < Max && Max <= 18)
    )
}
export const isAdultsRange = ({ Min, Max }: FetchUsersPropsTypes) => {
    return (
        (Min >= 19 && Min < Max && Max <= 60)
    )
}
export const isSeniorsRange = ({ Min, Max }: FetchUsersPropsTypes) => {
    return (
        (Min >= 61 && Min < Max && Max <= 100)
    )
}
export const isKidssOrAdultRange = ({ Min, Max }: FetchUsersPropsTypes) => {
    return (
        (Min >= 0 && Min < Max && Max <= 60 && Max > 18)
    )
}
export const isSeniorOrAdultRange = ({ Min, Max }: FetchUsersPropsTypes) => {
    return (
        (Min >= 19 && Min < Max && Max > 60 && Max <= 100)
    )
}

export const isKidssOrAdultorSeniorRange = ({ Min, Max }: FetchUsersPropsTypes) => {
    return (
        (Min >= 0 && Min < Max && Max > 60 && Max <= 100)
    )
}

//sort function 


type sortFunctionProps = {
    prop: keyof User;
    ord: 'asc' | 'desc';
}

export const sortFunction = ({ prop, ord }: sortFunctionProps) => {
    return (a: User, b: User) => {
        const order = ord === 'desc' ? -1 : 1;
        if (typeof a[prop] === 'object' && typeof b[prop] === 'object') {
            if ((a[prop] as Name).firstName < (b[prop] as Name).firstName) return -1 * order;
            else if ((a[prop] as Name).firstName > (b[prop] as Name).firstName) return 1 * order;
            else if ((a[prop] as Name).firstName === (b[prop] as Name).firstName) {
                if ((a[prop] as Name).lastName < (b[prop] as Name).lastName) return -1 * order;
                else if ((a[prop] as Name).lastName > (b[prop] as Name).lastName) return 1 * order;
                else return 0;
            }
            else return 0;
        } else {
            if (a[prop] < b[prop]) return -1 * order;
            else if (a[prop] > b[prop]) return 1 * order;
            else return 0;
        }
    }
}