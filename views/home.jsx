const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
    <h1>HOME</h1>
      <img src="/images/Drinks.jpg" alt="Drinks" />
      <div>
      Photo by <a href="https://unsplash.com/@ksousaphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Katherine Sousa</a> on <a href="https://unsplash.com/s/photos/drinks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
        </Def>
    )
}




module.exports = home


