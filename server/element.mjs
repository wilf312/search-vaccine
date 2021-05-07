import {JSDOM} from 'jsdom'


export const getElement = (htmlString, selectors) => {
  const { document } = new JSDOM(htmlString).window

  // Array.from(document.querySelectorAll('.collapse')).filter(dom => dom.getAttribute('id').indexOf('area') !== -1)

  const dom = document.querySelectorAll(selectors)
  if (dom) {
    return Array.from(document.querySelectorAll(selectors))
  } else {
    console.log('element not found')
    return []
  }
}