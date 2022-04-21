interface WeatherInfo {
  id: number
  main: string
  description: string
  icon: string
}

interface Main {
  temp: number
  humidity: number
}

interface Wind {
  speed: number
}

interface Sys {
  sunrise: number
  sunset: number
}

export interface Weather {
  weather: Array<WeatherInfo>
  main: Main
  wind: Wind
  name: string
  sys: Sys
}
