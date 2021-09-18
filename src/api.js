import { RepeatOneSharp } from "@material-ui/icons";
import React from "react";

//const apiEndpoint = 'https://socialup-api.herokuapp.com/api';
const apiEndpoint = 'http://localhost:8000/api';

export async function getCategories() {
    const data = await fetch(apiEndpoint + '/categories')
    const categories = await data.json()

    return categories
}

export async function getTypes() {
    const data = await fetch(apiEndpoint + '/types')
    const types = await data.json()

    return types
}

export async function getOfferings() {
    const data = await fetch(apiEndpoint + '/offerings')
    const offerings = await data.json()

    return offerings
}

export async function getInterests() {
    const data = await fetch(apiEndpoint + '/interests')
    const interests = await data.json()

    return interests
}

export async function getHappenings() {
    return fetch(apiEndpoint + '/happenings', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': 'NIBj1PwrLnjGWhiAjho4RawzlaxalIuzJ3NVjKgL'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
            .catch((err) => console.log(err))
}

export async function getMyHappenings() {
    return fetch(apiEndpoint + '/happenings/host', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': 'NIBj1PwrLnjGWhiAjho4RawzlaxalIuzJ3NVjKgL'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
            .catch((err) => console.log(err))
}

export async function getAppliedHappenings() {
    return fetch(apiEndpoint + '/happenings/guest', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': 'NIBj1PwrLnjGWhiAjho4RawzlaxalIuzJ3NVjKgL'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
            .catch((err) => console.log(err))
}

export async function createHappening(happening) {
    // Von anfang an "zusammenfügen"
    let happeningPost = {
        title: happening.title,
        description: happening.description,
        date: happening.date + " " + happening.time,
        price: happening.price,
        maxGuests: happening.maxGuests,
        type: happening.type,
        category: happening.category,
        offerings: happening.offerings,
        location: {
            meetingPoint: happening.location,
            description: happening.locationDescription
        },
        offeringsDescription: happening.offeringsDescription
    }

    return fetch(apiEndpoint + '/happenings', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': 'NIBj1PwrLnjGWhiAjho4RawzlaxalIuzJ3NVjKgL'
        },
        body: JSON.stringify(happeningPost)
    }).then((response) => {
        if (response.status == 200 || response.status == 204) {
            localStorage.removeItem('happening')
            localStorage.removeItem('activeStep')
            return true
        } else {
            console.log('error')
            return false
        }
    }).catch((err) => {
        console.log(err)
    })
}

export async function login(userData) {
    return fetch(apiEndpoint + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': 'NIBj1PwrLnjGWhiAjho4RawzlaxalIuzJ3NVjKgL'
        },
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.token) {
            localStorage.setItem('token', data.token)
            return true
        }
        
        return false
    })
    .catch((err) => {
        console.log(err)
        return false
    })
}

export async function register(userData) {
    let user = {
        firstname: userData.firstname,
        lastname: userData.lastname
    }

    localStorage.setItem('user', JSON.stringify(user));
    
    return fetch(apiEndpoint + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': 'NIBj1PwrLnjGWhiAjho4RawzlaxalIuzJ3NVjKgL'
        },
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('token', data.token)
        return true
    })
    .catch((err) => {
        console.log(err)
        return false
    })
}

export async function join(id) {
    return fetch(apiEndpoint + '/happenings/' + id + '/join', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': 'NIBj1PwrLnjGWhiAjho4RawzlaxalIuzJ3NVjKgL'
        },
    })
    .then((response) => {
        if (response.status == 200 || response.status == 204) {
            return true
        }

        return false
    })
    .catch((err) => {
        console.log(err)
        return false
    })
}