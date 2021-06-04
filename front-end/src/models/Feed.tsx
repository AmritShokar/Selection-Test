export default interface IFeed {
    date: Date,
    location: ILocation,
    feedType: string,
    feedAmount: number,
    numberOfDucks: number
}

interface ILocation {
    country: string,
    city: string,
    streetAddress: string
}