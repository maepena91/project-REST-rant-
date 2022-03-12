const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-rant</h1>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
  <div>
    <img src="/images/pizza.jpg" alt="pizza" />
  </div>
  <div>
  Photo by <a href="https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Torres</a> on <a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  </div>
</a>
          </main>
      </Def>
    )
  }

module.exports = home