import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { MainPage, PageArea } from "./style"
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { api } from "../../services/api"

export const CategoryPage = () => {
   const [seachParams, setSeachParams] = useSearchParams()
   const [query, setQuery] = useState<any>(seachParams.get('q')) 
   const [category, setCategory] = useState()
   const [list, setList] = useState([])
   const params = useParams()
   const slug = params.slug
   
 

  //  useEffect(() => {
  //    const getCat = async () => {
  //      const get = await api.get('/categories')
  //      const res = get.data 
  //      setList(res.categories)
  //      console.log(res)
  //    }
  //    getCat()
  //  }, [])

  useEffect(() => {
    const getAd = async () => {
      const req = await api.get('/ad/list', {params: {sort: 'desc', limit: 16, cat:category}})
      const res = await req.data
      setList(res.ads)
      console.log(res)
    }
    getAd()
  }, [])

    return (
      <><Header /><MainPage>
        <h2>Anúncios mais recentes de {slug} cadastrado no sistema</h2>
        <PageArea>
          <div className="parent">
            {list.map((i: any) => {
              return (
                <img src={i.image}></img>
              )
            })}
          </div>
        </PageArea>
        </MainPage></>
    )
}