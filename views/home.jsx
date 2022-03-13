const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-rant</h1>
              <a href="/places"></a>
  <button className="btn-primary">Places Page</button>
  <div>
    <img src="/images/pho.jpg" alt="pho" />
  </div>
  Photo by <a href="https://unsplash.com/@photophotostock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kirill Tonkikh</a> on <a href="https://unsplash.com/s/photos/pho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  <div>
  
  
  </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
        </Def>
    )
}




module.exports = home