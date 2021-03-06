export interface User {
    email: string
    password: string
}
export interface Message {
    message: string
}
export interface Category {
    name?: string ,
    imageSrc?: string ,
    user?: string ,
    _id?: string
}
export interface Position {
    name: string
    cost: number
    user?: string
    category: string
    _id?: string
    quantity?: number
    description?: string
    row?: number
    place?: number,
    time: number
}

export interface Order {
    date?: Date
    order?: number
    user?: string
    list: any[]
    _id?: string
    row?: number
    place?: number
}

export interface OrderPosition {
    name: string
    cost: number
    quantity: number
    _id?: string
    description?: string
    row?: number
    place?: number
}

export interface Seans {
    _id?: string
    name: string
    date?: Date
    seans?: number
    user?: string
    list?: any[]
}

export interface Filter {
    start?: Date
    end?: Date
    order?: number
}

export interface OverviewPage {
    orders: OverviewPageItem
    gain: OverviewPageItem
}

export interface OverviewPageItem {
    percent: number
    compare: number
    yesterday: number
    isHigher: boolean
}

export interface AnalyticsPage {
    average: number
    chart: AnalyticsChartItem[]
}

export interface AnalyticsChartItem {
    gain: number
    order: number
    label: string
    date: Date
}
