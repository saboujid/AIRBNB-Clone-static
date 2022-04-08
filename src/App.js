import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import data from './components/data'



function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        image={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
