export interface IPaymentDataProps {
    subtotal: string
    promo: string
    total: string
    payPressed: () => void
    loading: boolean
}