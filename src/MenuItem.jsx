import React from 'react'

const MenuItem = ({ img, desc, price, category, title }) => {
      return (
            <aricle className="menu-item">
                  <img src={img} alt={title} className="img" />
                  <div className="item-info">
                        <button type="button" className="btn" key={category} onClick={() => filterItems(category)}>
                              {category}
                        </button>
                  </div>
            </aricle>
      )
}

export default MenuItem
