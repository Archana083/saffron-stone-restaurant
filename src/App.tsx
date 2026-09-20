import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Clock3, Instagram, MapPin, Menu, Phone, Star, X } from 'lucide-react'

const menuItems = [
  { name:'Smoked Paneer Tikka', category:'Starters', price:'₹495', description:'Charred paneer, smoked paprika, mint chutney', image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85' },
  { name:'Malai Chicken', category:'Starters', price:'₹575', description:'Creamy saffron marinade, coal-roasted, citrus', image:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85' },
  { name:'Royal Dal', category:'Mains', price:'₹395', description:'Slow-cooked black lentils, cultured butter', image:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85' },
  { name:'Saffron Biryani', category:'Mains', price:'₹625', description:'Aged basmati, saffron, roasted vegetables, raita', image:'https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=85' },
  { name:'Mango Rasmalai', category:'Desserts', price:'₹345', description:'Soft chenna, Alphonso, pistachio, cardamom', image:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85' },
  { name:'Masala Old Fashioned', category:'Drinks', price:'₹525', description:'Bourbon, jaggery, bitters, toasted spices', image:'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=900&q=85' },
]

const gallery = [
  'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85',
]

function App(){
  const [category,setCategory] = useState('All')
  const [mobileOpen,setMobileOpen] = useState(false)
  const [lightbox,setLightbox] = useState<number|null>(null)
  const [scrolled,setScrolled] = useState(false)
  const categories = ['All','Starters','Mains','Desserts','Drinks']
  const filtered = useMemo(()=>category==='All'?menuItems:menuItems.filter(item=>item.category===category),[category])

  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>40)
    window.addEventListener('scroll',onScroll,{passive:true})
    const els=[...document.querySelectorAll('.reveal')]
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12})
    els.forEach(el=>io.observe(el))
    return()=>{window.removeEventListener('scroll',onScroll);io.disconnect()}
  },[])

  const scrollTo=(id:string)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMobileOpen(false)}

  return <div className="site">
    <header className={`nav ${scrolled?'nav-solid':''}`}>
      <button className="brand" onClick={()=>scrollTo('home')} aria-label="Saffron and Stone home">
        <span className="brand-mark">S</span><span>SAFFRON <i>&</i> STONE</span>
      </button>
      <nav className="desktop-nav">
        {['Menu','Story','Gallery'].map(item=><button key={item} onClick={()=>scrollTo(item.toLowerCase())}>{item}</button>)}
        <button className="nav-cta" onClick={()=>scrollTo('reserve')}>Reserve a table <ArrowRight size={15}/></button>
      </nav>
      <button className="menu-btn" onClick={()=>setMobileOpen(v=>!v)} aria-label="Toggle navigation">{mobileOpen?<X/>:<Menu/>}</button>
    </header>

    {mobileOpen && <div className="mobile-nav">
      {['Menu','Story','Gallery','Reserve'].map(item=><button key={item} onClick={()=>scrollTo(item.toLowerCase())}>{item}</button>)}
    </div>}

    <main id="home">
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content reveal">
          <p className="eyebrow">MODERN INDIAN DINING · MUMBAI</p>
          <h1>Where heritage<br/><em>meets fire.</em></h1>
          <p className="hero-copy">A contemporary Indian table built around smoke, spice, seasonality and stories worth staying late for.</p>
          <div className="hero-actions">
            <button className="primary" onClick={()=>scrollTo('reserve')}>Book your table <ArrowRight size={17}/></button>
            <button className="ghost" onClick={()=>scrollTo('menu')}>Explore the menu <ArrowDown size={17}/></button>
          </div>
        </div>
        <div className="hero-bottom">
          <span><MapPin size={15}/> Fort, Mumbai</span><span><Clock3 size={15}/> Tue–Sun · 12pm–11:30pm</span>
        </div>
      </section>

      <section className="intro reveal" id="story">
        <div className="section-kicker">01 — THE STORY</div>
        <div><h2>Indian soul.<br/><em>New expression.</em></h2><p>We take familiar flavours and give them room to evolve. Ancient techniques meet modern fire, local produce meets a little mischief, and every plate is made to start a conversation.</p><button className="text-link">Meet the team <ArrowRight size={16}/></button></div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-head reveal"><div><div className="section-kicker">02 — FROM THE KITCHEN</div><h2>Signature <em>plates</em></h2></div><p>Small menu. Big personality.<br/>Made fresh every service.</p></div>
        <div className="filters reveal">{categories.map(c=><button className={category===c?'active':''} key={c} onClick={()=>setCategory(c)}>{c}</button>)}</div>
        <div className="menu-grid">
          {filtered.map((item,i)=><article className="food-card reveal" key={item.name} style={{animationDelay:`${i*70}ms`}}>
            <div className="food-image"><img src={item.image} alt={item.name}/><span>{item.category}</span></div>
            <div className="food-meta"><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.price}</strong></div>
          </article>)}
        </div>
      </section>

      <section className="quote reveal">
        <div className="quote-mark">“</div><blockquote>Some meals fill your stomach.<br/><em>The good ones stay with you.</em></blockquote><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={16} fill="currentColor"/>)} <span>4.9 · 800+ guests</span></div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="section-head reveal"><div><div className="section-kicker">03 — THE SPACE</div><h2>A room made<br/><em>for lingering.</em></h2></div><p>Warm stone, low light,<br/>and a little theatre.</p></div>
        <div className="gallery-grid">
          {gallery.map((src,i)=><button className={`gallery-item g${i+1} reveal`} key={src} onClick={()=>setLightbox(i)}><img src={src} alt={`Saffron and Stone interior ${i+1}`}/><span>View</span></button>)}
        </div>
      </section>

      <section className="reserve reveal" id="reserve">
        <div className="reserve-copy"><div className="section-kicker">04 — YOUR TABLE AWAITS</div><h2>Make it<br/><em>a night.</em></h2><p>For celebrations, first dates, long lunches or simply because Tuesday deserves better.</p><div className="contact-lines"><span><Phone size={16}/> +91 22 4012 8899</span><span><MapPin size={16}/> 14, Heritage Lane, Fort, Mumbai</span></div></div>
        <form className="booking-form" onSubmit={e=>{e.preventDefault();alert('Thanks! Your reservation request has been received. We will confirm shortly.')}}>
          <label>Name<input required placeholder="Your name"/></label><label>Phone<input required type="tel" placeholder="+91"/></label>
          <div className="form-row"><label>Date<input required type="date"/></label><label>Guests<select defaultValue="2"><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6+ guests</option></select></label></div>
          <label>Anything we should know?<textarea rows={3} placeholder="Birthday, anniversary, dietary notes..."/></label>
          <button className="primary" type="submit">Request reservation <CalendarDays size={17}/></button>
          <small>Reservation requests are confirmed by our team.</small>
        </form>
      </section>
    </main>

    <footer><div className="footer-brand">SAFFRON <i>&</i> STONE</div><p>Modern Indian dining, Fort · Mumbai</p><div className="social"><Instagram size={18}/><span>Follow the table</span></div><small>© 2026 Saffron & Stone</small></footer>

    {lightbox!==null && <div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setLightbox(null)}>
      <button onClick={()=>setLightbox(null)} aria-label="Close"><X/></button>
      <img src={gallery[lightbox]} alt="Expanded restaurant view" onClick={e=>e.stopPropagation()}/>
      <button className="prev" onClick={e=>{e.stopPropagation();setLightbox((lightbox-1+gallery.length)%gallery.length)}}><ChevronLeft/></button>
      <button className="next" onClick={e=>{e.stopPropagation();setLightbox((lightbox+1)%gallery.length)}}><ChevronRight/></button>
    </div>}
  </div>
}

export default App