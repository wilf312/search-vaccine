import axios from 'axios'

const base = 'https://v-sys.mhlw.go.jp'

const url = {
  都道府県: `${base}/search/`
}

export const get都道府県 = async () => {
  try {
    return await axios.get(url.都道府県)
  } catch (error) {
    console.error(error)
  }
}

export const get市区町村 = async (id, lang = 'ja') => {
  try {
    const url = `${base}/api/prefectures/${id}/municipalities?lang=${lang}`
    console.log(url)
    return await axios.get(url)
  } catch (error) {
    console.error(error)
  }
}