interface AuthClientCredentials {
    name: string
    email: string
    phone: string
    address: string
    password: string
    confirmPassword: string
}

interface AuthHairdresserCredentials {
    salonName: string
    email: string
    phone: string
    password: string
    confirmPassword: string
    bio?: string
    location: string
}