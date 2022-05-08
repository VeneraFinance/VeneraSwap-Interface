import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const cakePriceUsd = 0
  useEffect(() => {
    document.title = 'VENERA SWAP'
  })
}
export default useGetDocumentTitlePrice
