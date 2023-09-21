import React from 'react'

const MenuItem = ({ img, desc, price, category, title }) => {
      return (
            <aricle className="menu-item">
                  <img src={img} alt={title} className="img" />
                  <div className="item-info">
                        <header>
                              <h5>{title}</h5>
                              <button type="button" className="btn" key={category} onClick={() => filterItems(category)}>
                                    {category}
                              </button>
                        </header>
                        <p className="item-text">{desc}</p>
                  </div>
            </aricle>
      )
}

export default MenuItem
