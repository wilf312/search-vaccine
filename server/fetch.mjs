/**
 * 1. 都道府県からリストを生成する
 * 2. 各都道府県の配下の市区町村のリストを生成する
 * 3. 市区町村
 */
import {getElement} from './element.mjs'
import {get都道府県, get市区町村} from './request.mjs'
import fs from 'fs'

const parse都道府県 = async () => {
  const res = await get都道府県()
  
  const domList = getElement(res.data, '.collapse[id*="area"]')

  const 市区町村のリンク = domList.map(dom => {
    const linkList = getElement(dom.innerHTML, 'a')
    
    return linkList.map(d => {
      const prefectureId = new URL(`http://localhost${d.href}`).searchParams.get('id')
      return {
        prefectureId,
        href: d.href,
        text: d.textContent.trim(),
      }
    })
  })

  return 市区町村のリンク
}


const main = async () => {

  const 市区町村のリンク = await parse都道府県()

  fs.writeFileSync('./pre.json', JSON.stringify(市区町村のリンク, null, 2))



  const a = 市区町村のリンク[0][0]

  const res = await get市区町村(a.prefectureId)

  console.log(res.data)

  https://www.google.co.jp/maps/dir//%E7%99%BD%E7%9F%B3%E5%8C%BA%E6%9C%AC%E9%80%9A%EF%BC%91%EF%BC%94%E4%B8%81%E7%9B%AE%E5%8C%97%EF%BC%91%E7%95%AA%EF%BC%91%E5%8F%B7


  https://v-sys.mhlw.go.jp/api/municipalities/011002/medical-institutions?id=011002&availableOnly=true&generalPracticeOnly=true&keyword=&vaccineMaker=pf&lang=ja&page=1&size=10

  
}

main()