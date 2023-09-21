import React, { useState } from 'react'
import menus from './data'
import Title from './Title'
import Categories from './Categories'
import Menu from './Menu'

const App = () => {
      const [menu, setMenu] = useState(menus)
      const allCategories = ['all', ...new Set(menu.map((item) => item.category))]
      const [categories, setCategories] = useState(allCategories)

      const fliterItems = (category) => {
            if (category === 'all') {
                  setMenu(menus)
                  return
            }
            const newItems = menus.filter((item) => item.category === category)
            setMenu(newItems)
      }

      return (
            <main>
                  <section className="menu">
                        <Title text="our Menu" />
                        <Categories categories={categories} filterItems={fliterItems} />
                        <Menu items={menu} />
                  </section>
            </main>
      )
}
export default App
