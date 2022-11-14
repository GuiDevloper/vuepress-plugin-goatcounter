
export default ({ router }) => {
  if (process.env.NODE_ENV === 'production' && USER && typeof window !== 'undefined') {
    let goatcounter = document.createElement("script")
    goatcounter.setAttribute("data-goatcounter", `https://${USER}.goatcounter.com/count`)
    goatcounter.setAttribute("async", "true")
    goatcounter.setAttribute("src","//gc.zgo.at/count.js")
    let s = document.getElementsByTagName("script")[0]
    s.parentNode.insertBefore(goatcounter, s)
  }
}
