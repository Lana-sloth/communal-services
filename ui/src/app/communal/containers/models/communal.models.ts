export interface Communal {
    "date": Today,
    "cold_water": number,
    "hot_water": number,
    "electricity_day": number,
    "electricity_night": number,
    "taxes": Taxes
}
export interface Today {
    "year": number,
    "month": number
}
export interface Taxes {
    "cold_water_tax": number,
    "hot_water_tax": number,
    "electricity_day_tax": number,
    "electricity_night_tax": number
}