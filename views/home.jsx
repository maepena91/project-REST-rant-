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
    <img src="/images/goodsalad.jpg" alt="salad" />
  </div>
  Photo by <a href="https://unsplash.com/@lavievagabonde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jasmin Schreiber</a> on <a href="https://unsplash.com/s/photos/salad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
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