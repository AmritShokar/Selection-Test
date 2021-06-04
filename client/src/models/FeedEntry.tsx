export default interface IFeedEntry {
    id?: number,
    feedDate: Date,
    country: string,
    city: string,
    address: string,
    feedType: string,
    feedAmount: number,
    numDucks: number
}