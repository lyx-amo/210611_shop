import ajax from './ajax'
import mockAjax from './mockAjax'

export const reqCategoryList = () => ajax.get('/product/getBaseCategoryList')

export const reqBannerList = () => ajax.get('/cms/banner')

export const reqfloors = () => mockAjax.get('/floors')

export const reqRecommends = () => mockAjax.get('/recommends')

export const reqSearch = (searchParams) => ajax.post('/list', searchParams)

export const reqRank = ()=> mockAjax.get('/rank')
export const reqLike = ()=> mockAjax.get('/like')