export type AddressType = {
  _key?: string
  _type: 'address'
  line1: string
  line2?: string
  city: string
  county?: string
  postcode: string
  geo?: {
    _type: 'geopoint'
    lat: number
    lng: number
    alt?: number
  }
  mapLink?: string
}