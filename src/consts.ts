export const headers: string[] = [
    "Name", "Age"
]

export const colors = {
    lightGray: "#F4F6F8",
    white: 'white',
    darkGray: '#333'
};


export enum Endpoints {
    FETCH_KIDS = "http://localhost:8099/users/kids",
    FETCH_ADULTS = "http://localhost:8099/users/adults",
    FETCH_SENIORS = "http://localhost:8099/users/seniors"
}