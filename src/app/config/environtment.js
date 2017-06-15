export const ORCINUS_API_HOST = process.env.ORCINUS_HOST 
export const ORCINUS_API_PORT = process.env.ORCINUS_PORT
export const ORCINUS_OMURA = location.href.indexOf('localhost') > 0 ? `http://localhost:5009` : 'http://omura.orcinus.id'