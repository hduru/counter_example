import React from 'react'
import PropTypes from 'prop-types'
import '../App.css';

/*
 • Oluşan componentlerin html etiketlerinden ayrılması için baş harfinin büyük olması yazılı olmayan bir kuraldır.
 • PropTypes için doküman : https://reactjs.org/docs/typechecking-with-proptypes.html
*/

function Header({ data }) {
  return (
    <div className="App-header">
       <div className=''>{data.name} {data.surname}</div>
    </div>
  )
}

Header.propTypes = {
    data : PropTypes.exact({
      name : PropTypes.string.isRequired,
      surname : PropTypes.string.isRequired,
    })
}


export default Header
